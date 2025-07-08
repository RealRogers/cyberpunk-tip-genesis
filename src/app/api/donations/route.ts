//@ts-nocheck
// app/api/donations/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(request: Request) {
  try {
    const { 
      recipientWallet,
      donorWallet,
      amount,
      currency,
      message,
      txHash
    } = await request.json();

    // Validate required fields
    if (!recipientWallet || !donorWallet || !amount || !txHash) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find or create donor user
    let donor = await prisma.user.findUnique({
      where: { wallet: donorWallet }
    });

    if (!donor) {
      donor = await prisma.user.create({
        data: {
          wallet: donorWallet,
          username: `user_${donorWallet.slice(0, 6)}`,
          stakingPower: 0,
          reputation: 0,
          tier: 'CYBER_NOVICE',
          totalTipsGiven: 0,
          totalCommentsPosted: 0,
          dailyMissionsCompleted: 0,
          streakDays: 0
        }
      });
    }

    // Find recipient artist by wallet
    const artist = await prisma.artist.findUnique({
      where: { wallet: recipientWallet },
      include: { user: true }
    });

    if (!artist) {
      return NextResponse.json(
        { error: 'Artist not found with this wallet address' },
        { status: 404 }
      );
    }

    // Create donation record
    const donation = await prisma.donation.create({
      data: {
        artist: { connect: { wallet: recipientWallet } },
        donor: { connect: { wallet: donorWallet } },
        amount: amount.toString(),
        message: message || '',
        timestamp: new Date().toISOString(),
        stakingPower: Math.floor(parseFloat(amount) * 10)
      }
    });

    // Update artist's stats
    await prisma.artist.update({
      where: { wallet: recipientWallet },
      data: { 
        totalTips: { increment: 1 },
        stakingPower: { increment: Math.floor(parseFloat(amount) * 10) }
      }
    });

    // Update donor's stats
    await prisma.user.update({
      where: { wallet: donorWallet },
      data: { 
        stakingPower: { increment: Math.floor(parseFloat(amount) * 5) },
        totalTipsGiven: { increment: 1 }
      }
    });

    // Create activity feed item
    await prisma.activityFeedItem.create({
      data: {
        type: 'tip',
        user: { connect: { wallet: donorWallet } },
        artistId: artist.id,
        artistName: artist.name,
        amount: `${amount} ${currency}`,
        message: message || '',
        timestamp: new Date().toISOString(),
        icon: '💰'
      }
    });

    return NextResponse.json({ 
      success: true, 
      donation,
      message: `Successfully sent ${amount} ${currency} to ${artist.name}`
    });
  } catch (error) {
    console.error('Donation creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create donation' },
      { status: 500 }
    );
  }
}