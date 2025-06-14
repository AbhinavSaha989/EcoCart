import GreenProduct from "./GreenProduct";
import ImageSliderGreen from "./GreenImageslider";

function GreenHome() {
  return (
    <>
      {/* Main Container */}
      <div className="flex justify-center mx-auto max-w-[2000px]">
        <div className="w-full mb-16">
          <ImageSliderGreen />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <GreenProduct
          id="843800"
          title="Beco Bamboo Kitchen Towels, 100% Natural and Ecofriendly Alternative"
          price={6.35}
          carbon_red={65}
          rating={5}
          image="/tissue_eco.jpg"
        />
        <GreenProduct
          id="875615"
          title="Jutify Eco-Friendly Printed Canvas Shopping Tote Bag"
          price={15.35}
          carbon_red={60}
          rating={4}
          image="/bag_eco.jpg"
        />
        <GreenProduct
          id="875617"
          title="Qudrat Biodegradable Natural Coconut Leaf Straws (100 Pack)"
          price={8.99}
          carbon_red={75}
          rating={4}
          image="/straw_eco.jpg"
        />
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <GreenProduct
          id="9513254"
          title="Wooden Eyewear Holder Made With Sheesham Wood"
          price={37.99}
          carbon_red={50}
          rating={3}
          image="/sunglasses_eco.jpg"
        />
        <GreenProduct
          id="1001002"
          title="Terracotta Clay Water Bottle | Plastic-Free"
          price={25.78}
          carbon_red={65}
          rating={5}
          image="/bottle_eco.jpg"
        />
        <GreenProduct
          id="1657495"
          title="Bamboo Dish Mats / Coasters 30x30cm | Durable"
          price={21}
          carbon_red={70}
          rating={4}
          image="/mats_eco.jpg"
        />
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-center gap-4 px-4 mt-12">
        <GreenProduct
          id="1625854"
          title="Hand Made Jute Hanging Chair | Durable & Stylish"
          price={599.99}
          carbon_red={50}
          rating={4}
          image="/hangingchair_eco.png"
        />
        <GreenProduct
          id="1625957"
          title="Eco-Friendly Foldable Bamboo Laundry Basket - 57L"
          price={20.99}
          carbon_red={85}
          rating={4}
          image="/bamboolaundry.jpg"
        />
        <GreenProduct
          id="958745"
          title="Sow and Grow Plantable Recycled Paper Pencils (Pack of 10)"
          price={14.0}
          carbon_red={80}
          rating={4}
          image="/pencils_eco.jpg"
        />
      </div>
    </>
  );
}

export default GreenHome;
