import React from "react";
const Cart = ({ cart, setCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase! Your order has been placed.");
    setCart([]); // Clear cart after checkout
  };

  return (
    <div className="bg-sky-200 min-h-screen">
      <div className="text-center p-4 font-custom">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-10">
            {cart.map((meal, index) => (
              <div key={index} className="text-center">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-[250px] h-[250px] rounded-xl"
                />
                <h3 className="mt-2 font-custom text-lg">{meal.strMeal}</h3>
                <p className="text-red-800 font-bold">Price: ${meal.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-800 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-700 mt-2"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <h2 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleCheckout}
              className="bg-green-800 text-white rounded-lg px-6 py-3 cursor-pointer hover:bg-green-700 font-bold"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
