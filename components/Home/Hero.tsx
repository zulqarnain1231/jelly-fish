import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import OutlinedButton from "../Shared/Buttons/OutlinedButton";
import FilledButton from "../Shared/Buttons/FilledButton";
import { FaRegComments } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:py-16 py-10 lg:min-h-[calc(100vh-80px)] bg-[#DFE7FB]">
      <div className="w-full h-full">
        <div className="lg:w-[60%] w-full h-full flex flex-col lg:items-start items-center justify-center gap-12">
          <h1 className="md:text-7xl text-5xl text-brand-secondary font-semibold lg:text-left text-center">
            Connecting the world to Future
          </h1>
          <p className="text-[18px] leading-6 font-medium lg:text-left text-center">
            Jellyfish is the industry-standard Web3 services platform connecting
            the people, businesses, and data of today with the Web3 world of
            tomorrow.
          </p>
          <div className="w-full flex sm:flex-row flex-col items-center lg:justify-start justify-center gap-8">
            <FilledButton
              style="h-[56px] w-[200px]"
              text="Develop With Jellyfish"
            />
            <OutlinedButton
              text="Explore Solutions"
              style="h-[56px] w-[200px]"
            />
          </div>
          <div className="w-full flex items-center lg:justify-start justify-center gap-2">
            <FaRegComments className="text-brand-secondary h-[20px] w-[20px] cursor-pointer" />
            <p className="text-black-main font-medium text-[14px]">
              Questions?
            </p>
            <Link
              className="text-black-main font-medium text-[14px] hover:text-brand-secondary hover:duration-200"
              href={"#contactUS"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
