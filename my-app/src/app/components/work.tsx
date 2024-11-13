import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/Icon.png"
const Work = () => {
  return (
    <>
      <div className="w-[1921px] h-[574px] top-[4080px] px-[220px] py-[140px] left-[1px] bg-[#043873] text-white">
        <div className="w-[1481px] h-[294px] flex flex-col justify-center items-center">
          <h1 className="w-[1064px] h-[87px] font-medium text-7xl leading-[87.14px] tracking-[0.02em] text-center">
            Your work, everywhere you are
          </h1>
          <p className="w-[1064px] h-[60px] font-[400px]  text-lg leading-[30px] tracking-[0.02em] justify-center text-center mt-6">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="w-[195px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] font-medium text-lg leading-[23px] tracking-[0.02em] flex flex-row justify-center items-center gap-[10px] mt-10">
            Try Taskey
            <span><Image src={Icon} alt="icon"></Image></span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Work;
