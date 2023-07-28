"use client";
import React from "react";

interface Props {
  text: string;
  type?: "button" | "submit";
  style?: string;
  event?: any;
}
const OutlinedButton: React.FC<Props> = ({
  text,
  type = "button",
  style = "h-[46px] w-[140px]",
  event = () => {},
}) => {
  return (
    <button
      type={type}
      onClick={event}
      className={`flex items-center justify-center bg-transparent border-[2px] border-brand-primary hover:bg-gray-200/30 hover:border-black-main hover:text-black-main hover:duration-200 text-brand-primary text-[16px] font-semibold shadow-main rounded-[6px] ${style}`}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
