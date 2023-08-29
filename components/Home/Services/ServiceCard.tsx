import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  description: string;
  background: string;
}
const ServiceCard: React.FC<Props> = ({
  title,
  icon,
  description,
  background,
}: Props) => {
  return (
    <div
      className={`w-full h-[350px] flex flex-col items-start justify-start gap-8 border-[2px] cursor-pointer rounded-[16px] p-6 shadow-sm ${background}`}
    >
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white-off border cursor-pointer shrink-0">
        {icon}
      </div>
      <p className="text-white-main text-base font-bold">{title}</p>
      <p className="text-white-main/70 text-base font-normal">{description}</p>
    </div>
  );
};

export default ServiceCard;
