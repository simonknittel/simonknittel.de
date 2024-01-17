import clsx from "clsx";
import { type ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Technology = ({ className, children }: Readonly<Props>) => {
  return (
    <div
      className={clsx(
        className,
        "absolute hidden 2xl:flex gap-2 items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-neutral-900 to-black rounded border border-neutral-700 text-neutral-700 py-4 w-32 hover:border-white hover:text-white transition-colors",
      )}
    >
      {children}
    </div>
  );
};

export default Technology;
