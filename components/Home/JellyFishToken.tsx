import React from "react";
import Wrapper from "../Shared/Wrapper";
import Img from "../Shared/Image/Img";
import SectionHeading from "../Shared/Typography/SectionHeading";

const JellyFishToken = () => {
  return (
    <Wrapper style="lg:py-16 py-10 bg-white-secondary relative">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading text="Get set for the JFISH Launchpad on P2B" />
        <Img
          src="/Assets/Jellyfish.jpg"
          imgContainer="sm:h-[400px] h-[200px] w-full z-10"
          imgStyle="sm:object-contain"
        />
      </div>
    </Wrapper>
  );
};

export default JellyFishToken;
