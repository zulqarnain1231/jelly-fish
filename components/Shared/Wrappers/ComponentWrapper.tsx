import React from "react";
interface Props {
  children: React.ReactNode;
  style?: string;
}
const ComponentWrapper: React.FC<Props> = ({ children, style }) => {
  return (
    <section className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1320px] mx-auto md:px-8 px-4">
        {children}
      </div>
    </section>
  );
};

export default ComponentWrapper;
