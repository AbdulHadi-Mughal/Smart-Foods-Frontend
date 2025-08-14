import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Image } from "@imagekit/react";

const ProductSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center mb-12">
      <div className="order-2 my-12 w-full pb-4 bg-background text-foreground px-1">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Explore Our Premium Spice Blends
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our spices are backed by years of expertise and a commitment to
            quality and reliability.
          </p>
          <div className="flex justify-center gap-4">
            <Button size={"lg"}>
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={`/Static%20Files/Spices.webp?tr=w-${window.innerWidth}`}
        loading="lazy"
        className="order-1 w-screen h-auto shadow-xl"
      />
    </section>
  );
};

export default ProductSection;
