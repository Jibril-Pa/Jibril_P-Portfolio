import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { AiFillLinkedin, AiFillGithub, AiFillDiscord} from "react-icons/ai";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
          <Link isExternal href={siteConfig.links.LinkedIn} title="LinkedIn">
            <AiFillLinkedin className="text-default-500 w-10 h-10" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <AiFillDiscord className="text-default-500 w-10 h-10" />
        </Link>
          <Link isExternal href={siteConfig.links.github}>
            <AiFillGithub className="text-default-500 w-10 h-10" />
          </Link>
          <ThemeSwitch />
      </footer>
    </div>
  );
}
