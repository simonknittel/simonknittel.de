import { type Metadata } from "next";
import AnalyticsCheckbox from "./_components/AnalyticsCheckbox";

export const metadata: Metadata = {
  title: "Settings | Simon Knittel",
};

export default function Page() {
  return (
    <main className="pt-6 pb-8 px-2">
      <h1 className="max-w-3xl mx-auto text-5xl font-extrabold">Settings</h1>

      <section className="mt-8 max-w-3xl mx-auto p-4 lg:p-8 rounded bg-neutral-900 text-lg">
        <h2 className="font-bold">Disable analytics</h2>

        <p className="mt-4 mb-4">Disables Vercel Analytics for this browser.</p>

        <AnalyticsCheckbox />
      </section>
    </main>
  );
}
