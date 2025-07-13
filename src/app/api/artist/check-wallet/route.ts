// app/api/artists/check-wallet/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(request: Request) {
  try {
    const { wallet } = await request.json();
    console.log("wallet",wallet)
    if (!wallet) {
      return NextResponse.json(
        { error: 'Wallet address is required' },
        { status: 400 }
      );
    }
console.log("sup")
    const artist = await prisma.artist.findUnique({
      where: { wallet },
      select: {
        id: true,
        name: true,
        wallet: true
      }
    });

    if (!artist) {
      return NextResponse.json(
        { exists: false, message: 'Artist not found with this wallet address' },
        { status: 200 }
      );
    }

    return NextResponse.json({
      exists: true,
      artist,
      message: 'Artist wallet exists'
    });
  } catch (error) {
    console.error('Wallet check failed:', error);
    return NextResponse.json(
      { error: 'Failed to check wallet existence' },
      { status: 500 }
    );
  }
}