import { Route, Routes } from "react-router-dom";
import NavBar from "./components/global/NavBar";
import SideBar from "./components/global/SideBar";
import { SidebarProvider } from "./components/ui/sidebar";
import Footer from "./components/global/Footer";
import { Toaster } from "./components/ui/sonner";
import RouteChange from "./components/global/RouteChanges";
import { Suspense, lazy } from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { useServerWarmup } from "./functions/severWarmup";
import LoadSpinner from "./components/global/Spinner";

// Lazy-loaded pages
const WhyUs = lazy(() => import("./pages/WhyUs"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  useServerWarmup();

  return (
    <SidebarProvider defaultOpen={false}>
      <RouteChange />
      <SideBar />
      <main className="block w-full h-full">
        <NavBar />

        <div className="min-h-4/5">
          <Suspense fallback={<LoadSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/products" element={<ProductPage />} />
              <Route
                path="/products/:productName"
                element={<SingleProductPage />}
              />
              <Route path="/why-us" element={<WhyUs />} />

              <Route path="/sign-in" element={<LoginPage />} />
              <Route path="/create-account" element={<SignupPage />} />

              <Route path="/users/me" element={<ProfilePage />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
        <Toaster />
      </main>
    </SidebarProvider>
  );
}

export default App;
