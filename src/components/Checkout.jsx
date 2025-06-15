import React, { useState, useEffect } from "react";
import useCartStore from "../store/cartStore";
import { Link, useNavigate } from "react-router-dom";

// Example eco-friendly alternatives (should match your GreenHome products)
const ecoAlternatives = [
  {
    id: "843800",
    title:
      "Beco Bamboo Kitchen Towels, 100% Natural and Ecofriendly Alternative",
    price: 6.35,
    rating: 5,
    image: "/tissue_eco.jpg",
    ecoFriendly: true,
    CO2: 0.3,
  },
  {
    id: "875615",
    title: "Jutify Eco-Friendly Printed Canvas Shopping Tote Bag",
    price: 15.35,
    rating: 4,
    image: "/bag_eco.jpg",
    ecoFriendly: true,
    CO2: 0.5,
  },
  // ...add more as needed
];

// CO2 level helper
function getCO2Level(CO2) {
  if (CO2 < 0.5)
    return { label: "Low CO₂", color: "bg-green-200 text-green-800" };
  if (CO2 < 1.5)
    return { label: "Medium CO₂", color: "bg-yellow-200 text-yellow-800" };
  return { label: "High CO₂", color: "bg-red-200 text-red-800" };
}

// Improved BarGraph for better visibility and difference highlighting
function BarGraph({ label, value1, value2, color1, color2, unit }) {
  const max = Math.max(value1, value2, 1);
  const minBarWidth = 24; // px
  const width1 = Math.max(Math.round((value1 / max) * 100), 10);
  const width2 = Math.max(Math.round((value2 / max) * 100), 10);

  // Calculate percentage difference
  const diff = value1 - value2;
  const percentDiff = max !== 0 ? Math.round((diff / max) * 100) : 0;

  return (
    <div className="mb-4">
      <div className="text-xs font-semibold mb-1">{label}</div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div
            className={`h-4 rounded ${color1} flex items-center justify-end pr-2 text-xs text-white`}
            style={{
              width: `${width1}%`,
              minWidth: minBarWidth,
              transition: "width 0.4s",
            }}
            title={value1 + " " + unit}
          >
            {value1} {unit}
          </div>
          <span className="text-[10px] text-gray-500 ml-1">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`h-4 rounded ${color2} flex items-center justify-end pr-2 text-xs text-white`}
            style={{
              width: `${width2}%`,
              minWidth: minBarWidth,
              transition: "width 0.4s",
            }}
            title={value2 + " " + unit}
          >
            {value2} {unit}
          </div>
          <span className="text-[10px] text-gray-500 ml-1">Eco Alt</span>
        </div>
      </div>
      {value1 !== value2 && (
        <div className="text-xs mt-1 text-gray-600">
          Difference:{" "}
          <span className={diff > 0 ? "text-green-700" : "text-red-700"}>
            {Math.abs(diff).toFixed(2)} {unit} ({Math.abs(percentDiff)}%)
          </span>
        </div>
      )}
    </div>
  );
}

