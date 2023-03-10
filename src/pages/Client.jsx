import React from "react";
import Heading from "../components/Heading";
import DetailCart from "../components/carts/DetailCart";

const Client = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90.15deg, #3E9FDF -0.4%, #4070D8 99.87%)",
      }}
      className="px-[5px] h-auto w-auto md:h-[300px] flex flex-row content-evenly justify-evenly  items-center z-[2] relative overflow-hidden">
        <div className="hidden md:visible md:flex flex-row justify-center w-[5%] h-[300px] mx-[10px] ">
      <div className=" w-[7px]  bg-[rgba(27,24,24,0.95)]"></div>
      <div className=" w-[7px] ml-[-35px] bg-[#000000]"></div>
      </div>
      <div className=" w-[80%]  flex flex-col   items-center  ">
        <Heading content={"Trusted by top brands"} />
          <div className="flex flex-wrap md:flex-nowrap justify-evenly content-evenly ">
            <DetailCart
              image={
                "https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"
              }
            />
            <DetailCart
              image={
                "https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"
              }
            />
            <DetailCart
              image={
                "https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"
              }
            />
            <DetailCart
              image={
                "https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"
              }
            />
            <DetailCart
              image={
                "https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"
              }
            />
            <DetailCart
              image={
                "https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"
              }
            />
        </div>
      </div>
       <div className="hidden md:visible md:flex flex-row justify-center w-[5%] h-[300px] ">
      <div className=" w-[7px]  bg-[#000000]"></div>
      <div className=" w-[7px] ml-[-35px] bg-[#000000]"></div>
      </div>
    </div>
  );
};

export default Client;
