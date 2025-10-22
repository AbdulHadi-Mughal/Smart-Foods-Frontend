import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Spice } from '../types/spice.type';
// import { Button } from '../components/ui/button';
// import { Heart } from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '../components/ui/breadcrumb';
import SingleProductPageSkele from '../components/SingleProductPage/SingleProductPageSkele';
// import { infoToast, successToast } from '../components/global/Toasts';

import { Image } from '@imagekit/react';
import Instructions from '@/components/SingleProductPage/Instructions';
// import CartDrawer from "@/components/SingleProductPage/CartDrawer";
// import { cartStore } from "@/stores/cart.store";
// import { CartUpdateDialog } from "@/components/SingleProductPage/CartUpdateDialog";
// import type { CartItem } from "@/types/cart.type";

const SingleProductPage = () => {
	const { productName } = useParams();
	const serverURL = import.meta.env.VITE_API_BASE_URL
		? import.meta.env.VITE_API_BASE_URL
		: 'http://localhost:3000/api';

	const [product, setProduct] = useState<Spice | null>(null);
	// const [sameCartOpen, setSameCartOpen] = useState(false);
	// const [newItem, setNewItem] = useState<CartItem | null>(null);

	// const { cartItems, removeItem } = cartStore();

	const fetchProducts = async () => {
		const res = await fetch(`${serverURL}/products/${productName}`);
		if (!res.ok) throw new Error('Failed to fetch product');
		return await res.json();
	};

	useEffect(() => {
		const fetchAndSetProducts = async () => {
			try {
				const fetched = await fetchProducts();
				setProduct(fetched);
			} catch (error) {
				console.error('Failed to fetch product:', error);
			}
		};

		fetchAndSetProducts();
	}, [productName]);

	// const inCart = useMemo(() => {
	//   if (!product) return false;
	//   return cartItems.some(
	//     (item) => item.name === product.name && item.weight === product.weight
	//   );
	// }, [cartItems, product]);

	// const [drawerOpen, setDrawerOpen] = useState(false);
	// const [drawerType, setDrawerType] = useState<
	//   "Add to Cart" | "Buy Now" | "Update Cart Item"
	// >("Add to Cart");

	if (!product) {
		return <SingleProductPageSkele />;
	}

	return (
		<div>
			{/* <CartDrawer
        setNewItem={setNewItem}
        setSameCartOpen={setSameCartOpen}
        drawerType={drawerType}
        product={product}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <CartUpdateDialog
        onClose={(cancel: boolean) => {
          setSameCartOpen(false);
          if (cancel) return;
          setDrawerOpen(false);
          successToast("Cart updated successfully!");
        }}
        newItem={newItem}
        sameCartOpen={sameCartOpen}
      /> */}
			<Breadcrumb className="mx-4 text-sm text-white">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to={'/'}>Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to={'/products'}>Products</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{product.name}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="container mx-auto my-1 px-4 py-5">
				{/* Image and top info */}
				<div className="flex flex-col gap-6 md:flex-row">
					{/* Product Image */}
					<div className="flex w-full justify-center rounded-2xl bg-white object-contain py-2 shadow-md md:w-1/2">
						{product.imageUrl ? (
							<Image
								crossOrigin="anonymous"
								src={product.imageUrl + '?tr=h-300'}
								className="h-80 w-auto"
							/>
						) : (
							<p className="text-center text-lg text-muted-foreground">No image available</p>
						)}
					</div>

					{/* Product Info */}
					<div className="flex-1 space-y-1">
						<div className="flex items-start justify-between">
							<h1 className="text-2xl leading-tight font-bold">{product.name}</h1>
							<div className="flex gap-2">
								{/* <Button
									size="icon"
									onClick={() => infoToast('Added to Favourites')}
									variant="outline"
								>
									<Heart className="h-5 w-5" />
								</Button> */}
							</div>
						</div>

						{/* Stock Info */}
						{!product.inStock && (
							<p className="text-md my-1 font-medium text-red-600">Out of Stock</p>
						)}
						<p className="my-1 text-xl font-bold text-primary">Rs. {product.price}</p>
						{/* {inCart && (
							<div className="flex items-center gap-1">
								<p className="mr-4 text-sm text-green-600">Added to Cart.</p>
								<Button
									onClick={() => {
										setDrawerType('Update Cart Item');
										setDrawerOpen(true);
									}}
									size="sm"
									variant="outline"
									className="text-xs"
								>
									Update
								</Button>
								<Button
									onClick={() => {
										removeItem(product.name);
										successToast('Removed from Cart');
									}}
									size="sm"
									variant="outline"
									className="text-xs"
								>
									Remove
								</Button>
							</div>
						)} */}

						<div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-evenly">
							{/* <Button
								size="lg"
								onClick={() => {
									setDrawerType('Add to Cart');
									setDrawerOpen(true);
								}}
								className="w-full sm:w-2/5"
								disabled={!product.inStock}
							>
								Add to Cart
							</Button>
							<Button
								size="lg"
								onClick={() => {
									infoToast('Buy Now');
									// setDrawerType("Buy Now");
									// setDrawerOpen(true);
								}}
								variant="secondary"
								className="w-full sm:w-2/5"
								disabled={!product.inStock}
							>
								Buy Now
							</Button> */}
						</div>
					</div>
				</div>
				<Instructions
					name={product.name}
					weight={product.weight}
					category={product.category}
					description={product.description}
					instructions={product.instruction}
				/>
			</div>
		</div>
	);
};

export default SingleProductPage;
