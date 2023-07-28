import React from "react";

interface Props {
  text: string;
}
const SectionHeading: React.FC<Props> = ({ text }: Props) => {
  return (
    <h2 className="text-black-secondary md:text-[40px] md:leading-[46px] text-3xl text-center font-semibold">
      {text}
    </h2>
  );
};

export default SectionHeading;
