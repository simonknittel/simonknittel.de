import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "~/env.mjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  if (req.headers["x-secret"] !== env.CONTENTFUL_WEBHOOK_SECRET) {
    return res.status(401).end();
  }

  try {
    // TODO: Implement fine-grained revalidation based on Contentful's webhook payload

    await res.revalidate("/");

    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}
