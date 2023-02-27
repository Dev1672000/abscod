import React from "react";
// import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const AboutCart = ({ Icon, cartHeading, cartContent }) => {
  return (
    <div className="w-[400px]  p-[32px]  box-border rounded-[28px] border-[1px] border-[#424245] flex flex-col content-evenly justify-center bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="flex justify-center items-center text-center rounded-[9px] w-[60px] h-[60px] bg-[#FFDA10]">
        <span className="w-[37px] h-[37px] m-[13px]">
          {Icon}
        </span>
      </div>
      <h1 className="w-[140px] h-[48px] font-[700] leading-[56px] text-[25px] tracking-[-0.02em] uppercase text-[#ffffff]">
        {cartHeading}
      </h1>
      <p className="w-[311px] h-[112px] font-[400px] text-[16px] leading-[28px] text-[#EEF2F6] ">
        {cartContent}
      </p>
    </div>
  );
};

export default AboutCart;
