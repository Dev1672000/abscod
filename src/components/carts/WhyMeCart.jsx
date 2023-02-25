import React from 'react'

const WhyMeCart = ({progress,content}) => {
  return (
    <div className='w-[1234px] h-[531px] '
    style="background-image: linear-gradient(83.27deg, #406CD7 0.84%, #3F9FDF 97.91%);">
      <img src="" alt=""  />
      <h1 className='w-[121px] h-[48px] font-[900] text-[41px] leading-[46px] text-center tracking-[-0.02em] uppercase'>{progress}</h1>
      <p className='w-[190px] h-[33px] font-[500] text-[20px] leading-[28px] text-center text-[#ffffff]'>{content}</p>

    </div>
  )
}

export default WhyMeCart