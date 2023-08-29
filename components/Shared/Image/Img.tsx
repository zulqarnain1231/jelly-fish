"use client";
import Image from "next/image";

type Props = {
  imgContainer: string;
  imgStyle?: string;
  alt?: string;
  priority?: boolean;
  src: string;
};

const Img = ({
  imgContainer,
  imgStyle = "object-cover",
  alt = "",
  priority,
  src,
}: Props) => {
  return (
    <div className={`relative pointer-events-none ${imgContainer}`}>
      <Image
        alt={alt}
        sizes=""
        src={src}
        className={imgStyle}
        priority={priority}
        fill
      />
    </div>
  );
};

export default Img;
