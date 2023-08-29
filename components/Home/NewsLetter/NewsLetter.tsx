"use client";
import React from "react";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Data from "../../../constants/Json/Data.json";
const NewsLetter = () => {
  const { blogs } = Data;
  return (
    <section
      id="newsLetter"
      className="w-full flex flex-col items-center justify-start gap-16 lg:py-16 py-10"
    >
      <div className="w-full flex flex-col items-center justify-start gap-6">
        <SectionHeading text="News Letter" />
        <h3 className="text-xl text-black-secondary text-center font-semibold">
          {`Empower Yourself: Stay Informed with Our Newsletter's Valuable Insights`}
        </h3>
      </div>

      <div className="h-[570px] lg:h-[600px] xl:h-[570px] max-w-full w-full md:px-6 px-4">
        <Swiper
          navigation
          slidesPerView={3}
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
              slidesPerView: 3,
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
          {blogs.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <BlogCard
                  key={index}
                  title={item.title}
                  summary={item.summary}
                  picture={item.picture}
                  link={item.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsLetter;
