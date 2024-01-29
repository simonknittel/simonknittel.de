import slugifyLib from "slugify";

export const slugify = (str: string) =>
  slugifyLib(str, {
    lower: true,
    strict: true,
    trim: true,
  });
