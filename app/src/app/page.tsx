import { type Metadata } from "next";
import ModuleRenderer from "./_components/ModuleRenderer";

export const metadata: Metadata = {
  title: "Simon Knittel - Full-Stack Developer",
};

export default function Page() {
  return (
    <ModuleRenderer
      data={[
        {
          id: "1",
          type: "Hero",
          name: "Simon Knittel",
          description: (
            <>
              Full-Stack Developer @ <a href="https://www.hmmh.de/">hmmh</a>
            </>
          ),
          links: [
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
          ],
          technologies: [
            "Blender",
            "Next.js",
            "React",
            "Terraform",
            "TypeScript",
            "Unity",
          ],
        },
      ]}
    />
  );
}
