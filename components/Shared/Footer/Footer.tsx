import React from "react";
import Wrapper from "../Wrapper";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoTelegram,
} from "react-icons/bi";

import { FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import Img from "../Image/Img";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Wrapper style="py-6 bg-black-off">
      <footer className="w-full flex flex-col items-center justify-start lg:gap-[60px] gap-10">
        <div className="w-full grid md:grid-cols-[.5fr,1fr,.7fr]  gap-8">
          <div className="w-full flex flex-col items-center justify-start gap-4">
            <Link href={"/"} className="h-[50px] w-[180px] relative">
              <Img
                src="/jelly-fish-mix-white.png"
                imgContainer="w-full h-full"
                imgStyle="object-fill"
              />
            </Link>

            <a
              href="/"
              download={"/Pdfs/PrivacyPolicy.pdf"}
              className="text-white-main text-[11px] text-center font-normal"
            >
              Privacy and Policy
            </a>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-white-main text-[11px] leading-5 text-center font-normal md:mt-4">
              Copyright ©️ {year} Jellyfish International Technologies Limited
              (CR-3306518) All rights reserved.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-4">
            <p className="text-white-main text-[13px] leading-5 font-semibold">
              Address
            </p>
            <p className="text-white-main text-center text-[11px] leading-5 font-normal">
              Room A1, 11/F Winner Building, 36 Man Yue Street, Hung Hom, 999077
              Kowloon, Hong Kong
            </p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
