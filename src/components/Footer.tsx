import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="bg-white border-t-2 grid grid-cols-1 md:grid-cols-3 gap-6 my-6 border-gray-100 shadow-inner mt-8 px-4 py-8 text-gray-700 max-w-7xl">
        {/* Column 1: Brand Info */}
        <div className="flex items-start space-x-3 my-2 px-4 py-2">
          <img
            src="/smart_food_logo.png"
            alt="The Smart Foods"
            className="w-8 h-8"
          />
          <p className="text-sm max-w-xs">
            Manufacture and trade in spices, mix recipes, and food products.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-sm px-4 py-2">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div className="text-sm text-center md:text-left px-4 py-2">
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61556590796689"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="col-span-full text-center text-xs text-muted-foreground py-2">
          <p>© 2025 The Smart Foods. All rights reserved.</p>
          <p className="mt-1">Made in Pakistan · Halal Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
