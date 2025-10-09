import Image, { StaticImageData } from "next/image";
import React from "react";

import HexButton from "../common/Button";

const hexPath1 = "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)";

interface ProductCardProps {
  details: {
    id: number;
    title: string;
    image: StaticImageData;
    description: string;
    variants: string;
    infos: string[];
  };
}

const ProductCard = ({ details }: ProductCardProps) => {
  return (
    <div
      className={`flex justify-between items-center flex-col md:flex-row ${
        details.id % 2 === 0 ? "md:flex-row-reverse " : ""
      }`}
    >
      <Image
        src={details.image}
        alt="product_image"
        style={{ clipPath: hexPath1 }}
        className="w-full md:w-1/2 object-cover"
      />
      <div className="text-white flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-8xl font-tungsten uppercase font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {details.title}
          </h1>
          <p className="font-industry text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent ">
            {details.description}
          </p>
          <p className="font-industry text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent w-[70%] md:w-full">
            {details.variants}
          </p>

          <ul className="font-industry text-2xl mt-5 text-center md:text-left my-5">
            {details.infos.map((info, idx) => (
              <li key={idx}>-{info}</li>
            ))}
          </ul>
          <HexButton>Drink Now</HexButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
