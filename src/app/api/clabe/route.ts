//@ts-nocheck
import { createJunoSignedRequest } from '../../lib/junoAuth';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log("Fetching CLABE from Juno API");
    const clabeEndpoint = '/spei/v1/clabes?clabe_type=AUTO_PAYMENT';
    const apiUrl = `${process.env.JUNO_API_URL}${clabeEndpoint}`;
    
    // Create signed headers
    const clabeHeaders = createJunoSignedRequest({
      method: 'GET',
      endpoint: clabeEndpoint,
      payload: {},
      apiKey: process.env.JUNO_API_KEY,
      apiSecret: process.env.JUNO_API_SECRET,
    }).headers;

    console.log("Making request to:", apiUrl);
    const clabeResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: clabeHeaders,
    });

    // First check if the response is OK
    if (!clabeResponse.ok) {
      let errorData;
      try {
        errorData = await clabeResponse.text();
        errorData = JSON.parse(errorData);
      } catch (e) {
        console.error('Error parsing error response:', errorData);
      }
      
      console.error('Juno API error:', {
        status: clabeResponse.status,
        statusText: clabeResponse.statusText,
        url: apiUrl,
        errorData
      });

      return NextResponse.json(
        { 
          error: errorData?.error || 'Failed to fetch CLABE',
          details: errorData
        },
        { status: clabeResponse.status }
      );
    }

    // Parse successful response
    const responseData = await clabeResponse.json();
    console.log("Juno API response:", responseData);

    // Check if response contains valid CLABE data
    if (!responseData.success || 
        !responseData.payload?.response || 
        responseData.payload.response.length === 0) {
      return NextResponse.json(
        { error: 'No AUTO_PAYMENT CLABE available' },
        { status: 404 }
      );
    }

    // Find the first enabled AUTO_PAYMENT CLABE
    const enabledClabe = responseData.payload.response.find(
      (account: any) => account.type === 'AUTO_PAYMENT' && account.status === 'ENABLED'
    );

    if (!enabledClabe) {
      return NextResponse.json(
        { error: 'No enabled AUTO_PAYMENT CLABE available' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      clabe: enabledClabe.clabe,
      details: {
        type: enabledClabe.type,
        status: enabledClabe.status,
        createdAt: enabledClabe.created_at
      }
    });

  } catch (error) {
    console.error('CLABE fetch error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message 
      },
      { status: 500 }
    );
  }
}