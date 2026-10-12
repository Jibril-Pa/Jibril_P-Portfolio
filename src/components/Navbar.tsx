import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Button from "./Button";
import MobileMenu from "./MobileMenu";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import { Logo, MenuIcon } from "./Icons";

import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const { pathname } = useLocation();

  // Also close the drawer on back/forward navigation, not just on link clicks.
  useEffect(() => closeMenu(), [pathname, closeMenu]);

  // Past the breakpoint in Navbar.css the hamburger is gone, so an open drawer would be stuck.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    desktop.addEventListener("change", closeMenu);
    return () => desktop.removeEventListener("change", closeMenu);
  }, [closeMenu]);

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-start">
          <Logo />
          <NavLinks className="desktop-only" />
        </div>
        <NavButtons className="desktop-only" />
        <Button
          variant="icon"
          className="navbar-toggle"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => setIsMenuOpen(true)}
          startIcon={<MenuIcon />}
        />
      </div>
      {isMenuOpen && <MobileMenu onClose={closeMenu} />}
    </header>
  );
}
