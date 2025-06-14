import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById("itemToTrack");

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#232f3e] text-white flex justify-between items-center px-5 py-[5px] h-10 text-sm font-bold">
      <div className="flex items-center">
        <ul className="list-none flex mx-2 px-2">
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              All
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Fresh
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Today's Deals
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Buy Again
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Electronics
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Amazon Pay
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Home & Kitchen
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Amazon miniTV
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Sell
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Gift cards
            </a>
          </li>
          <li className="mr-5">
            <a href="#" className="hover:text-[#FF9900]">
              Health, Household & Personal Care
            </a>
          </li>

          <div className="relative flex">
            <Link to="/green" className="no-underline">
              <button
                id="itemToTrack"
                className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded-lg"
              >
                Greenovation Zone
              </button>
            </Link>

            {showPopover && !dontShowAgain && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[30%] w-[300px] bg-white text-black font-medium rounded shadow-md p-4 z-10 text-center">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>
                <p>
                  Introducing our brand new section
                  <br />
                  Greenovation Zone
                </p>
                <button
                  onClick={closePopover}
                  className="bg-[#febd69] hover:bg-[#f9c989] text-black font-bold py-2 px-6 mt-2 rounded shadow-md"
                >
                  Got It
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
