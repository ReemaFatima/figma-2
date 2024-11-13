import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/icon.png";
import Work from "@/app/assets/Work.png";

const Project = () => {
  return (
    <>
      <div className="px-[220px] py-[140px] bg-white">
        <div className="w-[1480px] h-[547px] flex flex-row justify-between gap-[60px]">
          <div className="py-[68px] flex flex-col">
            <h2 className="w-[672px] h-[174px] font-bold text-7xl leading-[87.14px] text-[#212529] tracking-[-0.02em]">
              Project Management
            </h2>
            <p className="w-[672px] h-[90px] text-lg font-normal leading-[30px] text-[18px] text-[#212529] pt-6 pr-[50px] tracking-[-0.02em]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="w-[201px] h-[63px] bg-[#4F9CF9] px-10 py-5 rounded-md mt-[60px] text-white font-medium text-lg flex flex-row justify-center items-center gap-[10px]">
              Get Started
              <span className="w-[14px] h-[14px]">
                <Image src={Icon} alt="icon"></Image>
              </span>
            </button>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
        <div className="w-[1480px] h-[661px] bg-white mt-[100px] flex flex-row gap-[100px] items-center">
          <div className="w-[661px] h-[661px] border-[2px] left-[35px] border-[#A7CEFC]">
            <Image src={Work} alt="work"/>
          </div>
          <div className="w-[670px] h-[294px] gap-[60px]">
            <h1 className=" w-[670px] h-[87px] font-bold leading-[87.14px] text-7xl tracking-[-2%]">
              Work together
            </h1>
            <p className="w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-2%] pt-6">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="w-[186px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] flex flex-row justify-center items-center mt-16 gap-[10px] text-white">
              Try it now
              <span>
                <Image src={Icon} alt="icon"></Image>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
