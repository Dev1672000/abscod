import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Rocket from "../Images/rockect.png";
import WhyMeCart from "../components/carts/WhyMeCart";

const WhyMe = () => {
  return (
    <div className="flex justify-around w-auto h-auto bg-[#000000] md:w-[100%]">
      <div style={{
        background: "linear-gradient(83.27deg, #406CD7 0.84%, #3F9FDF 97.91%)"
      }}></div>
      <div className="flex flex-row justify-center w-[5%]  h-[100] mr-[-45px] ">
      <div className=" w-[7px]  bg-[#406DD7]"></div>
      <div className=" w-[7px] ml-[-35px] bg-[#406DD7]"></div>
      </div>
      <div className="px-[80px] py-[30px] flex flex-row flex-wrap md:flex-nowrap bg-gradient-to-l from-cyan-500 to-blue-500 bg-[#406CD7] md:w-[80%] md:h-[100%]  text-[#FFFFFF] ">
      <div className="md:w-[60%] py-[40px] my-[10px]  ">
        <h1 className="md:w-[586px] md:h-[99px]  uppercase text-[41px] font-[900] leading-[46px] tracking-[-0.02em]">
          Why we're the best choice for your needs
        </h1>
        <p className="h-auto md:h-[112px] text-[20px] mb-[7%]  font-[400] leading-[28px] ">
          Some description about why choose us - Lorem ipsum dolor sit amet, ea
          mundi malorum cum, ocurreret reprehendunt. Lorem ipsum dolor sit amet,
          ea mundi malorum cum, ocurreret reprehendunt. Lorem ipsum dolor sit
          amet, ea mundi malorum cum, ocurreret reprehendunt.
        </p>
        <div className="font-[600] text-[20px] leading-[28px] ">
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum</p>
        </span>
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum dolor sit</p>
        </span>
        
        <span className="flex ">
          <CheckCircleIcon />
          <p>Lorem ipsum dolor sit amet, ea mundi malorum dolor sit amet</p>
        </span></div>
      </div>


      <div className="flex flex-row flex-wrap   md:justify-evenly md:content-evenly   w-1/2">
        <WhyMeCart content={"Projects Launched"} src={Rocket} progress={"1000+"}/>
        <WhyMeCart content={"Projects Launched"} src={Rocket} progress={"1000+"}/>
        <WhyMeCart content={"Projects Launched"} src={Rocket} progress={"1000+"}/>
        <WhyMeCart content={"Projects Launched"} src={Rocket} progress={"1000+"}/>
     
      </div>
    </div>
    <div className="flex flex-row justify-center w-[5%] h-[100] ml-[-45px]">
      <div className=" w-[7px]  bg-[#3F9BDF]"></div>
      <div className=" w-[7px] ml-[-35px] bg-[#3F9BDF]"></div>
      </div>
    </div>
  );
};

export default WhyMe;
