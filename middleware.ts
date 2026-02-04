import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Root Redirect Logic
    // If user is accessing the home page ('/') and is logged in:
    if (pathname === '/') {
        // Check for "access_token" (HttpOnly, might not be visible if on different subdomain but we share .smartpost.co.in)
        // OR check "session_active" (non-HttpOnly, explicitly for this purpose)

        // Note: HttpOnly cookies from parent domain (.smartpost.co.in) ARE sent to subdomains.
        // BUT we are on `smartpost.co.in` (Root).
        // The cookies are set on `.smartpost.co.in`.
        // So both `access_token` and `session_active` should be available here in middleware.

        // We prefer `access_token` for stronger verification if possible, 
        // but `session_active` is sufficient for a "convenience" redirect.
        // Let's check both for robustness.

        const hasSession = request.cookies.has('session_active') || request.cookies.has('access_token');

        if (hasSession) {
            // User is logged in, redirect to dashboard
            return NextResponse.redirect(new URL('https://app.smartpost.co.in/dashboard'));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/',
};
