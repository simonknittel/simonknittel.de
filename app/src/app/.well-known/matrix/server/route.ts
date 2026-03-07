import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    "m.server": "synapse.simonknittel.de:443",
  });
}
