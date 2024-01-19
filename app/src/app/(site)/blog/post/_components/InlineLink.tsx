import clsx from "clsx";
import Link from "next/link";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

interface Props extends ComponentPropsWithoutRef<typeof Link> {
  className?: string;
  children?: ReactNode;
  theme?: "neutral" | "neutralUnderlined" | "tasteTheRainbow";
}

const InlineLink = forwardRef<typeof Link, Props>(
  function InlineLink(props, ref) {
    const { className, children, theme = "tasteTheRainbow", ...other } = props;

    return (
      <Link
        className={clsx(className, {
          "text-black dark:text-neutral-300 opacity-50 hover:opacity-100 transition-opacity":
            ["neutral", "neutralUnderlined"].includes(theme),
          "underline underline-offset-[7px]": theme === "neutralUnderlined",
          // TODO: Fix styling for links spanning multiple lines
          "inline-block after:h-[1px] after:block after:content-[''] after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500":
            theme === "tasteTheRainbow",
        })}
        {...other}
        ref={ref}
      >
        {children}
      </Link>
    );
  },
);

export default InlineLink;
