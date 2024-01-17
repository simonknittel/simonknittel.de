import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <main className="pb-10 lg:pb-16 px-2 flex flex-col gap-4 items-center [&>p]:w-full [&>p]:max-w-3xl [&>p]:text-lg [&>h2]:w-full [&>h2]:max-w-3xl [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-6 lg:[&>h2]:mt-12">
      {children}
    </main>
  );
}
