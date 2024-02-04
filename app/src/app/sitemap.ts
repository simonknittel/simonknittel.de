import { type MetadataRoute } from "next";
import { env } from "~/env.mjs";
import { getAllPosts } from "../services/posts";
import { getUnleashFlag } from "../services/unleash";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const disableBlog = await getUnleashFlag("DisableBlog");

  const map = [
    {
      url: env.BASE_URL,
      lastModified: new Date("2024-01-17"),
    },
  ];

  if (!disableBlog) {
    map.push(
      {
        url: `${env.BASE_URL}/blog`,
        lastModified: new Date("2023-12-31"),
      },
      ...getAllPosts().map((post) => ({
        url: `${env.BASE_URL}/blog/post/${post.slug}`,
        lastModified: post.publishedAt!,
      })),
    );
  }

  return map;
}
