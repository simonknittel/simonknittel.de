import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    "m.homeserver": "synapse.simonknittel.de:443",
  });
}
