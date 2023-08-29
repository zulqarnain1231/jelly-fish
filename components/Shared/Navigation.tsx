"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Data from "../../constants/Json/Data.json";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import OutlinedButton from "./Buttons/OutlinedButton";
import Img from "./Image/Img";
import { Link as Scrolling } from "react-scroll";

const Navigation = () => {
  const { menu } = Data;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <Wrapper
      style={`h-[60px] bg-white-main shadow-sm z-20 sticky top-0 ${
        Show && "md:-top-[60px]"
      } transition-all duration-1000`}
    >
      <nav className="w-full h-full flex items-center justify-between">
        {" "}
        <Link href={"/"} className="h-[46px] w-[180px]">
          <Img imgContainer="h-full w-full" src={"/jelly-fish-mix-dark.png"} />
        </Link>
        <div className="lg:flex hidden items-center justify-start gap-8">
          {menu.map((item: any, index: number) => {
            return (
              <Scrolling
                key={index}
                activeClass="active"
                to={item.route}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                className="font-semibold text-black-main text-[14px] cursor-pointer relative underlineEffect"
              >
                {item.name}
              </Scrolling>
            );
          })}
        </div>
        <OutlinedButton
          text="IEO"
          route="https://p2pb2b.com/token-sale/JFISH-572/"
          style="h-[38px] w-[120px] md:flex hidden"
        />
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
              <Scrolling
                key={index}
                activeClass="active"
                to={item.route}
                onClick={toggleDrawer}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                className="font-[500] text-black-main text-[14px] cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full hover:after:duration-200"
              >
                {item.name}
              </Scrolling>
            );
          })}

          <OutlinedButton
            text="IEO"
            event={toggleDrawer}
            route="https://p2pb2b.com/token-sale/JFISH-572/"
          />
          <div className="h-[34px] w-[34px] flex items-center justify-center bg-red-500 rounded-full absolute top-4 right-4">
            <MdOutlineClose
              onClick={toggleDrawer}
              className="h-[20px] w-[20px] text-white-main  cursor-pointer"
            />
          </div>
        </div>
      </Drawer>
    </Wrapper>
  );
};

export default Navigation;
