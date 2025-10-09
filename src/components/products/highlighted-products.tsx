import highlight from "@/assets/images/products/highlight.png";
import Image from "next/image";
import HexButton from "../common/Button";

const HighlightedProduct = () => {
  return (
    <div className=" max-w-5xl  min-h-screen mx-auto my-10">
      <h3 className="text-3xl md:text-7xl font-industry font-normal text-white py-10 uppercase ">
        Beyond{" "}
        <span className="text-primary">
          <br />
          basic water
        </span>
      </h3>
      <div className="flex relative items-center justify-center font-industry ">
        <div
          className="relative p-[2px] w-full bg-gradient-to-r from-[#4a4a4a] to-[#1a1a1a]"
          style={{
            clipPath:
              "polygon(1% 1%, 75% 1%, 98% 31%, 98% 98%, 16% 98%, 1% 83%)",
          }}
        >
          <div
            className="relative bg-black text-gray-200 w-full"
            style={{
              clipPath:
                "polygon(1% 1%,  75% 1%, 98% 31%, 98% 98%, 16% 98%, 1% 83%)",
            }}
          >
            <div
              className="absolute top-4 left-4 w-8 h-8 bg-orange-500"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-5 min-h-[85vh]">
              <div className="p-8 md:pl-20 flex flex-col justify-center md:col-span-3">
                <h1 className="text-6xl lg:text-8xl font-tungsten font-medium tracking-wider mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Aima
                </h1>
                <p className="text-xl mb-6 leading-relaxed bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent w-[70%]">
                  Water the symbol of purity. Experience the purity of water in
                  our packaged drinking water brand Aima. Quench your thirst and
                  hydrate yourself Purely with Aima Water
                </p>
                <ul className="list-none text-xl space-y-2 mb-8 text-gray-300">
                  <li>- Pure Water</li>
                  <li>- Treated in 5 steps</li>
                  <li>- Rich in minerals</li>
                </ul>
                <p className="text-3xl  text-white mb-8">500ml</p>
                <div>
                  <HexButton>Drink Now</HexButton>
                </div>
              </div>
              <div className="relative md:col-span-2 flex items-center justify-center overflow-hidden"></div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 z-10 w-full max-w-xs sm:max-w-sm transform md:scale-125 lg:scale-180 ">
          <Image
            src={highlight}
            alt="Aima packaged drinking water bottle"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default HighlightedProduct;
