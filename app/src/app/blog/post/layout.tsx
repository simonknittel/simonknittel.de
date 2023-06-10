import { type ReactNode } from "react";
import Author from "./_components/author/Author";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="py-8 px-2">
      <div className="flex flex-col gap-8 items-center">{children}</div>

      <hr className="h-1 bg-neutral-500 my-8 w-full max-w-3xl mx-auto border-none" />

      <div className="flex flex-col gap-8 items-center">
        <Author className="w-full max-w-3xl" />
      </div>
    </main>
  );
}
