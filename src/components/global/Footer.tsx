import { Link } from "react-router-dom";
import Facebook from "/brandIcons/facebook.svg"; // Ensure you have the correct path to your Facebook icon
import { Image } from "@imagekit/react";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4 py-14 text-gray-700 max-w-7xl">
        {/* Column 1: Brand Info */}
        <div className="flex items-start space-x-3 my-2 px-4 py-2 md:border-r border-r-gray-200">
          <Image
            loading="lazy"
            src="/Static%20Files/smart_food_logo.webp"
            alt="The Smart Foods"
            className="h-8"
          />
          <p className="text-sm max-w-xs">
            Manufacture and trade in spices, mix recipes, and food products.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-sm px-4 py-2 md:border-r border-r-gray-200">
          <h4 className="font-semibold mb-2">Quick Links</h4>
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
            <li>
              <Link to="/users/me">Profile</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div className="text-sm text-center md:text-left px-4 py-2 md:border-r border-r-gray-200">
          <div className="my-4">
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">0300-9448933</p>
          </div>
          <div className="md:text-left py-2">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="text-2xl text-center">
              <a
                href="https://www.facebook.com/profile.php?id=61556590796689"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="md:flex">
                  <div className="md:flex md:justify-center">
                    <span className="flex items-center justify-center">
                      <img
                        className="size-4 inline mr-2"
                        src={Facebook}
                        alt="Facebook"
                      />
                      <p className="text-sm underline">The Smart Foods</p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
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
