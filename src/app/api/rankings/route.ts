// app/api/stats/rankings/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET() {
  try {
    const topUsers = await prisma.user.findMany({
      orderBy: [
        { stakingPower: 'desc' },
        { reputation: 'desc' }, // optional tie-breaker
      ],
      take: 3,
      select: {
        username: true,
        stakingPower: true,
        reputation: true,
        avatar: true,
      },
    });

    return NextResponse.json(topUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch rankings' }, { status: 500 });
  }
}
