import { draftMode } from "next/headers";
import { type StaticImageData } from "next/image";
import { cache, type ReactNode } from "react";
import { post as post3 } from "./image-upload-to-cloudflare-r2-with-nextjs-13-app-router";
import { post as post2 } from "./managing-my-tasks-with-obsidian";
import { post } from "./my-software-development-principles-2023";

export type Post = {
  public: boolean;
  title: string;
  slug: string;
  publishedAt: Date;
  tags: React.ReactNode[];
  socialLinks?: [string, string][];
  coverSrc?: StaticImageData;
  body?: ReactNode;
};

const allPosts: Array<Post> = [post, post2, post3];

export const getAllPosts = cache(() =>
  allPosts.filter((post) => isVisible(post)),
);

export const getPostBySlug = cache((slug: string) =>
  allPosts.find((post) => post.slug === slug && isVisible(post)),
);

const isVisible = (post: Post) => post.public === true || draftMode().isEnabled;
