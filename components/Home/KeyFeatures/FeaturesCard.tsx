import React from "react";

interface Props {
  title: string;
  detail: string;
  icon: React.ReactNode;
}

const FeaturesCard: React.FC<Props> = ({ title, detail, icon }: Props) => {
  return (
    <div className="w-full h-[350px] flex flex-col sm:items-start items-center justify-start gap-6 bg-white-secondary shadow-lg rounded-[16px] p-6">
      {icon}
      <h2 className="text-2xl text-black-secondary sm:text-left text-center font-bold">
        {title}
      </h2>
      <p className="text-base text-black-main sm:text-left text-center font-normal">
        {detail}
      </p>
    </div>
  );
};

export default FeaturesCard;
