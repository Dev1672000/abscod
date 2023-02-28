import React from "react";

const Button = ({
  width,
  height,
  padding,
  backgroundColor,
  color,
  fontWeight,
  border,
  borderColor,lineHeight,
  fontSize,
  buttonText,
  textTransform,
  margin,
  borderRadius,
  background,
  letterSpacing,buttonArrow
  
}) => {
  return (
    <button
      style={{margin,
padding,
borderRadius,
fontWeight,
textTransform,
width,
letterSpacing,
height,
backgroundColor,
color,
border,
borderColor,
fontSize,
background,
lineHeight,
       
        
      }}
    >
      {buttonText}
      <span className=" bg-gray-400 text-[18px]  ml-[10px] pb-[1px] rounded-full">
      {buttonArrow}</span>
    </button>
  );
};
export default Button;
