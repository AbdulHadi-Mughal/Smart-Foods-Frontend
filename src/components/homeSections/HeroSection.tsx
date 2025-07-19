import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center my-12">
      <div className="w-full pb-4 bg-background text-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Pure and Professional {"-"} Where Flavour Meets Quality.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The Smart Foods brings premium spices directly to fast food
            businesses across Pakistan.
          </p>
          <div className="flex justify-center gap-4">
            <Button>
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://wa.me/923009448933?text=Assalamu%20Alaykum.%20Click%20the%20button%20to%20chat%20with%20Irshad%20Mughal,%20the%20owner%20of%20Smart%20Foods."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Sales
              </a>
            </Button>
          </div>
        </div>
      </div>
      <img src="/Hero_Smart_Foods.jpg" className="w-full pt-6 shadow-xl" />
    </section>
  );
};

export default HeroSection;
