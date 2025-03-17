import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();

  const token = cookieStore.get("qb-token");

  if (pathname === "/")
    return NextResponse.redirect(new URL("/dashboard", request.url));

  if (!token && pathname !== "/login")
    return NextResponse.redirect(new URL("/login", request.url));

  if (token && pathname === "/login")
    return NextResponse.redirect(new URL("/dashboard", request.url));

  NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/user/:path*", "/login"],
};
