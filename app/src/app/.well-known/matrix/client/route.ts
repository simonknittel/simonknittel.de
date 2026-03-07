import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    "m.homeserver": {
      base_url: "https://synapse.simonknittel.de"
    },
  });
}
