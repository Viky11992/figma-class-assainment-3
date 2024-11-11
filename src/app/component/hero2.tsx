import React from "react";
import Image from "next/image";
import Vector from "../../../public//Group 212.png";
import Universe from "../../../public//Work Together Image.png";

function hero2() {
  return (
    <div className="w-[1920px] h-[1588px] border border-white ml-[1px] py-[140px] px-[220px] flex flex-col bg-white text-black gap-[100px]">
      <div className="w-[1480px] h-[547px] flex items-center gap-[60px]  border border-green-400">
        <div className="w-[672px] h-[411px] flex flex-col gap-[50px]">
          <div className="w-[672px] h-[174px] border border-yellow-950">
            <h2 className="font-Inter font-[700] text-[72px] leading-[87.14px] tracking-[-2%] capitalize text-[#212529]">
              project <br /> managment
            </h2>
          </div>
          <div className="w-[672px] h-[69px] border border-yellow-300">
            <p className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#212529]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
          </div>
          <div className="h-[63px] w-[201px] bg-[#4F9CF9] medium py-[20px] px-[40px] flex gap-[10px] ">
            <button className="font-Inter font-[500] text-[18px] text-white leading-[23px] tracking-[-2%] flex item-center justify-center gap-[10px]">
              Get Started
              <div className="w-[10px] h-[10px]  mt-[10px]">
                <Image src={Vector} alt="vector logo" className="" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>

      <div className="w-[1480px] h-[661px] flex items-center gap-[100px]  border border-green-400">
        <div className="w-[710px] h-[661px] ">
          <Image src={Universe} alt="" />
        </div>
        <div className="w-[672px] h-[411px] flex flex-col gap-[50px]">
          <div className="w-[672px] h-[87px] border border-yellow-950">
            <h1 className="font-Inter font-[700] text-[72px] leading-[87.14px] tracking-[-2%]  text-[#212529]">
              Work togather
            </h1>
          </div>
          <div className="w-[670px] h-[60px] border border-yellow-300">
            <p className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#212529]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
          </div>
          <div className="h-[63px] w-[186px] bg-[#4F9CF9] rounded-md py-[20px] px-[40px] flex gap-[10px] ">
            <button className="font-Inter font-[500] text-[18px] text-white leading-[23px] tracking-[-2%] flex item-center justify-center gap-[10px]">
              Try it now
              <div className="w-[10px] h-[10px]  mt-[10px]">
                <Image src={Vector} alt="vector logo" className="" />
              </div>
            </button>
          </div>
        </div>
      </div>



 

      
    </div>
    
  );
}

export default hero2;
