import React from "react";
import icon from "../Images/Image.png";

const NavBar = () => {
  return (
    <div className="relative">
    <div className=" absolute  ml-[40px]  mt-[27px] z-[1] flex flex-row justify-between items-center  mr-[40px] inset-2 bg-slate-50 ">
      <nav class=" bg-black border-gray-200 h-[106px] relative  rounded-[13px] ml-[15px] mr-[15px]">
        <div class="container flex  flex-wrap items-between justify-between mx-[20px]">
          <a href="/" class="flex flex-row  items-center   bg-[#000000]">
            <img src={icon} className=" h-[65px] ml-[15px]  mt-[15px]  w-[147px]" alt="Flowbite Logo" />{" "}
          </a>
           <div
            class=" mt-[25px] mr-[15px]">
            <ul class="flex flex-col items-center leading-[16px]  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class=" text-white font-[900] text-[20px] rounded md:bg-transparent md:whitespace-pre ">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class=" text-white rounded font-[900] text-[20px] hover:bg-gray-100">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-white rounded w-[63px] h-[20px] font-[900] text-[20px] hover:bg-gray-100">
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-white rounded font-[900] text-[20px] hover:bg-gray-100 ">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-white rounded  font-[900] text-[20px] hover:bg-gray-100 ">
                  Blog
                </a>
              </li>
              <li><div className="mr-[50px] border-yellow-300  border-[3px] rounded-[4px] text-center py-[10px] px-[20px] rounded[10px] ">
               <a href="/" 
               className="font-[900] text-[20px]  text-white border-yellow-300 hover:border-transparent hover:text-yellow-300  ">Free Quote</a>
               </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default NavBar;
