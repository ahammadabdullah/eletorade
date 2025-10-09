import FuelYourBody from "@/components/Home/fuel-your-body";
import FuelYourGame from "@/components/Home/fuel-your-game";
import Hero from "@/components/Home/hero";
import Hydrate from "@/components/Home/hydrate";
import PickYourPower from "@/components/Home/pick-your-power";

export default function Home() {
  return (
    <div>
      <Hero />
      <FuelYourGame />
      <PickYourPower />
      <FuelYourBody />
      <Hydrate />
    </div>
  );
}
