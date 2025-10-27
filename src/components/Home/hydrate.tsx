import React from "react";
import mask from "@/assets/images/mask.png";
import Image from "next/image";
const Hydrate = () => {
  return (
    <div className="relative bg-black/80 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url(/hydrateshape.png)] bg-no-repeat bg-cover bg-center"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black to-transparent"></div>
      <div className="relative z-20">
        <div className="flex max-w-7xl mx-auto md:h-[900px] pt-10 relative md:static">
          <div className="md:w-1/2 flex flex-col items-start justify-center pl-10 pb-24">
            <span className="text-[150px] md:text-[238px] h-[120px] md:h-[200px] font-tungsten font-medium text-white">
              HYDRATE
            </span>
            <span className="text-[150px] md:text-[238px]  font-tungsten font-medium text-primary">
              NOW
            </span>
          </div>

          <div className="flex-1 pl-32 hidden md:block">
            <Image
              src={mask}
              alt="hydrate"
              width={500}
              height={500}
              priority
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="absolute -bottom-0 right-5 w-[150px] h-[450px] bg-gradient-to-t from-black to-transparent md:hidden">
            <Image
              src={mask}
              alt="hydrate"
              width={500}
              height={500}
              priority
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hydrate;
