import { type Metadata } from "next";
import { BsFillShieldFill } from "react-icons/bs";
import { SiNextdotjs, SiPrisma, SiReacthookform } from "react-icons/si";
import Note from "../_components/Note";
import Header from "../_components/header/Header";
import imageSrc from "./image.jpg";

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
            <BsFillShieldFill /> NextAuth.js
          </>,
          <>
            <SiPrisma /> Prisma
          </>,
          <>
            <SiReacthookform /> React Hook Form
          </>,
        ]}
        imageSrc={imageSrc}
      >
        RBAC and ABAC with the Next.js 13 App Router
      </Header>

      {/* <div className="aspect-[6/1] relative w-full max-w-3xl rounded-3xl overflow-hidden">
        <Image src={imageSrc} alt="" width={768} height={128} />
      </div> */}

      <p className="font-bold w-full max-w-3xl text-lg">
        {/* TODO: Add introduction */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aut
        atque, enim unde aperiam labore? Maiores totam, fugit accusantium earum
        animi corporis vero et in quisquam reiciendis architecto culpa
        veritatis.
      </p>

      {/* TODO: Add table of contents */}

      <Note className="w-full max-w-3xl">
        <p className="font-bold">Side note</p>

        <p>This function has been initially generated with ChatGPT.</p>
      </Note>

      <p className="w-full max-w-3xl">The End.</p>

      <p className="italic w-full max-w-3xl text-lg">
        Thanks to my colleagues Cornelia and Henning for reviewing this post
        before posting.
      </p>
    </>
  );
}
