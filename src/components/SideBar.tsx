import { RxHamburgerMenu } from "react-icons/rx";
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
} from "../components/ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    title: "Home",
    url: "/",
    icon: RxHamburgerMenu,
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Why Us",
    url: "/whyUs",
  },
];

export function SideBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="fixed z-50 bg-card">
      <Sidebar>
        <div className="bg-white w-full h-full">
          <SidebarHeader>
            <div className="flex justify-between items-center p-2 ">
              <Button variant="outline" onClick={toggleSidebar}>
                <RxHamburgerMenu />
              </Button>
              <img
                src="/smart_food_logo.webp"
                alt="Smart Foods Logo"
                className="h-12"
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Pages</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
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
