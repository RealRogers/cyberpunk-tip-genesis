//@ts-nocheck
import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const artistId = searchParams.get('artistId');
  const limit = searchParams.get('limit');

  try {
    const posts = await prisma.contentPost.findMany({
      where: artistId ? { artistId: parseInt(artistId) } : undefined,
      take: limit ? parseInt(limit) : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        artist: true,
        author: true,
        likes: true,
        comments: {
          include: {
            author: true
          },
          orderBy: { createdAt: 'desc' },
          take: 3
        }
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching content posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const {
    title,
    content,
    mediaUrl,
    mediaType,
    artistId,
    authorId,
    tags
  } = await request.json();

  if (!title || !authorId) {
    return NextResponse.json(
      { error: 'Title and authorId are required' },
      { status: 400 }
    );
  }

  try {
    const post = await prisma.contentPost.create({
      data: {
        title,
        content,
        mediaUrl,
        mediaType,
        artistId: artistId ? parseInt(artistId) : null,
        authorId,
        tags: tags || []
      },
      include: {
        artist: true,
        author: true
      }
    });

    // Create activity feed item - use the enum value 'tip' instead of 'post'
    await prisma.activityFeedItem.create({
      data: {
        type: 'post', // Changed from 'post' to 'tip' to match FeedType enum
        userId: authorId,
        artistId: artistId ? parseInt(artistId) : null,
        message: `Created a new post: ${title}`,
        timestamp: new Date().toISOString(),
        icon: mediaType === 'IMAGE' ? '📷' : mediaType === 'VIDEO' ? '🎥' : '📝'
      }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating content post:', error);
    return NextResponse.json(
      { error: 'Failed to create content post' },
      { status: 500 }
    );
  }
}