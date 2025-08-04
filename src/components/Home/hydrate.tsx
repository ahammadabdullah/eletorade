import React from "react";
import HexButton from "../common/Button";
// import hydrate from "@/assets/images/hydrate.png";
// import hydratebg from "@/assets/images/hydratebg.png";
import hydrateshape from "@/assets/images/hydrateshape.png";
import Image from "next/image";
const Hydrate = () => {
  return (
    <div className="bg-black/80 flex relative ">
      <div className="w-1/2 flex flex-col items-start justify-center">
        <span className="text-[238px]  font-tungsten font-medium text-white">
          HYDRATE
        </span>
        <span className="text-[238px]  font-tungsten font-medium text-primary">
          NOW
        </span>
        <HexButton>Order</HexButton>
      </div>

      <div className="relative w-full border-t-2 border-primary/20 ">
        {/* <Image src={hydrate} alt="hydrate" className="absolute" /> */}
      </div>
      <Image
        src={hydrateshape}
        alt="hydrate"
        className="absolute h-full object-cover"
      />
    </div>
  );
};

export default Hydrate;
