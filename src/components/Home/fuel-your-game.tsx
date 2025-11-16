import Image from "next/image";

import frame1 from "@/assets/images/frame1.png";
import frame2 from "@/assets/images/frame2.png";
import frame3 from "@/assets/images/frame3new.png";
import frame4 from "@/assets/images/frame4.png";
import frame5 from "@/assets/images/frame5.png";
import HexButton from "../common/Button";

const FuelYourGame = () => {
  return (
    <section className="bg-black/80">
      <div className="max-w-7xl mx-auto ">
        <h3 className="text-3xl md:text-7xl font-industry text-center font-normal text-white py-10 ">
          FUEL YOUR <span className="text-primary">GAME</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:items-center text-center pb-10 px-8">
          {/* Left Column */}
          <div>
            <Image src={frame1} alt="Athlete" className="w-full mt-4" />
            <Image
              src={frame2}
              alt="Athlete"
              className="w-full mt-4 grayscale "
            />
            <div className="w-full mt-10 md:hidden">
              <HexButton>Learn More</HexButton>
            </div>
          </div>

          {/* Center Bottle */}
          <div className=" flex-col items-center hidden md:flex">
            <Image
              src={frame3}
              alt="Athlete"
              className="w-full mt-4 object-cover"
            />
          </div>

          {/* Right Column */}
          <div>
            <Image
              src={frame3}
              alt="Athlete"
              height={106}
              className="w-full mt-4 h-[106px] object-cover md:hidden"
            />
            <Image src={frame4} alt="Athlete" className="w-full mt-4" />
            <Image src={frame5} alt="Athlete" className="w-full mt-4" />
          </div>
        </div>

        <div className="hidden md:flex pb-10 justify-between items-center ">
          <div className="h-[2px] w-1/3 bg-primary">a</div>
          <HexButton>Learn More</HexButton>
          <div className="h-[2px] w-1/3 bg-primary">a</div>
        </div>
      </div>
    </section>
  );
};

export default FuelYourGame;
