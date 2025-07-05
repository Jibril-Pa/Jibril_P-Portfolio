import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import favicon from "/favicon.ico";

import { siteConfig } from "@/config/site";


export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-gray-900 text-primary-foreground">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand className="gap-3 max-w-fit">
          <span className="font-bold text-inherit">
            <div className="flex items-center gap-2"></div>
            <img src={favicon} alt="favicon" width={30} height={30} />
          </span>
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
        <NavbarMenuToggle
          aria-label="Toggle menu"
          className="sm:hidden"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavbarMenuItem key={item.href}>
              <Button
                variant={isActive ? "solid" : "light"}
                color={isActive ? "primary" : "default"}
                size="lg"
                className={clsx(
                  "w-full justify-start h-12 px-4 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-default-100 text-default-600 hover:text-default-900"
                )}
                onPress={() => {
                  navigate(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Button>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
