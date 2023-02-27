import React from 'react'

const DetailCart = ({image}) => {
  return (
    <div className='m-[20px] p-[20px] flex justify-evenly content-evenly mx-[20px] bg-none'>
        <img src={image} alt="" style={{color:"white"}} />
    </div>
  )
}

export default DetailCart