import React from "react";
import useCartStore from "../store/cartStore";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleProceed = () => {
    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">
            Your cart is empty.
            <div className="mt-4">
              <Link
                to="/"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Go Shopping
              </Link>
            </div>
          </div>
        ) : (
          <>
            <ul>
              {cart.map((item, idx) => (
                <li
                  key={item.id + idx}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-gray-600 text-sm">${item.price}</div>
                      <div className="text-yellow-500 text-xs">
                        {"⭐".repeat(item.rating || 0)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="text-xl font-bold">
                Total: ${total.toFixed(2)}
              </div>
              <button
                onClick={clearCart}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={handleProceed}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded shadow"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
