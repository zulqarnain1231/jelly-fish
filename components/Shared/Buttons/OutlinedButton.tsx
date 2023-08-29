"use client";
import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  route?: string;
  style?: string;
  event?: any;
}
const OutlinedButton: React.FC<Props> = ({
  text,
  route = "/",
  style = "h-[46px] w-[140px] shadow-main",
  event = () => {},
}) => {
  return (
    <Link
      href={route}
      onClick={event}
      className={`flex items-center justify-center  text-brand-primary text-[16px] font-semibold rounded-[6px] relative ${style} outlinedButton`}
    >
      {text}
    </Link>
  );
};

export default OutlinedButton;
