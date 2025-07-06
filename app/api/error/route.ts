import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: 'Placeholder data from /api/error.',
    status: 'OK',
  };

  return NextResponse.json(data);
}
