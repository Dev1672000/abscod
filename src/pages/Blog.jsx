import React from "react";
import blog1 from "../Images/blog1.png";
import Button from "../components/Button";
import BlogCart from "../components/carts/BlogCart";

const Blog = () => {
  return (
    <div>
      <>
     

        <div className="py-[6%]  h-[100%] w-[100%] z-[2] relative ">
          <div className="flex  justify-between  mx-[9%] py-[4%]">
          <h1 className="text-[#ffffff] text-[41px]  uppercase content-start  font-[900] tracking-[-0.02em] leading-[56px]">
            bLOG POST
          </h1>

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
          <div className="flex flex-row justify-items-center justify-center   ">
          <BlogCart content={"How to increase your Twitter reach by over 200% with this simple trick"} img={blog1} date="September 1, 2022"/>
          <BlogCart content={"How to increase your Twitter reach by over 200% with this simple trick"} img={blog1} date="September 1, 2022"/>
          <BlogCart content={"How to increase your Twitter reach by over 200% with this simple trick"} img={blog1} date="September 1, 2022"/>

          </div>
        </div>
      </>
    </div>
  );
};

export default Blog;
