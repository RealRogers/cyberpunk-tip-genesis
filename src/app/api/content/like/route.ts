// app/api/content/like/route.ts
import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  try {
    const { postId, userId } = await request.json();

    if (!postId || !userId) {
      return NextResponse.json(
        { error: 'Missing postId or userId' },
        { status: 400 }
      );
    }

    // Check if user already liked this post
    const existingLike = await prisma.like.findFirst({
      where: {
        userId,
        postId
      }
    });

    let action: 'liked' | 'unliked';
    let likes;

    if (existingLike) {
      // Unlike the post
      await prisma.like.delete({
        where: {
          id: existingLike.id
        }
      });
      action = 'unliked';
    } else {
      // Like the post
      await prisma.like.create({
        data: {
          user: { connect: { id: userId } },
          post: { connect: { id: postId } },
          type: 'UPVOTE'
        }
      });
      action = 'liked';
    }

    // Get updated likes count
    likes = await prisma.like.findMany({
      where: { postId },
      select: {
        id: true,
        userId: true
      }
    });

    // Update post like count
    await prisma.contentPost.update({
      where: { id: postId },
      data: {
        likes: {
          set: likes.map(like => ({
            id: like.id,
            userId: like.userId
          }))
        }
      }
    });

    return NextResponse.json({
      success: true,
      action,
      likes
    });
  } catch (error) {
    console.error('Error handling like:', error);
    return NextResponse.json(
      { error: 'Failed to process like' },
      { status: 500 }
    );
  }
}