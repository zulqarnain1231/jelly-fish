"use client";
import React from "react";
import Wrapper from "../Shared/Wrapper";
import OutlinedButton from "../Shared/Buttons/OutlinedButton";
import FilledButton from "../Shared/Buttons/FilledButton";
import { FaRegComments } from "react-icons/fa";
import Link from "next/link";
import Ztext from "react-ztext";

const Hero = () => {
  return (
    <Wrapper style="flex flex-col items-center justify-center lg:py-16 py-10 md:min-h-[calc(100vh-80px)] bg-[url('/Assets/4.png')] bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black-main/70"></div>
      <div className="w-full h-full z-10">
        <div className="lg:w-[70%] mx-auto w-full flex flex-col  items-center justify-center gap-8 z-10">
          <Ztext
            depth=".5rem"
            direction="both"
            event="pointer"
            eventRotation="30deg"
            eventDirection="default"
            fade={false}
            layers={10}
            perspective="500px"
          >
            <h1 className="md:text-7xl text-5xl text-brand-primary font-semibold text-center drop-shadow-text z-10">
              Connecting the world to Web3
            </h1>
          </Ztext>

          <p className="sm:text-[24px] text-[18px] text-white-main leading-6 sm:leading-8 font-medium text-center z-10">
            Jellyfish is the industry-standard Web3 services platform connecting
            the people, businesses, and data of today with the Web3 world of
            tomorrow.
          </p>
          <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-8 z-10">
            <FilledButton
              style="h-[56px] w-[200px]"
              text="Develop With Jellyfish"
            />
            <OutlinedButton
              text="Explore Solutions"
              style="h-[56px] w-[200px]"
            />
          </div>
          <div className="w-full flex items-center justify-center gap-2 z-10">
            <FaRegComments className="text-brand-secondary h-[20px] w-[20px] cursor-pointer" />
            <p className="text-white-main font-medium text-[14px]">
              Questions?
            </p>
            <Link
              className="text-white-main font-medium text-[14px] hover:text-brand-secondary hover:duration-200"
              href={"#contactUS"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
