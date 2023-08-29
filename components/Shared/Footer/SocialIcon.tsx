import React from "react";

interface Props {
  icon: React.ReactNode;
  style?: string;
}

const SocialIcon: React.FC<Props> = ({
  icon,
  style = "h-[36px] w-[36px]",
}: Props) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-[#5E5AEC] to-[#3F9EFC] cursor-pointer hover:scale-105 hover:duration-300 ${style}`}
    >
      {icon}
    </div>
  );
};

export default SocialIcon;
