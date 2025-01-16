import React from 'react'
import Mask from './image/Mask.png'
import Rectang from './image/Rectang.png'

const ReviewSection = () => {
  return (
    <div className='flex ml-20 '>
    <div className='relative'>
       <img className='absolute mt-[266px] ml-4 w-80 hidden md:block' src={Rectang} alt='rectang'/>
       <img className='w-80 relative' src={Mask} alt="picture" />
            <div className="absolute top-6 left-8 bg-white px-3 py-1 rounded-lg">
            </div>
    </div>
    <div>
      <div className='w-80 text-justify w-40 m-80 '>
        <h1 className='font-bold text-3xl  '>What Our Customers Say About Us</h1>
        <p>“I had the pleasure of dining at Foodi last night, and I'm still raving 
        about the experience! The attention to detail in presentation and service was 
        impeccable”</p>
      </div>
    </div>
    </div>
  )
}

export default ReviewSection