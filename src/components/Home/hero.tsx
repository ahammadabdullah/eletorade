import electorade from "@/assets/images/ELECTORADE1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          <h3 className="text-background font-tungsten text-[450px] font-medium text-center">
            ELECTORADE
          </h3>
          <div className="absolute inset-0 mask-gradient-bottom">
            <Image
              src={electorade}
              alt="hero image"
              className=" object-cover"
            />
          </div>
        </div>
        <div className="text-white flex justify-between items-end">
          <div className="font-neuehaas text-8xl">
            <h1>Healthy Electrolyte</h1>
            <h1 className="text-primary">Sports Drink</h1>
          </div>
          <div className="font-industry text-4xl font-normal">
            <h1>Formulated in Australia and</h1>
            <h1>Manufactured in Bangladesh</h1>
          </div>
        </div>
        <div className="pt-5">
          <hr className="bg-primary border-none h-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
