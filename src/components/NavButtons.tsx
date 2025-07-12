import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from "./ui/sidebar";

const NavButtons = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex space-x-2 items-center px-4">
      <Button variant="outline" onClick={toggleSidebar}>
        <RxHamburgerMenu />
      </Button>
    </div>
  );
};

export default NavButtons;
