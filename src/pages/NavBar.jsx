import React, { useState } from "react";
import Button from "../components/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import icon from "../Images/Image.png";

const NavBar = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Case Studies", link: "/" },
    { name: "Contact", link: "/" },
    { name: " Blog", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div  style={{ boxShadow: " 0px 0px 15px 1px #e6dfdf70"}} className="absolute w-[90%] ml-[5%] rounded-[15px] my-[30px] pr-[3%] bg-black shadow-md  z-[1] h-[106px] ">
      <div className="md:flex  content-evenly md:flex items-center justify-between  py-4 md:px-10 px-7   ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center "
        >

          {/* <span className="sm:text-3xl  mr-1 pt-2  lg:hidden">
            {/* <ion-icon name="logo-ionic"></ion-icon> */}
            {/* <MenuIcon name="logo-ionic"></MenuIcon> */}
          {/* </span> */} 

          <img src={icon} alt="" width="147px" height="63px" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-[18%]  top-[30px] text-[#ffffff] cursor-pointer md:hidden"
        >
          {
            open ? <CloseIcon className="lg:hidden  flex absolute left-3"></CloseIcon>:<MenuIcon className="lg:hidden  flex absolute left-3"></MenuIcon>
          }
        </div>

        <ul
          className={`md:flex md:items-center m-[8px] font-[900] md:pb-0 pb-12 absolute md:static  bg-black  text-[#ffffff] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-[#ffffff] hover:text-yellow-200 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-[35px]">
          <Button
            height="60px"
            fontWeight="900"
            // padding="14px 40px 20px 40px "
            backgroundColor=""
            color="white"
            // border="yellow"
            border="4px solid yellow"
            borderColor="yellow"
            margin="0px 0px 0px 0px"
            fontSize="20px"
            borderRadius="8px"
            buttonText="Free Quote"
            width="200px"
            background="black"
          /></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
