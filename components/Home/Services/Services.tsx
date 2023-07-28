import Wrapper from "@/components/Shared/Wrapper";
import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { SlLock } from "react-icons/sl";
import { RiFolderSettingsLine } from "react-icons/ri";
import ServiceCard from "./ServiceCard";
import OutlinedButton from "@/components/Shared/Buttons/OutlinedButton";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";

const Services = () => {
  const services = [
    {
      title: "Protection",
      icon: <SlLock className="h-[28px] w-[28px] text-brand-secondary" />,
      description: "Personal, sensitive user data is protected at all times.",
    },
    {
      title: "Transparency",
      icon: (
        <FaCircleHalfStroke className="h-[24px] w-[24px] text-brand-secondary" />
      ),
      description:
        "The public chain over proof of stake allows users to see transparently when and from whom their personal data was requested from the non-public side chain",
    },
    {
      title: "Verified",
      icon: (
        <BsFillPersonCheckFill className="h-[28px] w-[28px] text-brand-secondary" />
      ),
      description:
        "Institutions can be tagged as verified and will only have access to the just the specific personal data they need not more.",
    },
    {
      title: "Control",
      icon: (
        <RiFolderSettingsLine className="h-[28px] w-[28px] text-brand-secondary" />
      ),
      description:
        "Users have complete sovereignty over their data. Institutions can be verified to access information but the access is only granted if the user has approved the data as read-only. This enables unprecedented levels of control over own data.",
    },
  ];
  return (
    <Wrapper style="md:py-16 py-10">
      <div className="w-full h-full flex flex-col items-center justify-start gap-16">
        <SectionHeading text="Peer To Peer Exchange" />
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-8 md:gap-6">
          {services.map((item: any, index: number) => {
            return (
              <ServiceCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
        <OutlinedButton
          text="Deploy your Jellyfish smart contract"
          style="h-[56px] w-[320px]"
        />
      </div>
    </Wrapper>
  );
};

export default Services;
