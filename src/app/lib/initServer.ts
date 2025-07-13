

// app/lib/initServer.ts
import { withdrawalProcessor } from './withdrawlProcessor';

export function initializeServer() {
    console.log("hi")
  // Start background services
  withdrawalProcessor.start();

  // Cleanup on shutdown
  process.on('SIGTERM', () => {
    withdrawalProcessor.stop();
    process.exit(0);
  });

  process.on('SIGINT', () => {
    withdrawalProcessor.stop();
    process.exit(0);
  });
}