import React from "react";
import Heading from "../components/Heading";
import SectionCart from "../components/carts/SectionCart";

const Section = () => {
  return (
    <div className="flex flex-col justify-evenly content-evenly items-center  w-full h-full    absolute   bg-[#1E1E1E]">
 <div style={{
  position: "absolute",
  width: "1310px",
  height: "1197px",
  left: "-796px",
  top: "897px",
  
  background: "radial-gradient(50% 50% at 50% 50%, rgba(61, 159, 223, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
  filter: "blur(79px)"
 }}></div>
      <Heading
        content={" Lorem ipsum dolor sit amet, consectetur adipiscing consectetur  elit."}/>
      <div className="flex flex-row flex-wrap  justify-center">
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
