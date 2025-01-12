import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'

import Intersect from "./Intersect.png";

const HeroSection = () => {
  return (
    <div className='flex justify-between'>
    <div className='  text-justify ml-32 mt-32 '>
        <h1 className='text-3xl font-bold  w-[280px]' >Dive into Delights Of Delectable <span className='text-green-400'>Food</span> </h1>
        <p className='w-[320px] mt-4'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
    <div className='flex gap-4'>
        <p className='bg-green-600 w-max pl-4 pr-4 text-center  text-white rounded-2xl shadow-3xl mt-2'>Order Now</p>
        <p className='bg-green-600 w-max p-2 text-white rounded-2xl  shadow-3xl mt-2'>  <i className='p-2'> <FontAwesomeIcon icon={faPhone} /></i>Contact us</p>
    </div>
    </div>
    <div>
    <img className='w-[400px] mr-32 mt-5' src={Intersect} alt="picture" />


    </div>

    </div>
  )
}

export default HeroSection