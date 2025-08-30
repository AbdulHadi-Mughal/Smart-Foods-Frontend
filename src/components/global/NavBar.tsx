import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";
import { Image } from "@imagekit/react";

const NavBar = () => {
  return (
    <div className="flex justify-center bg-white sticky top-0 z-10 mb-4">
      <div className="flex justify-between text-foreground p-1 shadow-md max-w-7xl w-full">
        <Link to={"/"}>
          <div className="flex items-center space-x-0">
            <Image
              src="/Static%20Files/smart_food_logo.webp?"
              alt="Smart Foods Logo"
              className="h-10 md:h-11 lg:h-12 pl-2 pr-1"
            />
            <h1 className=" sm:inline-block md:text-md text-sm font-bold">
              The Smart Foods
            </h1>
          </div>
        </Link>
        <NavButtons />
      </div>
    </div>
  );
};

export default NavBar;
