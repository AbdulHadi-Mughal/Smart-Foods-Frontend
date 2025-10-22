import { Link } from 'react-router-dom';
import NavButtons from './NavButtons';
import { Image } from '@imagekit/react';
import { buildIkSrc, getResponsiveWidth } from '../../functions/image';

const NavBar = () => {
	return (
		<div className="sticky top-0 z-10 mb-4 flex w-full justify-center bg-white">
			<div className="flex w-full max-w-7xl justify-between p-1 text-foreground shadow-md">
				<Link to={'/'}>
					<div className="flex items-center space-x-0">
						<Image
							src={buildIkSrc('/Static Files/smart_food_logo.webp', getResponsiveWidth() / 10)}
							alt="Smart Foods Logo"
							className="h-9 px-1 md:h-11 lg:h-12"
						/>
						<h1 className="md:text-md text-sm font-bold sm:inline-block">The Smart Foods</h1>
					</div>
				</Link>
				<NavButtons />
			</div>
		</div>
	);
};

export default NavBar;
