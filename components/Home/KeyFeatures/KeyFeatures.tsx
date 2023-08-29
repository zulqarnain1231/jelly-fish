"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FeaturesCard from "./FeaturesCard";
import { GrGoogleWallet } from "react-icons/gr";
import { HiMiniWallet } from "react-icons/hi2";
import { PiPlugsConnectedBold } from "react-icons/pi";

const KeyFeatures = () => {
  const keyFeaturesData = [
    {
      title: "Web3 Wallet Addresses",
      detail:
        " Instead of using traditional mobile numbers, users adopt web3 wallet addresses as their public identifiers. This shift enhances security, reduces the risk of SIM swapping attacks, and grants users complete ownership of their telecommunication.",
      icon: (
        <GrGoogleWallet className="h-[34px] w-[34px] text-brand-secondary shrink-0" />
      ),
    },
    {
      title: "Decentralized Identifiers (DIDs)",
      detail:
        " Jellyfish Mobile employs DIDs to facilitate secure and self-sovereign identity management. Users have full control over their digital identities and personal data.",
      icon: (
        <GrGoogleWallet className="h-[34px] w-[34px] text-brand-secondary shrink-0" />
      ),
    },
    {
      title: "Self-Custody Cold Wallet",
      detail:
        " The MVNO's embedded self-custody cold wallet allows users to manage their digital assets directly from the SIM without the need for an internet connection. This ensures enhanced security and autonomy over cryptocurrency transactions.",
      icon: (
        <HiMiniWallet className="h-[34px] w-[34px] text-brand-secondary shrink-0" />
      ),
    },
    {
      title: "Connectivity to Web3 Services",
      detail:
        " Jellyfish Mobile provides access to a wide range of first and second-layer blockchain platforms, enabling users to engage with decentralized finance (DeFi) applications, decentralized social networks, and other DApps from their mobile devices.",
      icon: (
        <PiPlugsConnectedBold className="h-[36px] w-[36px] text-brand-secondary shrink-0" />
      ),
    },
  ];
  return (
    <div className="md:h-[450px] h-[420px] max-w-full w-full md:px-6 px-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
        className="w-full h-full"
      >
        {keyFeaturesData.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <FeaturesCard
                title={item.title}
                detail={item.detail}
                icon={item.icon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default KeyFeatures;
