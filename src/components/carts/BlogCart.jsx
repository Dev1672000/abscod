import React from 'react'

const BlogCart = ({img, date, content}) => {
  return (
    <div className='flex flex-col content-evenly  justify-evenly box-border w-[300px] px-[20px] py-[5px] h-[330px] border-[4px] border-[#424245] rounded-[28px]' style={{background: "linear-gradient(180deg, #0F0F0F 0%, #181818 100%)"}}>
     <div className=''>
      <img src={img} alt="" className='w-[250px] h-[180px]  rounded-[12px]' />
      </div>
      <div className='flex flex-row  justify-between  content-evenly '>
       <div className='border-[1px] boder-[solid] rounded-[28px] w-[98px] mr-[2px] h-[29]'>
         <button className=' capitalize text-center px-[15px] py-[5px]  text-[#ffffff] '>Marketing</button>
         </div>
        <p className=' uppercase pt-[5px] text-[#ffffff]'>{date}</p>
        </div>
        <p className=' font-[500]   text-[#ffffff] '>{content}</p>
    </div>
  )
}

export default BlogCart