import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { buttonClass } from "./buttonStyles";
import type { ButtonVariant } from "./buttonStyles";

import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "secondary", startIcon, endIcon, children, className, type = "button", ...props },
  ref,
) {
  return (
    <button ref={ref} type={type} className={buttonClass(variant, className)} {...props}>
      {startIcon}
      {children && <span className="btn-label">{children}</span>}
      {endIcon}
    </button>
  );
});

export default Button;
