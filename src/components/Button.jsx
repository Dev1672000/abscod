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
  letterSpacing,
  
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
lineHeight
       
        
      }}
    >
      {buttonText}
    </button>
  );
};
export default Button;
