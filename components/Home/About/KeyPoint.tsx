import React from "react";
import { BsArrowRight } from "react-icons/bs";
interface Props {
  text: string;
}

const KeyPoint: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className="w-full flex items-start  justify-start gap-4">
      <BsArrowRight className="h-[20px] w-[20px] text-brand-secondary shrink-0" />
      <p className="text-base text-black-main font-normal">{text}</p>
    </div>
  );
};

export default KeyPoint;
