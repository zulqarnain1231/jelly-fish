"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ComponentWrapper from "./Wrappers/ComponentWrapper";
import Data from "../../constants/Json/Data.json";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Navigation = () => {
  const { menu } = Data;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <ComponentWrapper style="h-[70px] bg-white-main">
      <nav className="w-full h-full flex items-center justify-between">
        {" "}
        <Link href={"/"} className="h-[50px] w-[150px] relative">
          <Image src={"/jelly-fish-mix-dark.png"} alt="" fill />
        </Link>
        <div className="lg:flex hidden items-center justify-start gap-8">
          {menu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href={item.route}
                className="font-[500] text-black-main text-[16px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full hover:after:duration-200"
              >
                {item.name}
              </Link>
            );
          })}

          <button className="h-[46px] w-[140px] flex items-center justify-center border-[2px] border-brand-primary hover:bg-gray-200/30 hover:duration-200 text-brand-primary text-[16px] font-semibold shadow-main rounded-[6px]">
            Start building
          </button>
        </div>
        <RiMenu3Line
          onClick={toggleDrawer}
          className="lg:hidden inline-block h-[24px] w-[24px] text-black-main"
        />
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          width: "100%",
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center gap-8 relative">
          {menu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href={item.route}
                className="font-[500] text-black-main text-[16px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full hover:after:duration-200"
              >
                {item.name}
              </Link>
            );
          })}

          <button className="h-[46px] w-[140px] flex items-center justify-center border-[2px] border-brand-primary hover:bg-gray-200/30 hover:duration-200 text-brand-primary text-[16px] font-semibold shadow-main rounded-[6px]">
            Start building
          </button>
          <div className="h-[34px] w-[34px] flex items-center justify-center bg-red-500 rounded-full absolute top-4 right-4">
            <MdOutlineClose
              onClick={toggleDrawer}
              className="h-[20px] w-[20px] text-white-main  cursor-pointer"
            />
          </div>
        </div>
      </Drawer>
    </ComponentWrapper>
  );
};

export default Navigation;
