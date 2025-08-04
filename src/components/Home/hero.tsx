import electorade from "@/assets/images/ELECTORADE1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('/herobg.png')] bg-cover bg-black/80 bg-blend-multiply ">
      <div className="bg-[url('/heroGrid.png')] bg-cover bg-black/60 bg-blend-multiply">
        <div className="max-w-7xl mx-auto hidden md:block">
          <div className="relative overflow-hidden">
            <h3 className="text-background font-tungsten md:text-[450px] font-medium text-center">
              ELECTORADE
            </h3>
            <div className="absolute inset-0 mask-gradient-bottom">
              <Image
                src={electorade}
                alt="hero image"
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-white flex md:justify-between items-end justify-center">
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

        {/* for mobile version */}
        <div className="max-w-full mx-auto md:hidden">
          <div className="relative overflow-hidden">
            <h3 className="text-background font-tungsten text-[220px] font-medium text-center p-0 m-0 h-[180px]">
              ELECTO
            </h3>
            <h3 className="text-background font-tungsten text-[220px] font-medium text-center p-0 m-0">
              RADE
            </h3>
            <div className="absolute inset-0 mask-gradient-bottom-2">
              {/* <Image src={electorade} alt="hero image" className="" /> */}
            </div>
          </div>
          <div className="text-white flex items-center justify-center flex-col">
            <div className="font-neuehaas text-4xl flex flex-col items-center">
              <h1>Healthy Electrolyte</h1>
              <h1 className="text-primary">Sports Drink</h1>
            </div>
            <div className="font-industry text-lg font-normal text-background/50">
              <h1>Formulated in Australia and</h1>
              <h1>Manufactured in Bangladesh</h1>
            </div>
          </div>
          <div className="pt-5">
            <hr className="bg-primary border-none h-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
