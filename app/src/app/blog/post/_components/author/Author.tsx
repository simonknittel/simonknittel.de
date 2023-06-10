import clsx from "clsx";
import Image from "next/image";
import picturePortraitImage from "./picture-portrait.jpg";

interface Props {
  className?: string;
}

const Author = ({ className }: Props) => {
  return (
    <section className={clsx(className, "flex gap-8 text-lg")}>
      <div className="rounded-3xl overflow-hidden flex-shrink-0">
        <Image src={picturePortraitImage} alt="Picture of me" width={192} />
      </div>

      <div>
        <p className="font-bold">About me</p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          deleniti dolorem veritatis assumenda corporis unde voluptatum, sunt
          aspernatur quis doloremque similique nihil at dolores laudantium
          nesciunt sint eveniet ipsam nam.
        </p>
      </div>
    </section>
  );
};

export default Author;
