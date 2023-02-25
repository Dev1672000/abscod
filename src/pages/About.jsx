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
      <div className=" absolute w-full  top-[1581px] bg-[#000000] ">
       <div style={{
        position: "absolute",
        width: "1050px",
        height: "959px",
        left: "170px",
        filter: "blur(79px)",
        background: "radial-gradient(50% 50% at 50% 50%, rgba(239, 205, 19, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%)",
       zIndex:"0"
       }}></div>
        <div className="flex flex-col justify-center items-center text-white ">
        <Heading content={"About section - Who we are"}/>
        <SubHeading SubHeading={"Some description about company - Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit."}/>
        </div>
        <div className="flex flex-row justify-evenly content-around items-center mt-[20px]">
          <div className="flex flex-col justify-evenly content-evenly">
            <AboutCart Icon={<TrackChangesIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
            <AboutCart Icon={<SpaIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
          </div>
          <div className="">
            <img src={logo1} alt="" width="90%"  height="90%"/>
          </div>
          <div>
            <div className="flex flex-col justify-evenly content-evenly">
            <AboutCart Icon={<GroupsIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
            <AboutCart Icon={<EmojiEventsIcon/>} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
