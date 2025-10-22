import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Image } from '@imagekit/react';
import { buildIkSrc, getResponsiveWidth } from '@/functions/image';

const ProductSection = () => {
	return (
		<section className="mb-12 grid grid-cols-1 items-center md:grid-cols-2">
			<div className="order-2 my-12 w-full bg-background px-1 pb-4 text-foreground">
				<div className="container mx-auto space-y-6 text-center">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Explore Our Premium Spice Blends
					</h1>
					<p className="mx-auto max-w-xl text-lg text-muted-foreground">
						Our spices are backed by years of expertise and a commitment to quality and reliability.
					</p>
					<div className="flex justify-center gap-4">
						<Button size={'lg'}>
							<Link to="/products">Explore Products</Link>
						</Button>
					</div>
				</div>
			</div>
			<Image
				src={buildIkSrc('/Static Files/Spices.webp', getResponsiveWidth())}
				loading="lazy"
				className="order-1 h-auto w-screen shadow-xl"
			/>
		</section>
	);
};

export default ProductSection;
