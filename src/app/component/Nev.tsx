import React from "react";
import Image from "next/image";

import Logo from "../../../public/Logo Icon.png";

function hero() {
  return (
    <div className="main w-[1920px] text-white items-center flex justify-between h-[92px] ml-[1px] py-[16px] px-[220px] bg-[#043873] gap-[32px] ">
      <div className="logo h-[34px] w-[191px] flex justify-between items-center border border-pink-300">
        <div className="w-[37px] h-[29px]mt-[2.5px]">
        <Image src={Logo} alt="logo"/>
        </div>
        <div className="w-[144px] h-[34px] border border-green-200 flex items-center justify-center ">
        <p className="  font-Inter font-[700] text-[28px] leading-[33.89px] text-[#FFFFFF]">whitespace</p>
        </div>
      </div>
      <div className="leftside w-[737.5px] h-[60px] border flex items-center justify-between border-white">
        <div className="inner w-[549px] h-[23px] flex gap-[32px] capitalize font-DMSans font-[500] text-[18px] leading-[23px] items-center border border-yellow-300 ">
          <a href="">product</a>
          <a href="">sloutions</a>
          <a href="">resources</a>
          <a href="">pricing</a>
       
        </div>
        <div className="w-[126px] h-[60px] flex gap-[10px] bg-[#FFE492] rounded-lg">
            <button className="btn font-[500] text-[18px] leading-[23px] tracking-[-2]  py-[16px] px-[40px] font-Inter text-[#043873] capitalize">
              login
            </button>
          </div>
        
      </div>
    </div>
  );
}

export default hero;
