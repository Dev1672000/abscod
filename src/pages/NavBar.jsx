import React from "react";
import icon from "../Images/Image.png";

const NavBar = () => {
  return (<div className="w-[90%] mx-[auto] bg-[#000000]">
    <nav className=" fixed bg-black   z-[1] h-[106px] ml-[10px] mb-[90px] my-[30px] rounded-[15px] flex flex-row justify-between px-[10px] items-center">
      <div className="">
        <img src={icon} alt="" width="147px" height="63px" />
      </div>
      <div className="flex flex-row ">
        <div className=" text-[#ffffff]  font-[900] text-[20px]">
          <ul className="flex flex-row  justify-around content-evenly m-[10px]">
            <li className="mx-[20px]">
              <a href="/">About</a>
            </li>
            <li className="mx-[20px]">
              <a href="/">Services</a>
            </li>
            <li className="mx-[20px]">
              <a href="/">Case Studies</a>
            </li>
            <li className="mx-[20px]">
              <a href="/">Contact</a>
            </li>
            <li>
              <a className="mx-[20px]" href="/">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className=" font-[900]  border-yellow-300  border-[3px] rounded-[13px] text-center py-[10px] px-[40px] rounded[10px]  text-[20px] text-[#ffffff]">
          <a className="" href="/">
            Free Quote
          </a>
        </div>
      </div>
    </nav></div>
  );
};

export default NavBar;
