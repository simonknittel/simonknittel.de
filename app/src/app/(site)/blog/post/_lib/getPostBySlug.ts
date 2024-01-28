import { cache } from "react";
import { posts } from "../_posts";

export const getPostBySlug = cache((slug: string) =>
  posts.find((post) => post.slug === slug),
);
