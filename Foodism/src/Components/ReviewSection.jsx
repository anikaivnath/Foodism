import React from 'react'
import Mask from './image/Mask.png'
import Rectang from './image/Rectang.png'

const ReviewSection = () => {
  return (
    <div className='flex ml-20 gap-70 '>
    <div className='relative'>
       <img className='absolute mt-[267px] ml-4 w-80 hidden md:block' src={Rectang} alt='rectang'/>
       <img className='w-80 relative' src={Mask} alt="picture" />
            <div className="absolute top-6 left-8 bg-white px-3 py-1 rounded-lg">
            </div>
    </div>
    <div>
      <div className='  w-[600px] mt-[210px] ml-20 text-justify '>
        <h1 className='font-bold text-3xl mt-4'>What Our Customers Say About Us</h1>
        <p className='w-[570px]'>“I had the pleasure of dining at Foodi last night, and I'm still raving 
        about the experience! The attention to detail in presentation and service was 
        impeccable Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni enim similique nulla. Neque non, incidunt dolorem ipsa corrupti soluta laboriosam perspiciatis est eaque harum minima minus autem quidem quam reprehenderit!
        Velit eum voluptatem eos ut ducimus asperiores, ipsum debitis quo ad quidem, sunt iusto fuga consectetur facilis, blanditiis dolores. Praesentium, saepe! Suscipit aperiam tempora quos dolorem recusandae sit necessitatibus assumenda.”</p>
      </div>
    </div>
    </div>
  )
}

export default ReviewSection