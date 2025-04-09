import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faStar } from '@fortawesome/free-solid-svg-icons';
const journey = () => {
  return (
    <div>
    <div className='w-80 '>
    <div>
    <p>Our Story & Services</p>
    <div>
    <h1>Our Culinary Journey And Services</h1>
    </div>
    <div><p>Rooted in passion, we curate unforgettable dining experiences and 
     offer exceptional services, blending culinary artistry with  
     warm hospitality.</p>
    </div>
    <p className=' bg-green-700 w-max p-2 text-white rounded'>Explore</p>
    </div>
    </div>

    <div className='w-[200px] justify-center text-green-600 shadow-lg '>
  <p className='text-center text-2xl'>
    <FontAwesomeIcon icon={faMugHot} />
  </p>
  <p className='text-center text-xl'>
    Catering
  </p>
  <p>Delight your guests with our flavors and presentation</p>
</div>

    
    
    </div>
  )
}

export default journey