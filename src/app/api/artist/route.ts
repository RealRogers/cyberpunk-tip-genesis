//@ts-nocheck
// app/api/artist/route.ts
import { NextResponse } from 'next/server';
import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  try {
    const { wallet, name, bio, image, genre } = await request.json();

    // Validate required fields
    if (!wallet || !name || !genre) {
      return NextResponse.json(
        { error: 'Wallet, name and genre are required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { wallet }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create artist profile
    const artist = await prisma.artist.create({
      data: {
        name,
        bio: bio || '',
        image: image || '',
        genre,
        wallet,
        stakingPower: 0,
        totalTips: 0,
        rank: 0
      }
    });

    return NextResponse.json(artist, { status: 201 });
  } catch (error) {
    console.error('Error creating artist profile:', error);
    return NextResponse.json(
      { error: 'Failed to create artist profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, name, bio, image, genre } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { error: 'Artist ID is required' },
        { status: 400 }
      );
    }

    // Update artist profile
    const artist = await prisma.artist.update({
      where: { id: Number(id) },
      data: {
        name,
        bio,
        image,
        genre
      }
    });

    return NextResponse.json(artist);
  } catch (error) {
    console.error('Error updating artist profile:', error);
    return NextResponse.json(
      { error: 'Failed to update artist profile' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { error: 'Artist ID is required' },
        { status: 400 }
      );
    }

    // Delete artist profile
    await prisma.artist.delete({
      where: { id: Number(id) }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting artist profile:', error);
    return NextResponse.json(
      { error: 'Failed to delete artist profile' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const wallet = searchParams.get('wallet');
  const id = searchParams.get('id');

  try {
    if (id) {
      // Get artist by ID
      const artist = await prisma.artist.findUnique({
        where: { id: Number(id) },
        include: {
          donations: {
            take: 5,
            orderBy: { timestamp: 'desc' }
          },
          comments: {
            take: 5,
            orderBy: { timestamp: 'desc' }
          }
        }
      });

      if (!artist) {
        return NextResponse.json(
          { error: 'Artist not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(artist);
    } else if (wallet) {
      // Get artist by wallet
      const artist = await prisma.artist.findFirst({
        where: { wallet },
        include: {
          donations: true,
          comments: true
        }
      });

      if (!artist) {
        return NextResponse.json(
          { error: 'Artist not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(artist);
    } else {
      // Get all artists
      const artists = await prisma.artist.findMany({
        orderBy: { rank: 'asc' }
      });

      return NextResponse.json(artists);
    }
  } catch (error) {
    console.error('Error fetching artists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch artist data' },
      { status: 500 }
    );
  }
}