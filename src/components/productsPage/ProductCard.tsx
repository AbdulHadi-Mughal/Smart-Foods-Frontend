import { Link } from "react-router-dom";
import type { SpiceCardInfo } from "../../types/Spice.type.ts";
import { Button } from "../ui/button.tsx";
import { Card, CardContent } from "../ui/card.tsx";
import ProductCardSkeleton from "../ProductCardSkeleton.tsx";

type Props = {
  filteredProducts: SpiceCardInfo[];
};

const ProductCard = ({ filteredProducts }: Props) => {
  return (
    <div className="container mx-auto px-1 md:px-4 lg:px-6">
      {filteredProducts.length === 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6">
          {filteredProducts.map(
            ({ id, name, shortDescription, price, weight }) => (
              <Link
                to={`/products/${name.replaceAll(" ", "-")}`}
                key={"product-" + id}
              >
                <Card className="py-1 w-full flex flex-col justify-between shadow-xl rounded-md border border-gray-200 transition hover:shadow-2xl hover:-translate-y-0.5 duration-300">
                  <img
                    loading="lazy"
                    src="https://ik.imagekit.io/vqu9cto3v/Product%20Images/FriedChickenPouch.webp?updatedAt=1752732771267"
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
                    <Button size="sm">Add to Cart</Button>
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
