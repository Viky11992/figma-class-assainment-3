import React from "react";
import Image from "next/image";
import Vector from "../../../public//Group 212.png";

function Hero1() {
  return (
    <div className="w-[1920px] h-[829px] border border-white ml-[1px] py-[140px] px-[220px] flex items-center justify-center bg-[#043873] text-white">
      <div className="w-[656px] h-[361px] flex flex-col gap-[40px] border border-green-400">
        <div className="w-[656px] h-[154px] border border-green-300">
          <h2 className="font-Inter font-[700] text-[64px] leading-[77.45px] tracking-[-2%]">
            Get More Done with whitepace
          </h2>
        </div>
        <div className="w-[656px] h-[60px] border border-yellow-300">
          <p className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#FFFFFF]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
        </div>
        <div className="h-[63px] w-[219px] bg-[#4F9CF9] rounded-lg p-[20px] ">
          <button className="font-Inter font-[500] text-[18px] leading-[23px] tracking-[-2%] flex item-center justify-center gap-[10px]">
            Try Whitepace free
            <div className="w-[10px] h-[10px]  mt-[10px]">
              <Image src={Vector} alt="vector logo" className="" />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
    </div>
  );
}

export default Hero1;
