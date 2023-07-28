import React from "react";
import { BiNetworkChart } from "react-icons/bi";

interface Props {
  title: string;
  icon: React.ReactNode;
  description: string;
}
const ServiceCard: React.FC<Props> = ({ title, icon, description }: Props) => {
  return (
    <div className="w-full h-[400px] flex flex-col items-start justify-start gap-8 border-[2px] border-white-off hover:border-brand-secondary hover:duration-500 cursor-pointer rounded-[8px] p-6">
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white-off border cursor-pointer shrink-0">
        {icon}
      </div>
      <p className="text-black-secondary text-base font-bold">{title}</p>
      <p className="text-black-main/50 text-base font-medium">{description}</p>
    </div>
  );
};

export default ServiceCard;
