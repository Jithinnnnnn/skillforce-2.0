import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";

const LOGIN_PATH = "/login";

const PROTECTED_PREFIXES = ["/admin", "/jobprovider", "/jobseeker"] as const;

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function isAdminPath(pathname: string): boolean {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

const cookieHeader = request.headers.get("cookie") ?? undefined;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const session = getSessionFromRequest(cookieHeader);
  if (!session) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminPath(pathname) && session.role !== "admin") {
    if (session.role === "jobprovider") return NextResponse.redirect(new URL("/jobprovider", request.url));
    if (session.role === "jobseeker") return NextResponse.redirect(new URL("/jobseeker", request.url));
    return NextResponse.redirect(new URL("/jobprovider", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/jobprovider", "/jobprovider/:path*", "/jobseeker", "/jobseeker/:path*"],
};
