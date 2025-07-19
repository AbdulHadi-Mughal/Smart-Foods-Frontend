import Searcher from "../components/productsPage/Searcher";
import ProductCard from "../components/productsPage/ProductCard";
import { useEffect, useRef, useState } from "react";
import type { Category, SpiceCardInfo } from "../types/Spice.type";
import CategorySlelector from "../components/productsPage/CategorySlelector";

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<SpiceCardInfo[]>([]);
  const [categroizedProducts, setCatagorizedProducts] = useState<
    SpiceCardInfo[]
  >([]);

  const serverURL = import.meta.env.VITE_API_BASE_URL || "localhost:3000/api";

  const fetchProducts = async () => {
    const data = await fetch(serverURL);
    return await data.json();
  };

  const catagorize = (filtered: SpiceCardInfo[]) => {
    setCatagorizedProducts(filtered);
    setFilteredProducts(filtered);
  };

  const products = useRef<SpiceCardInfo[]>([]);
  const categories: Category[] = [
    "Chicken",
    "Pizza Topping",
    "Sauces",
    "Fries Masala",
    "Other",
  ];

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        products.current = await fetchProducts();

        setCatagorizedProducts(products.current);
        setFilteredProducts(products.current);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchAndSetProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-4xl font-extrabold">Explore our Spices</h1>
      </div>
      <Searcher
        products={categroizedProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <CategorySlelector
        products={products.current}
        categories={categories}
        setCategorizedProducts={catagorize}
      />

      <ProductCard filteredProducts={filteredProducts} />

      {/* <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => (
            <h2 className="text-2xl font-extrabold" {...props}></h2>
          ),
          h1: (props) => (
            <h1 className="text-4xl font-extrabold" {...props}></h1>
          ),
        }}
      ></ReactMarkdown> */}
    </div>
  );
};

export default ProductPage;
