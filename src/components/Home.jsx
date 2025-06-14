import React from "react";
import Product from "./Product";
import ImageSlider from "./Imageslider";
import Productbutton from "./Productbutton";
import Productbutton1 from "./Productbutton1";

function Home() {
  return (
    <div className="flex justify-center mx-auto max-w-[2000px]">
      <div className="w-full">
        {/* ImageSlider as banner */}
        <ImageSlider />

        {/* Banner Image */}

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 px-2 z-10">
          <Productbutton
            id="12321341"
            title="Disposable Plastic Drinking Straws – a pack of 100 clear, BPA-free straws designed for convenience and reliability, 7.75-inch"
            price={7.5}
            rating={3}
            image="/straw.jpg"
            badge_id={0}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="/mixer.jpg"
            badge_id={0}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-4 px-2 z-10 mt-4">
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="/tablet.jpg"
            badge_id={0}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="/echo.jpg"
            badge_id={0}
          />
          <Productbutton1
            id="958462"
            title="Woven Bag for Women, Leather Tote Bag Large Summer Beach Travel Handbag and Purse Retro Handmade Shoulder Bag"
            price={19.99}
            rating={5}
            image="/leatherbag.jpg"
            badge_id={0}
          />
        </div>

        {/* Row 3 */}
        <div className="flex justify-center px-2 z-10 mt-4">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="/monitor.jpg"
            badge_id={0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
