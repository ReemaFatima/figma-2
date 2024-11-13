import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import btm from "@/app/assets/btm.png";

const Footer = () => {
  return (
    <>
      <div className="w-[1920px] h-[461px] top-[5195px] px-[220px] pt-[140px] pb-[32px] bg-[#043873] ">
        <div className="w-[1480px] h-[289px] gap-[100px] flex flex-col">
          <div className="w-[1480px] h-[169px] flex flex-row justify-between gap-[100px]">
            <div className="w-[285px] h-[169px] gap-[15px] flex flex-col">
              <Image
                src={Logo}
                alt="logo"
                className="w-[191px] h-[34px]"
              ></Image>
              <p className="w-[240px] h-[120px] font-normal text-lg leading-[30px] trcking-[0.02em] pr-[20px] text-[#F7F7EE]">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <div className="w-[295px] h-[127px] gap-[15px] text-[#FFFFFF] flex flex-col">
              <h2 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[0.02em]">
                Product
              </h2>
              <p className="w-[70px] h-[20px]  font-normal text-base leading-[20px] tracking-[0.02em] text-[#FFE492]">
                Overview
              </p>
              <p className="w-[50px] h-[20px] font-normal text-base leading-[20px] tracking-[0.02em]">
                Pricing
              </p>
              <p className="w-[177px] h-[20px] font-normal text-base leading-[20px] tracking-[0.02em] text-[#FFFFFF]">
                Customer stories
              </p>
            </div>
            <div className="w-[295px] h-[130px] gap-[16px] text-[#FFFFFF] flex flex-col">
              <p className="font-bold text-lg leading-[21.78px] tracking-[0.02em]">
                Resources
              </p>
              <p className="w-[33px] h-[20px] font-normal text-base leading-[20px] tracking-[0.02em]">
                Blog
              </p>
              <p className="w-[128px] h-[20px] font-normal text-base leading-[20px] ">
                Guides & tutorials
              </p>
              <p className="w-[130px] h-[20px] font-normal text-base leading-[20px] tracking-[0.02em]">
                Help center
              </p>
            </div>
            <div className="w-[295px] h-[130px] gap-[16px] text-[#FFFFFF] flex flex-col">
              <p className="w-[83px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[0.02em]">
                Company
              </p>
              <p className="w-[70px] h-[20px] font-normal text-base leading-[20px]">
                About us
              </p>
              <p className="w-[62px] h-[20px] font-normal text-base leading-[20px] tracking-[0.02em]">
                Careers
              </p>
              <p className="w-[99px] h-[20px] font-normal leading-[20px] tracking-[0.02em]  ">
                Media kit
              </p>
            </div>
          </div>
          <div className="w-[1480px] h-[20px] flex flex-row justify-center">
            <Image
              src={btm}
              alt="btm"
              className=" font-normal text-base leading-[20px]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
