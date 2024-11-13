import Image from "next/image";
import React from "react";
import Sponsors from "@/app/assets/Sponsors.png";

const Sponsers = () => {
  return (
    <>
      <div className="w-[1922px] h-[538px] top-[465px] px-[220px] py-[140px] gap-[100px] justify-center items-center">
        <div className="w-[1482px] h-[87px] ">
          <h1 className="font-bold text-7xl leading-[87.14px] tracking-[0.02em] text-center justify-center text-[#212529]">
            Our sponsors
          </h1>
        </div>
        <div className="w-[1482px] h-[71px] ">
          <Image src={Sponsors} alt="sponsors" className="w-[1428px] h-[71px] mt-12"></Image>
        </div>
      </div>
    </>
  );
};
export default Sponsers;
