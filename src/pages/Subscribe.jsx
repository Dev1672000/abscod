import React from "react";
import Button from "../components/Button";
// import img1 from "../Images/col2.png"
// import img2 from "../Images/col4.png"
// import img3 from "../Images/Pattern.png"
// import img4 from "../Images/base.png"

const Subscribe = () => {
  return (
    <div className="absolute bg-[#424245]   w-full h-[50%] flex flex-col justify-center items-center text-[#ffffff] ml-[40px] mr-[200px] top-[5430px] rounded-[28px] ">
      < div className="w-[559px] h-[50px] font-[800] leading-[110%] text-[45px]  mb-[30px] ">
        Subscribe to our <span className="text-yellow-400">newsletter</span>
      </div>

      <div className=" flex flex-row justify-center ml-[10px] ">
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
            background="yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
