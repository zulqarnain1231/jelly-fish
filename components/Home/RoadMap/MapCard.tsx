import React from "react";
import { BsArrowRight } from "react-icons/bs";
interface Props {
  title: string;
  details: Array<string>;
  styles?: string;
}
const MapCard: React.FC<Props> = ({
  title,
  details,
  styles = "md:h-[320px] sm:h-[360px]  h-[460px]",
}: Props) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start gap-4 md:px-6 md:py-4 p-4 bg-gradient-to-b from-[#5E5AEC] to-[#3F9EFC] rounded-[16px] cursor-pointer shadow-cards z-10 ${styles}`}
    >
      <p className="text-white-main text-[20px] leading-7 font-bold">{title}</p>
      <div className="w-full flex flex-col items-start justify-start gap-3">
        {details.map((item: string, index: number) => {
          return (
            <div
              key={index}
              className="w-full flex items-start justify-start gap-2"
            >
              <BsArrowRight className="h-[20px] w-[20px] text-white-main shrink-0" />
              <p className="text-base text-white-main text-left font-normal">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapCard;
