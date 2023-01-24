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
    response.headers.set('X-Next-Server', 'Next.js')
    

    return response

    
}