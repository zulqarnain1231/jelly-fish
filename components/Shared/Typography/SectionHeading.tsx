import React from "react";

interface Props {
  text: string;
  style?: string;
}
const SectionHeading: React.FC<Props> = ({
  text,
  style = "text-black-secondary",
}: Props) => {
  return (
    <h2
      className={`text-black-secondary md:text-[46px] md:leading-[54px] text-3xl text-center font-semibold ${style}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
