import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Map dashboard routes to required roles
const roleRouteMap: Record<string, string> = {
  '/admin-dashboard': 'admin',
  '/user-dashboard': 'user',
  '/bo-dashboard': 'boe',
};

export function middleware(request: NextRequest) {
    console.log("middleware running");
  const { pathname } = request.nextUrl;

  // Only protect dashboard routes
  const matched = Object.keys(roleRouteMap).find((route) =>
    pathname === route || pathname.startsWith(`${route}/`)
  );
  if (!matched) return NextResponse.next();

  // Get JWT from cookie
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { role?: string };
    const requiredRole = roleRouteMap[matched];
    if (payload.role !== requiredRole) {
      // Not authorized for this dashboard
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // Authorized
    return NextResponse.next();
  } catch {
    // Invalid token
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/admin-dashboard',
    '/admin-dashboard/:path*',
    '/user-dashboard',
    '/user-dashboard/:path*',
    '/bo-dashboard',
    '/bo-dashboard/:path*',
  ],
}; 


 