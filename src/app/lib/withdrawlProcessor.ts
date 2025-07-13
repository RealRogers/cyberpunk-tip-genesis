//@ts-nocheck
// app/lib/withdrawalProcessor.ts
import { prisma } from './prisma';
import { createJunoSignedRequest } from './junoAuth';

let PROCESS_INTERVAL = 1 * 60 * 1000; // 5 minutes

class WithdrawalProcessor {
  private intervalId: NodeJS.Timeout | null = null;
  private isProcessing = false;

  async start() {
    console.log('[WithdrawalProcessor] Starting service with interval:', PROCESS_INTERVAL, 'ms');
    this.processWithdrawals();
    this.intervalId = setInterval(() => {
      console.log('[WithdrawalProcessor] Interval triggered - starting processing cycle');
      this.processWithdrawals();
    }, PROCESS_INTERVAL);
  }

  async stop() {
    if (this.intervalId) {
      console.log('[WithdrawalProcessor] Stopping service');
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private async processWithdrawals() {
    if (this.isProcessing) {
      console.log('[WithdrawalProcessor] Processing already in progress - skipping');
      return;
    }
    
    console.log('[WithdrawalProcessor] Starting withdrawals processing');
    this.isProcessing = true;

    try {
      console.log('[WithdrawalProcessor] Checking MXNB balance...');
      let balance = await this.getMxnbBalance();
      console.log(`[WithdrawalProcessor] Current balance: ${balance} MXNB`);
      
      console.log('[WithdrawalProcessor] Fetching pending withdrawals...');
      // 2. Get pending withdrawals (where withdrawalStatus is not 'completed' or null)
      const pendingWithdrawals = await prisma.issuance.findMany({
        where: {
          status: 'completed', // Only completed deposits
          OR: [
            { withdrawalStatus: 'pending' }, // Explicitly pending
            { withdrawalStatus: 'processing' }, // Currently processing
            { withdrawalStatus: null }, // Never processed
            { withdrawalStatus: 'failed' } // Previously failed attempts
          ]
        },
        orderBy: { createdAt: 'asc' } // Process oldest first
      });

      console.log(`[WithdrawalProcessor] Found ${pendingWithdrawals.length} pending withdrawals`);

      for (let withdrawal of pendingWithdrawals) {
        console.log(`[WithdrawalProcessor] Processing withdrawal ID: ${withdrawal.id} for amount: ${withdrawal.mxnbAmount} MXNB`);
        
        if (balance >= withdrawal.mxnbAmount) {
          console.log(`[WithdrawalProcessor] Sufficient balance - initiating withdrawal`);
          await this.processWithdrawal(withdrawal);
          balance -= withdrawal.mxnbAmount;
          console.log(`[WithdrawalProcessor] Withdrawal processed. Remaining balance: ${balance} MXNB`);
        } else {
          console.log(`[WithdrawalProcessor] Insufficient balance (needed: ${withdrawal.mxnbAmount}, available: ${balance}) - skipping`);
          break;
        }
      }
    } catch (error) {
      console.error('[WithdrawalProcessor] Error during processing:', error);
    } finally {
      this.isProcessing = false;
      console.log('[WithdrawalProcessor] Processing cycle completed');
    }
  }

  private async getMxnbBalance(): Promise<number> {
    console.log('[WithdrawalProcessor] Fetching balance from Juno API...');
    let endpoint = '/mint_platform/v1/balances';
    let { headers } = createJunoSignedRequest({
      method: 'GET',
      endpoint,
      apiKey: process.env.JUNO_API_KEY!,
      apiSecret: process.env.JUNO_API_SECRET!,
    });

    let response = await fetch(`${process.env.JUNO_API_URL}${endpoint}`, {
      method: 'GET',
      headers
    });


    let data = await response.json();
    let mxnbBalance = data.payload.balances.find((b: any) => b.asset.toLowerCase() === 'mxnbj')?.total || 0;
    console.log(`[WithdrawalProcessor] Retrieved balance: ${mxnbBalance} MXNB`);
    return mxnbBalance;
  }

  private async processWithdrawal(withdrawal: any) {
    console.log(`[WithdrawalProcessor] Initiating withdrawal for issuance ID: ${withdrawal.id}`);
    
    let payload = {
      address: withdrawal.destinationAddress,
      amount: withdrawal.mxnbAmount.toString(),
      asset: "MXNB",
      blockchain: "ARBITRUM",
      compliance: {}
    };

    console.log('[WithdrawalProcessor] Withdrawal payload:', payload);

    let endpoint = '/mint_platform/v1/withdrawals';
    let { headers, body } = createJunoSignedRequest({
      method: 'POST',
      endpoint,
      payload,
      apiKey: process.env.JUNO_API_KEY!,
      apiSecret: process.env.JUNO_API_SECRET!,
    });

    console.log('[WithdrawalProcessor] Sending withdrawal request to Juno API...');
    let response = await fetch(`${process.env.JUNO_API_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body
    });

    if (!response.ok) {
      console.error('[WithdrawalProcessor] Withdrawal failed:', response.status, response.statusText);
      throw new Error('Withdrawal API request failed');
    }

    let data = await response.json();
    console.log('[WithdrawalProcessor] Withdrawal successful. Response:', data);

    console.log('[WithdrawalProcessor] Updating issuance record in database...');
    await prisma.issuance.update({
      where: { id: withdrawal.id },
      data: {
        withdrawalStatus:"complete",
        metadata: {
          ...(withdrawal.metadata || {}),
          junoWithdrawal: data,
          processedAt: new Date().toISOString()
        }
      }
    });

    console.log('[WithdrawalProcessor] Database update complete');
  }
}

export let withdrawalProcessor = new WithdrawalProcessor();