import React from "react";
import icon from "../Images/Image.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className="flex flex-col h-[50%] w-screen ">
      <div className="min-[375px] max-[1440px] h-[80%%] bg-[#ffffff] w-full    flex flex-row justify-evenly top-[5800px] absolute  left-0  not-italic mt-[20px] pt-[10px]  ">
        <div
          className=" pl-[15px] w-[20%] h-[40%] bg-[#000000]"
          style={{ backgroundImage: `url("Vector.png")`}}
        >
          <div className="">
            <a href="/" class="flex items-center mt-[20px]">
              <img src={icon} class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />{" "}
            </a>
          </div>
          <p className="text-[#ffffff] w-[60%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing consectetur
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur{" "}
          </p>
          <span className="text-[#ffffff]  not-italic  leading-[27px]  text-[14.6559px]  ">
            <a href="/">
              {" "}
              <FacebookIcon style={{margin:"5px"}}/>
            </a>
            <a href="/">
              <InstagramIcon style={{margin:"5px"}}/>
            </a>
            <a href="/">
              <TwitterIcon style={{margin:"5px"}}/>
            </a>
            <a href="/">
              <LinkedInIcon style={{margin:"5px"}}/>
            </a>
          </span>
        </div>
        <div className="flex h-[70%]">
          <div className="bg-[#ffffff]">
            <h1 className="text-[#0E2368]  font-semibold  tracking-[0.03em] not-italic  leading-[27px]  text-[18.8433px] h-[27px] w-[285px] ">
              Services
            </h1>
            <p className="text-[#000000] flex flex-col not-italic  leading-[27px]  text-[14.6559px]  m-[5px]">
              <p>Market Research</p>
              <p>Market Analysis</p>
              <p>SEO Consultancy</p>
              <p>Page Ranking</p>
              <p>SMM</p>
            </p>
          </div>
          <div className="flex flex-col place-content-start left-0 not-italic ">
            <h2 className="text-[#000000]  font-semibold left-0 tracking-[0.03em] not-italic  leading-[27px]  text-[18.8433px] h-[27px] w-[285px] ">
              Our Company
            </h2>
            <div className=" text-[#000000]   not-italic  leading-[27px]  text-[14.6559px] m-[5px] ">
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>News</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="flex flex-col not-italic ">
            <h1 className="text-[#000000]  font-semibold  tracking-[0.03em] not-italic  leading-[27px]  text-[18.8433px] h-[27px] w-[285px] ">
              Features
            </h1>
            <div className=" text-[#000000]   not-italic  leading-[27px]  text-[14.6559px]  m-[5px] "></div>
            <p>Brand Strategy</p>
            <p>Audience Analytics</p>
            <p>Copywriting</p>
            <p>Team Training</p>
            <p>Email Marketing</p>
          </div>
        </div>
      </div>
      <div className="h-[10%] w-[50%] flex items-center gap-[63px] px-[8px] py-[0px]">
        <p>&copy; 2015 RapidTables.com</p>
      </div>
    </div>
  );
};

export default Footer;
