import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../store/cartStore";

// Mock product data with unique ecoScore and targetStats
const mockProducts = [
  {
    id: "843800",
    title: "Beco Bamboo Kitchen Towels, 100% Natural and Ecofriendly Alternative",
    image: "/tissue_eco.jpg",
    price: 6.35,
    originalPrice: 8.99,
    rating: 5,
    ecoScore: 9.2,
    targetStats: [
      { label: "Reusability", value: 85 },
      { label: "Recyclability", value: 95 },
      { label: "Resale", value: 60 },
    ],
  },
  {
    id: "875615",
    title: "Jutify Eco-Friendly Printed Canvas Shopping Tote Bag",
    image: "/bag_eco.jpg",
    price: 15.35,
    originalPrice: 19.95,
    rating: 4,
    ecoScore: 8.7,
    targetStats: [
      { label: "Reusability", value: 95 },
      { label: "Recyclability", value: 80 },
      { label: "Resale", value: 75 },
    ],
  },
  {
    id: "875617",
    title: "Qudrat Biodegradable Natural Coconut Leaf Straws (100 Pack)",
    image: "/straw_eco.jpg",
    price: 8.99,
    originalPrice: 12.99,
    rating: 4,
    ecoScore: 8.1,
    targetStats: [
      { label: "Reusability", value: 60 },
      { label: "Recyclability", value: 90 },
      { label: "Resale", value: 40 },
    ],
  },
  {
    id: "9513254",
    title: "Wooden Eyewear Holder Made With Sheesham Wood",
    image: "/sunglasses_eco.jpg",
    price: 37.99,
    originalPrice: 49.99,
    rating: 3,
    ecoScore: 7.5,
    targetStats: [
      { label: "Reusability", value: 80 },
      { label: "Recyclability", value: 70 },
      { label: "Resale", value: 65 },
    ],
  },
  {
    id: "1001002",
    title: "Terracotta Clay Water Bottle | Plastic-Free",
    image: "/bottle_eco.jpg",
    price: 25.78,
    originalPrice: 32.99,
    rating: 5,
    ecoScore: 8.9,
    targetStats: [
      { label: "Reusability", value: 90 },
      { label: "Recyclability", value: 85 },
      { label: "Resale", value: 60 },
    ],
  },
  {
    id: "1657495",
    title: "Bamboo Dish Mats / Coasters 30x30cm | Durable",
    image: "/mats_eco.jpg",
    price: 21,
    originalPrice: 29.99,
    rating: 4,
    ecoScore: 8.3,
    targetStats: [
      { label: "Reusability", value: 88 },
      { label: "Recyclability", value: 92 },
      { label: "Resale", value: 55 },
    ],
  },
  {
    id: "1625854",
    title: "Hand Made Jute Hanging Chair | Durable & Stylish",
    image: "/hangingchair_eco.png",
    price: 599.99,
    originalPrice: 799.99,
    rating: 4,
    ecoScore: 7.8,
    targetStats: [
      { label: "Reusability", value: 75 },
      { label: "Recyclability", value: 60 },
      { label: "Resale", value: 80 },
    ],
  },
  {
    id: "1625957",
    title: "Eco-Friendly Foldable Bamboo Laundry Basket - 57L",
    image: "/bamboolaundry.jpg",
    price: 20.99,
    originalPrice: 27.99,
    rating: 4,
    ecoScore: 8.0,
    targetStats: [
      { label: "Reusability", value: 85 },
      { label: "Recyclability", value: 88 },
      { label: "Resale", value: 50 },
    ],
  },
  {
    id: "958745",
    title: "Sow and Grow Plantable Recycled Paper Pencils (Pack of 10)",
    image: "/pencils_eco.jpg",
    price: 14.0,
    originalPrice: 19.99,
    rating: 4,
    ecoScore: 8.6,
    targetStats: [
      { label: "Reusability", value: 70 },
      { label: "Recyclability", value: 98 },
      { label: "Resale", value: 30 },
    ],
  },
];

function ProductDetails() {
  const { id } = useParams();

  // Find product by id or fallback to first
  const product = mockProducts.find((p) => p.id === id) || mockProducts[0];

  const [animatedScore, setAnimatedScore] = useState(0);
  const [animatedWidths, setAnimatedWidths] = useState(
    product.targetStats.map(() => 0)
  );

  const addToCart = useCartStore((state) => state.addToCart); // <-- Zustand addToCart

  useEffect(() => {
    // Animate Eco Score
    let start = 0;
    const duration = 1000;
    const increment = product.ecoScore / (duration / 20);

    const scoreInterval = setInterval(() => {
      start += increment;
      if (start >= product.ecoScore) {
        setAnimatedScore(product.ecoScore);
        clearInterval(scoreInterval);
      } else {
        setAnimatedScore(parseFloat(start.toFixed(1)));
      }
    }, 20);

    // Animate Bars
    setTimeout(() => {
      setAnimatedWidths(product.targetStats.map((stat) => stat.value));
    }, 200);

    return () => clearInterval(scoreInterval);
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product); // <-- Add to global cart
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-12 p-8 bg-gray-100 min-h-screen">
      {/* Image + Score */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="w-80 h-80 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-full max-w-full rounded"
          />
        </div>
        <div className="mt-4 text-xl font-semibold text-green-600">
          Eco Score: <span>{animatedScore.toFixed(1)}/10</span>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-xl bg-white rounded-lg shadow-md p-6 w-full sm:w-[500px]">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-yellow-500 mb-3">
          {"⭐".repeat(product.rating)} (63 reviews)
        </p>

        <div className="text-lg mb-4">
          <span className="text-red-500 font-bold mr-2">${product.price}</span>
          <span className="line-through text-gray-500">
            ${product.originalPrice}
          </span>
          <span className="ml-2 text-green-600 text-sm">(30% off)</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          This is a mock description for {product.title}. It is eco-friendly and
          sustainable.
        </p>

        {/* Animated Eco Stats */}
        <div className="w-full bg-green-50 p-4 rounded-md mb-6 shadow-sm">
          {product.targetStats.map(({ label, value }, index) => (
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