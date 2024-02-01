import { type Metadata } from "next";
import { getUnleashFlag } from "../services/unleash";
import Hero from "./_components/modules/Hero/Hero";

export const metadata: Metadata = {
  title: "Simon Knittel — Full-Stack Developer",
  description:
    "Full-Stack Developer @ hmmh · GitHub · Mastodon · Twitter · LinkedIn. Blender. Next.js. React. Terraform. TypeScript. Unity / C#.",
};

export default async function Page() {
  return <Hero disableBlog={await getUnleashFlag("DisableBlog")} />;
}
