import React from "react";
import Link from "next/link";
import Img from "@/components/Shared/Image/Img";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

interface Props {
  name: string;
  linkedin: string;
  role: string;
  avatar: string;
}
const ProfileCard: React.FC<Props> = ({
  name,
  role,
  linkedin,
  avatar,
}: Props) => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center gap-6 bg-gradient-to-t from-[#5E5AEC] to-[#3F9EFC] rounded-[16px] px-6 py-4 shadow-md z-10">
      <Img
        src={avatar}
        imgContainer="h-[100px] w-[100px] rounded-full pointer-events-none shrink-0"
        imgStyle="rounded-full object-cover"
      />
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <h3 className="text-[22px] text-center text-white-main font-semibold">
          {name}
        </h3>
        <p className="text-lg text-center text-white-off font-medium">{role}</p>
        {/* <p className="text-base text-white-main font-normal text-center">
          Lorem ipsum, dolor sit amet consectetur adipsdasad.
        </p> */}
      </div>
      <Link
        href={linkedin}
        className="h-[42px] w-[130px] flex items-center justify-center shrink-0 text-black-secondary text-base font-medium bg-white-main shadow-lg rounded-[50px]"
      >
        Contact me
      </Link>
      <div className="w-full flex items-center justify-center gap-6">
        {/* <span className="h-[36px] w-[36px] flex items-center justify-center bg-gradient-to-br from-[#5E5AEC] to-[#3F9EFC] rounded-full shadow-lg cursor-pointer">
          <BsTwitter className="text-white-main h-[20px] w-[20px]" />
        </span>
        <span className="h-[36px] w-[36px] flex items-center justify-center bg-gradient-to-br from-[#5E5AEC] to-[#3F9EFC] rounded-full shadow-lg cursor-pointer">
          <BsGithub className="text-white-main h-[20px] w-[20px]" />
        </span> */}
        <Link
          href={linkedin}
          className="h-[36px] w-[36px] flex items-center justify-center bg-gradient-to-br from-[#5E5AEC] to-[#3F9EFC] rounded-full shadow-lg cursor-pointer"
        >
          <FaLinkedinIn className="text-white-main h-[20px] w-[20px]" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
