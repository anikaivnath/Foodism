import React from 'react'
import Burger from './image/Burger.png'
import Cake from './image/Cake.png'
import Rice from './image/Rice.png'
import Soup from './image/Soup.png'

const items =[
   {src:Burger,name:"Burger"},
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
        <div className='flex flex-row'>
        {
            items.map((item,index)=>(
                <div key={index}>
                <img src={item.src} alt={item.name} />
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