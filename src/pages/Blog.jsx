import React from "react";
import blog1 from "../Images/blog1.png";
import Button from "../components/Button";
import BlogCart from "../components/carts/BlogCart";

const Blog = () => {
  return (
    <div>
      <>
 
        <div className="min-[375px]:flex-wrapS max-[1440px] h-[80%] w-full pt-[10px] mr-[10px] bg-zinc-700  top-[4821px]   absolute  ">
          <div className="flex justify-around">
          <h1 className="text-[#ffffff] text-[56px] mb-[40px] ml-[125px] uppercase content-start  tracking-[0.04em] leading-[42px]">
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
            margin="2px 135px 50px 14px"
            fontSize="16px"
            letterSpacing="0.015em"
            lineHeight="32px"
            borderRadius="4px"
            buttonText="See All Posts"
            width="181px"
            background="yellow"
          />
          </div>
          <div className="flex flex-row justify-items-center justify-center w-full  ">
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
