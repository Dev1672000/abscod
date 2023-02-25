import React from "react";
import Heading from "../components/Heading";
import DetailCart from "../components/carts/DetailCart";

const Details = () => {
  return (
    <div className="absolute w-full py-[20px] flex flex-col content-evenly justify-evenly items-center  top-[2345px] bg-blue-500">
      <Heading content={"Trusted by top brands"}/>
      <div className="flex justify-evenly ">
        <div className="flex">
        <DetailCart image={"https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"}/>
        <DetailCart image={"https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"}/>
        <DetailCart image={"https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"}/>
        <DetailCart image={"https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"}/>
        <DetailCart image={"https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"}/>
        <DetailCart image={"https://author.envato.com/assets/images/logos/envato-b2317d4561dab4650d4aafd169b5203e17c487f072946a0cdd64d8df621d1a53.svg"}/>
        </div>
      </div>
    </div>
  );
};

export default Details;
