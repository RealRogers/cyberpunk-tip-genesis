// app/api/background/start.ts
import { initializeServer } from '../../lib/initServer';

export async function GET() {
  initializeServer();
  return new Response('Background services started', { status: 200 });
}