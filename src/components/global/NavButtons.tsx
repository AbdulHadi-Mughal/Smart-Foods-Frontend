import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { Menu, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const checkAccount = () => {
    navigate("/cart");
  };
  return (
    <div className="flex space-x-2 items-center px-4">
      <Button variant="outline" onClick={toggleSidebar}>
        <Menu />
      </Button>
      <Button variant="outline" onClick={checkAccount}>
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default NavButtons;
