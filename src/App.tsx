import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { SidebarProvider } from "./components/ui/sidebar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import WhyUs from "./pages/WhyUs";
import SingleProductPage from "./pages/SingleProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <SideBar />
        <main className="block w-full h-full ">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route
              path="/products/:productName"
              element={<SingleProductPage />}
            />
            <Route path="/WhyUs" element={<WhyUs />} />
            {/* <Route path="/aboutUs" element={<AboutUs />} /> */}

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>

          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
