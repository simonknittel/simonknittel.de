import { type MetadataRoute } from "next";
import { getUnleashFlag } from "../lib/getUnleashFlag";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const disableBlog = await getUnleashFlag("DisableBlog");

  const map = [
    {
      url: "https://simonknittel.de",
      lastModified: new Date("2024-01-17"),
    },
  ];

  if (!disableBlog) {
    map.push(
      {
        url: "https://simonknittel.de/blog",
        lastModified: new Date("2023-12-31"),
      },
      {
        url: "https://simonknittel.de/blog/post/my-software-development-principles-2023",
        lastModified: new Date("2023-12-31"),
      },
    );
  }

  return map;
}
