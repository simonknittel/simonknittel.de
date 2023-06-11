import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://simonknittel.de",
      lastModified: new Date("2023-06-30"),
    },
    {
      url: "https://simonknittel.de/blog",
      lastModified: new Date("2023-06-30"),
    },
    {
      url: "https://simonknittel.de/blog/post/image-upload-to-cloudflare-r2-with-next-js-app-router",
      lastModified: new Date("2023-06-30"),
    },
  ];
}
