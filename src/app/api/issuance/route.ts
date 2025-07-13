//@ts-nocheck
import { createJunoSignedRequest } from '../../lib/junoAuth';
import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  try {
    const { amount, destinationAddress, userId, clabe } = await req.json();

    // Validate inputs
    if (!amount || !destinationAddress || !userId || !clabe) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      return NextResponse.json(
        { error: 'Invalid amount format' },
        { status: 400 }
      );
    }
    if (parsedAmount < 100) {
      return NextResponse.json(
        { error: 'Amount must be at least 100 MXN' },
        { status: 400 }
      );
    }

    const receiverName = process.env.JUNO_RECEIVER_NAME;
    if (!receiverName) {
      return NextResponse.json(
        { error: 'JUNO_RECEIVER_NAME not configured' },
        { status: 500 }
      );
    }

    // Prepare mock deposit payload using the CLABE from frontend
    const payload = {
      amount: parsedAmount.toFixed(2),
      receiver_clabe: clabe, // Using CLABE from frontend
      receiver_name: receiverName,
      sender_clabe: '646180157099999993', // Dummy sender CLABE
      sender_name: receiverName, // Must match receiver name for mock deposits
    };

    // Create signed request for mock deposit
    const depositEndpoint = '/spei/test/deposits';
    const { headers, body } = createJunoSignedRequest({
      method: 'POST',
      endpoint: depositEndpoint,
      payload,
      apiKey: process.env.JUNO_API_KEY,
      apiSecret: process.env.JUNO_API_SECRET,
    });

    // Execute mock deposit
    const depositResponse = await fetch(`${process.env.JUNO_API_URL}${depositEndpoint}`, {
      method: 'POST',
      headers,
      body,
    });

    const depositData = await depositResponse.json();

    if (!depositResponse.ok || !depositData.success) {
      return NextResponse.json(
        { 
          error: depositData.error?.message || 'Juno deposit API error',
          code: depositData.error?.code || 'DEPOSIT_FAILED',
          details: depositData
        },
        { status: depositResponse.status }
      );
    }

      
    // Store issuance record
    const issuance = await prisma.issuance.create({
      data: {
        userId,
        amount: parsedAmount,
        mxnbAmount: parsedAmount, // 1:1 peg
        status: 'completed',
        issuanceId: depositData.payload.tracking_code || `mock-${Date.now()}`,
        externalId: depositData.payload.tracking_key,
        destinationAddress,
      },
    });

    // Add to activity feed
    await prisma.activityFeedItem.create({
      data: {
        type: 'deposit',
        userId,
        amount: parsedAmount.toString(),
        message: `Deposited ${parsedAmount} MXNB`,
        timestamp: new Date().toISOString(),
        icon: 'coin',
      },
    });

     
// Trigger background service - SIMPLE VERSION
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/background`, {
    method: 'GET'
  }).catch(() => {}); // Completely silent fail

    return NextResponse.json({ 
      success: true,
      trackingCode: depositData.payload.tracking_code,
      amount: parsedAmount,
      message: 'Mock deposit completed successfully'
    });

  } catch (error) {
    console.error('Issuance error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        code: 'INTERNAL_ERROR',
        details: error.message 
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}