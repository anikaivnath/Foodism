// Cart Component
const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="bg-sky-200 p-4">
      <h2 className="text-center text-2xl font-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center gap-10">
            {cart.map((item, index) => (
              <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md">
                <h3>{item.name}</h3>
                <p className="font-bold text-red-800">Price: ${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <h3 className="font-bold text-lg">Total: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
