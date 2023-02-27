import React from "react";
import logo1 from "../Images/Rectangle.png";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SpaIcon from "@mui/icons-material/Spa";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import AboutCart from "../components/carts/AboutCart";

const About = () => {
  return (
    <>
      <div className="py-[7%]  w-[100%]   bg-[#000000] ">
       <div style={{
        filter: "blur(79px)",
        background: "radial-gradient(50% 50% at 50% 50%, rgba(239, 205, 19, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%)",
       zIndex:"0"
       }}></div>
        <div className="flex flex-col justify-center items-center text-white py-[3%]">
        <Heading content={"About section - Who we are"}/>
        <SubHeading SubHeading={"Some description about company - Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit."}/>
        </div>
        <div className="flex  justify-evenly content-evenly items-center  ">
          <div className="flex flex-col justify-between content-between">
            <div className="mt-[0px] mb-[50px]">
            <AboutCart Icon={<TrackChangesIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
            </div>
            <AboutCart Icon={<SpaIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
          </div>
          <div className="">
            <img src={logo1} alt="" width="100%"  height="100%"/>
          </div>
          <div>
            <div className="flex flex-col justify-evenly content-evenly">
            <div className="mt-[0px] mb-[50px]">
            <AboutCart Icon={<GroupsIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
           </div>
            <AboutCart Icon={<EmojiEventsIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
