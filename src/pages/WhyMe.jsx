import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Rocket from "../Images/rockect.png";
// import WhyMeCart from "../components/carts/WhyMeCart";

const WhyMe = () => {
  return (
    <div className="bg-[#2f1919] border-[10px] bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
    <div className="absolute flex flex-row bg-gradient-to-l from-cyan-500 to-blue-500 bg-[#406CD7] top-[3635px]  h-full ml-[100px] mr-[100px] font-['Barlow'] text-[#FFFFFF] ">
      <div className="w-[614px] not-italic font-['Barlow']  ml-[10px]">
        <h1 className="w-[586px] h-[99px] left-[170px] uppercase text-[41px] font-[900] leading-[46px] tracking-[-0.02em] text-left">
          Why we're the best choice for your needs
        </h1>
        <p className="h-[112px] text-[20px] left-[170px]  font-[400] leading-[28px] ">
          Some description about why choose us - Lorem ipsum dolor sit amet, ea
          mundi malorum cum, ocurreret reprehendunt. Lorem ipsum dolor sit amet,
          ea mundi malorum cum, ocurreret reprehendunt. Lorem ipsum dolor sit
          amet, ea mundi malorum cum, ocurreret reprehendunt.
        </p>
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum</p>
        </span>
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum</p>
        </span>
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum</p>
        </span>
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum</p>
        </span>
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum</p>
        </span>
      </div>

      <div className="flex  flex-wrap  m-[10px] pb-[20px] mb-[20px] h-[60%] w-[40%] ">
        <div className="border-[1px]  border-[#332929] flex flex-col justify-center p-[10px] h-[200px] w-[200px] pr-[15px] m-[10px] rounded-[8px] ">
          <img src={Rocket} alt="" className="w-[100px]  " />
          <h1 className=" font-[900] uppercase text-center">1000+</h1>

          <p>Projects Launched</p>
        </div>
       
        <div className="border-[1px]  border-[#332929] flex flex-col justify-center p-[10px] h-[200px] w-[200px] pr-[15px] m-[10px] rounded-[8px] ">
          <img src={Rocket} alt="" className="w-[100px]  " />
          <h1 className=" font-[900] uppercase text-center">1000+</h1>

          <p>Projects Launched</p>
        </div>{" "}
        <div className="border-[1px]  border-[#332929] flex flex-col justify-center p-[10px] h-[200px] w-[200px] pr-[15px] m-[10px] rounded-[8px] ">
          <img src={Rocket} alt="" className="w-[100px]  " />
          <h1 className=" font-[900] uppercase text-center">1000+</h1>

          <p>Projects Launched</p>
        </div>{" "}
        <div className="border-[1px]  border-[#332929] flex flex-col justify-center p-[10px] h-[200px] w-[200px] pr-[15px] m-[10px] rounded-[8px] ">
          <img src={Rocket} alt="" className="w-[100px]  " />
          <h1 className=" font-[900] uppercase text-center">1000+</h1>

          <p>Projects Launched</p>
        </div>
      </div>
    </div></div>
  );
};

export default WhyMe;
