import ImageSlider from "./Imageslider";
import GreenProduct from "./GreenProduct";

function Home() {
  return (
    <div className="flex justify-center mx-auto max-w-[2000px]">
      <div className="w-full">
        {/* ImageSlider as banner */}
        <ImageSlider />

        {/* Banner Image */}

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 px-2 z-10">
          <GreenProduct
            id="12321341"
            title="Disposable Plastic Drinking Straws – a pack of 100 clear, BPA-free straws designed for convenience and reliability, 7.75-inch"
            price={7.5}
            rating={3}
            image="/straw.jpg"
            ecoFriendly={false}
            CO2={0.4}
          />
          <GreenProduct
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="/mixer.jpg"
            ecoFriendly={false}
            CO2={3.2}
          />
          <GreenProduct
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="/mixer.jpg"
            ecoFriendly={false}
            CO2={3.2}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-4 px-2 z-10 mt-4">
          <GreenProduct
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="/tablet.jpg"
            ecoFriendly={false}
            CO2={80}
          />
          <GreenProduct
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="/echo.jpg"
            ecoFriendly={false}
            CO2={12}
          />
          <GreenProduct
            id="958462"
            title="Woven Bag for Women, Leather Tote Bag Large Summer Beach Travel Handbag and Purse Retro Handmade Shoulder Bag"
            price={19.99}
            rating={5}
            image="/leatherbag.jpg"
            ecoFriendly={false}
            CO2={1.1}
          />
        </div>

        {/* Row 3 */}
        <div className="flex justify-center px-2 z-10 mt-4">
          <GreenProduct
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="/monitor.jpg"
            ecoFriendly={false}
            CO2={120}
          />
          <GreenProduct
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="/monitor.jpg"
            ecoFriendly={false}
            CO2={120}
          />
          <GreenProduct
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="/monitor.jpg"
            ecoFriendly={false}
            CO2={120}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
