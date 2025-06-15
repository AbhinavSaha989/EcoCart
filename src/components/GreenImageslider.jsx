import React, { useEffect, useState } from "react";

function ImageSliderGreen() {
  const imgs = [
    { id: 0, value: "/carousel_4.jpg" },
    { id: 1, value: "/carousel_5.jpg" },
    { id: 2, value: "/carousel_2.jpg" },
    { id: 3, value: "/carousel_1.jpg" },
  ];

  const [val, setVal] = useState(0);

  const handleNext = () => {
    setVal((prev) => (prev < imgs.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setVal((prev) => (prev > 0 ? prev - 1 : imgs.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [val]);

  return (
    <div className="flex flex-col items-center relative">
      {imgs[val].type === "video/mp4" ? (
        <video
          className="w-full h-full object-cover mask-gradient-dark"
          autoPlay
          loop
          muted
        >
          <source src={imgs[val].value} type="video/mp4" />
        </video>
      ) : (
        <img
          src={imgs[val].value}
          alt="Slide"
          className="w-full h-auto -mb-36 z-[-1] mask-gradient-dark"
        />
      )}

      <div className="absolute top-full transform -translate-y-1/2 flex justify-between w-full px-4 z-10">
        <button onClick={handlePrev} className="bg-transparent border-none">
          <img
            src="/prev.png"
            className="w-[30px] h-[30px] invert"
            alt="Previous"
          />
        </button>
        <button onClick={handleNext} className="bg-transparent border-none">
          <img
            src="/next.png"
            className="w-[30px] h-[30px] invert"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}

export default ImageSliderGreen;
