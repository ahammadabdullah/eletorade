import { Fragment } from "react";

export default function FuelYourBody() {
  const nutritionData = {
    categories: [
      { name: "NUTRIENT", key: "nutrient" },
      { name: "ELECTROADE", key: "electroade" },
      { name: "LEADING SPORTS DRINK", key: "sportsDrink" },
      { name: "REGULAR ENERGY DRINK", key: "energyDrink" },
    ],
    nutrients: [
      {
        nutrient: "Calories",
        electroade: "100 kcal",
        sportsDrink: "120 kcal",
        energyDrink: "150 kcal",
      },
      {
        nutrient: "Total Fat",
        electroade: "0g",
        sportsDrink: "0kcal",
        energyDrink: "0g",
      },
      {
        nutrient: "Sodium",
        electroade: "120mg (5% DV)",
        sportsDrink: "110mg",
        energyDrink: "200mg",
      },
      {
        nutrient: "Potassium",
        electroade: "5.52mg (0% DV)",
        sportsDrink: "50mg",
        energyDrink: "80mg",
      },
      {
        nutrient: "Carbohydrates",
        electroade: "27g (9% DV)",
        sportsDrink: "30g",
        energyDrink: "40g",
      },
      {
        nutrient: "Sugar",
        electroade: "27g",
        sportsDrink: "28g",
        energyDrink: "38g",
      },
      {
        nutrient: "Protein",
        electroade: "0g",
        sportsDrink: "0g",
        energyDrink: "0g",
      },
      {
        nutrient: "Electrolytes",
        electroade: "Sodium, Calcium, Potassium, Magnesium",
        sportsDrink: "Sodium, Potassium",
        energyDrink: "Only Sodium",
      },
    ],
  };

  const nutritionDataForMobile = {
    categories: [
      { name: "NUTRIENT", key: "nutrient" },
      { name: "ELECTROADE", key: "electroade" },
      { name: "LEADING SPORTS DRINK", key: "sportsDrink" },
    ],
    nutrients: [
      {
        nutrient: "Calories",
        electroade: "100 kcal",
        sportsDrink: "120 kcal",
      },
      {
        nutrient: "Total Fat",
        electroade: "0g",
        sportsDrink: "0kcal",
      },
      {
        nutrient: "Sodium",
        electroade: "120mg (5% DV)",
        sportsDrink: "110mg",
      },
      {
        nutrient: "Potassium",
        electroade: "5.52mg (0% DV)",
        sportsDrink: "50mg",
      },
      {
        nutrient: "Carbohydrates",
        electroade: "27g (9% DV)",
        sportsDrink: "30g",
      },
      {
        nutrient: "Sugar",
        electroade: "27g",
        sportsDrink: "28g",
      },
      {
        nutrient: "Protein",
        electroade: "0g",
        sportsDrink: "0g",
      },
      {
        nutrient: "Electrolytes",
        electroade: "Sodium, Calcium, Potassium, Magnesium",
        sportsDrink: "Sodium, Potassium",
      },
    ],
  };

  return (
    <section className="bg-black/80 pb-10">
      <div className="max-w-7xl mx-auto ">
        <h3 className="text-3xl  md:text-7xl font-industry text-center font-normal text-white py-10 ">
          FUEL YOUR BODY <span className="text-primary">RIGHT</span>
        </h3>

        <div className="flex justify-center p-4  font-industry font-light">
          <div className="w-full max-w-4xl ">
            <div className="hidden md:grid grid-cols-4">
              {/* Header Row */}
              {nutritionData.categories.map((category, index) => (
                <div
                  key={category.key}
                  className={`py-3 px-1 text-center !font-medium flex justify-between ${
                    index === 0
                      ? "bg-dark-1 text-white"
                      : index === 1
                      ? "bg-primary text-black"
                      : index === 2
                      ? "bg-dark-2 text-white"
                      : "bg-dark-3 text-white"
                  }`}
                >
                  <div
                    className={`h-full bg-primary w-[2px] ${
                      index === 0 ? "block" : "invisible"
                    }`}
                  />
                  {category.name}
                  <div
                    className={`h-full bg-primary w-[2px] ${
                      index === 3 ? "block" : "invisible"
                    }`}
                  ></div>
                </div>
              ))}

              {/* Data Rows */}
              {nutritionData.nutrients.map((item, rowIndex) => (
                <Fragment key={rowIndex}>
                  {nutritionData.categories.map((category, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`py-3 px-4 text-center ${
                        colIndex === 0
                          ? "bg-dark-1/40 text-white"
                          : colIndex === 1
                          ? "bg-dark-2/60 text-white"
                          : colIndex === 2
                          ? "bg-dark-3/80 text-white"
                          : "bg-dark-3 text-white"
                      } ${colIndex > 0 ? "text-center" : ""}`}
                    >
                      {item[category.key as keyof typeof item]}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
            {/* for mobile */}
            <div className="md:hidden space-y-6">
              {/* Electroade Table */}
              <div className="grid grid-cols-2">
                {/* Header Row */}
                <div className="py-3 px-1 text-center !font-medium bg-dark-1 text-white flex items-center justify-between">
                  <div className={`h-full bg-primary w-[2px] `} />
                  <span className="flex-1">NUTRIENT</span>
                </div>
                <div className="py-3 px-1 text-center !font-medium bg-primary text-black">
                  ELECTROADE
                </div>

                {/* Data Rows */}
                {nutritionDataForMobile.nutrients.map((item, index) => (
                  <Fragment key={`electroade-${index}`}>
                    <div className="py-3 px-4 text-center bg-dark-1/40 text-white">
                      {item.nutrient}
                    </div>
                    <div className="py-3 px-4 text-center bg-dark-2/60 text-white">
                      {item.electroade}
                    </div>
                  </Fragment>
                ))}
              </div>

              {/* Sports Drink Table */}
              <div className="grid grid-cols-2">
                {/* Header Row */}
                <div className="py-3 px-1 text-center !font-medium bg-dark-1 text-white flex items-center justify-between">
                  <div className={`h-full bg-primary w-[2px] `} />
                  <span className="flex-1">NUTRIENT</span>
                </div>
                <div className="py-3 px-1 text-center !font-medium bg-dark-3 text-white">
                  LEADING SPORTS DRINK
                </div>

                {/* Data Rows */}
                {nutritionDataForMobile.nutrients.map((item, index) => (
                  <Fragment key={`sportsDrink-${index}`}>
                    <div className="py-3 px-4 text-center bg-dark-1/40 text-white">
                      {item.nutrient}
                    </div>
                    <div className="py-3 px-4 text-center bg-dark-3 text-white">
                      {item.sportsDrink}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
