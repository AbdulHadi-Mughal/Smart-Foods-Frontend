const WhyUsSection = () => {
  return (
    <section className="w-full bg-white to-background  text-foreground pb-12">
      <div className="max-w-2xl mx-auto text-center py-8">
        <h2 className="text-primary text-4xl font-extrabold mb-4">
          Why Choose Smart Foods?
        </h2>
        <p className="text-lg mb-6">
          Trusted by dozens of businesses across Pakistan, Smart Foods delivers
          high-quality products to your door. Our commitment to reliability and
          excellence ensures you get the best every time.
        </p>
        <ul className="list-none p-0 m-0 space-y-2">
          <li className="text-base">
            <span className="text-green-500 inline">✔</span> Premium and
            Professional Flavours
          </li>
          <li className="text-base">
            <span className="text-green-500 inline">✔</span> Easy Bulk Ordering
          </li>
          <li className="text-base">
            <span className="text-green-500">✔</span> Dedicated customer support
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUsSection;
