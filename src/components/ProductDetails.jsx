import React, { useEffect, useState } from "react";

function ProductDetails() {
  const mockProduct = {
    id: "875615",
    title:
      "Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote Bag | Spacious, Stylish, Sturdy Handbag",
    image: "/straw_eco.jpg",
    price: 15.35,
    originalPrice: 19.95,
    rating: 4,
  };

  const targetStats = [
    { label: "Reusability", value: 80 },
    { label: "Recyclability", value: 90 },
    { label: "Resale", value: 70 },
  ];

  const ecoScore = 8.5;
  const [animatedScore, setAnimatedScore] = useState(0);
  const [animatedWidths, setAnimatedWidths] = useState(
    targetStats.map(() => 0)
  );

  useEffect(() => {
    // Animate Eco Score
    let start = 0;
    const duration = 1000;
    const increment = ecoScore / (duration / 20);

    const scoreInterval = setInterval(() => {
      start += increment;
      if (start >= ecoScore) {
        setAnimatedScore(ecoScore);
        clearInterval(scoreInterval);
      } else {
        setAnimatedScore(parseFloat(start.toFixed(1)));
      }
    }, 20);

    // Animate Bars
    setTimeout(() => {
      setAnimatedWidths(targetStats.map((stat) => stat.value));
    }, 200); // short delay before bars animate

    return () => clearInterval(scoreInterval);
  }, []);

  const handleAddToCart = () => {
    console.log("Added to cart:", mockProduct);
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-12 p-8 bg-gray-100 min-h-screen">
      {/* Image + Score */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="w-80 h-80 flex items-center justify-center">
          <img
            src={mockProduct.image}
            alt="Product"
            className="object-contain max-h-full max-w-full rounded"
          />
        </div>
        <div className="mt-4 text-xl font-semibold text-green-600">
          Eco Score: <span>{animatedScore.toFixed(1)}/10</span>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-xl bg-white rounded-lg shadow-md p-6 w-full sm:w-[500px]">
        <h2 className="text-xl font-semibold mb-2">{mockProduct.title}</h2>
        <p className="text-yellow-500 mb-3">
          {"⭐".repeat(mockProduct.rating)} (63 reviews)
        </p>

        <div className="text-lg mb-4">
          <span className="text-red-500 font-bold mr-2">
            ${mockProduct.price}
          </span>
          <span className="line-through text-gray-500">
            ${mockProduct.originalPrice}
          </span>
          <span className="ml-2 text-green-600 text-sm">(30% off)</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Jutify offers versatile cotton tote bags that are perfect for various
          purposes, such as shopping, work, travel, and more. These spacious and
          sturdy bags are made in India, promoting local employment. They are
          made of thick cotton fabric and come with an inner zip pocket for
          small essentials.
        </p>

        {/* Animated Eco Stats */}
        <div className="w-full bg-green-50 p-4 rounded-md mb-6 shadow-sm">
          {targetStats.map(({ label, value }, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-1">
                <div className="w-5 h-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center mr-2">
                  {label[0]}
                </div>
                <span className="text-gray-700 text-sm">{label}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                <div
                  className="bg-green-500 h-2 rounded transition-all duration-1000 ease-out"
                  style={{ width: `${animatedWidths[index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-green-600 text-sm mb-4">Available: In Stock</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
