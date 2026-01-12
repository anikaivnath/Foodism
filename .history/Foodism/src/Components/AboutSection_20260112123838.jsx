import React from 'react'

import Burger from './image/Burger.png'
import Cake from './image/Cake.png'
import Rice from './image/Rice.png'
import Soup from './image/Soup.png'

const items =[
   { src:Burger,name:"Burger"},
   { src:Rice, name:"Rice"},
   { src:Cake, name:"Cake"},
   { src:Soup, name:"Soup"}
]

const AboutSection = () => {
  return (
    <div>
    <div className="text-center m-4 font-custom">
        <p>Customer Favorites</p>
        <h1 className='font-bold text-3xl mt-4'>Popular Catagories</h1>
    </div>
    <div>
        <div className='flex flex-row w-1/2 m-auto justify-center  mt-10  '>
        { 
            items.map((item,index)=>(
                <div key={index} className='text-center bg-white-600 px-8 shadow-slate-400 shadow-lg  rounded-2xl '>
                <img src={item.src} alt={item.name}  className='w-20 rounded-md'/>
                <h3>{item.name}</h3>
                </div>
            ))
        } 

        </div>
    </div>
    </div>
  )
}

export default AboutSection