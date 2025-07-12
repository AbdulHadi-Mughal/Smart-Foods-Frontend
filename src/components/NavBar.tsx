import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between text-foreground p-1 shadow-md mb-4 max-w-7xl w-full">
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <img
              src="/smart_food_logo.png"
              alt="Smart Foods Logo"
              className="h-15 w-15 px-2"
            />
            <h1 className="text-lg font-bold">The Smart Foods</h1>
          </div>
        </Link>
        <NavButtons />
      </div>
    </div>
  );
};

export default NavBar;
