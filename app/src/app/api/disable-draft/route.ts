import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export function GET() {
  draftMode().disable();
  redirect("/");
}
