import React from 'react'
import ClientFeedback from './ClientFeedback'
import Blog from './Blog'
const BlogClientFeedback = () => {
  return (
    <div className='bg-[#000000] '>
        <div style={{
            position: "absolute",
            // width: "938px",
            height: "1200px",
            left: "-50px",
            top: "4709px",
            zIndex:"0",
            
            background: "radial-gradient(50% 50% at 50% 50%, rgba(61, 159, 223, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
            filter: "blur(79px)"
        }}></div>
         <ClientFeedback />
            <hr className='w-1/2 mx-auto border-l-2 border-r-2 border-yellow-300' />
      <Blog />
    </div>
  )
}

export default BlogClientFeedback