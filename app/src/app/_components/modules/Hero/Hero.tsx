import clsx from "clsx";
import Link from "next/link";
import { type ReactNode } from "react";
import {
  SiBlender,
  SiNextdotjs,
  SiReact,
  SiTerraform,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { componentMapper } from "~/app/_lib/componentMapper";
import Globe from "./Globe";
import styles from "./Hero.module.css";
import Technology from "./Technology";

export interface HeroProps {
  name: ReactNode;
  description?: ReactNode;
  links?: {
    href: string;
    rel?: string;
    children: ReactNode;
  }[];
  technologies?: string[];
}

const Hero = ({
  name,
  description,
  links = [],
  technologies = [],
}: HeroProps) => {
  const _description = componentMapper(description, {
    a: (node) => (
      <Link
        {...node.props}
        className="hover:opacity-50 relative bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:block after:absolute after:bottom-0 after:content-[''] after:h-[1px] after:left-0 after:right-0 after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
      />
    ),
  });

  return (
    <div className="h-[100dvh] bg-gradient-radial from-neutral-800 to-black text-white overflow-hidden relative">
      <div
        className={clsx(
          styles.container,
          "h-[100dvh] flex items-center justify-center text-center bg-center bg-no-repeat relative z-10"
        )}
      >
        <div className="p-4">
          <h1 className="text-6xl lg:text-8xl font-extrabold drop-shadow-xl animate-rgb bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            {name}
          </h1>

          {description && (
            <h2 className="text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100">
              {_description}
            </h2>
          )}

          {links.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xl mt-4 max-w-xs md:max-w-none mx-auto">
              {links.map(({ href, rel, children }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:opacity-50 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500"
                    rel={rel}
                  >
                    {children}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* TODO */}
        {technologies.length > 0 && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Technology className="2xl:-left-64 2xl:-top-96">
              <SiBlender /> Blender
            </Technology>
            <Technology className="2xl:left-64 2xl:-top-96">
              <SiNextdotjs /> Next.js
            </Technology>
            <Technology className="2xl:left-[40rem]">
              <SiReact />
              React
            </Technology>
            <Technology className="2xl:left-64 2xl:top-96">
              <SiTerraform /> Terraform
            </Technology>
            <Technology className="2xl:-left-64 2xl:top-96">
              <SiTypescript /> TypeScript
            </Technology>
            <Technology className="2xl:-left-[40rem]">
              <SiUnity /> Unity / C#
            </Technology>
          </div>
        )}
      </div>

      <Globe
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[512px] w-[3072px]"
        width={3072}
        height={512}
      />
    </div>
  );
};

export default Hero;
