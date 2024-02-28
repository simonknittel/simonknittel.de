import clsx from "clsx";
import { type Metadata } from "next";
import { merriweather } from "~/app/fonts";
import { DraftMode } from "./_components/DraftMode";
import { Plausible } from "./_components/Plausible";

export const metadata: Metadata = {
  title: "Settings | Simon Knittel",
};

export default function Page() {
  return (
    <main className="pt-6 pb-8 px-2">
      <h1
        className={clsx(
          merriweather.className,
          "max-w-3xl mx-auto text-3xl lg:text-5xl",
        )}
      >
        Settings
      </h1>

      {/* <VercelAnalytics /> */}

      <Plausible />

      <DraftMode />
    </main>
  );
}
