import React from "react";
import icon from "../Images/Image.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className="flex flex-col px-[10px] bg-black">
      <div className=" w-auto h-auto bg-[#ffffff]  md:w-[100%] md:h-[100%] flex flex-row flex-wrap justify-between z-[2] relative  ">
        <div  className=" pl-[40px] flex flex-col flex-wrap justify-start content-center   md:w-[25%]  bg-[#000000] ">
          <div className="">
            <span>
              <img src={icon} alt="icon" width="200px" height="90px" />
              </span>
          </div>
          <p className="text-[#ffffff] ml-[18px] w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing consectetur
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur{" "}
          </p>
          <span className="text-[#ffffff] ml-[10px]   leading-[27px]  ">
            <a href="/"><FacebookIcon style={{margin:"5px"}}/>
            </a>
            <a href="/"> <InstagramIcon style={{margin:"5px"}}/>
            </a>
            <a href="/"><TwitterIcon style={{margin:"5px"}}/>
            </a>
            <a href="/"><LinkedInIcon style={{margin:"5px"}}/>
            </a>
          </span>
        </div>
        <div className="flex flex-wrap  md:justify-evenly  md:flex-nowrap md:content-center w-[50%] md:w-[70%] mt-[2%] "> 
        
          <div className="bg-[#ffffff]">
            <h1 className="text-[#000000] font-[600] leading-[30px] text-[25px]  ">
            Our Company
            </h1>
            <p className="text-[#000000] leading-[19px] font-[400] m-[5px] text-[16px]">
            <p className="mt-[10px]">Home</p>
              <p className="mt-[10px]"> About</p>
              <p className="mt-[10px]">Services</p>
              <p className="mt-[10px]">News</p>
              <p className="mt-[10px]">Contact Us</p>
            </p>
          </div>
          <div className="bg-[#ffffff]">
            <h1 className="text-[#000000] font-[600] leading-[30px] text-[25px]  ">
            Services
            </h1>
            <p className="text-[#000000] leading-[19px] font-[400] m-[5px] text-[16px]">
            <p className="mt-[10px]">Market Research</p>
              <p className="mt-[10px]">Market Analysis</p>
              <p className="mt-[10px]">SEO Consultancy</p>
              <p className="mt-[10px]">Page Ranking</p>
              <p className="mt-[10px]">SMM</p>
            </p>
          </div>
          <div className="bg-[#ffffff]">
            <h1 className="text-[#000000] font-[600] leading-[30px] text-[25px]  ">
            Features
            </h1>
            <p className="text-[#000000] leading-[19px] font-[400] m-[5px] text-[16px]">
            <p className="mt-[10px]">Brand Strategy</p>
              <p className="mt-[10px]">Audience Analytics</p>
              <p className="mt-[10px]">Copywriting</p>
              <p className="mt-[10px]">Team Training</p>
              <p className="mt-[10px]">Email Marketing</p>
            </p>
          </div>
          
        </div>
        
      </div>
      <div className="bg-[#000000] text-[#ffffff] flex justify-center ">
          <span>All Copyrights are reserved Abscod Informatics</span>
        </div>
      </div>
   
  );
};

export default Footer;
