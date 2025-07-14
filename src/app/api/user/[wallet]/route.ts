//@ts-nocheck
// app/api/stats/user/[wallet]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET(req: Request, { params }: { params: { wallet: string } }) {
  const { wallet } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { wallet },
      select: {
        stakingPower: true,
        tier: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Rank (1-based): How many users have more stakingPower
    const higherRanked = await prisma.user.count({
      where: {
        stakingPower: {
          gt: user.stakingPower,
        },
      },
    });

    const rank = higherRanked + 1;

    return NextResponse.json({
      stakingPower: user.stakingPower,
      rank: `#${rank}`,
      tier: user.tier,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch user stats' }, { status: 500 });
  }
}
