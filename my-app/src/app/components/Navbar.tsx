import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import Icon from "@/app/assets/Icon.png"
const Navbar = () => {
  return (
    <>
      <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center left-[1px]">
        <div className="w-[191px] h-[34px] font-bold text-white">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="w-[737.5px] h-[60px] flex justify-between items-center gap-[60px]">
          <div className="w-[549px] h-[23px] ">
            <ul className="text-white  flex flex-row justify-between">
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px]">
            <button className="px-10 py-4 rounded-lg bg-[#FFE492]  ">login
        
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
