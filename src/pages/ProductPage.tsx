import Searcher from '../components/productsPage/Searcher';
import { useEffect, useRef, useState } from 'react';
import type { Category, SpiceCardInfo } from '../types/spice.type';
import CategorySlelector from '../components/productsPage/CategorySlelector';
import { errorToast } from '@/components/global/Toasts';

import ProductCard from '../components/productsPage/ProductCard';

const ProductPage = () => {
	const [filteredProducts, setFilteredProducts] = useState<SpiceCardInfo[] | null>();
	const [categroizedProducts, setCatagorizedProducts] = useState<SpiceCardInfo[]>([]);

	const fetchProducts = async () => {
		const data = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
		return await data.json();
	};

	const catagorize = (filtered: SpiceCardInfo[]) => {
		setCatagorizedProducts(filtered);
		setFilteredProducts(filtered);
	};

	const products = useRef<SpiceCardInfo[]>([]);
	const categories: Category[] = ['Chicken', 'Pizza Topping', 'Sauces', 'Fries Masala', 'Other'];

	useEffect(() => {
		const fetchAndSetProducts = async () => {
			try {
				products.current = await fetchProducts();
				setCatagorizedProducts(products.current);
				setFilteredProducts(products.current);
			} catch {
				errorToast('Something went wrong! Please try again later.');
				setFilteredProducts(null);
			}
		};

		fetchAndSetProducts();
		import('./SingleProductPage');
	}, []);

	return (
		<div>
			<div className="flex justify-center py-4">
				<h1 className="text-center text-4xl font-extrabold">Explore our Spices</h1>
			</div>

			{filteredProducts && filteredProducts.length !== 0 && (
				<>
					<Searcher products={categroizedProducts} setFilteredProducts={setFilteredProducts} />
					<CategorySlelector
						products={products.current}
						categories={categories}
						setCategorizedProducts={catagorize}
					/>
				</>
			)}

			<ProductCard filteredProducts={filteredProducts} />
		</div>
	);
};

export default ProductPage;
