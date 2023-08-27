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
}

const InlineLink = forwardRef<typeof Link, Props>(
  function InlineLink(props, ref) {
    const { className, children, ...other } = props;

    return (
      <Link
        className={clsx(
          // TODO: Fix styling for links spanning multiple lines
          "hover:opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 to-neutral-100 after:content-[''] after:h-[1px] after:block after:animate-rgb after:bg-gradient-to-r after:from-teal-500 after:via-purple-500 after:to-orange-500",
          className,
        )}
        {...other}
        ref={ref}
      >
        {children}
      </Link>
    );
  },
);

export default InlineLink;
