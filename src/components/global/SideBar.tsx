import {
  Menu, // was RxHamburgerMenu
  Home, // was IoHomeSharp
  ShoppingCart, // was MdShoppingCart
  Crown, // was FaCrown
  LogIn, // was FiLogIn
  UserPlus, // was IoPersonAdd
  User, // was FaUser
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const sidebarPages = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Products",
    url: "/products",
    icon: <ShoppingCart />,
  },
  {
    title: "Why Us",
    url: "/why-us",
    icon: <Crown />,
  },
];

const sidebarFooter = [
  {
    title: "Profile",
    url: "/users/me",
    icon: <User />,
  },
  // {
  //   title: "Cart",
  //   url: "/cart",
  //   icon: <MdShoppingCart />,
  // },
  {
    title: "Sign In",
    url: "/sign-in",
    icon: <LogIn />,
  },
  {
    title: "Create Account",
    url: "/create-account",
    icon: <UserPlus />,
  },
];

export function SideBar() {
  const { toggleSidebar, setOpen, setOpenMobile } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenMobile(false); // Close sidebar on route change
  }, [pathname]);

  return (
    <div className="fixed z-50 bg-card">
      <Sidebar ref={sidebarRef} className="shadow-2xl border-4 border-gray-200">
        <div className="bg-white w-full h-full">
          <SidebarHeader>
            <div className="flex justify-between items-center p-2 ">
              <Button variant="outline" onClick={toggleSidebar}>
                <Menu />
              </Button>
              <img
                loading="lazy"
                src="/smart_food_logo.webp"
                alt="Smart Foods Logo"
                className="h-12"
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-md border-b border-b-gray-200">
                Pages
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarPages.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          {item.icon}
                          <span className="text-md ml-2">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel className="text-md border-b border-b-gray-200">
                Account
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarFooter.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
      </Sidebar>
    </div>
  );
}

export default SideBar;
