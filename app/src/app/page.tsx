import { type Metadata } from "next";
import { env } from "~/env.mjs";
import photo from "../assets/photo_512x512.png";
import { getUnleashFlag } from "../services/unleash";
import Hero from "./_components/modules/Hero/Hero";

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
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Simon Knittel",
              "givenName": "Simon",
              "familyName": "Knittel",
              "image": "${env.BASE_URL}${photo.src}",
              "jobTitle": "Full-Stack Developer",
              "url": "${env.BASE_URL}",
              "sameAs": [
                "https://github.com/simonknittel",
                "https://mastodon.social/@simonknittel",
                "https://twitter.com/simknittel",
                "https://www.linkedin.com/in/simonknittel/"
              ]
            }
          `,
        }}
      />

      <Hero disableBlog={await getUnleashFlag("DisableBlog")} />
    </>
  );
}
