import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import Wrapper from "@/components/Shared/Wrapper";
import React from "react";
import TimeLine from "./TimeLine";

const RoadMap = () => {
  return (
    <Wrapper id="roadmap" style="lg:py-36 py-10 bg-white-off roadMap">
      <div className="w-full h-full flex flex-col items-center justify-start gap-16">
        <SectionHeading text="RoadMap" />
        <TimeLine />
      </div>
    </Wrapper>
  );
};

export default RoadMap;
