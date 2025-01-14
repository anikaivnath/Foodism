import React from 'react'
import Mask from './image/Mask.png'
import Rectang from './image/Rectang.png'

const ReviewSection = () => {
  return (
    <div>
    <div className='relative'>
    
            <img className='absolute mt-32 ml-10  w-[400px] hidden md:block' src={Rectang} alt='rectang'/>
            <img className='w-[460px] relative' src={Mask} alt="picture" />

            <div className="absolute top-6 left-8 bg-white px-3 py-1 rounded-lg">
            </div>

        
    </div>
    </div>
  )
}

export default ReviewSection