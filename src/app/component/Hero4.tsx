import React from "react";
import Image from "next/image";
import Vector from "../../../public//Group 212.png";
import AppleLogo from "../../../public/Apple.png";
import MicrosoftLogo from "../../../public/microsoft 1.png";
import SlackLogo from "../../../public/Slack_Technologies_Logo 1.png";
import googleLogo from "../../../public/Google.png";
import WhiteSpace from "../../../public/Logo.png";

function Hero4() {
  return (
    <>
      <div className="w-[1921px] h-[574px] ml-[1px] px-[220px] py-[140px] bg-[#043873] border border-red-400">
        <div className="h-[294px] w-[1481px] flex flex-col gap-[39px] items-center justify-center border border-yellow-400">
          <div className="h-[87px] w-[1064px] border border-green-400">
            <h1 className="font-Inter font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-[#FFFFFF] ">
              Your work, everywhere you are
            </h1>
          </div>
          <div className="w-[1064px] h-[60px] border border-yellow-300">
            <p className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%]  items-center text-[#FFFFFF]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="h-[63px] w-[195px] bg-[#4F9CF9] rounded py-[20px] px-[40px]">
            <button className="font-Inter font-[500] text-[18px] leading-[23px] tracking-[-2%] flex  gap-[10px] text-[#FFFFFF]">
              Try Taskey
              <div className="w-[10px] h-[10px]  mt-[10px]">
                <Image src={Vector} alt="vector logo" className="" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1922px] h-[538px] ml-[1px] flex flex-col gap-[100px] px-[220px] py-[140px] bg-white border border-red-400">
        <div className="h-[87px] w-[1482px] flex  items-center justify-center border border-green-400">
          <h1 className="font-Inter font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-black ">
            Our sponsors
          </h1>
        </div>
        <div className="w-[1482px] h-[71px] flex items-center  justify-between border border-yellow-300">
          <div className="w-[55.47] h-[68px] flex items-center justify-center gap-[4px]">
            <Image src={AppleLogo} alt="apple logo" />
          </div>

          <div className="w-[287px] h-[62px]    border border-green-400">
            <Image src={MicrosoftLogo} alt="microsoft logo" />
          </div>

          <div className="w-[280px] h-[71px]    border border-green-400">
            <Image src={SlackLogo} alt="SlackLogo" />
          </div>
          <div className="w-[211px] h-[69.81px]    border border-green-400">
            <Image src={googleLogo} alt="googleLogo" />
          </div>
        </div>
      </div>

      <div className="w-[1920px] h-[461px] ml-[1px] px-[220px] py-[140px] bg-[#043873] border border-red-400">
        <div className="w-[1480px] h-[289px]   border border-red-400 flex flex-wrap  gap-[100px]">
          <div className="w-[1480px] h-[169px] border border-green-400 flex gap-[100px]">
            <div className="w-[295px] h-[169px] flex flex-wrap gap-[15px] border border-yellow-500">
              <div className="w-[191px] h-[34px]">
                <Image src={WhiteSpace} alt="" />
              </div>
              <div className="w-[240px] h-[120px]">
                <h2 className="font-Inter font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]">
                  whitepace was created for the new ways we live and work. We
                  make a better workspace around the world
                </h2>
              </div>
            </div>
            <div className="w-[295px] h-[127px] flex flex-col gap-[10px] border border-yellow-500 text-white">
            <h1 className="font-Inter font-[700] text-[18px] leading-[21.78px] tracking-[-2%] ">Product</h1>
            <h1>Overview</h1>
            <h1>Pricing</h1>
            <h1>Customer stories</h1>
           
            </div>
            <div className="w-[295px] h-[130px] flex flex-col gap-[11px] border border-yellow-500 text-white">
            <h1 className="font-Inter font-[700] text-[18px] leading-[21.78px] tracking-[-2%] ">Resources</h1>
            <h1>Blog</h1>
            <h1>Guide & tutorials</h1>
            <h1>Help center</h1>
           
            </div>
            <div className="w-[295px] h-[130px] flex flex-col gap-[11px] border border-yellow-500 text-white">
            <h1 className="font-Inter font-[700] text-[18px] leading-[21.78px] tracking-[-2%] ">Company</h1>
            <h1>About us</h1>
            <h1>Carrer</h1>
            <h1>Media kit</h1>
           
            </div>
          </div>
          <div className="w-[1480px] h-[20px] flex items-center justify-center border border-pink-600">
            <div className="w-[169px] h-[20px] flex gap-[60px]">
              <p className="font-Inter font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">
              ©2021 Whitepace LLC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero4;
