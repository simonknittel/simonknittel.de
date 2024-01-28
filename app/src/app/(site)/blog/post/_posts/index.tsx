import { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { post as post3 } from "./image-upload-to-cloudflare-r2-with-next-js-13-app-router";
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

export const posts: Array<Post> = [post, post2, post3];
