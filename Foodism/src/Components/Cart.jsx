import React from "react";

const Cart = ({ cart, setCart }) => {

  const cartItems = cart.reduce((acc, meal) => {
    acc[meal.idMeal] = acc[meal.idMeal]
      ? { ...acc[meal.idMeal], quantity: acc[meal.idMeal].quantity + 1 }
      : { ...meal, quantity: 1 };
    return acc;
  }, {});

  const handleCancel = (idMeal) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const mealIndex = updatedCart.findIndex((meal) => meal.idMeal === idMeal);

      if (mealIndex !== -1) {
        if (updatedCart[mealIndex].quantity > 1) {
          updatedCart[mealIndex].quantity -= 1;
        } else {
          updatedCart.splice(mealIndex, 1); 
        }
      }

      return updatedCart;
    });
  };

  
  const totalPrice = Object.values(cartItems).reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="bg-sky-200 min-h-screen p-4">
      <h1 className="text-center text-2xl font-bold">Your Cart</h1>

      {Object.keys(cartItems).length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10 mt-4">
          {Object.values(cartItems).map((meal) => (
            <div key={meal.idMeal} className="text-center bg-white p-4 rounded-lg shadow-md">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[250px] h-[250px] rounded-xl" />
              <h3 className="mt-2 font-semibold">{meal.strMeal}</h3>
              <p className="text-red-800 font-bold">Price: ${meal.price?.toFixed(2)}</p>
              <p className="text-gray-700">Quantity: {meal.quantity}</p>
              <button
                onClick={() => handleCancel(meal.idMeal)}
                className="bg-red-600 text-white rounded-lg px-4 py-2 mt-2 hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      )}

      {}
      {cart.length > 0 && (
        <div className="text-center mt-6 text-lg font-bold">
          Total Amount: ${totalPrice.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Cart;
