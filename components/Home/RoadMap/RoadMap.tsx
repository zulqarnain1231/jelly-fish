import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import Wrapper from "@/components/Shared/Wrapper";
import React from "react";
import TimeLine from "./TimeLine";

const RoadMap = () => {
  return (
    <Wrapper id="roadmap" style="lg:py-36 py-10 bg-white-off roadMap relative">
      <div className="w-full h-full flex flex-col items-center justify-start gap-16">
        <SectionHeading text="RoadMap" />
        <TimeLine />
      </div>
      {/* bottom Gradients */}
      <span className="absolute lg:bottom-[10%] bottom-[2%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-20 bg-[#690D89] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute lg:bottom-[10%] bottom-[2%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-20 bg-brand-secondary shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      {/* top gradient */}
      <span className="absolute lg:top-[10%] top-[2%] lg:left-[5%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-20 bg-[#00CCFF] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute lg:top-[10%] top-[2%] lg:left-[5%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-20 bg-brand-secondary shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
    </Wrapper>
  );
};

export default RoadMap;
