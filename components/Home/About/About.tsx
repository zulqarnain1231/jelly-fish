import React from "react";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import Wrapper from "@/components/Shared/Wrapper";
import KeyPoint from "./KeyPoint";
import Data from "../../../constants/Json/Data.json";
import Img from "@/components/Shared/Image/Img";
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
        <div className="w-full lg:grid flex flex-col-reverse lg:grid-cols-3 lg:gap-6 gap-10">
          <aside className="md:col-span-2 w-full flex flex-col items-start justify-start gap-5">
            {about.map((item: any, index: number) => {
              return (
                <KeyPoint key={index} text={item.text} title={item.title} />
              );
            })}
          </aside>
          <aside className="w-full h-full flex items-center justify-center">
            <Img
              src="/Assets/10.png"
              imgContainer="lg:w-full w-[300px] md:w-[350px] md:h-[350px] lg:h-full h-[300px] pointer-events-none "
              imgStyle="object-fill rounded-oval pointer-events-none"
            />
          </aside>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
