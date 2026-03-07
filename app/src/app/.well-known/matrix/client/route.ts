import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    "m.homeserver": "https://synapse.simonknittel.de",
  });
}
