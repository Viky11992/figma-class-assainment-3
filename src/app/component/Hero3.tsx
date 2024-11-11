import React from "react";
import Image from "next/image";
import Vector from "../../../public//Group 212.png";

function Hero3() {
  return (
    <>
    <div className="w-[1921px] h-[759px] gap-[98px] border border-white ml-[1px] py-[140px] px-[220px] flex items-center justify-center bg-[#043873] text-white">
      <div className="w-[697px] h-[294px] flex flex-col gap-[40px] border border-green-400">
        <div className="w-[697px] h-[87px] border border-green-300">
          <h2 className="font-Inter font-[700] text-[72px] leading-[87.14px] tracking-[-2%]">
            Use as Extension
          </h2>
        </div>
        <div className="w-[697px] h-[60px] border border-yellow-300">
          <p className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#FFFFFF]">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
        </div>
        <div className="h-[63px] w-[171px] bg-[#4F9CF9] rounded-md py-[20px] px-[40px] ">
          <button className="font-Inter font-[500] text-[18px] leading-[23px] tracking-[-2%] flex item-center justify-center gap-[10px]">
            Let,s Go
            <div className="w-[10px] h-[10px]  mt-[10px]">
              <Image src={Vector} alt="vector logo" className="" />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>

      
    </div>
    <div className="w-[1921px] h-[812.09px] gap-[98px] border border-white ml-[1px] py-[140px] px-[220px] flex items-center justify-center text-[#043873] bg-white">
      <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
      <div className="w-[669px] h-[411px] flex flex-col gap-[40px] border border-green-400">
        <div className="w-[669px] h-[174px] border border-green-300">
          <h2 className="font-Inter font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
          Customise it
          to your needs
          </h2>
        </div>
        <div className="w-[669px] h-[90px] border border-yellow-300">
          <p className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#212529]">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <div className="h-[63px] w-[171px] bg-[#4F9CF9] rounded py-[20px] px-[40px] ">
          <button className="font-Inter font-[500] text-[18px] leading-[23px] tracking-[-2%] flex item-center justify-center gap-[10px] text-[#FFFFFF]">
            Lets Go
            <div className="w-[10px] h-[10px]  mt-[10px]">
              <Image src={Vector} alt="vector logo" className="" />
            </div>
          </button>
        </div>
      </div>

      
    </div>

    </>
  );
}

export default Hero3;
