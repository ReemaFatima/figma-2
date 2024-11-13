import Image from "next/image";
import React from "react";
import Icon from "@/app/assets/Icon.png"

const Extension = () => {
  return (
    <>
    
      <div className="w-[1920px] top-[2509px] px-[220px] py-[140px] bg-[#043873] text-white flex items-center justify-between gap-[98px]">
        <div className="w-[697px] h-[294px] ">

 
            <h1 className="w-[697px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02px] ">Use as Extension</h1>
            <p className="w-[697px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02px] ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
            <button className="w-[171px] h-[63px] rounded-md px-10 py-5 bg-[#4F9Cf9] gap-[10px] mt-8 justify-center items-center flex flex-row">Let's Go 
              <span><Image src={Icon} alt="Icon"></Image></span>
            </button>
            
        </div>
            <div className="w-[686px] h-[479px] bg-[#C4DEFD] "></div>
        
      </div>
    </>
  );
};

export default Extension;

