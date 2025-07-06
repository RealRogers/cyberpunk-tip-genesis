import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function POST(
  req: Request,
  { params }: { params: { targetWallet: string } }
) {
  const { wallet: currentUserWallet } = await req.json()
  
  if (!currentUserWallet) {
    return NextResponse.json({ error: 'Wallet required' }, { status: 400 })
  }

  const targetWallet = params.targetWallet

  try {
    // Check if target user exists
    const targetUser = await prisma.user.findUnique({
      where: { wallet: targetWallet }
    })

    if (!targetUser) {
      return NextResponse.json({ error: 'Target user not found' }, { status: 404 })
    }

    // Check current follow status
    const existingFollow = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: currentUserWallet,
          followingId: targetWallet
        }
      }
    })

    if (existingFollow) {
      // Unfollow
      await prisma.follow.delete({
        where: {
          followerId_followingId: {
            followerId: currentUserWallet,
            followingId: targetWallet
          }
        }
      })
      return NextResponse.json({ isFollowing: false })
    } else {
      // Follow
      await prisma.follow.create({
        data: {
          followerId: currentUserWallet,
          followingId: targetWallet
        }
      })
      return NextResponse.json({ isFollowing: true })
    }
  } catch (error) {
    console.error('Follow error:', error)
    return NextResponse.json(
      { error: 'Failed to update follow status' },
      { status: 500 }
    )
  }
}

export async function GET(
  req: Request,
  { params }: { params: { targetWallet: string } }
) {
  const currentUserWallet = req.headers.get('x-wallet-address')

  if (!currentUserWallet) {
    return NextResponse.json({ error: 'Wallet required' }, { status: 400 })
  }

  try {
    // Get follow status between current user and target user
    const followStatus = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: currentUserWallet,
          followingId: params.targetWallet
        }
      }
    })

    // Get follower count (how many people follow the target user)
    const followerCount = await prisma.follow.count({
      where: { followingId: params.targetWallet }
    })

    // Get following count (how many people the target user follows)
    const followingCount = await prisma.follow.count({
      where: { followerId: params.targetWallet }
    })

    return NextResponse.json({ 
      isFollowing: Boolean(followStatus),
      followerCount,
      followingCount
    })
  } catch (error) {
    console.error('Follow check error:', error)
    return NextResponse.json(
      { error: 'Failed to check follow status' },
      { status: 500 }
    )
  }
}