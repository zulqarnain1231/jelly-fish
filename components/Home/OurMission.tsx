"use client";
import React from "react";
import Wrapper from "../Shared/Wrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
const OurMission = () => {
  return (
    <section
      id="mission"
      className="w-full h-full flex flex-col items-center justify-start gap-16 lg:pb-16 pb-10 overflow-hidden"
    >
      <Wrapper>
        <div className="w-full flex flex-col items-center justify-start gap-16">
          <SectionHeading text="Our Mission" />
          <p className="sm:text-lg md:w-[80%] w-full text-center text-base text-black-secondary font-normal">
            Jellyfish Mobile is a groundbreaking mobile virtual network operator
            (MVNO) that fully integrates web3 technologies into the mobile
            communications landscape. By leveraging blockchain, decentralized
            applications (DApps), and self-custody cold wallets, Jellyfish
            Mobile offers users a secure, private, and user-centric mobile
            experience that goes beyond the capabilities of traditional telecom
            networks.
          </p>
        </div>
      </Wrapper>
      <KeyFeatures />
    </section>
  );
};

export default OurMission;
