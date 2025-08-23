import spiceImage from "/Why_Us_Spice.webp"; // first image
import phoneImage from "/Mobile.webp"; // second image

const benefits = [
  {
    title: "High-Quality Results",
    description:
      "Each recipe is developed and tested by culinary professionals to ensure consistent, high-standard outcomes.",
  },
  {
    title: "Consistency in Taste",
    description:
      "The same dish tastes the same, every time—no matter who prepares it. Ideal for maintaining reliability.",
  },
  {
    title: "Precise Ingredient Control",
    description:
      "All ingredients are measured by weight, helping minimize waste and improving portion accuracy.",
  },
  {
    title: "Lower Staffing Requirements",
    description:
      "Clear instructions and streamlined processes reduce the need for highly skilled or specialized staff.",
  },
  {
    title: "Better Cost Management",
    description:
      "Recipes are designed with full cost awareness, allowing for more informed pricing decisions.",
  },
  {
    title: "Efficient Kitchen Workflow",
    description:
      "Pre-mixed spice blends and clear preparation steps help reduce prep time and improve speed.",
  },
];

const WhyUs = () => {
  return (
    <section className="w-full bg-white text-foreground pb-16 md:pb-24">
      {/* Header */}
      <div className="relative w-full h-56 flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-60"
          style={{
            backgroundImage: `url(${spiceImage})`,
          }}
        ></div>
        <h1 className="mx-auto w-3/4 relative z-10 text-white text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Why Choose Smart Foods Recipes
        </h1>
      </div>

      <div className="max-w-2xl mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground">
          Our recipe system is designed to help restaurants produce consistent,
          high-quality dishes using streamlined methods and measured
          ingredients.
        </p>
      </div>

      {/* Benefits List */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        {benefits.map(({ title, description }, index) => (
          <div
            key={index}
            className="bg-muted/30 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span className="text-primary text-3xl">•</span> {title}
            </h3>
            <p className="text-muted-foreground text-md leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto mt-16 flex flex-col sm:flex-row items-center rounded-xl overflow-hidden shadow-lg">
        <div className="mx-auto sm:w-1/2 px-20 sm:px-8">
          <img
            src={phoneImage}
            alt="Smart Foods Web"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-md bg-gradient-to-r from-primary/10 to-primary/20 w-full sm:w-1/2 p-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Take Your Recipes Anywhere
          </h2>
          <p className="text-muted-foreground mb-6">
            Access Smart Foods recipes directly from your phone, ensuring you
            always have professional-quality guidance at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
