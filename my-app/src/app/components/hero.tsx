import React from "react"
import Image from "next/image";
import Icon from "@/app/assets/Icon.png"

const Hero = () => {
  return (
    <>
      <div className="w-[1920px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[#043873] text-white flex items-center">
        <div className="w-[656px] h-[361px] gap-[60px]">
          <div className="w-[656px] h-[238px] gap-[24px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] text-white tracking-[-2%] mb-6">
              Get More Done with whitepace
            </h2>
            <p className="font-normal text-lg leading-[30px] text-white tracking-[-2%] pr-[40px]">
              
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className="w-[219px] h-[63px] rounded-lg bg-[#4F9CF9] gap-[10px] p-5 font-normal flex flex-row items-center mt-[60px]">
            
              Try Whitepace free <span><Image src={Icon} alt= "icon">
                </Image></span>
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD] flex flex-col justify-items-center "></div>
      </div>
    </>
  );
};

export default Hero;
