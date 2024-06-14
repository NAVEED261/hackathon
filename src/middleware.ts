import next from "next";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    let authentication=true
    if(!authentication){
        return NextResponse.redirect(new URL("/contact",request.url))
    }
     if(authentication){
        // if (request.nextUrl.pathname.startsWith('/contact')) {
            return NextResponse.next()
        }
    // }
    

     }
    
    

    
   
// export const config = {
//     matcher:['/about/:path*','/contact/:path*']
//   }