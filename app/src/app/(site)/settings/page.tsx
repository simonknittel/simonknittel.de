import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { env } from "~/env.mjs";
import { DraftMode } from "./_components/DraftMode";
import { VercelAnalytics } from "./_components/VercelAnalytics";

export const metadata: Metadata = {
  title: "Settings | Simon Knittel",
};

type Props = Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>;

export default function Page({ searchParams }: Props) {
  if (env.SECRET) {
    const secret = searchParams.secret;

    if (
      !secret ||
      (typeof secret === "string" && secret !== env.SECRET) ||
      (Array.isArray(secret) && secret[0] !== env.SECRET)
    )
      notFound();
  }

  return (
    <main className="pt-6 pb-8 px-2">
      <h1 className="max-w-3xl mx-auto text-5xl font-extrabold">Settings</h1>

      <VercelAnalytics />

      <DraftMode />
    </main>
  );
}
