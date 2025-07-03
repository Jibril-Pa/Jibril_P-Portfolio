import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";


export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-gray-900 text-primary-foreground">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center" >
        <NavbarBrand className="gap-3 max-w-fit">
        </NavbarBrand>
        <div className="hidden lg:flex gap-1">
          {siteConfig.navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.href}
                variant={isActive ? "solid" : "light"}
                color={isActive ? "primary" : "default"}
                size="sm"
                className={clsx(
                  "h-10 px-4 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-default-100 text-default-600 hover:text-default-900"
                )}
                onPress={() => navigate(item.href)}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};
