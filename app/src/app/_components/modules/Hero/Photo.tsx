import clsx from "clsx";
import Image from "next/image";
import photoSrc from "../../../../assets/photo.png";

interface Props {
  className?: string;
  size?: "small" | "large";
}

export const Photo = ({ className, size = "large" }: Readonly<Props>) => {
  let width = 128;
  let height = 128;

  switch (size) {
    case "small":
      width = 32;
      height = 32;
      break;
  }

  return (
    <div
      className={clsx(className, "rounded-full overflow-hidden", {
        "h-8 w-8": size === "small",
        "h-32 w-32": size === "large",
      })}
    >
      <Image
        src={photoSrc}
        alt="Picture of me"
        width={width}
        height={height}
        priority={true}
      />
    </div>
  );
};
