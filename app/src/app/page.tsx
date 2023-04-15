import { type Metadata } from "next";
import Link from "next/link";
import Hero from "./_components/Hero/Hero";

export const metadata: Metadata = {
  title: "Simon Knittel - Full-Stack Developer",
};

export default function Page() {
  return (
    <Hero
      name="Simon Knittel"
      description={
        <>
          Full-Stack Developer @{" "}
          <Link
            href="https://www.hmmh.de/"
            className="border-b border-b-white hover:border-b-sky-500"
          >
            hmmh
          </Link>
        </>
      }
      links={[
        {
          href: "https://github.com/simonknittel",
          children: "GitHub",
        },
        {
          href: "https://mastodon.social/@simonknittel",
          children: "Mastodon",
          rel: "me",
        },
        {
          href: "https://twitter.com/simknittel",
          children: "Twitter",
        },
        {
          href: "https://www.linkedin.com/in/simonknittel/",
          children: "LinkedIn",
        },
        {
          href: "https://www.xing.com/profile/Simon_Knittel/",
          children: "Xing",
        },
      ]}
      technologies={[
        "Blender",
        "Next.js",
        "React",
        "Terraform",
        "TypeScript",
        "Unity",
      ]}
    />
  );
}
