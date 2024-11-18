import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const protectedRoutes = ['/skills', '/projects'];
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/skills/:path*',
    '/projects/:path*'
  ]
}; 