import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("viewport", viewport);
  console.log(viewport);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
