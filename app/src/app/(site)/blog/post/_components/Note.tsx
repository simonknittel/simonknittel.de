import clsx from "clsx";
import { type ReactNode } from "react";
import { FaInfoCircle } from "react-icons/fa";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Note = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex gap-2 lg:gap-4 rounded border-t-sky-500 border-t-4 bg-sky-950 text-lg p-2 lg:p-4"
      )}
    >
      <FaInfoCircle className="text-sky-500 flex-shrink-0 mt-1" />

      <div>{children}</div>
    </div>
  );
};

export default Note;
