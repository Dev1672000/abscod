import React from "react";
import ServiceCart from "../components/carts/ServiceCart"
import icon1 from "../Images/Icon1.png"
import icon2 from "../Images/Icon2.png"
import icon3 from "../Images/Icon3.png"
import icon4 from "../Images/Icon4.png"
import icon5 from "../Images/Icon5.png"
import icon6 from "../Images/Icon6.png"
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const Services = () => {
  return (
    <>
      <div className=" py-[7%]  flex flex-col justify-center items-center  w-[100%] bg-gradient-to-r from-black to-slate-800 ">
          {/* <div style={{
            position: "absolute",
            width: "1193px",
            height: "1685px",
            left: "1273px",
            top: "2629px",
            overflow:"hidden",
            
            background: "radial-gradient(50% 50% at 50% 50%, rgba(239, 205, 19, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
            filter: "blur(79px)"
          }}></div> */}
          <Heading content={" Service section - Who we do"}/>
          <SubHeading SubHeading={"Some description about service - Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit"}/>
          <div className=" pt-[3%]  flex flex-row flex-wrap  justify-center ">
          <ServiceCart background="linear-gradient(270deg, #406CD7 0%, #3BC1E4 100%)" content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon1} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon2} heading={"Social Media Marketing"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon3} heading={"Paid Advertising"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon4} heading={"Advanced Analytics"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon5} heading={"SEO Optimization"}/>
          <ServiceCart content={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit.Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  "} img={icon6} heading={"Funnel Optimization"}/>
         </div>
      </div>
    </>
  );
};

export default Services;
