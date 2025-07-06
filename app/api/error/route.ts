import { NextResponse } from 'next/server';

export async function GET() {
  console.log('GET /api/error called');

  const data = {
    status: 'error route success',
    message: 'Placeholder data from /api/error',
  };

  return NextResponse.json(data);
}
