import React, { useRef, useEffect } from "react";
import type { SpiceCardInfo } from "../../types/spice.type";

interface SearcherProps {
  products: SpiceCardInfo[] | null | undefined;
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<SpiceCardInfo[] | null | undefined>
  >;
}

const Searcher: React.FC<SearcherProps> = ({
  products,
  setFilteredProducts,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleInputChange = (inputValue: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (products === null || products === undefined) return;
    timeoutRef.current = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 300); // debounce delay
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // cleanup
    };
  }, []);

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e.target.value)}
        className="border px-3 py-2 rounded-3xl w-3/4 max-w-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Searcher;
