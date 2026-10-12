import { Link } from "react-router-dom";

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link to="/" className="logo" aria-label="Jibril Pascua — home" onClick={onNavigate}>
      <svg className="logo-mark" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="6" fill="currentColor" />
        <path
          d="M12.2 8.4v7.1c0 1.2-.6 1.8-1.7 1.8-.9 0-1.5-.4-1.9-1.2l-1.7 1c.7 1.4 1.9 2.1 3.7 2.1 2.4 0 3.9-1.4 3.9-3.7V8.4h-2.3ZM16.6 19.6h2.3v-3.9h1.6c2.2 0 3.7-1.5 3.7-3.6 0-2.2-1.5-3.7-3.7-3.7h-3.9v11.2Zm2.3-6v-3.2h1.5c.9 0 1.5.7 1.5 1.6 0 .9-.6 1.6-1.5 1.6h-1.5Z"
          fill="#fff"
        />
      </svg>
      <span className="logo-word">Jibril Pascua</span>
    </Link>
  );
}

/** A pen loop for circling one word. Stretches to whatever it wraps; see .scribble in pages.css. */
export function Scribble() {
  return (
    <svg viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true">
      <path
        pathLength="1"
        d="M16 33C11 15 38 5 67 5c29 0 48 10 46 27-2 16-30 24-58 23C29 54 7 47 9 30c1-9 11-17 27-21"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2.75 3.44446H15.25V4.83335H2.75V3.44446ZM2.75 8.30557H15.25V9.69446H2.75V8.30557ZM2.75 13.1667H15.25V14.5556H2.75V13.1667Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Marks a link that leaves the site or opens a file. */
export function ArrowUpRightIcon() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3.5 10.5L10.5 3.5M4.75 3.5H10.5V9.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7H12M7.75 2.75L12 7L7.75 11.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z"
        fill="currentColor"
      />
    </svg>
  );
}
