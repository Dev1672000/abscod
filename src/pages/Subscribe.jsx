import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="bg-[#000000] w-[100%] h-[100%] py-[7%] " >
      <div style={{
        
position: "absolute",
width: "758px",
height: "657px",
left: "763px",
top: "6309px",
zIndex:"0",
background: "radial-gradient(50% 50% at 50% 50%, rgba(61, 159, 223, 0.83) 0%, rgba(0, 0, 0, 0.83) 100%)",
filter: "blur(79px)"
      }}></div>
    <div style={{background: "linear-gradient(180deg, #0F0F0F 0%, #181818 100%)"}} className="z-[5] relative py-[7%]   mx-[5%] h-[400px] border-[1px]  flex flex-col justify-center content-evenly items-center text-[#ffffff]  rounded-[28px] ">
      < div className=" font-[800] leading-[110%] text-[45px]  mb-[30px] ">
        Subscribe to our <span className="text-yellow-200">newsletter</span>
      </div>
    

      <div className=" flex flex-row justify-center ml-[10px]  ">
        <input
          placeholder="Please Enter Your Email...... "
          type="email"
          name=""
          id=""
          className="h-[62px] w-[372px]   text-[18px] pl-[20px]  rounded-[7px] bg-[#5B5B61] placeholder-white"
        />
        <div>
        <Button
            height="62px"
            fontWeight="700"
            // padding="14px 40px 14px 40px"
            backgroundColor="yellow"
            color="rgb(31 41 55)"
            border="1px solid yellow"
            borderColor
            margin="0px 0px 0px 20px"
            fontSize="18px"
            borderRadius="4px"
            buttonText="Subscribe"
            width="160px"
            background="linear-gradient(270deg, #FFDB13 0%, #FFE554 100%)"
           
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;
