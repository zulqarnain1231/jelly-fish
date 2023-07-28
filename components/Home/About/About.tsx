import React from "react";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import Wrapper from "@/components/Shared/Wrapper";
import KeyPoint from "./KeyPoint";
import Data from "../../../constants/Json/Data.json";
const About = () => {
  const { about } = Data;
  return (
    <Wrapper id="about" style="lg:py:16 py-10">
      <div className="w-full h-full flex flex-col items-center justify-start gap-16">
        <SectionHeading
          text="Jellyfish Mobile,
                 Connecting You To The
                  Future!"
        />
        <div className="w-full gap-10">
          <div className="w-full md:w-[70%] mx-auto flex flex-col items-start justify-start gap-8">
            {about.map((item: string, index: number) => {
              return <KeyPoint key={index} text={item} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
