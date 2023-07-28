"use client";
import React from "react";

interface Props {
  text: string;
  type?: "button" | "submit";
  style?: string;
  event?: any;
}
const FilledButton: React.FC<Props> = ({
  text,
  type = "button",
  style = "h-[46px] w-[140px]",
  event = () => {},
}) => {
  return (
    <button
      type={type}
      onClick={event}
      className={`flex items-center justify-center bg-brand-primary border-[2px] border-brand-primary hover:border-brand-secondary text-white-main text-[16px] font-semibold shadow-main rounded-[6px] ${style} filledButton`}
    >
      {text}
    </button>
  );
};

export default FilledButton;
