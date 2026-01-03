import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faStar } from '@fortawesome/free-solid-svg-icons';
const journey = () => {
  return (
    <div className='flex'>
      <div className='w-80 '>
        <div>
          <p className='text-red-600 font-bold text-center '>Our Story & Services</p>
          <div className=''>
            <h1 className='text-black font-bold text-[30px]'>Our Culinary Journey And Services</h1>
          </div>
          <div><p>Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with
            warm hospitality.</p>
          </div>
          <p className=' bg-green-700 w-max p-2 text-white rounded'>Explore</p>
        </div>
      </div>
      <div>
         <div className='w-[180px] justify-center text-green-600 shadow-lg shadow-black p-2 rounded-2xl'>
        <p className='text-center text-2xl'>
          <FontAwesomeIcon icon={faMugHot} />
        </p>
        <p className='text-center text-xl'>
          Catering
        </p>
        <p className='pl-2 text-center text-green-300' >Delight your guests with our flavors and presentation</p>
      </div>
      </div>

     



    </div>
  )
}

export default journey