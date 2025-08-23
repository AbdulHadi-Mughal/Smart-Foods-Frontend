import {
  Menu, // was RxHamburgerMenu
  Home, // was IoHomeSharp
  Crown, // was FaCrown
  LogIn, // was FiLogIn
  UserPlus, // was IoPersonAdd
  User,
  ShoppingBasket,
  LogOut, // was FaUser
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
import { useEffect, useRef, useState, type JSX } from "react";
import { useLocation } from "react-router-dom";
import { useUserStore } from "@/stores/user.store";
import SignOutDialog from "./SignOutDialog";
import { cartStore } from "@/stores/cart.store";

type SidebarPages = {
  title: string;
  url?: string;
  icon: JSX.Element;
  destructive?: boolean;
  onClick?: () => void;
}[];

export function SideBar() {
  const { toggleSidebar, setOpen, setOpenMobile } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  const { profile, setProfile } = useUserStore();
  const { resetItems } = cartStore();

  const [logoutOpen, setLogoutOpen] = useState(false);

  let specialElements: SidebarPages = [];

  if (profile === "guest") {
    specialElements = [
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
  } else if (profile === "customer") {
    specialElements = [
      {
        title: "Profile",
        url: "/users/me",
        icon: <User />,
      },
      {
        title: "Sign Out",
        onClick: () => setLogoutOpen(true),
        icon: <LogOut />,
        destructive: true,
      },
    ];
  }

  const sidebarPages = [
    {
      title: "Home",
      url: "/",
      icon: <Home />,
    },
    {
      title: "Products",
      url: "/products",
      icon: <ShoppingBasket />,
    },
    {
      title: "Why Us",
      url: "/why-us",
      icon: <Crown />,
    },
  ];

  const sidebarFooter = [...specialElements];

  useEffect(() => {
    setOpen(false);
    setOpenMobile(false); // Close sidebar on route change
  }, [pathname]);

  return (
    <>
      <SignOutDialog
        open={logoutOpen}
        onClose={(cancel: boolean) => {
          setLogoutOpen(false);
          if (cancel) return;

          setProfile("guest");
          resetItems();
          setOpen(false);
          setOpenMobile(false);
        }}
      />

      <div className="fixed z-50 bg-card">
        <Sidebar
          ref={sidebarRef}
          className="shadow-2xl border-4 border-gray-200"
        >
          <div className="bg-white w-full h-full">
            <SidebarHeader>
              <div className="flex justify-between items-center p-2 ">
                <div className="flex gap-2">
                  <Button variant="outline" onClick={toggleSidebar}>
                    <Menu />
                  </Button>
                  <Button variant="outline" onClick={toggleSidebar} asChild>
                    <Link to="/users/me">
                      <User />
                    </Link>
                  </Button>
                </div>

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
                        <SidebarMenuButton
                          asChild
                          className={
                            item.destructive
                              ? "bg-primary hover:bg-primary/90 text-white hover:text-white active:bg-primary/90 active:text-white"
                              : ""
                          }
                        >
                          {item.url ? (
                            <Link to={item.url}>
                              {item.icon}
                              <span className="text-md ml-2">{item.title}</span>
                            </Link>
                          ) : (
                            <div onClick={item.onClick}>
                              {item.icon}
                              <span className="text-md ml-2">{item.title}</span>
                            </div>
                          )}
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
    </>
  );
}

export default SideBar;
