import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const WhyUsSection = () => {
  return (
    <section className="w-full bg-white text-foreground py-12">
      <div className="max-w-2xl mx-auto text-center py-8 px-4">
        <h2 className="text-primary text-4xl font-extrabold mb-4">
          Why Choose Smart Foods?
        </h2>
        <p className="text-lg mb-6">
          Trusted by dozens of businesses across Pakistan, Smart Foods delivers
          professional spice systems that make every dish consistent and cost ‑
          efficient.
        </p>
        <ul className="list-inside  text-left space-y-3 mb-6 pl-6">
          <li className="text-base">
            <p className="text-green-500 inline text-xl">• </p>{" "}
            Professional‑grade recipes — perfect results, every time
          </li>
          <li className="text-base">
            <p className="text-green-500 inline text-xl">• </p> Step‑by‑step
            guidance — no culinary specialist required
          </li>
          <li className="text-base">
            <p className="text-green-500 inline text-xl">• </p> Exact ingredient
            costing — protect your margins
          </li>
        </ul>

        <Button asChild size={"lg"}>
          <Link to="/why-us">Learn More</Link>
        </Button>
      </div>
    </section>
  );
};

export default WhyUsSection;
