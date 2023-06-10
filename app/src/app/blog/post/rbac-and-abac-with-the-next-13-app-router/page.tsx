import { type Metadata } from "next";
import {
  SiNextdotjs,
  SiPrisma,
  SiReacthookform,
  SiTypescript,
} from "react-icons/si";
import Note from "../_components/Note";
import Header from "../_components/header/Header";

export const metadata: Metadata = {
  title: "RBAC and ABAC with the Next.js 13 App Router - Blog | Simon Knittel",
};

export default function Page() {
  return (
    <>
      <Header
        date={new Date("2023-05-30")}
        tags={[
          <>
            <SiNextdotjs /> Next.js
          </>,
          <>
            <SiPrisma /> Prisma
          </>,
          <>
            <SiReacthookform /> React Hook Form
          </>,
          <>
            <SiTypescript /> TypeScript
          </>,
        ]}
      >
        RBAC and ABAC with the Next.js 13 App Router
      </Header>

      <p className="font-bold w-full max-w-3xl text-lg">
        {/* TODO: Add introduction */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut
        atque, enim unde aperiam labore? Maiores totam, fugit accusantium earum
        animi corporis vero et in quisquam reiciendis architecto culpa
        veritatis.
      </p>

      {/* TODO: Add table of contents */}

      <Note className="w-full max-w-3xl">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          voluptatem consequuntur alias facere doloribus quidem rerum
          consequatur perspiciatis sit suscipit! Autem sunt totam quasi. Iure
          suscipit voluptates id beatae provident!
        </p>
      </Note>

      <p className="w-full max-w-3xl">The End.</p>
    </>
  );
}
