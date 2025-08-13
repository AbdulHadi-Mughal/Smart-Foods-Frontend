import { Link } from "react-router-dom";
import type { SpiceCardInfo } from "../../types/spice.type.ts";
import { Card, CardContent } from "../ui/card.tsx";
import ProductCardSkeleton from "./ProductCardSkeleton.tsx";
import { Image } from "@imagekit/react";

type Props = {
  filteredProducts: SpiceCardInfo[];
};

const ProductCard = ({ filteredProducts }: Props) => {
  return (
    <div className="container mx-auto px-1 md:px-4 lg:px-6">
      {filteredProducts.length === 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6">
          {Array.from({ length: 4 }).map((_, id) => (
            <ProductCardSkeleton key={`skeleton-${id}`} />
          ))}
        </div>
      ) : (
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
                    src={imageUrl}
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
                      {weight % 1000 === 0
                        ? `${weight / 1000}kg`
                        : `${weight}g`}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