function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const [modalProduct, setModalProduct] = useState(null);
  const [modalCompare, setModalCompare] = useState(null);
  const [roundUp, setRoundUp] = useState(false);
  const [smartPack, setSmartPack] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([false, false, false]);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const roundedTotal = Math.ceil(total);
  const greenCauseAmount = roundUp ? (roundedTotal - total).toFixed(2) : "0.00";
  const totalCO2 = cart.reduce((sum, item) => sum + (item.CO2 || 0), 0);

  // --- Smart Packaging Optimization Logic ---
  const options = [
    {
      label: "Shipped from the same warehouse",
      available: cart.length > 1,
      co2Saved: 0.2 * cart.length,
    },
    {
      label: "Packed together",
      available: cart.length > 1,
      co2Saved: 0.1 * cart.length,
    },
    {
      label: "Delivered slower but more efficiently",
      available: true,
      co2Saved: total > 50 ? 0.3 * cart.length : 0.1 * cart.length,
    },
  ];

  // Only count CO2 saved for selected and available options
  const totalSaved =
    smartPack && cart.length > 0
      ? options.reduce(
          (sum, opt, idx) =>
            sum + (selectedOptions[idx] && opt.available ? opt.co2Saved : 0),
          0
        )
      : 0;

  const handleOptionToggle = (idx) => {
    if (!smartPack) return;
    if (!options[idx].available) return;
    setSelectedOptions((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  // When smartPack is toggled off or cart changes, uncheck all options
  useEffect(() => {
    if (!smartPack || cart.length === 0)
      setSelectedOptions([false, false, false]);
  }, [smartPack, cart.length]);

  const handleProceed = () => {
    clearCart();
    navigate("/order-confirmation");
  };

  // Find a random eco-friendly alternative for demo purposes
  const getEcoAlternative = () =>
    ecoAlternatives[Math.floor(Math.random() * ecoAlternatives.length)];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {/* Smart Packaging Optimization */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-lg">
                Smart Packaging Optimization
              </div>
              <div className="text-gray-600 text-sm">
                EcoCart checks if your items can be:
              </div>
            </div>
            {/* Toggle Switch */}
            <button
              className={`w-12 h-6 flex items-center rounded-full transition-colors duration-200 ${
                smartPack && cart.length > 0 ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => cart.length > 0 && setSmartPack((v) => !v)}
              aria-label="Toggle Smart Packaging"
              disabled={cart.length === 0}
              style={{
                cursor: cart.length === 0 ? "not-allowed" : "pointer",
                opacity: cart.length === 0 ? 0.5 : 1,
              }}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                  smartPack && cart.length > 0
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <ul className="mt-2 ml-1 space-y-2">
            {options.map((opt, i) => (
              <li key={i} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="accent-green-600 mr-2"
                  checked={smartPack && selectedOptions[i]}
                  disabled={!smartPack || !opt.available}
                  onChange={() => handleOptionToggle(i)}
                  id={`smart-opt-${i}`}
                />
                <label
                  htmlFor={`smart-opt-${i}`}
                  className={
                    !opt.available
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }
                  style={{
                    cursor:
                      !smartPack || !opt.available ? "not-allowed" : "pointer",
                  }}
                >
                  {opt.label}
                  {smartPack && selectedOptions[i] && opt.available && (
                    <span className="ml-2 text-green-700 text-xs font-semibold">
                      (−{opt.co2Saved.toFixed(2)} kg CO₂)
                    </span>
                  )}
                </label>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 mt-2">
            Suggests changes to{" "}
            <span className="font-semibold text-green-700">
              save packaging and CO₂
            </span>{" "}
            — without changing what you buy.
          </div>
          {smartPack && cart.length > 0 && (
            <div className="mt-2 text-green-700 font-semibold">
              Estimated CO₂ saved: {totalSaved.toFixed(2)} kg
            </div>
          )}
        </div>

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
              {cart.map((item, idx) => {
                const co2Level = getCO2Level(item.CO2);
                const ecoAlt = getEcoAlternative();
                return (
                  <li
                    key={item.id + idx}
                    className="flex flex-col gap-2 border-b py-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-contain rounded"
                        />
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-gray-600 text-sm">
                            ${item.price}
                          </div>
                          <div className="text-yellow-500 text-xs">
                            {"⭐".repeat(item.rating || 0)}
                          </div>
                          {/* CO2 Level Indicator */}
                          <div
                            className={`mt-2 px-3 py-1 rounded-full text-xs font-bold inline-block ${co2Level.color}`}
                          >
                            {co2Level.label} ({item.CO2} kg CO₂)
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                    {/* What if section for non-eco-friendly products */}
                    {!item.ecoFriendly && (
                      <div className="bg-green-50 border border-green-200 rounded p-3 mt-2 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-green-700 mb-1">
                            What if you tried an eco-friendly alternative?
                          </div>
                          <div className="flex items-center gap-3">
                            <img
                              src={ecoAlt.image}
                              alt={ecoAlt.title}
                              className="w-12 h-12 object-contain rounded"
                            />
                            <span className="text-sm font-medium">
                              {ecoAlt.title}
                            </span>
                          </div>
                        </div>
                        <button
                          className="ml-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          onClick={() => {
                            setModalProduct(ecoAlt);
                            setModalCompare(item);
                          }}
                        >
                          Try Eco-Friendly Alternative
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Round up for green cause */}
            <div className="flex items-center mt-6 mb-2">
              <input
                id="roundup"
                type="checkbox"
                checked={roundUp}
                onChange={() => setRoundUp((v) => !v)}
                className="mr-2 accent-green-600"
              />
              <label htmlFor="roundup" className="text-sm">
                Round up my total to the nearest dollar and donate $
                {greenCauseAmount} to a green cause 🌱
              </label>
            </div>
            {/* Total CO2 */}
            <div className="mb-2 text-green-700 font-semibold">
              Total CO₂ for your cart: {totalCO2.toFixed(2)} kg
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-xl font-bold">
                Total: ${roundUp ? roundedTotal.toFixed(2) : total.toFixed(2)}
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
      {/* Modal for eco-friendly alternative with bar graphs */}
      {modalProduct && modalCompare && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <img
              src={modalProduct.image}
              alt={modalProduct.title}
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-bold mb-2">{modalProduct.title}</h3>
            <p className="mb-4 text-green-700 font-semibold">
              Eco-Friendly Choice!
            </p>
            <BarGraph
              label="CO₂ Emissions"
              value1={modalCompare.CO2}
              value2={modalProduct.CO2}
              color1="bg-red-400"
              color2="bg-green-400"
              unit="kg"
            />
            <BarGraph
              label="Price"
              value1={modalCompare.price}
              value2={modalProduct.price}
              color1="bg-yellow-400"
              color2="bg-green-400"
              unit="$"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
              onClick={() => {
                setModalProduct(null);
                setModalCompare(null);
              }}
            >
              Close
            </button>
            <Link
              to="/ecocart"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded shadow ml-2"
              onClick={() => {
                setModalProduct(null);
                setModalCompare(null);
              }}
            >
              View All Eco Products
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
