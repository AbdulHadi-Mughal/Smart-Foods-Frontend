import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteChange() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Scroll to top-left
		const scrollDistance = Math.abs(window.scrollY);
		console.log('Scroll distance:', scrollDistance);
		const behavior = scrollDistance > 750 ? 'instant' : 'smooth';
		window.scrollTo({ top: 0, left: 0, behavior });
	}, [pathname]);

	return null; // This component doesn't render anything
}
