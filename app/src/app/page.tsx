import { type Metadata } from "next";
import Hero from "./_components/modules/Hero/Hero";
import { getUnleashFlag } from "./_lib/getUnleashFlag";

export const metadata: Metadata = {
  title: "Simon Knittel — Full-Stack Developer",
  description: null,
};

export default async function Page() {
  return <Hero disableBlog={await getUnleashFlag("DisableBlog")} />;
}
