import { ImageResponse } from "next/og";
import { env } from "~/env.mjs";
import photoSrc from "../../../assets/photo_64x64.png";

export const alt = "Blog | Simon Knittel";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "edge";

export default async function Image() {
  const interBlack = fetch(
    new URL("../../../assets/Inter/Inter-Black.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const merriweatherBlack = fetch(
    new URL(
      "../../../assets/Merriweather/Merriweather-Black.ttf",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex flex-col bg-neutral-800 text-white h-full w-full font-900">
        <div tw="flex flex-col justify-between flex-1 py-16 px-24">
          <p
            tw="text-8xl"
            style={{ textWrap: "balance", fontFamily: "Merriweather" }}
          >
            All blog posts
          </p>

          <div tw="text-4xl text-neutral-700 flex items-center">
            <div tw="flex rounded-full overflow-hidden mr-4">
              <img
                src={`${env.BASE_URL}${photoSrc.src}`}
                alt=""
                width={64}
                height={64}
              />
            </div>

            <p
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(20, 184, 166), rgb(168, 85, 247), rgb(249, 115, 22))",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Simon Knittel
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(20, 184, 166), rgb(168, 85, 247), rgb(249, 115, 22))",
          }}
          tw="h-2"
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interBlack,
          style: "normal",
          weight: 900,
        },
        {
          name: "Merriweather",
          data: await merriweatherBlack,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
