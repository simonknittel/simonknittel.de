import clsx from "clsx";
import Link from "next/link";
import { createElement, type ReactElement, type ReactNode } from "react";
import styles from "./Hero.module.css";
import Technology from "./Technology";

interface Props {
  name: ReactNode;
  description?: ReactNode;
  links?: {
    href: string;
    rel?: string;
    children: ReactNode;
  }[];
  technologies?: string[];
}

const Hero = ({ name, description, links = [], technologies = [] }: Props) => {
  return (
    <div className="h-full bg-gradient-radial from-neutral-800 to-black text-white overflow-hidden relative">
      <div
        className={clsx(
          styles.container,
          "h-full flex items-center justify-center text-center bg-center bg-no-repeat"
        )}
      >
        <div className={clsx(styles.text, "p-4")}>
          <h1 className="text-6xl lg:text-8xl font-extrabold">{name}</h1>

          {description && (
            <h2 className="text-2xl mt-4">
              {description.props.children.map((child: ReactElement) => {
                if (child.type === "a") {
                  return createElement(Link, {
                    ...child.props,
                    className: "border-b border-b-white hover:border-b-sky-500",
                  });
                }

                return child;
              })}
            </h2>
          )}

          {links.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xl mt-4 max-w-xs md:max-w-none mx-auto">
              {links.map(({ href, rel, children }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="border-b border-b-white hover:border-b-sky-500"
                    rel={rel}
                  >
                    {children}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

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
            <Technology className="2xl:-left-[40rem]">Unity</Technology>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
