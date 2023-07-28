import React from "react";
import { BsArrowRight } from "react-icons/bs";
interface Props {
  title: string;
  details: Array<string>;
}
const MapCard: React.FC<Props> = ({ title, details }: Props) => {
  return (
    <div className="w-full md:h-[320px] sm:h-[360px]  h-[460px] flex flex-col items-start justify-start gap-4 md:px-6 md:py-4 p-4 bg-white-main border-[2px] border-white-off hover:border-[2px] hover:border-brand-secondary hover:duration-500 rounded-[12px] cursor-pointer shadow-cards">
      <p className="text-black-secondary text-[20px] leading-7 font-bold">
        {title}
      </p>
      <div className="w-full flex flex-col items-start justify-start gap-3">
        {details.map((item: string, index: number) => {
          return (
            <div
              key={index}
              className="w-full flex items-start justify-start gap-2 hover:ml-2 hover:duration-300"
            >
              <BsArrowRight className="h-[20px] w-[20px] text-brand-secondary shrink-0" />
              <p className="text-base text-black-secondary text-left font-medium">
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
