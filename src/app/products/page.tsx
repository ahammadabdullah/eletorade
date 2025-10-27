import ProductCard from "@/components/products/product-card";
import product1 from "@/assets/images/products/1.png";
import product2 from "@/assets/images/products/2.png";
import product3 from "@/assets/images/products/3.png";
import product4 from "@/assets/images/products/4.png";
import product5 from "@/assets/images/products/5.png";
import product6 from "@/assets/images/products/6.png";
import HighlightedProduct from "@/components/products/highlighted-products";

const categoryA = [
  {
    id: 1,
    title: "Orange Blaze",
    image: product1,
    description: "Citrusy Boost For Maximum Energy",
    variants: "Aima 500 ML, Aima 600Ml, Aima 1L, Aima 1.5L, Aima 2L",
    infos: ["Instant Hydration", "Endurance Fuel", "Refreshing Citrus Kick"],
  },
  {
    id: 2,
    title: "Lemon Storm",
    image: product2,
    description: "Citrusy Boost For Maximum Energy",
    variants: "Aima 500 ML, Aima 600Ml, Aima 1L, Aima 1.5L, Aima 2L",
    infos: ["Instant Hydration", "Endurance Fuel", "Refreshing Citrus Kick"],
  },
];
const categoryB = [
  {
    id: 1,
    title: "Orange Blaze",
    image: product4,
    description: "Citrusy Boost For Maximum Energy",
    variants: "Aima 500 ML, Aima 600Ml, Aima 1L, Aima 1.5L, Aima 2L",
    infos: ["Instant Hydration", "Endurance Fuel", "Refreshing Citrus Kick"],
  },
  {
    id: 2,
    title: "Orange Blaze",
    image: product5,
    description: "Citrusy Boost For Maximum Energy",
    variants: "Aima 500 ML, Aima 600Ml, Aima 1L, Aima 1.5L, Aima 2L",
    infos: ["Instant Hydration", "Endurance Fuel", "Refreshing Citrus Kick"],
  },
  {
    id: 3,
    title: "Orange Blaze",
    image: product6,
    description: "Citrusy Boost For Maximum Energy",
    variants: "Aima 500 ML, Aima 600Ml, Aima 1L, Aima 1.5L, Aima 2L",
    infos: ["Instant Hydration", "Endurance Fuel", "Refreshing Citrus Kick"],
  },
];

function Page() {
  return (
    <div className="bg-[url('/herobg.png')] bg-cover bg-black/80 bg-blend-multiply ">
      <div className="bg-[url('/heroGrid.png')] bg-cover bg-black/60 bg-blend-multiply pb-20 ">
        <div className="max-w-7xl mx-auto ">
          <h3 className="text-3xl md:text-7xl font-industry text-center font-normal text-white py-10 ">
            PICK YOUR <span className="text-primary">POWER</span>
          </h3>
          <div>
            {categoryA.map((cat) => (
              <ProductCard key={cat.id} details={cat} />
            ))}
          </div>

          <HighlightedProduct />
          <div>
            {categoryB.map((cat) => (
              <ProductCard key={cat.id} details={cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
