import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import { getClient } from "~/app/_utils/contentful";
import { env } from "~/env.mjs";

const requestBodySchema = z.union([
  z.object({
    sys: z.object({
      contentType: z.object({
        sys: z.object({
          id: z.literal("page"),
        }),
      }),
    }),
    fields: z.object({
      slug: z.object({
        "en-US": z.string(),
      }),
    }),
  }),
  z.object({
    sys: z.object({
      contentType: z.object({
        sys: z.object({
          id: z.string().regex(/^module\w+$/),
        }),
      }),
      id: z.string(),
    }),
  }),
]);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /**
   * Validate request method
   */
  if (req.method !== "POST") return res.status(405).end();

  /**
   * Authenticate request
   */
  if (req.headers["x-secret"] !== env.CONTENTFUL_WEBHOOK_SECRET) {
    return res.status(401).end();
  }

  try {
    /**
     * Parse request body
     */
    const validatedBody = requestBodySchema.parse(req.body);

    if (validatedBody.sys.contentType.sys.id === "page") {
      await res.revalidate(validatedBody.fields.slug["en-US"]);
    } else if (/^module\w+$/.test(validatedBody.sys.contentType.sys.id)) {
      const client = getClient();

      const page = await client.getEntries({
        content_type: "page",
        "fields.modules.sys.id": validatedBody.sys.id,
        order: ["-sys.updatedAt"],
        limit: 1,
      });

      await res.revalidate(page.items[0].fields.slug);
    } else {
      return res.status(400).end();
    }

    return res.status(204).end();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err });
    }

    console.error(err);
    return res.status(500).end();
  }
}
