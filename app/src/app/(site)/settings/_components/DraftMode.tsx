import clsx from "clsx";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/require-await
const action = async () => {
  "use server";

  if (draftMode().isEnabled) {
    draftMode().disable();
  } else {
    draftMode().enable();
  }

  redirect("/settings");
};

type Props = Readonly<{
  className?: string;
}>;

export const DraftMode = ({ className }: Props) => {
  const { isEnabled } = draftMode();

  return (
    <section
      className={clsx(
        className,
        "mt-8 max-w-3xl mx-auto p-4 lg:p-8 rounded bg-neutral-900 text-lg",
      )}
    >
      <h2 className="font-bold">Draft Mode</h2>

      <p className="mt-4 mb-4">Toggles Draft Mode for this browser.</p>

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form action={action} className="flex gap-4 items-center">
        <div
          className={clsx("flex gap-2 items-start", {
            "text-red-500": isEnabled,
            "text-green-500": !isEnabled,
          })}
        >
          <div className="rounded-full w-6 h-6 bg-current" />

          {isEnabled ? "Enabled" : "Disabled"}
        </div>

        <button className="text-black dark:text-neutral-300 opacity-50 hover:opacity-100 transition-opacity">
          Toggle
        </button>
      </form>
    </section>
  );
};
