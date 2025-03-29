import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode"; // You'll need to install this package: npm install jwt-decode

const publicRoutes = [
  "/",
  "/about",
  "/connect",
  "/security",
  "/team",
  "/login",
];
const protectedRoute = "/dashboard";
const adminRoute = "/admin";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value; // Get the token value

  // If no access token exists and user is trying to access non-public route
  // if (!accessToken && !publicRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL("/connect", request.url));
  // }

  // // If token exists, decode it and check the role
  // if (accessToken) {
  //   try {
  //     const decodedToken = jwtDecode(accessToken);
  //     console.log(decodedToken);
  //     const userRole = decodedToken?.role; // Assuming role is stored in the token

  //     // Admin and super_admin routing
  //     if (["admin", "super_admin"].includes(userRole)) {
  //       // If trying to access public routes, redirect to admin
  //       if (publicRoutes.includes(pathname)) {
  //         return NextResponse.redirect(new URL(adminRoute, request.url));
  //       }
  //       // Allow access to admin routes
  //       if (pathname.startsWith(adminRoute)) {
  //         return NextResponse.next();
  //       }
  //     }

  //     // Regular user routing
  //     if (userRole === "user") {
  //       // If trying to access public routes, redirect to dashboard
  //       if (publicRoutes.includes(pathname)) {
  //         return NextResponse.redirect(new URL(protectedRoute, request.url));
  //       }
  //       // Prevent regular users from accessing admin routes
  //       if (pathname.startsWith(adminRoute)) {
  //         return NextResponse.redirect(new URL(protectedRoute, request.url));
  //       }
  //     }

  //     // If role is invalid or undefined, redirect to connect
  //     if (!userRole || !["admin", "super_admin", "user"].includes(userRole)) {
  //       return NextResponse.redirect(new URL("/connect", request.url));
  //     }
  //   } catch (error) {
  //     // If token is invalid or decoding fails, redirect to connect
  //     console.error("Token decoding error:", error);
  //     return NextResponse.redirect(new URL("/connect", request.url));
  //   }
  // }

  // Allow the request to proceed if no redirects are triggered
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
