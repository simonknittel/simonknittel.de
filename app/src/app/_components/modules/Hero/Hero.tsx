import clsx from "clsx";
import Link from "next/link";
import { createElement, type ReactElement, type ReactNode } from "react";
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
  return (
    <div className="h-full bg-gradient-radial from-neutral-800 to-black text-white overflow-hidden relative">
      <div
        className={clsx(
          styles.container,
          "h-full flex items-center justify-center text-center bg-center bg-no-repeat"
        )}
      >
        <div className="p-4">
          <h1 className="text-6xl lg:text-8xl font-extrabold drop-shadow-xl animate-rgb bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            {name}
          </h1>

          {description && (
            <h2 className="text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100">
              {description.map((node) =>
                node.props.children.map((childNode: ReactElement) => {
                  // TODO: Makes this work for nested children
                  if (childNode.type === "a") {
                    return createElement(Link, {
                      ...childNode.props,
                      className:
                        "hover:opacity-50 relative bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:block after:absolute after:bottom-0 after:content-[''] after:h-[1px] after:left-0 after:right-0 after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500",
                    });
                  }

                  return childNode;
                })
              )}
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
              Blender
            </Technology>
            <Technology className="2xl:left-64 2xl:-top-96">Next.js</Technology>
            <Technology className="2xl:left-[40rem]">React</Technology>
            <Technology className="2xl:left-64 2xl:top-96">
              Terraform
            </Technology>
            <Technology className="2xl:-left-64 2xl:top-96">
              TypeScript
            </Technology>
            <Technology className="2xl:-left-[40rem]">Unity / C#</Technology>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
