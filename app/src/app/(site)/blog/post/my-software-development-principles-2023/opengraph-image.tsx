import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt =
  "My software development practices 2023 - Blog | Simon Knittel";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interRegular = fetch(
    new URL("./Inter/Inter-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const interBlack = fetch(
    new URL("./Inter/Inter-Black.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex flex-col p-8 justify-end bg-neutral-800 text-white h-full w-full">
        <p tw="text-6xl font-400 text-neutral-500">Blog | Simon Knittel</p>

        <p
          tw="text-9xl font-900"
          style={{
            textWrap: "balance",
          }}
        >
          My software development practices 2023
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: await interBlack,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
