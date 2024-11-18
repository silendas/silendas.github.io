import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    
    const response = NextResponse.json({ success: true });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 jam
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat login' },
      { status: 500 }
    );
  }
} 