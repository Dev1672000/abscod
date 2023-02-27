import React from "react";
import Heading from "../components/Heading";
import DetailCart from "../components/carts/DetailCart";

const Details = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90.15deg, #3E9FDF -0.4%, #4070D8 99.87%)",
      }}
      className=" h-[300px] flex flex-row content-evenly justify-evenly  items-center ">
        <div className="flex flex-row justify-center w-[5%] h-[300px] ">
      <div className=" w-[7px]  bg-[#000000]"></div>
      <div className=" w-[7px] ml-[-35px] bg-[#000000]"></div>
      </div>
      <div className=" w-[80%]  flex flex-col   items-center  ">
        <Heading content={"Trusted by top brands"} />
        <div className="flex justify-evenly ">
          <div className="flex justify-evenly content-evenly ">
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
      </div>
       <div className="flex flex-row justify-center w-[5%] h-[300px] ">
      <div className=" w-[7px]  bg-[#000000]"></div>
      <div className=" w-[7px] ml-[-35px] bg-[#000000]"></div>
      </div>
    </div>
  );
};

export default Details;
