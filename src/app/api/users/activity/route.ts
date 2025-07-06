// app/api/user/activity/route.ts
import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const wallet = searchParams.get('wallet');

  if (!wallet) {
    return NextResponse.json(
      { error: 'Wallet address is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch user and all related activity data
    const user = await prisma.user.findUnique({
      where: { wallet },
      include: {
        // User's created posts
        createdPosts: {
          orderBy: { createdAt: 'desc' },
          include: {
            likes: true,
            comments: {
              include: {
                author: true
              }
            }
          }
        },
        // User's donations (tips they've sent)
        donations: {
          orderBy: { timestamp: 'desc' },
          include: {
            artist: true
          }
        },
        // User's comments
        contentComments: {
          orderBy: { createdAt: 'desc' },
          include: {
            post: true,
            likes: true
          }
        },
        // User's likes
        likes: {
          orderBy: { createdAt: 'desc' },
          include: {
            post: true,
            comment: true
          }
        },
        // User's activity feed items
        activityFeedItems: {
          orderBy: { timestamp: 'desc' }
        },
        // Check if user is an artist
        artistProfile: {
          include: {
            // Artist's received donations
            donations: {
              orderBy: { timestamp: 'desc' },
              include: {
                donor: true
              }
            },
            // Artist's received comments
            comments: {
              orderBy: { timestamp: 'desc' },
              include: {
                user: true
              }
            },
            // Artist's posts
            contentPosts: {
              orderBy: { createdAt: 'desc' },
              include: {
                likes: true,
                comments: {
                  include: {
                    author: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Transform the data into a more usable format
    const responseData = {
      user: {
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        wallet: user.wallet,
        stakingPower: user.stakingPower,
        reputation: user.reputation,
        tier: user.tier,
        isArtist: !!user.artistProfile
      },
      activity: {
        posts: user.createdPosts.map(post => ({
          id: post.id,
          title: post.title,
          content: post.content,
          mediaUrl: post.mediaUrl,
          mediaType: post.mediaType,
          createdAt: post.createdAt,
          likeCount: post.likes.length,
          commentCount: post.comments.length,
          tags: post.tags
        })),
        donationsSent: user.donations.map(donation => ({
          id: donation.id,
          amount: donation.amount,
          message: donation.message,
          timestamp: donation.timestamp,
          artist: {
            id: donation.artist.id,
            name: donation.artist.name,
            image: donation.artist.image
          }
        })),
        comments: user.contentComments.map(comment => ({
          id: comment.id,
          content: comment.content,
          createdAt: comment.createdAt,
          postId: comment.postId,
          postTitle: comment.post.title,
          likeCount: comment.likes.length
        })),
        likes: user.likes.map(like => ({
          id: like.id,
          type: like.type,
          createdAt: like.createdAt,
          postId: like.postId,
          postTitle: like.post?.title,
          commentId: like.commentId,
          commentContent: like.comment?.content
        })),
        feedItems: user.activityFeedItems.map(item => ({
          id: item.id,
          type: item.type,
          message: item.message,
          timestamp: item.timestamp,
          icon: item.icon,
          artistId: item.artistId,
          artistName: item.artistName,
          amount: item.amount
        })),
        // Artist-specific data if user is an artist
        ...(user.artistProfile ? {
          artist: {
            id: user.artistProfile.id,
            name: user.artistProfile.name,
            image: user.artistProfile.image,
            donationsReceived: user.artistProfile.donations.map(d => ({
              id: d.id,
              amount: d.amount,
              message: d.message,
              timestamp: d.timestamp,
              donor: {
                id: d.donor.id,
                username: d.donor.username,
                avatar: d.donor.avatar
              }
            })),
            commentsReceived: user.artistProfile.comments.map(c => ({
              id: c.id,
              message: c.message,
              timestamp: c.timestamp,
              likes: c.likes,
              user: {
                id: c.user.id,
                username: c.user.username,
                avatar: c.user.avatar
              }
            })),
            posts: user.artistProfile.contentPosts.map(p => ({
              id: p.id,
              title: p.title,
              content: p.content,
              mediaUrl: p.mediaUrl,
              mediaType: p.mediaType,
              createdAt: p.createdAt,
              likeCount: p.likes.length,
              commentCount: p.comments.length,
              tags: p.tags
            }))
          }
        } : {})
      }
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error fetching user activity:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user activity data' },
      { status: 500 }
    );
  }
}