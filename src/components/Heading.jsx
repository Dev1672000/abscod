import React from 'react'

const Heading = ({content,margin}) => {
  return (
    <div style={{margin}} className='font-[900] w-auto text-[#ffffff] h-auto text-[42px] my-[10px]  text-center leading-[56px] uppercase tracking-[-0.02em]  whitespace-normal md:w-[975px] md:[120px]'>
    {content}
    </div>
  )
}

export default Heading