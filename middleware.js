import { NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/connect",
  "/security",
  "/team",
  "/login",
];
const protectedRoute = "/dashboard"; // Example protected route

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken");
  // console.log(accessToken);

  // Redirect unauthenticated users trying to access protected routes
  // if (!accessToken && !publicRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL("/connect", request.url));
  // }

  // // Redirect authenticated users away from public routes
  // if (accessToken && publicRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL(protectedRoute, request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
