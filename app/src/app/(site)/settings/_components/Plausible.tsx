import clsx from "clsx";
import dynamic from "next/dynamic";

const PlausibleToggle = dynamic(
  () => import("./PlausibleToggle").then((mod) => mod.PlausibleToggle),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse rounded bg-neutral-800 h-7 w-36" />
    ),
  },
);

type Props = Readonly<{
  className?: string;
}>;

export const Plausible = ({ className }: Props) => {
  return (
    <section
      className={clsx(
        className,
        "mt-8 max-w-3xl mx-auto p-4 lg:p-8 rounded bg-neutral-900 text-lg",
      )}
    >
      <h2 className="font-bold">Plausible</h2>

      <p className="mt-4 mb-4">Toggles Plausible for this browser.</p>

      <PlausibleToggle />
    </section>
  );
};
