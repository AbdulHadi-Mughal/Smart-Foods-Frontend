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
      <div className="max-w-2xl mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-primary text-3xl md:text-4xl font-extrabold mb-4">
          Why Choose Smart Foods Recipes
        </h1>
        <p className="text-lg text-muted-foreground">
          Our recipe system is designed to help restaurants produce consistent,
          high-quality dishes using streamlined methods and measured
          ingredients.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-5/6 pt-4 space-y-8">
        <ul className="space-y-6">
          {benefits.map(({ title, description }, index) => (
            <li key={index}>
              <h3 className="text-2xl font-bold tracking-tight lg:text-3xl">
                • {title}
              </h3>
              <p className="text-lg text-muted-foreground mt-1">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
