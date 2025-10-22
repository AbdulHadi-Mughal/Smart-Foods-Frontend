import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useSidebar } from '../ui/sidebar';
import { Menu, ShoppingCart } from 'lucide-react';

const NavButtons = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<div className="flex items-center space-x-2 px-4">
			<Button variant="outline" onClick={toggleSidebar}>
				<Menu />
			</Button>
			<Link to="/products">
				<Button variant="outline">
					<ShoppingCart />
				</Button>
			</Link>
		</div>
	);
};

export default NavButtons;
