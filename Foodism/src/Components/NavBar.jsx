import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div>
        <div>
        <div>
        <h1 className='text-4xl font-bold '>
            <span className='bg-green-400 w-max  text-white rounded-xl' >F</span>oodism
        </h1>

        </div>

        <div className=' w-80 flex justify-around '>
        <p className='text-green-600'>Home</p>
        <p>Menu</p>
        <p>Services</p>
        <p>Offers</p>

        </div>

        <div>
        <i> <FontAwesomeIcon icon={faEnvelope} /></i>
        

        </div>
        

    
        </div>
    </div>
  )
}

export default NavBar