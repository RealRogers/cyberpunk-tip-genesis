//@ts-nocheck
import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const wallet = searchParams.get('wallet');

  try {
    if (wallet) {
      // Find user by wallet address with related data
      const user = await prisma.user.findUnique({
        where: { wallet },
        include: {
          nftRewards: true,
          donations: {
            include: {
              artist: true
            }
          },
          comments: true,
          activityFeedItems: {
            orderBy: { timestamp: 'desc' },
            take: 10
          }
        }
      });

      if (!user) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(user);
    } else {
      // Get all users with basic info
      const users = await prisma.user.findMany({
        orderBy: { stakingPower: 'desc' }, // Order by staking power
        select: {
          id: true,
          wallet: true,
          username: true,
          avatar: true,
          stakingPower: true,
          reputation: true,
          tier: true,
          totalTipsGiven: true,
          streakDays: true
        }
      });

      return NextResponse.json(users);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const {
    username,
    avatar,
    wallet,
    stakingPower = 0,
    reputation = 0,
    tier = 'CYBER_NOVICE',
    following=0,
    followers=0,
  } = await request.json();

  // Validate required fields
  if (!wallet || !username) {
    return NextResponse.json(
      { error: 'Wallet and username are required' },
      { status: 400 }
    );
  }

  try {
    // Upsert operation - create or update user
    const userData = {
      username,
      avatar,
      stakingPower,
      reputation,
      tier,
      // Default values for required fields
      totalTipsGiven: 0,
      totalCommentsPosted: 0,
      dailyMissionsCompleted: 0,
      streakDays: 0
    };

    const user = await prisma.user.upsert({
      where: { wallet },
      update: userData,
      create: {
        ...userData,
        id: wallet, // Using wallet as ID or generate UUID if needed
        wallet
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json(
      { error: 'Failed to save user data' },
      { status: 500 }
    );
  }
}