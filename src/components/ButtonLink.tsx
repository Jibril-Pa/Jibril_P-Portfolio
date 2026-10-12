import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { buttonClass } from "./buttonStyles";
import type { ButtonVariant } from "./buttonStyles";
import { ArrowUpRightIcon } from "./Icons";

import "./Button.css";

type ButtonLinkProps = {
  to: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  /** Set for files and off-site URLs, which bypass the router. */
  external?: boolean;
  onClick?: () => void;
};

export default function ButtonLink({
  to,
  variant = "secondary",
  className,
  children,
  external = false,
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClass(variant, className);

  if (external) {
    return (
      <a
        href={to}
        className={classes}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        <span className="btn-label">{children}</span>
        <ArrowUpRightIcon />
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      <span className="btn-label">{children}</span>
    </Link>
  );
}
