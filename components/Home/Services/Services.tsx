"use client";
import Wrapper from "@/components/Shared/Wrapper";
import React from "react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaCircleHalfStroke,
  FaRegHandshake,
  FaWallet,
  FaSimCard,
} from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";
import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md";

const Services = () => {
  const services = [
    {
      title: "Cold Wallet Isolation",
      icon: <FaWallet className="h-[28px] w-[28px] text-brand-secondary" />,
      background: "bg-[#F25022]",
      description:
        "Safeguard your funds by isolating the cold wallet from your phone's operating system.",
    },
    {
      title: "Secure Boot Process",
      icon: (
        <MdOutlineSecurity className="h-[24px] w-[24px] text-brand-secondary" />
      ),
      background: "bg-[#7FBA00]",
      description:
        "Ensure the integrity of the software running on your device, preventing unauthorized modifications.",
    },
    {
      title: "Remote Management (OTA)",
      icon: (
        <RiRemoteControlLine className="h-[28px] w-[28px] text-brand-secondary" />
      ),
      background: "bg-[#00A4EF]",
      description:
        "Receive security patches and policy enforcement updates remotely for optimal protection.",
    },
    {
      title: "RSA & ECC:",
      icon: (
        <FaRegHandshake className="h-[28px] w-[28px] text-brand-secondary" />
      ),
      background: "bg-[#FFB900]",
      description:
        "Enjoy secure digital signatures and a robust handshake between your mobile device and the network.",
    },
    {
      title: "AES128 Encryption",
      icon: (
        <MdOutlineNoEncryptionGmailerrorred className="h-[28px] w-[28px] text-brand-secondary" />
      ),
      background: "bg-[#F25022]",
      description:
        "Your data is protected with state-of-the-art encryption technology.",
    },
    {
      title: "SIM Swap Prevention",
      icon: <FaSimCard className="h-[28px] w-[28px] text-brand-secondary" />,
      background: "bg-[#7FBA00]",
      description:
        "Your SIM can only be recovered through seed keys generated upon SIM activation.",
    },
    {
      title: "Cold Wallet Address Obfuscation",
      icon: <FaWallet className="h-[28px] w-[28px] text-brand-secondary" />,
      background: "bg-[#00A4EF]",
      description:
        "Enhance your privacy with obfuscated cold wallet addresses.",
    },
  ];
  return (
    <Wrapper style="md:py-16 py-10 overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-start gap-16">
        <SectionHeading text="Our Core Features" />
        <div className="w-full h-[450px] max-w-full md:px-6 px-4">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1124: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Mousewheel, Autoplay]}
            className="w-full h-full"
          >
            {services.map((item: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <ServiceCard
                    key={index}
                    background={item.background}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <a
          href="/"
          className={`h-[56px] w-[320px] flex items-center justify-center  text-brand-primary text-[16px] font-semibold rounded-[6px] relative outlinedButton`}
          download={"/Pdfs/WhitePaper.pdf"}
        >
          Download Our Whitepaper
        </a>
      </div>
    </Wrapper>
  );
};

export default Services;
