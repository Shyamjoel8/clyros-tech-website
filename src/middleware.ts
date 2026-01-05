import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Minimal, broadly safe security headers (no CSP to avoid breaking Next.js runtime).
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  // Only meaningful on HTTPS; safe to set here as well.
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  // Touch the request to satisfy strict linting without altering behavior.
  void request;

  return response;
}

export const config = {
  matcher: [
    /*
     * Apply to all routes except Next.js internals and common static assets.
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};

