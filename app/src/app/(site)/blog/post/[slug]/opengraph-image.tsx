import { ImageResponse } from "next/og";
import { getPostBySlug } from "../../../../../services/posts";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "edge";

type Props = Readonly<{
  params: { slug: string };
}>;

export default async function Image({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return null;

  const interBlack = fetch(
    new URL("../../../../../assets/Inter/Inter-Black.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex flex-col bg-neutral-800 text-white h-full w-full font-900">
        <div tw="flex flex-col justify-between flex-1 py-16 px-24">
          <p tw="text-8xl" style={{ textWrap: "balance" }}>
            {post.title}
          </p>

          <p tw="text-4xl text-neutral-700">Blog | Simon Knittel</p>
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
      ],
    },
  );
}
