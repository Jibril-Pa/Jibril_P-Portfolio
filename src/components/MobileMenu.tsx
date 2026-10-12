import { useEffect, useRef } from "react";

import Button from "./Button";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import { CloseIcon, Logo } from "./Icons";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, keep Tab inside the drawer, and keep the page behind it from scrolling.
  useEffect(() => {
    const openedFrom = document.activeElement as HTMLElement | null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      openedFrom?.focus();
    };
  }, [onClose]);

  return (
    <div className="nav-overlay" onClick={onClose}>
      <div
        ref={drawerRef}
        id="site-menu"
        className="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="nav-drawer-top">
          <div className="nav-drawer-head">
            <Logo onNavigate={onClose} />
            <Button
              ref={closeButtonRef}
              variant="icon"
              aria-label="Close menu"
              onClick={onClose}
              startIcon={<CloseIcon />}
            />
          </div>
          <NavLinks onNavigate={onClose} />
        </div>
        <NavButtons onNavigate={onClose} />
      </div>
    </div>
  );
}
