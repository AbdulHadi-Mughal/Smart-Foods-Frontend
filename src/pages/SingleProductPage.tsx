import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Spice } from "../types/Spice.type";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
import Instructions from "../components/SingleProductPage/Instructions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import SingleProductPageSkele from "../components/SingleProductPage/SingleProductPageSkele";

const SingleProductPage = () => {
  const { productName } = useParams();
  const serverURL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

  const [product, setProduct] = useState<Spice | null>(null);

  const fetchProducts = async () => {
    const res = await fetch(`${serverURL}/products/${productName}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  };

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        const fetched = await fetchProducts();
        setProduct(fetched);
        console.log(fetched);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchAndSetProducts();
  }, []);

  if (!product) {
    return <SingleProductPageSkele />;
  }

  return (
    <div>
      <Breadcrumb className="text-white mx-4 text-sm">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={"/"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={"/products"}>Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="container mx-auto px-4 my-1 py-5">
        {/* Image and top info */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full md:w-1/2 py-2 rounded-2xl shadow-md object-contain bg-white flex justify-center">
            {product.imageUrl ? (
              <img
                crossOrigin="anonymous"
                src={
                  "https://ik.imagekit.io/vqu9cto3v/Product%20Images/FriedChickenPouch.webp?updatedAt=1752732771267"
                }
                className="w-auto h-80 "
              />
            ) : (
              <p className="text-center text-lg text-muted-foreground">
                No image available
              </p>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                {product.name}
              </h1>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Stock Info */}
            <p
              className={`text-md font-medium my-2 ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <p className="text-xl font-bold my-2 text-primary">
              Rs. {product.price}
            </p>
            {/* <p className="text-md font-medium my-2">
            {product.weight % 1000 === 0
              ? `${product.weight / 1000} kg`
              : `${product.weight} g`}
          </p> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <Instructions
          name={product.name}
          weight={product.weight}
          category={product.category}
          description={product.description}
          instructions={product.instruction}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
