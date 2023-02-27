import React from "react";
import Button from "../components/Button";
// import img1 from "../Images/col2.png"
// import img2 from "../Images/col4.png"
// import img3 from "../Images/Pattern.png"
// import img4 from "../Images/base.png"

const Subscribe = () => {
  return (
    <div className="bg-[#000000] w-[100%] h-[100%] py-[7%]">
    <div className="py-[7%] bg-[#424245] mx-[5%] h-[400px] border-[2px]  flex flex-col justify-center content-evenly items-center text-[#ffffff]  rounded-[28px] ">
      < div className=" font-[800] leading-[110%] text-[45px]  mb-[30px] ">
        Subscribe to our <span className="text-yellow-200">newsletter</span>
      </div>
    

      <div className=" flex flex-row justify-center ml-[10px]  ">
        <input
          placeholder="Please Enter Your Email...... "
          type="email"
          name=""
          id=""
          className="h-[62px] w-[372px] text-[#ffffff]  text-[18px] pl-[20px]  rounded-[7px] bg-[#5B5B61]"
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
            background=" linear-gradient(98.46deg, #FFDA10 1.57%, #FFE555 103.24%);
            border-radius: 7px;"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;
