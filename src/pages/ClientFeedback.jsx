import React from "react";
import ClientFeedbackCart from "../components/carts/ClientFeedbackCart"
import Button from "../components/Button";
import Heading from "../components/Heading";
import avtar from "../Images/avtar.png"



const ClientFeedback = () => {
  return (
    
      <div className=" py-[7%] md:h-[100%] md:w-[100%] w-auto h-auto  relative z-[2]">
         <div className="flex  justify-around flex-wrap ">
         
          <div className="md:ml-[-150px]">
         <Heading content={"What our clients say?"}/></div>
        <Button
            height="60px"
            fontWeight="700"
            // padding="14px 10px"
            backgroundColor="yellow"
            color="black"
      
            // border="1px solid yellow"
            borderColor
            // margin="2px 135px 50px 14px"
            fontSize="16px"
            letterSpacing="0.015em"
            lineHeight="32px"
            borderRadius="4px"
            buttonText="See All Posts"
            width="181px"
            background="linear-gradient(270deg, #FFDA10 0%, #FFE555 100%)"
          />
          </div>
          <div className="flex flex-wrap md:flex-nowrap mt-[20px]">
       <ClientFeedbackCart position={"Ceo and Co-founder"} avtar={avtar} name={"GUSTEN SUN"} quote={"“ Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.”"} />
       <ClientFeedbackCart position={"Ceo and Co-founder"} avtar={avtar} name={"GUSTEN SUN"} quote={"“ Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.”"} />
       <ClientFeedbackCart position={"Ceo and Co-founder"} avtar={avtar} name={"GUSTEN SUN"} quote={"“ Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.”"} />
       </div>

    </div>
  );
};

export default ClientFeedback;
