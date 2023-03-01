import React from 'react'

const WhyMeCart = ({progress,content,src}) => {
  return (
    <div className='flex flex-col justify-end content-end mx-[15px] my-[15px] border-[1px]  border-[#332929] rounded-[8px]'>
      <div className='flex justify-center'>
      <img src={src} alt="" width="126px" height="126px"  />
      </div>
      <h1 className=' h-[48px] font-[900] text-[41px] leading-[46px] text-center '>{progress}</h1>

      <p className='w-[192px] h-[33px] font-[500] text-[20px] leading-[28px] text-center '>{content}</p>  
    </div>
  )
}

export default WhyMeCart