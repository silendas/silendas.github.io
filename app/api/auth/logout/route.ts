import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ success: true });
    response.cookies.delete('token');
    
    return response;
  } catch {
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat logout' },
      { status: 500 }
    );
  }
} 