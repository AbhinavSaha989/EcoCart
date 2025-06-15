import React from "react";
import { Link } from "react-router-dom";

const GreenNavbar = () => {
  return (
    <div className="bg-[#232f3e] text-white font-semibold text-sm h-10 flex items-center px-5">
      <ul className="flex flex-wrap items-center gap-5 w-full overflow-x-auto">
        <li>
          <Link to="/ecocart" className="text-[#14b451] hover:text-[#FF9900]">
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Today's Deals
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Amazon miniTV
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Amazon Pay
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Personal Care
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Bamboo
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Home & Kitchen
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#FF9900]">
            Gift Cards
          </a>
        </li>
        <li>
          <Link to="/about" className="text-[#14b451] hover:text-[#FF9900]">
            About
          </Link>
        </li>

        <li>
          <a href="#" className="hover:text-[#FF9900]">
            More
          </a>
        </li>
      </ul>
    </div>
  );
};

export default GreenNavbar;
