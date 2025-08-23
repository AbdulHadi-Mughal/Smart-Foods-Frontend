import { Link } from "react-router-dom";
import type { SpiceCardInfo } from "../../types/spice.type.ts";
import { Card, CardContent } from "../ui/card.tsx";
import ProductCardSkeleton from "./ProductCardSkeleton.tsx";
import { Image } from "@imagekit/react";

type Props = {
  filteredProducts: SpiceCardInfo[] | null | undefined;
};

const ProductCard = ({ filteredProducts }: Props) => {
  // Case 1: Fetch failed
  if (filteredProducts === null) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center space-y-4">
        <h2 className="text-xl font-semibold">We couldn’t load our products</h2>
        <p className="text-muted-foreground max-w-sm">
          It looks like something went wrong while connecting to our store.
          Please try refreshing the page, or come back in a little while.
        </p>
      </div>
    );
  }

  // Case 2: Still loading (empty array)
  if (filteredProducts === undefined) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6">
        {Array.from({ length: 4 }).map((_, id) => (
          <ProductCardSkeleton key={`skeleton-${id}`} />
        ))}
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center py-6 text-center space-y-2 mb-40">
        <h2 className="text-lg font-medium text-gray-800">No results found</h2>
        <p className="text-sm text-muted-foreground">
          Try another search or browse products.
        </p>
      </div>
    );
  }

  // Case 3: Products available
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6">
      {filteredProducts.map(
        ({ _id, name, shortDescription, price, weight, imageUrl }) => (
          <Link
            to={`/products/${name.replaceAll(" ", "-")}`}
            key={"product-" + _id}
          >
            <Card className="py-1 w-full flex flex-col justify-between shadow-xl md:shadow-lg lg:shadow-md rounded-md border border-gray-200 transition hover:shadow-2xl hover:-translate-y-0.5 duration-300">
              <Image
                loading="lazy"
                src={imageUrl + "?tr=h-300"}
                alt={name}
                className="h-60 w-full object-contain"
              />

              <CardContent className="space-y-1 px-2 pt-2 md:px-4 lg:px-6">
                <h3 className="text-lg font-semibold leading-tight line-clamp-1">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {shortDescription}
                </p>
                <div className="text-sm font-medium my-2">
                  <p className="text-primary inline">Rs. {price}</p> /{" "}
                  {weight % 1000 === 0 ? `${weight / 1000}kg` : `${weight}g`}
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      )}
    </div>
  );
};

export default ProductCard;
