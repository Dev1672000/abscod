import React from "react";
import img3 from "../Images/img3.png";
import Button from "../components/Button";

const Home = () => {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <div
        className="md:px-[10px] px-[10px] w-auto h-auto  flex flex-wrap md:flex-row md:flex-nowrap md:justify-evenly "
        style={{
          position: "relative",
          backgroundImage: `url("Rectangle1.png")`,
          backgroundSize: "cover",

          // width: "100vw",
          // height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "1197px",
            left: "712px",
            top: "8px",
            zIndex: "0",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(239, 205, 19, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
            filter: "blur(79px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "1310px",
            height: "1197px",
            left: "-638px",
            top: "-539px",
            zIndex: "0",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgb(114 184 229 / 80%) 0%, rgba(0, 0, 0, 0.5) 100%)",
            filter: "blur(79px)",
          }}
        ></div>
        <div className="md:pt-[10%] pt-[50%] flex flex-col z-[0] md:content-center mx-[10%] md:justify-center md:ml-[100px] w-[50%] ">
          <h1 className="text-[#FFDB16]   tracking-[0.28em]  uppercase  font-[700] text-[20px] leading-[28px]">
            Customized Website Solutions
          </h1>
          <p className="  tracking-[-0.02em] text-[#FCFCFD] uppercase  font-[900] text-[52px] leading-[68px]">
            We bring you
            <br /> new customers
          </p>
          <p className="text-[#EEF2F6] tracking-[-0.02em] w-[350px] md:w-[524px] my-[10px] font-[400] text-[20px] leading-[28px]">
            We offer customized website solutions tailored to your specific
            requirements. Whether you need a simple brochure website or a
            complex e-commerce platform,
          </p>
          <div className="flex flex-wrap md:justify-start md:content-start md:my-[20px] mx-[10px] my-[20px]  ">
            <Button
              height="60px"
              fontWeight="700"
              // padding="14px 40px 14px 40px"
              backgroundColor="yellow"
              color="black"
              border="0px solid yellow"
              borderColor
              margin="0px 10px 10px 0px"
              fontSize="20px"
              borderRadius="8px"
              buttonText="Explore More"
              width="200px"
              background="linear-gradient(270deg, #FFDA10 0%, #FFE555 100%)"
            />
            <Button
              height="60px"
              fontWeight="700"
              // padding="14px 40px"
              backgroundColor="yellow"
              color="white"
              // border="1px solid "
              borderColor
              margin="0px 10px 10px 0px"
              fontSize="20px"
              borderRadius="8px"
              buttonText="Contact Us"
              width="200px"
              background="linear-gradient(270deg, #406CD7 0%, #3BC1E4 100%)"
            />
          </div>
        </div>
        <div className="md:mt-[150px] mt-[10px]  z-[2] w-[100%] h-[100%] ">
          <img src={img3} alt="" width="70%" className="ml-[12%]" />
        </div>
      </div>
    </div>
  );
};

export default Home;