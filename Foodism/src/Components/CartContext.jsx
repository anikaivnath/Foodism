import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, total }) => {
  return (
    <div className="bg-sky-200 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-custom">Your Cart</h1>
      </div>

      {cart.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10">
          {cart.map((item, index) => (
            <div key={index} className="text-center p-2 bg-white rounded-xl shadow-lg">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-[150px] h-[150px] rounded-xl"
              />
              <h3 className="mt-2 text-lg font-custom">{item.strMeal}</h3>
              <p className="text-red-800 font-bold">Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
      </div>

      <div className="mt-4 text-center">
        <Link
          to="/"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Go Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Cart;
