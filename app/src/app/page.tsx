import { type Metadata } from "next";
import { type ProfilePage, type WithContext } from "schema-dts";
import { env } from "~/env.mjs";
import photo from "../assets/photo_512x512.png";
import { getUnleashFlag } from "../services/unleash";
import Hero from "./_components/modules/Hero/Hero";

const jsonLd: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Simon Knittel",
    jobTitle: "Full-Stack Developer",
    image: `${env.BASE_URL}${photo.src}`,
    sameAs: [
      "https://github.com/simonknittel",
      "https://mastodon.social/@simonknittel",
      "https://twitter.com/simknittel",
      "https://www.linkedin.com/in/simonknittel/",
      "https://www.buymeacoffee.com/simonknittel",
    ],
  },
};

export const metadata: Metadata = {
  title: "Simon Knittel — Full-Stack Developer",
  description:
    "Full-Stack Developer @ hmmh · GitHub · Mastodon · Twitter · LinkedIn. Blender. Next.js. React. Terraform. TypeScript. Unity / C#.",
};

export default async function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Hero disableBlog={await getUnleashFlag("DisableBlog")} />
      </main>
    </>
  );
}
