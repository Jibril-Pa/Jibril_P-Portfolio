import { NavLink } from "react-router-dom";

import { navItems } from "./navItems";

type NavLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

export default function NavLinks({ className, onNavigate }: NavLinksProps) {
  return (
    <nav className={["nav-links", className].filter(Boolean).join(" ")} aria-label="Main">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          onClick={onNavigate}
          className={({ isActive }) => ["nav-link", isActive && "active"].filter(Boolean).join(" ")}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
