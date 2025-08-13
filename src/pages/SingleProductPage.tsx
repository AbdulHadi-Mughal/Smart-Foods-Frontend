import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Spice } from "../types/spice.type";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import SingleProductPageSkele from "../components/SingleProductPage/SingleProductPageSkele";
import { infoToast, successToast } from "../components/global/Toasts";

import Instructions from "@/components/SingleProductPage/Instructions";
import CartDrawer from "@/components/SingleProductPage/CartDrawer";
import { Image } from "@imagekit/react";
import { cartStore } from "@/stores/cart.store";

const SingleProductPage = () => {
  const { productName } = useParams();
  const serverURL = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}`
    : "http://localhost:3000/api";

  const [product, setProduct] = useState<Spice | null>(null);

  const { cartItems, removeItem } = cartStore();

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
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchAndSetProducts();
  }, []);

  const inCart = useMemo(() => {
    if (!product) return false;
    return cartItems.some(
      (item) => item.name === product.name && item.weight === product.weight
    );
  }, [cartItems, product]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState<"Add to Cart" | "Buy Now">(
    "Add to Cart"
  );

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  if (!product) {
    return <SingleProductPageSkele />;
  }

  return (
    <div>
      <CartDrawer
        drawerType={drawerType}
        product={product}
        isOpen={drawerOpen}
        onClose={handleDrawerClose}
      />
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
              <Image
                crossOrigin="anonymous"
                src={product.imageUrl}
                className="w-auto h-80"
              />
            ) : (
              <p className="text-center text-lg text-muted-foreground">
                No image available
              </p>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                {product.name}
              </h1>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  onClick={() => infoToast("Add to Favourites")}
                  variant="outline"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Stock Info */}
            <p
              className={`text-md font-medium my-1 ${
                product.inStock ? "hidden" : "text-red-600"
              }`}
            >
              Out of Stock
            </p>
            <p className="text-xl font-bold my-1 text-primary">
              Rs. {product.price}
            </p>
            {inCart && (
              <div className="flex items-center gap-2">
                <p className="text-sm text-green-600 mr-2">Added to Cart.</p>
                <p
                  onClick={() => {
                    removeItem(product.name);
                    successToast("Removed from Cart");
                  }}
                  className="text-sm cursor-pointer underline"
                >
                  Remove
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-evenly pt-4">
              <Button
                size="lg"
                onClick={() => {
                  setDrawerType("Add to Cart");
                  setDrawerOpen(true);
                }}
                className="w-full sm:w-2/5"
                disabled={!product.inStock}
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  setDrawerType("Buy Now");
                  setDrawerOpen(true);
                }}
                variant="secondary"
                className="w-full sm:w-2/5"
                disabled={!product.inStock}
              >
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
