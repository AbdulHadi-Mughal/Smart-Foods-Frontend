import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Image } from '@imagekit/react';
import { buildIkSrc, getResponsiveWidth } from '../../functions/image';

const HeroSection = () => {
	return (
		<section className="mt-8 grid grid-cols-1 items-center md:grid-cols-2">
			<div className="w-full bg-background px-1 pb-4 text-foreground">
				<div className="container mx-auto space-y-6 text-center">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Engineered for Taste - Trusted by Chefs
					</h1>
					<p className="mx-auto max-w-xl text-lg text-muted-foreground">
						The Smart Foods brings premium spices directly to fast food businesses across Pakistan.
					</p>
					<div className="flex justify-center gap-4">
						<Button>
							<Link to="/products">Explore Products</Link>
						</Button>
						<Button variant="outline" asChild>
							<a
								href="https://wa.me/923009448933?text=Chat%20with%20Irshad%20Mughal,%20the%20owner%20of%20Smart%20Foods."
								target="_blank"
								rel="noopener noreferrer"
							>
								Contact Us
							</a>
						</Button>
					</div>
				</div>
			</div>
			<Image
				src={buildIkSrc('/Static Files/Hero_Smart_Foods.webp', getResponsiveWidth())}
				loading="eager"
				className="w-full pt-6 shadow-xl"
			/>
		</section>
	);
};

export default HeroSection;
