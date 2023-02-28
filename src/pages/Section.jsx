import React from "react";
import Heading from "../components/Heading";
import SectionCart from "../components/carts/SectionCart";

const Section = () => {
  return (
    <div className=" py-[7%] flex flex-col justify-evenly content-evenly items-center  w-[100%] h-[100%] relative z-[2] ">
 
      <Heading
        content={" Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit."}/>
      <div className="flex flex-row flex-wrap  justify-center mt-[3%]">
        <SectionCart
          cartHeading={"Expert  Instruction  Expert Instruction"}
          cartcontent={"Our guitar course is taught by a experienced musician who provides valuable tips and techniques. Plus, interactive exercises."}
        />
        <SectionCart
          cartHeading={"Expert  Instruction  Expert Instruction"}
          cartcontent={"Our guitar course is taught by a experienced musician who provides valuable tips and techniques. Plus, interactive exercises."
          }
        />
        <SectionCart
          cartHeading={"Expert  Instruction  Expert Instruction"}
          cartcontent={
            "Our guitar course is taught by a experienced musician who provides valuable tips and techniques. Plus, interactive exercises."
          }
        />
      </div>
    </div>
  );
};

export default Section;
