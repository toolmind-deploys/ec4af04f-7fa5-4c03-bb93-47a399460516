import { NextResponse } from 'next/server';

export async function GET() {
  // Return some placeholder data
  const data = {
    message: 'This is a placeholder response from /api/button.',
    status: 'OK',
  };
  return NextResponse.json(data);
}
