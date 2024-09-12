import React from 'react'

const Round = ({images,para}) => {
  return (
    
    <div className='flex p-3 m-3 flex-col justify-center items-center'>
      <img src={images} className='h-[12vh] w-[12vh] rounded-full hover:scale-105 duration-100'/>
      <p className='p-3 flex flex-wrap w-32  justify-center items-center text-center text-green-200 hover:text-green-50 hover:font-semibold'>{para}</p>
    </div>
  )
}

export default Round
