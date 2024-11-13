import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/Icon.png";
const Customize = () => {
  return (
    <>
      <div className="w-[1921px] h-[812.09px] top-[3268px] px-[220px] py-[140px] gap-[98px] flex flex-row">
        <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>
        <div className="w-[669px] h-[411px] text-[#212529]">
          <h1 className="w-[669px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[0.02em]">
            Customise it to your needs
          </h1>
          <p className="w-[669px] h-[90px] font-normal text-lg leading-[30px] tracking-[0.02em] mt-5 ">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button className="w-[171px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] font-medium text-lg leading-[23px] mt-10 tracking[0.02em] text-[#FFFFFF]  flex flex-row justify-center items-center gap-[10px]">
            Let's Go{" "}
            <span>
              <Image src={Icon} alt="icon"></Image>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Customize;
