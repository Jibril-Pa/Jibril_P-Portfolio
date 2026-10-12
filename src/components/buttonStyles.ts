export type ButtonVariant = "primary" | "secondary" | "icon";

/** Shared class list so <button> and link-shaped buttons stay visually identical. */
export function buttonClass(variant: ButtonVariant, className?: string) {
  return ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");
}
