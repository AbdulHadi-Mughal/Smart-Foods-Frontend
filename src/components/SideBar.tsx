import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "../components/ui/sidebar";
import { Button } from "./ui/button";

export function SideBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="fixed z-10 bg-card">
      <Sidebar>
        <div className="bg-white w-full h-full">
          <SidebarHeader>
            <div className="flex justify-between items-center p-2 ">
              <Button variant="outline" onClick={toggleSidebar}>
                <RxHamburgerMenu />
              </Button>
              <img
                src="/smart_food_logo.png"
                alt="Smart Foods Logo"
                className="h-12"
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </div>
      </Sidebar>
    </div>
  );
}

export default SideBar;
