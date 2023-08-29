"use client";
import React, { useEffect, useState, useRef } from "react";
import Wrapper from "../../Shared/Wrapper";
import Timer from "./Timer";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full lg:py-16 py-10 sm:min-h-[calc(100vh-60px)] min-h-[500px] relative overflow-hidden"
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black-main/50 z-10"></div>
      <div className="absolute h-full w-full top-0 left-0">
        <video
          className="w-full h-full object-cover object-center"
          src="/Hero-main.mp4"
          autoPlay
          muted
          height={"100%"}
          width={"100%"}
          controls={false}
          loop
        ></video>
      </div>
      <Wrapper style="h-full flex flex-col items-center justify-center absolute w-full top-0 left-0">
        <div className="w-full h-full flex flex-col items-center justify-center z-10">
          <div className="lg:w-[80%] mx-auto w-full h-full flex flex-col  items-center justify-center gap-8 z-10">
            <h1 className="md:text-7xl sm:text-5xl text-4xl text-white-main font-semibold text-center drop-shadow-text z-10">
              The First 5G Web3 Enabled Mobile Network
            </h1>

            <p className="sm:text-[20px] text-[18px] text-white-main leading-6 sm:leading-8 font-medium text-center z-10">
              Jellyfish is the industry-standard Web3 services platform
              connecting the people, businesses, and data of today with the Web3
              world of tomorrow.
            </p>

            {/* timer here */}
            <Timer />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
