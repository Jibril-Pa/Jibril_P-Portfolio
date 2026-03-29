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
import { ThemeSwitch } from "@/components/theme-switch";
import favicon from "/favicon.ico";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="backdrop-blur-xl bg-background/80 border-b border-border/50"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand className="gap-3 max-w-fit">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <img src={favicon} alt="Jibril Pascua" width={30} height={30} />
          </button>
        </NavbarBrand>
        <div className="hidden lg:flex gap-1">
          {siteConfig.navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.href}
                variant={isActive ? "flat" : "light"}
                size="sm"
                className={clsx(
                  "h-9 px-4 rounded-lg transition-all duration-200 font-medium",
                  isActive
                    ? "bg-blue-500/10 text-blue-500 dark:bg-blue-500/15 dark:text-blue-400"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                )}
                onPress={() => navigate(item.href)}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <div className="hidden lg:flex ml-2">
          <ThemeSwitch />
        </div>
        <NavbarMenuToggle aria-label="Toggle menu" className="lg:hidden" />
      </NavbarContent>

      <NavbarMenu className="pt-4 gap-2">
        {siteConfig.navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavbarMenuItem key={item.href}>
              <Button
                variant={isActive ? "flat" : "light"}
                size="lg"
                className={clsx(
                  "w-full justify-start h-12 px-4 rounded-lg transition-all duration-200 font-medium",
                  isActive
                    ? "bg-blue-500/10 text-blue-500 dark:bg-blue-500/15 dark:text-blue-400"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
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
        <NavbarMenuItem>
          <div className="flex justify-start px-4 pt-2">
            <ThemeSwitch />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
