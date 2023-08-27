import { type MetadataRoute } from "next";
import { getUnleashFlag } from "./_lib/getUnleashFlag";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const disableBlog = await getUnleashFlag("DisableBlog");

  const map = [
    {
      url: "https://simonknittel.de",
      lastModified: new Date("2023-06-30"),
    },
  ];

  if (!disableBlog) {
    map.push(
      {
        url: "https://simonknittel.de/blog",
        lastModified: new Date("2023-06-30"),
      },
      {
        url: "https://simonknittel.de/blog/post/image-upload-to-cloudflare-r2-with-next-js-app-router",
        lastModified: new Date("2023-06-30"),
      }
    );
  }

  return map;
}
