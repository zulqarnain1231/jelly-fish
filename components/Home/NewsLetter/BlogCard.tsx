import React from "react";
import Link from "next/link";
import Img from "@/components/Shared/Image/Img";

interface Props {
  picture: string;
  title: string;
  summary: string;
  link: string;
}
const BlogCard: React.FC<Props> = ({ picture, title, summary, link }) => {
  return (
    <Link
      href={link}
      className="w-full h-[500px] lg:h-[530px] xl:h-[500px] flex flex-col items-center justify-start bg-white-off rounded-[16px] shadow-lg group"
    >
      <Img
        src={picture}
        imgContainer="h-[250px] w-full rounded-t-[16px] overflow-hidden shrink-0"
        imgStyle="object-cover rounded-t-[16px] group-hover:scale-105 group-hover:duration-300"
      />
      <div className="w-full flex flex-col items-center justify-start gap-6 p-6">
        <h3 className="text-xl text-black-secondary text-center font-semibold">
          {title}
        </h3>
        <p className="text-base text-black-main text-center font-normal">
          {summary}....
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
