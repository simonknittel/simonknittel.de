import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// TODO: Show a floating toolbar instead once partial prerendering is available since it's needed to read the cookies which currently opt-outs of any cache.

export function GET() {
  draftMode().enable();
  redirect("/");
}
