import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import useCartStore from "../store/cartStore"; // <-- Import Zustand store

function GreenHeader() {
  const cartCount = useCartStore((state) => state.cart.length); // <-- Zustand cart count

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <div className="h-14 flex items-center bg-[#4a7352] sticky top-0 z-50 px-4">
      {/* Logo */}
      <Link to="/">
        <img
          src="/amazon_logo.png"
          alt="amazon"
          className="w-24 mt-2 object-contain"
        />
      </Link>

      {/* Search */}
      <div className="flex flex-1 mx-4 items-center bg-white rounded overflow-hidden">
        <input
          type="text"
          className="flex-1 px-3 py-1 outline-none text-black"
          placeholder="Search products"
        />
        <div className="bg-yellow-500 px-2 py-1 flex items-center">
          <Search size={20} className="text-black" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-6 text-white text-sm font-semibold">
        <Link to="/login" className="hover:underline">
          <div>
            <p className="text-xs">Hello Guest</p>
            <p className="font-bold">Sign In</p>
          </div>
        </Link>

        <Link to="/orders" className="hover:underline">
          <div>
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
        </Link>

        <Link to="/dashboard" className="hover:underline">
          <div>
            <p className="text-xs">Your</p>
            <p className="font-bold">Dashboard</p>
          </div>
        </Link>

        <Link
          to="/checkout"
          onClick={handleLinkClick}
          className="flex items-center space-x-1"
        >
          <ShoppingCart className="text-white" />
          <span className="font-bold">{cartCount}</span>
        </Link>
      </div>
    </div>
  );
}

export default GreenHeader;
