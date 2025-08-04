import Image from "next/image";
import React from "react";
import orange from "@/assets/images/orange.png";
import lemon from "@/assets/images/lemon.png";
import HexButton from "../common/Button";

const hexPath1 = "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)";
// const hexPath2 = "polygon(100% 0, 100% 80%, 80% 100%, 0 100%, 0 0)";
const PickYourPower = () => {
  return (
    <section className="bg-black/80 pb-10">
      <div className="max-w-7xl mx-auto ">
        <h3 className="text-3xl md:text-7xl font-industry text-center font-normal text-white py-10 ">
          PICK YOUR <span className="text-primary">POWER</span>
        </h3>

        <div>
          <div className="flex justify-between items-center md:flex-row flex-col">
            <Image
              src={lemon}
              alt="product_image"
              style={{ clipPath: hexPath1 }}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="text-white flex-1 flex justify-center items-center">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-8xl font-tungsten font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  ORANGE BLAZE
                </h1>
                <p className="font-industry text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Citrusy Boost For Maximum Energy
                </p>
                <ul className="font-industry text-2xl mt-5 text-center md:text-left">
                  <li>-Instant Hydration</li>
                  <li>-Endurance Fuel</li>
                  <li>-Refreshing Citrus Kick</li>
                </ul>
                <h3 className="font-industry text-4xl my-5 ">BDT 30</h3>
                <HexButton>Drink Now</HexButton>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center md:flex-row flex-col-reverse mt-10 md:mt-0">
            <div className="text-white flex-1 flex justify-center items-center">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-8xl font-tungsten font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  LEMON STORM
                </h1>
                <p className="font-industry text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Zesty Refreshment for Peak Performance
                </p>
                <ul className="font-industry text-2xl mt-5 text-center md:text-left">
                  <li>-Instant Hydration</li>
                  <li>-Endurance Fuel</li>
                  <li>-Refreshing Citrus Kick</li>
                </ul>
                <h3 className="font-industry text-4xl my-5">BDT 45 </h3>
                <HexButton>Drink Now</HexButton>
              </div>
            </div>
            <Image
              src={orange}
              alt="product_image"
              style={{ clipPath: hexPath1 }}
              className="w-full md:w-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickYourPower;
