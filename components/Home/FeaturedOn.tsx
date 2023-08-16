import React from "react";
import Link from "next/link";
import Wrapper from "../Shared/Wrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import Img from "../Shared/Image/Img";
import Data from "../../constants/Json/Data.json";

const FeaturedOn = () => {
  const { featuredOn } = Data;
  return (
    <Wrapper style="lg:py-16 py-10 bg-[#00005C]/90 relative">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading text="Featured On" style="text-white-main" />
        <div className="w-full grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          {featuredOn.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href={item.route}
                className="w-full h-[80px] flex items-center justify-center z-10"
              >
                <Img
                  src={item.image}
                  imgContainer="h-full w-[250px]"
                  imgStyle=" object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedOn;
