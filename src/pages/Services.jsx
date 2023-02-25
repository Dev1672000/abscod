import React from "react";
// import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ServiceCart from "../components/carts/ServiceCart"
import icon from "../Images/about1.png"
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const Services = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-full  top-[2590px]  bg-gradient-to-r from-slate-500 to-slate-800 absolute">
          <Heading content={" Service section - Who we do"}/>
          <SubHeading SubHeading={"Some description about service - Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit"}/>
          <div className="  flex flex-row flex-wrap  justify-center ">
          <ServiceCart background="linear-gradient(270deg, #406CD7 0%, #3BC1E4 100%)" content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
         </div>
      </div>
    </>
  );
};

export default Services;
