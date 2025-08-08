import { useState } from "react";
import type { Category, SpiceCardInfo } from "../../types/spice.type";

type Props = {
  products: SpiceCardInfo[];
  categories: string[];
  setCategorizedProducts: (filtered: SpiceCardInfo[]) => void;
};

const CategorySlelector = ({
  products,
  categories,
  setCategorizedProducts,
}: Props) => {
  const [category, setCategory] = useState<"All" | Category>("All");

  const categorize = (category: "All" | Category) => {
    if (category === "All") {
      const fitered = products;
      setCategory("All");
      setCategorizedProducts(fitered);
    } else {
      setCategory(category);
      const filtered = products.filter(
        (product) => product.category === category
      );
      setCategorizedProducts(filtered);
    }
  };

  return (
    <div className="w-4/5 mx-auto my-4">
      <h1 className="text-xl font-bold max-w-xl mx-auto my-2">Category:</h1>
      <div className="flex justify-center">
        <div className="flex justify-evenly max-xl:">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={`c-${c}`}
                className={`${
                  category === c
                    ? "bg-secondary hover:bg-secondary"
                    : "bg-white"
                } text-sm text-foreground rounded-full px-4 py-2 shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105`}
                onClick={() => {
                  if (category !== c) categorize(c as Category | "All");
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlelector;
