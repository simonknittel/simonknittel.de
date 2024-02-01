import clsx from "clsx";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/require-await
const action = async () => {
  "use server";

  const cookie = cookies().get("va-disable")?.value;
  if (cookie === "true") {
    cookies().delete("va-disable");
  } else {
    cookies().set("va-disable", "true");
  }

  redirect("/settings");
};

type Props = Readonly<{
  className?: string;
}>;

export const VercelAnalytics = ({ className }: Props) => {
  const isEnabled = cookies().get("va-disable")?.value === "true";

  return (
    <section
      className={clsx(
        className,
        "mt-8 max-w-3xl mx-auto p-4 lg:p-8 rounded bg-neutral-900 text-lg",
      )}
    >
      <h2 className="font-bold">Vercel Analytics</h2>

      <p className="mt-4 mb-4">Toggles Vercel Analytics for this browser.</p>

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form action={action} className="flex gap-4 items-center">
        <div
          className={clsx("flex gap-2 items-start", {
            "text-red-500": isEnabled,
            "text-green-500": !isEnabled,
          })}
        >
          <div className="rounded-full w-6 h-6 bg-current" />

          {isEnabled ? "Disabled" : "Enabled"}
        </div>

        <button className="text-black dark:text-neutral-300 opacity-50 hover:opacity-100 transition-opacity">
          Toggle
        </button>
      </form>
    </section>
  );
};
