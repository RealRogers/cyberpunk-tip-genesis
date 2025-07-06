// app/api/feed/route.ts
import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '10');
  const cursor = searchParams.get('cursor');
  const cursorType = searchParams.get('cursorType');
  const type = searchParams.get('type') as 'all' | 'content' | 'activity' | 'donations' | null;

  try {
    // Define base queries for each type
    const postQuery = prisma.contentPost.findMany({
      take: limit,
      ...(cursor && cursorType === 'post' ? { 
        skip: 1, 
        cursor: { id: cursor } 
      } : {}),
      orderBy: { createdAt: 'desc' },
      include: {
        artist: true,
        author: true,
        likes: true,
        comments: {
          take: 3,
          include: { author: true }
        }
      }
    });

    const donationQuery = prisma.donation.findMany({
      take: limit,
      ...(cursor && cursorType === 'tip' ? { 
        skip: 1, 
        cursor: { id: parseInt(cursor) } 
      } : {}),
      orderBy: { timestamp: 'desc' },
      include: {
        artist: true,
        donor: true
      }
    });

    const commentQuery = prisma.comment.findMany({
      take: limit,
      ...(cursor && cursorType === 'comment' ? { 
        skip: 1, 
        cursor: { id: parseInt(cursor) } 
      } : {}),
      orderBy: { timestamp: 'desc' },
      include: {
        artist: true,
        user: true
      }
    });

    const activityQuery = prisma.activityFeedItem.findMany({
      take: limit,
      ...(cursor && cursorType === 'activity' ? { 
        skip: 1, 
        cursor: { id: parseInt(cursor) } 
      } : {}),
      orderBy: { timestamp: 'desc' },
      include: {
        user: true
      }
    });

    // Execute only the queries we need based on type
    let results = [];
    
    if (!type || type === 'all') {
      const [posts, donations, comments, activities] = await Promise.all([
        postQuery,
        donationQuery,
        commentQuery,
        activityQuery
      ]);
      results = [...posts, ...donations, ...comments, ...activities];
    } else {
      switch (type) {
        case 'content':
          results = await postQuery;
          break;
        case 'donations':
          results = await donationQuery;
          break;
        case 'activity':
          results = await activityQuery;
          break;
      }
    }

    // Convert to feed items
    const feedItems = results.map(item => {
      if ('title' in item) {
        // Content post
        return {
          type: 'post' as const,
          id: item.id,
          createdAt: item.createdAt.toISOString(),
          data: item
        };
      } else if ('amount' in item) {
        // Donation
        return {
          type: 'tip' as const,
          id: item.id.toString(),
          createdAt: item.timestamp,
          data: item
        };
      } else if ('message' in item && 'artistId' in item) {
        // Comment
        return {
          type: 'comment' as const,
          id: item.id.toString(),
          createdAt: item.timestamp,
          data: item
        };
      } else {
        // Activity
        return {
          type: 'activity' as const,
          id: item.id.toString(),
          createdAt: item.timestamp,
          data: {
            ...item,
            artist: item.artistId ? { 
              id: item.artistId,
              name: item.artistName 
            } : null
          }
        };
      }
    });

    // Sort by date if we have mixed types
    if (!type || type === 'all') {
      feedItems.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    // Apply limit
    const paginatedItems = feedItems.slice(0, limit);
    const lastItem = paginatedItems[paginatedItems.length - 1];
    const nextCursor = lastItem ? `${lastItem.id}|${lastItem.type}` : null;

    return NextResponse.json({
      items: paginatedItems,
      nextCursor
    });
  } catch (error) {
    console.error('Error fetching feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feed data' },
      { status: 500 }
    );
  }
}