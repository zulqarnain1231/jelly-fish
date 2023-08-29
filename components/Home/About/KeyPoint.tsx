import React from "react";
import { BsArrowRight } from "react-icons/bs";
interface Props {
  text: string;
  title: string;
}

const KeyPoint: React.FC<Props> = ({ text, title }: Props) => {
  return (
    <div className="w-full flex flex-col items-start  justify-start gap-2">
      <p className="text-lg text-black-main font-semibold">{title}</p>
      <p className="text-base text-black-main font-normal">{text}</p>
    </div>
  );
};

export default KeyPoint;
