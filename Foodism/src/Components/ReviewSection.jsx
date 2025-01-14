import React from 'react'
import Mask from './image/Mask.png'

const ReviewSection = () => {
  return (
    <div>
        <div className='text-center m-4 font-custom'>
            <p className=' text-red-500 m-4 '>Testimonials</p>

        </div>
        <div>
          <img className='bg{}' src={Mask} alt="" />
        </div>
    </div>
  )
}

export default ReviewSection