import clsx from "clsx";
import Image from "next/image";
import picturePortraitImage from "./picture-portrait.jpg";

interface Props {
  className?: string;
}

const Author = ({ className }: Props) => {
  return (
    <section
      className={clsx(className, "flex gap-4 lg:gap-8 lg:text-lg items-start")}
    >
      <div className="rounded lg:rounded-3xl overflow-hidden flex-shrink-0 basis-1/5">
        <Image src={picturePortraitImage} alt="Picture of me" width={192} />
      </div>

      <div className="basis-4/5">
        <p className="font-bold">About me</p>

        <p>TODO: About me</p>
      </div>
    </section>
  );
};

export default Author;
