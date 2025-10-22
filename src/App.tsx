import { Route, Routes } from 'react-router-dom';
import { ImageKitProvider } from '@imagekit/react';

import NavBar from './components/global/NavBar';
import SideBar from './components/global/SideBar';
import { SidebarProvider } from './components/ui/sidebar';
import Footer from './components/global/Footer';
import { Toaster } from './components/ui/sonner';
import RouteChange from './components/global/RouteChanges';
import { Suspense, lazy, useEffect } from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { useServerWarmup } from './functions/severWarmup';
import LoadSpinner from './components/global/Spinner';
import { toast } from 'sonner';
// import CheckoutPage from "./pages/CheckoutPage";

// Lazy-loaded pages
const WhyUs = lazy(() => import('./pages/WhyUs'));
const SingleProductPage = lazy(() => import('./pages/SingleProductPage'));
// const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
// const SignupPage = lazy(() => import("./pages/auth/SignupPage"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage"));
// const CartPage = lazy(() => import("./pages/CartPage"));

// Legal
// const PrivacyPolicyPage = lazy(() => import("./pages/legal/PrivacyPolicyPage"));
// const TermsPage = lazy(() => import("./pages/legal/TermsPage"));
// const ShippingPolicyPage = lazy(
//   () => import("./pages/legal/ShippingPolicyPage")
// );
// const RefundPolicyPage = lazy(() => import("./pages/legal/RefundPolicyPage"));

function App() {
	useServerWarmup();

	useEffect(() => {
		toast.info('This website is under development, so errors are expected.');
	}, []);

	return (
		<SidebarProvider defaultOpen={false}>
			<ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL}>
				<RouteChange />
				<SideBar />
				<main className="block h-full w-full">
					<NavBar />

					<Suspense fallback={<LoadSpinner />}>
						<Routes>
							<Route path="/" element={<Home />} />

							<Route path="/products" element={<ProductPage />} />
							<Route path="/products/:productName" element={<SingleProductPage />} />
							{/* <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} /> */}

							<Route path="/why-us" element={<WhyUs />} />

							{/* <Route path="/sign-in" element={<LoginPage />} />
              <Route path="/create-account" element={<SignupPage />} />

              <Route path="/users/me" element={<ProfilePage />} /> */}

							{/* Legal pages */}
							{/* <Route
                path="/legal/privacy-policy"
                element={<PrivacyPolicyPage />}
              />
              <Route path="/legal/terms" element={<TermsPage />} />
              <Route path="/legal/shipping" element={<ShippingPolicyPage />} />
              <Route path="/legal/refunds" element={<RefundPolicyPage />} /> */}
						</Routes>
					</Suspense>

					<Footer />
					<Toaster richColors theme="light" />
				</main>
			</ImageKitProvider>
		</SidebarProvider>
	);
}

export default App;
