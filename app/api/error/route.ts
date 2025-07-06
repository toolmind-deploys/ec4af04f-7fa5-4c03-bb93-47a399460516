import { NextResponse } from 'next/server';

export async function GET() {
  console.log('API called: /api/error');
  const data = {
    message: 'Placeholder response from /api/error.',
    status: 'OK'
  };
  return NextResponse.json(data);
}