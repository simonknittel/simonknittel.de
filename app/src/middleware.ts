import { NextResponse, type NextRequest } from "next/server";
import { env } from "./env.mjs";

export function middleware(request: NextRequest) {
  if (!env.BASIC_AUTH_USER || !env.BASIC_AUTH_PASSWORD)
    return NextResponse.next();

  const givenBase64 = request.headers.get("Authorization")?.split(" ")[1];

  if (!givenBase64)
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });

  const givenCredentials = Buffer.from(givenBase64, "base64")
    .toString()
    .split(":");
  if (
    givenCredentials[0] !== env.BASIC_AUTH_USER ||
    givenCredentials[1] !== env.BASIC_AUTH_PASSWORD
  )
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });

  return NextResponse.next();
}

export const config = {
  matcher: "/settings",
};
