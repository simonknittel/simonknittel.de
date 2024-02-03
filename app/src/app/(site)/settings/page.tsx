import { type Metadata } from "next";
import { DraftMode } from "./_components/DraftMode";

export const metadata: Metadata = {
  title: "Settings | Simon Knittel",
};

export default function Page() {
  return (
    <main className="pt-6 pb-8 px-2">
      <h1 className="max-w-3xl mx-auto text-5xl font-extrabold">Settings</h1>

      {/* <VercelAnalytics /> */}

      <DraftMode />
    </main>
  );
}
