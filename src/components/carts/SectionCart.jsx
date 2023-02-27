import React from 'react'
import sectionIcon from "../../Images/sectionIcon.png"

const SectionCart = ({cartHeading ,cartcontent}) => {
  return (
         <div style={{
          borderImage: "linear-gradient(180deg,#FFDA10,#584E16,  #4A4112)",
          "border-image-slice": "1",
         }} className='w-[384px]  mx-[15px] p-[32px] h-[300px] flex flex-col content-between justify-between border-2  bg-[#000000] rounded-[25px]'>
              <div>
                <img src={sectionIcon} alt="" height="25px" width="25px" />
                </div>
              <h1 className='w-[320px] h-[64px] font-[700] text-[24px] leading-[32px] text-[#FCFCFD] '>{cartHeading}</h1>
              <p className='w-[320px] h-[112px] font-[400] text-[18px] leading-[28px] text-[#e4e6e9] '>{cartcontent}</p>
            </div>
  )
}

export default SectionCart