import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import Wrapper from "@/components/Shared/Wrapper";
import React from "react";
import PieChart from "./PieChart";
import Img from "@/components/Shared/Image/Img";

const Tokenomics = () => {
  const chartData = [
    { name: "Pre-Seed Tokens", value: 4, color: "bg-[#706fd3]" },
    { name: "1st Air Drop Event", value: 3, color: "bg-[#474787]" },
    { name: "List of Token on 1st CEX", value: 25, color: "bg-[#f53b57]" },
    { name: "2nd Air Drop Event", value: 2, color: "bg-[#ff5e57]" },
    { name: "List of Token on 2nd CEX", value: 25, color: "bg-[#FEA47F]" },
    { name: "3rd Air Drop Event", value: 1, color: "bg-[#FD7272]" },
    { name: "List of Token on 2nd CEX", value: 25, color: "bg-[#EAB543]" },
    { name: "Developers Token Unlock", value: 15, color: "bg-[#fed330]" },
  ];

  return (
    <Wrapper id="tokenomics" style="lg:py-16 py-10 bg-[#00005C]/90">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <SectionHeading text="Tokenomics" style="text-white-main" />
        <Img
          imgContainer="md:h-[500px] h-[300px] w-full pointer-events-none"
          imgStyle="object-contain pointer-events-none"
          src="/Assets/tokenomics.png"
        />
        <SectionHeading text="Token Distribution" style="text-white-main" />
        {/* <SectionHeading text="Token Distribution" style="text-white-main" /> */}
        <div className="w-full grid md:grid-cols-2">
          <PieChart />
          <div className="w-full flex flex-col items-center justify-center gap-6">
            {chartData.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="w-full flex items-center justify-start md:gap-6 gap-4"
                >
                  <span
                    className={`h-[15px] w-[15px] rounded-full ${item.color}`}
                  />
                  <p className="sm:text-lg text-base text-white-main font-normal">
                    {item.value}%
                  </p>
                  <p className="sm:text-lg text-base text-white-main font-normal">
                    - {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tokenomics;
