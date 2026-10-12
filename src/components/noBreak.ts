/**
 * Browsers are allowed to wrap a line after any hyphen, which splits "H-E-B" in two on a phone.
 * A word joiner after each hyphen keeps the name on one line without changing how it looks.
 */
export function noBreak(text: string) {
  return text.replace(/H-E-B/g, "H-⁠E-⁠B");
}
