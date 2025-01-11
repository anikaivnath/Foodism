import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'

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

        <div className='flex flex-row justify-around w-40'> 
        <i> <FontAwesomeIcon icon={faSearch} /></i>
        <i> <FontAwesomeIcon icon={faCartShopping} /></i>
        <i><FontAwesomeIcon icon={faPhone}/></i>

        </div>
        

    
        </div>
    </div>
  )
}

export default NavBar