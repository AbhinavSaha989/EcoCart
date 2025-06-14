import React, { useState } from "react";
import { Link } from "react-router-dom";

function Productbutton({ title, image, id, price, rating, badge_id }) {
  const [cartItems, setCartItems] = useState([]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const addToBasket = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
      badge_id,
    };

    setCartItems([...cartItems, item]);
    console.log("Added to mock cart:", item);
  };

  return (
    <div className="flex flex-col items-center justify-end m-2 p-5 w-full max-w-[300px] min-w-[150px] max-h-[450px] bg-white z-10 shadow-md rounded-md">
      <div className="h-[100px] mb-4">
        <p className="text-sm font-medium">{title}</p>
        <div className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full max-h-[200px] object-contain mb-4"
      />
      <button
        onClick={addToBasket}
        className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded shadow"
      >
        Add to Cart ({cartItems.length})
      </button>
      <Link to="/product1" onClick={handleLinkClick}>
        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 mt-3 rounded shadow">
          Available on Greenovation
        </button>
      </Link>
    </div>
  );
}

export default Productbutton;
