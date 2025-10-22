import spiceImage from '/Why_Us_Spice.webp'; // first image
// import phoneImage from "/Mobile.webp"; // second image

const benefits = [
	{
		title: 'High-Quality Results',
		description:
			'Each recipe is developed and tested by culinary professionals to ensure consistent, high-standard outcomes.'
	},
	{
		title: 'Consistency in Taste',
		description:
			'The same dish tastes the same, every time—no matter who prepares it. Ideal for maintaining reliability.'
	},
	{
		title: 'Precise Ingredient Control',
		description:
			'All ingredients are measured by weight, helping minimize waste and improving portion accuracy.'
	},
	{
		title: 'Lower Staffing Requirements',
		description:
			'Clear instructions and streamlined processes reduce the need for highly skilled or specialized staff.'
	},
	{
		title: 'Better Cost Management',
		description:
			'Recipes are designed with full cost awareness, allowing for more informed pricing decisions.'
	},
	{
		title: 'Efficient Kitchen Workflow',
		description:
			'Pre-mixed spice blends and clear preparation steps help reduce prep time and improve speed.'
	}
];

const WhyUs = () => {
	return (
		<section className="w-full bg-white pb-16 text-foreground md:pb-24">
			{/* Header */}
			<div className="relative flex h-56 w-full items-center justify-center overflow-hidden text-center">
				<div
					className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-60"
					style={{
						backgroundImage: `url(${spiceImage})`
					}}
				></div>
				<h1 className="relative z-10 mx-auto w-3/4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
					Why Choose Smart Foods Recipes
				</h1>
			</div>

			<div className="mx-auto max-w-2xl px-4 py-10 text-center sm:px-6 lg:px-8">
				<p className="text-lg text-muted-foreground">
					Our recipe system is designed to help restaurants produce consistent, high-quality dishes
					using streamlined methods and measured ingredients.
				</p>
			</div>

			{/* Benefits List */}
			<div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 lg:px-8">
				{benefits.map(({ title, description }, index) => (
					<div
						key={index}
						className="rounded-xl bg-muted/30 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
					>
						<h3 className="mb-2 flex items-center gap-2 text-xl font-bold">
							<span className="text-3xl text-primary">•</span> {title}
						</h3>
						<p className="text-md leading-relaxed text-muted-foreground">{description}</p>
					</div>
				))}
			</div>

			{/* Call to Action */}
			{/* <div className="max-w-3xl mx-auto mt-16 flex flex-col sm:flex-row items-center rounded-xl overflow-hidden shadow-lg">
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
      </div> */}
		</section>
	);
};

export default WhyUs;
