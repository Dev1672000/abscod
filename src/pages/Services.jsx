import React from "react";
import ServiceCart from "../components/carts/ServiceCart"
import icon from "../Images/about1.png"
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const Services = () => {
  return (
    <>
      <div className=" py-[7%] flex flex-col justify-center items-center  w-[100%] bg-gradient-to-r from-black to-slate-800 ">
          <Heading content={" Service section - Who we do"}/>
          <SubHeading SubHeading={"Some description about service - Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit"}/>
          <div className=" pt-[3%] flex flex-row flex-wrap  justify-center ">
          <ServiceCart background="linear-gradient(270deg, #406CD7 0%, #3BC1E4 100%)" content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Paid Advertising"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Advanced Analytics"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"SEO Optimization"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon} heading={"Funnel Optimization"}/>
         </div>
      </div>
    </>
  );
};

export default Services;
