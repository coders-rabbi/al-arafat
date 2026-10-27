import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  const isLoginPage = pathname === "/admin-login";

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/admin-login"],
};