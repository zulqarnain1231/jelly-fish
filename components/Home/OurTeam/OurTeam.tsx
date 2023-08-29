"use client";
import React from "react";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProfileCard from "./ProfileCard";
import Data from "../../../constants/Json/Data.json";

const OurTeam = () => {
  const { team, advisory } = Data;
  return (
    <section
      id="ourTeam"
      className="w-full flex flex-col items-center justify-start gap-16 lg:py-16 py-10 relative"
    >
      <SectionHeading text="Our Team" />
      <div className="h-[470px] max-w-full w-full md:px-6 px-4">
        <Swiper
          navigation
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
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Navigation, Autoplay]}
          className="w-full h-full"
        >
          {team.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <ProfileCard
                  name={item.name}
                  role={item.role}
                  linkedin={item.linkedin}
                  avatar={item.avatar}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <SectionHeading text="Advisory (Telco/Fintech/Legal)" />
      <div className="h-[470px] max-w-full w-full md:px-6 px-4">
        <Swiper
          navigation
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
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Navigation, Autoplay]}
          className="w-full h-full"
        >
          {advisory.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <ProfileCard
                  name={item.name}
                  role={item.role}
                  linkedin={item.linkedin}
                  avatar={item.avatar}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* bottom Gradients */}
      <span className="absolute bottom-[30%] left-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-[#00CCFF] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute bottom-[40%] left-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-brand-secondary rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      {/* top gradient */}
      <span className="absolute top-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-[#690D89] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute top-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-brand-secondary shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      {/* bottom  most gradient */}
      <span className="absolute bottom-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-[#690D89] shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute bottom-[5%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-40 bg-brand-secondary shadow-lg rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
    </section>
  );
};

export default OurTeam;
