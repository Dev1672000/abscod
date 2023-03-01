import React from 'react'



function ClientFeedbackCart({quote,avtar,name,position}) {
  return (
    <div className='py-[2%] m-[15px] px-[2%] content-evenly box-border text-[#ffffff] md:w-[534px] md:h-[314px] rounded-[28px] ' style={{
        background: "linear-gradient(180deg, #0F0F0F 0%, #181818 100%)",
border: "1px solid #424"
    }}>
        <div className=''>
        <p className='font-[500] text-[20px] leading-[28px] italic text-[#EEF2F6]'>{quote}</p></div>
        <div className='flex  mt-[3%]'>
            <div className='mr-[30px]'>
            <img src={avtar} alt=""  width="81px" height="61px"  /></div>
            <div className='flex flex-col mr-[30px]'>
                <h1 className='font-[700] text-[25px] leading-[110%] '>{name}</h1>
                <h2 className='text-[20px] leading-[110%] font-[500]'>{position}</h2>
            </div>

        </div>
    </div>
  )
}

export default ClientFeedbackCart
