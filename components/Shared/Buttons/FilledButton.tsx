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
      className={`flex items-center justify-center bg-brand-primary text-white-main text-[16px] font-semibold rounded-[6px] ${style} filledButton filledButton-animated relative`}
    >
      {text}
    </button>
  );
};

export default FilledButton;
