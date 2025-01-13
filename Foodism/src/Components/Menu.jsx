import React from "react";
import { useNavigate } from "react-router-dom";

import Burger from "./image/Burger.png"; 
import pizza from "./image/pizza.png"; 
import pasta from "./image/pasta.png"; 
import Fish from "./image/fish.png"; 
import Rice from "./image/Rice.png"; 
import Sushi from "./image/Sushi.png"; 
import Chicken from "./image/Chickn.png"; 
import salad from "./image/Salad.png"; 
import Soup from "./image/Soup.png"; 
import Cake from "./image/Cake.png";

const menuItems = [
  { src: Burger, name: "Burger" },
  { src: pizza, name: "Pizza" },
  { src: pasta, name: "Pasta" },
  { src: Rice, name: "Rice" },
  { src: Sushi, name: "Sushi" },
  { src: Fish, name: "Fish" },
  { src: Chicken, name: "Chicken" },
  { src: salad, name: "Salad" },
  { src: Soup, name: "Soup" },
  { src: Cake, name: "Cake" }
];

const Menu = () => {
  const navigate = useNavigate(); // Hook for navigation
  return (
    <div className='bg-blue-200'>
      <div className='text-center p-4 font-custom '>
        <h1 className='text-xl'>Satisfy your cravings with food made to lift your mood</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-10 drop-shadow-2xl-lg'>
        {menuItems.map((item, index) => (
          <div key={index} className='text-center'>
            <img className='w-[300px] h-[300px] rounded-lg' src={item.src} alt={item.name} />
            <div className='font-custom mt-2'>
              <p className='text-xl'>{item.name}</p>
              <p 
                className='font-custom mt-2 bg-green-600 text-white rounded-lg p-2 cursor-pointer hover:bg-green-700'
                onClick={() => navigate(`/food/${item.name}`)} 
              >
                View
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
