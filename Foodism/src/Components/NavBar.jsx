import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div>
        <div className='flex justify-around'>
        <div>
        <h1 className='text-4xl font-bold mt-2 '>
            <span className='bg-green-400 w-max  text-white rounded-xl px-2' >F</span>oodism
        </h1>
        </div>

        <div className=' w-80 flex justify-around text-xl mt-5 '>
        <p className='text-green-600'>Home</p>
        <p>Menu</p>
        <p>Services</p>
        <p>Offers</p>

        </div>

        <div className='flex flex-row justify-around w-40 mt-5 cursor-pointer'> 
        <i className='text-xl'> <FontAwesomeIcon icon={faSearch} /></i>
        <i className='text-xl'> <FontAwesomeIcon icon={faCartShopping} /></i>
        <i className='text-xl text-white bg-green-400 px-4 rounded-xl'><FontAwesomeIcon icon={faPhone}/></i>

        </div>
        

    
        </div>
    </div>
  )
}

export default NavBar