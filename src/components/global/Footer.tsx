import { Link } from 'react-router-dom';
import Facebook from '/brandIcons/facebook.svg'; // Ensure you have the correct path to your Facebook icon
import { Image } from '@imagekit/react';
import { buildIkSrc, getResponsiveWidth } from '@/functions/image';

const Footer = () => {
	return (
		<footer className="flex justify-center bg-white">
			<div className="mt-8 grid max-w-7xl grid-cols-1 gap-6 px-4 py-14 text-gray-700 md:grid-cols-3">
				{/* Column 1: Brand Info */}
				<div className="my-2 flex items-start space-x-3 border-r-gray-200 px-4 py-2 md:border-r">
					<Image
						loading="lazy"
						src={buildIkSrc('/Static Files/smart_food_logo.webp', getResponsiveWidth() / 10)}
						alt="The Smart Foods"
						className="h-8"
					/>
					<p className="max-w-xs text-sm">
						Manufacture and trade in spices, mix recipes, and food products.
					</p>
				</div>

				{/* Column 2: Navigation */}
				<div className="border-r-gray-200 px-4 py-2 text-sm md:border-r">
					<h4 className="mb-2 font-semibold">Quick Links</h4>
					<ul className="space-y-2">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/why-us">Why Us</Link>
						</li>
						{/* <li>
							<Link to="/users/me">Profile</Link>
						</li> */}
					</ul>
				</div>

				{/* Column 3: Social */}
				<div className="border-r-gray-200 px-4 py-2 text-center text-sm md:border-r md:text-left">
					<div className="my-4">
						<h4 className="mb-2 font-semibold">Contact</h4>
						<p className="text-sm">0300-9448933</p>
					</div>
					<div className="py-2 md:text-left">
						<h4 className="mb-2 font-semibold">Follow Us</h4>
						<div className="text-center text-2xl">
							<a
								href="https://www.facebook.com/profile.php?id=61556590796689"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="md:flex">
									<div className="md:flex md:justify-center">
										<span className="flex items-center justify-center">
											<img className="mr-2 inline size-4" src={Facebook} alt="Facebook" />
											<p className="text-sm underline">The Smart Foods</p>
										</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="col-span-full py-2 text-center text-xs text-muted-foreground">
					<p>© 2025 The Smart Foods. All rights reserved.</p>
					<p className="mt-1">Made in Pakistan · Halal Certified</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
