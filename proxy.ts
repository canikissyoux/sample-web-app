// middleware.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // 1. ถ้ามี Token และพยายามเข้าหน้า Login -> ให้ไปหน้า Home (/)
    if (accessToken && pathname === '/login') {
        return NextResponse.redirect(new URL("/", request.url));
    }


    const isPublicPage = pathname === '/login' || pathname === '/register';
    if (!accessToken && !isPublicPage) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};