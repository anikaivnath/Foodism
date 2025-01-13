import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import itm from './image/itm.png';
import Item from "./image/Item.png";
import Intersect from "./image/Intersect.png";
import Rectangle from "./image/Rectangle 9.png";

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
          <button className='bg-green-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-green-700 transition shadow-lg'>
            Order Now
          </button>
          <button className='bg-green-600 shadow-lg text-white px-4 py-2 rounded-2xl shadow-md flex items-center gap-2 hover:bg-green-700 transition'>
            <FontAwesomeIcon icon={faPhone} />
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className='relative'>
        <img className='absolute mt-32 ml-10  w-[400px] hidden md:block' src={Rectangle} alt="background" />
        <img className='w-[460px] relative' src={Intersect} alt="picture" />
        <div className="absolute top-6 left-8 bg-white px-3 py-1 rounded-lg shadow-md">
          <p className="text-xs text-red-500 font-bold relative ">Hot Spicy Food 🌶️</p>
        </div>

        <div className='flex gap-16 absolute bottom-0 right-0'>
          <div className='flex bg-sky-200 text-sm max-w-max max-h-max rounded-lg shadow-2xl '>
            <img className='w-20 h-[70px]' src={Item} alt="" />
            <div className='flex flex-col text-center'>
              <p className='text-sm'>salad</p>
              <div className='text-yellow-400 text-sm w-24'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className='pb-2 text-sm'> <span className='text-red-800'>$</span>23.00</p>
            </div>
          </div>

          <div className='flex bg-sky-200 max-w-max h-[66px] rounded-lg shadow-2xl'>
            <img className='w-20 h-[70px] rounded-lg' src={itm} alt="" />
            <div className='p-2'>
              <p className='text-sm text-center'>Noodles</p>
              <div className='text-yellow-400 text-sm w-24'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className='pb-2 text-sm text-center'> <span className='text-red-800'>$</span>18.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
