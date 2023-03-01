import React from 'react'
import About from './About'
import Section from './Section'
const AboutSection = () => {
  return (
    <div className='bg-[#000000] px-[5%]'>
        <div style={{
            position: "absolute",
            width: "1310px",
            height: "1397px",
            left: "-796px",
            top: "897px",
            zIndex:"0",
            background: "radial-gradient(50% 50% at 50% 50%, rgba(61, 159, 223, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
            filter: "blur(79px)"
        }}></div>
        <Section />
        <hr className='w-1/2 mx-auto border-l-2 border-r-2 border-yellow-300  '/>
      <About />
    </div>
  )
}

export default AboutSection