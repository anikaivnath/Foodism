import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Intersect from "./Intersect.png";
import Rectangle from "./Rectangle 9.png";

const HeroSection = () => {
  return (
    <div className='flex justify-between items-center px-8 md:px-32 py-12'>
      {/* Left Section */}
      <div className='text-justify'>
        <h1 className='text-3xl md:text-4xl font-bold w-[280px] md:w-[400px]'>
          Dive into Delights Of Delectable <span className='text-green-400'>Food</span>
        </h1>
        <p className='w-[320px] md:w-[400px] mt-4 text-gray-700'>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </p>
        
        {/* Buttons */}
        <div className='flex gap-4 mt-4'>
          <button className='bg-green-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-green-700 transition'>
            Order Now
          </button>
          <button className='bg-green-600 text-white px-4 py-2 rounded-2xl shadow-md flex items-center gap-2 hover:bg-green-700 transition'>
            <FontAwesomeIcon icon={faPhone} />
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className='relative'>
        <img className='absolute mt-12 ml-2 w-[450px] hidden md:block' src={Rectangle} alt="background" />
        <img className='w-[300px] md:w-[400px] relative' src={Intersect} alt="picture" />
      </div>
    </div>
  );
}

export default HeroSection;
