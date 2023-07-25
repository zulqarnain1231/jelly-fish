import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";

const Hero = () => {
  return (
    <ComponentWrapper style="py-10 lg:min-h-[calc(100vh-80px)] bg-[#DFE7FB]">
      <div className="w-full h-full bg flex items-center justify-start">
        <div className="lg:w-[60%] w-full h-full flex flex-col lg:items-start items-center justify-center gap-12">
          <h1 className="md:text-7xl text-5xl text-brand-secondary font-semibold lg:text-left text-center">
            Connecting the world to Web3
          </h1>
          <p className="text-[18px] leading-6 font-medium lg:text-left text-center">
            Jellyfish is the industry-standard Web3 services platform connecting
            the people, businesses, and data of today with the Web3 world of
            tomorrow.
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
