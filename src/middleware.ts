import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)

    const response = NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    })
    const ContentSecurityPolicy = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vahryiskandar.my.id;
        child-src  *.youtube.com *.google.com *.twitter.com giscus.app;
        style-src 'self';
        font-src 'self';  
    `
    response.headers.set('X-Next-Server', 'Next.js')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Cache-Control', 'must-revalidate, max-age=3600')
    response.headers.set('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ""))


    return response


}