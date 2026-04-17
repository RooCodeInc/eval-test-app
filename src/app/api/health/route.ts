import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: {
      APP_NAME: process.env.APP_NAME ?? 'eval-test-app',
      APP_ENV: process.env.APP_ENV ?? 'development',
    },
  });
}
