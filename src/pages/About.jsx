import React from "react";
import logo1 from "../Images/Rectangle.png";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import AboutCart from "../components/carts/AboutCart";
import missionIcon from "../Images/mission.png"
import valueIcon from "../Images/values.png"
import achievementIcon from "../Images/acheivement.png"
import teamIcon from "../Images/teamIcon.png"
const About = () => {
  return (
    <>
      <div className="py-[7%]  overflow-hidden ">
       <div style={{position: "absolute",
// width: "1410px",
height: "1097px",
overflow:"hidden",
zIndex:"0",
background: "radial-gradient(50% 50% at 50% 50%, rgba(239, 205, 19, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
filter: "blur(79px)" }}></div>
        <div className="flex flex-col justify-center items-center text-white py-[3%] relative z-[2]">
        <Heading content={"About section - Who we are"}/>
        <SubHeading SubHeading={"Some description about company - Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit."}/>
        </div>
        <div className=" flex  justify-evenly content-evenly items-center flex-wrap  relative z-[2]">
          <div className="  flex flex-col justify-between content-between">
            <div className="mt-[0px] mb-[50px] flex ">
            <AboutCart Icon={missionIcon} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"our mission"}/>
            </div>
            <AboutCart Icon={valueIcon} cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"Our values"}/>
          </div>
          <div className="my-[50px] px-[5px]">
            <img src={logo1} alt="" width="100%"  height="100%"/>
          </div>
          <div>
            <div className="flex flex-col justify-evenly content-evenly">
            <div className="mt-[0px] mb-[50px]">
            <AboutCart Icon={teamIcon} background="linear-gradient(180deg, #3DA6E0 0%, #406CD7 100%)" cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"Our team"}/>
           </div>
            <AboutCart Icon={achievementIcon} background="linear-gradient(180deg, #3DA6E0 0%, #406CD7 100%)" cartContent={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} cartHeading={"Our achievements"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
