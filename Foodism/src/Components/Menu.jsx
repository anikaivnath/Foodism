import React from 'react';
import Burger from './image/Burger.png';  



const Menu = () => {
  return (
    <div>
      <div className='text-center m-4 font-custom'> 
        <h1 className='text-xl'>Satisfy your cravings with food made to lift your mood</h1>
      </div>
      <div>
        <img src={Burger} alt="Burger" />
        <img className='w-28 h-20 rounded-lg' src={image} alt="" />
      </div>
    </div>
  );
};

export default Menu;
