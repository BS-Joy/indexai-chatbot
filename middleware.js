import { NextResponse } from "next/server";

const publicRoutes = ["/", "/about", "/connect", "/security", "/team"];

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const auth = request.cookies.get("auth");

  // If it's a public route and user has auth cookie, remove it
  // if (isPublicRoute) {
  //   if (auth) {
  //     const response = NextResponse.next();
  //     response.cookies.delete("auth");
  //     console.log("Auth cookie removed for public route:", path);
  //     return response;
  //   }
  //   return NextResponse.next();
  // } else {
  //   // If it's a private route and auth cookie is missing, set it
  //   if (!auth) {
  //     const response = NextResponse.next();
  //     response.cookies.set("auth", "true", { path: "/" });
  //     console.log("Auth cookie set for private route:", path);
  //     return response;
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
