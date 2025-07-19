import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ProductSection = () => {
  return (
    <section className="grid grid- grid-cols-1 md:grid-cols-2 items-center mb-12">
      <div className="order-2 my-12 w-full pb-4 bg-background text-foreground">
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
            {/* <Button variant="outline" asChild>
              <a
                href="https://wa.me/92009448933?text=Assalamu%20Alaykum.%20Click%20the%20button%20to%20chat%20with%20us%20on%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Sales
              </a>
            </Button> */}
          </div>
        </div>
      </div>
      <img src="/Spices.jpg" className="order-1 w-full shadow-xl" />
    </section>
  );
};

export default ProductSection;
