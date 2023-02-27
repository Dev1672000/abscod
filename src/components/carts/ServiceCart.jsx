import React from 'react'
import Button from '../Button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const ServiceCart = ({img,heading,content,background}) => {
  return (
  
        <div style={{
          background: "linear-gradient(180deg, #0F0F0F 0%, #181818 100%)",
border: "1px solid #424245",
borderRadius: "30px"
        }} className='h-[400px] m-[25px] flex flex-col content-evenly justify-evenly box-border border-[2px] items-start text-[#ffffff] px-[41px] py-[39px] gap-[10px] w-[340px]  rounded-[30px] b-[#424245] '>
        
          <div className=' rounded-[50px] flex justify-center items-center w-[100px] h-[100px] bg-[#ffffff] displ' >
            <img src={img} alt="" />
            </div>
            <h1 className='w-[253px] h-[28px] font-[700] text-[25px] leading-[110.5%] '>{heading}</h1>
            <p className='text-[#EEF2F6] w-[274px] h-[84px]' >{content}</p>
            <Button height="62px"
            fontWeight="700"
            padding="17px 50px "
            backgroundColor="#AEAEAE"
            color="white"
            borderColor="1"
            border="2px solid white"
            margin="10px 0px 0px 0px"
            fontSize="16px"
            borderRadius="8px"
            buttonText="Read More"
            width="250px"
            
            />
        </div>
   
  )
}

export default ServiceCart


