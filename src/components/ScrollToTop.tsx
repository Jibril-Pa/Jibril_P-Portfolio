import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Route changes should start at the top, the way a real page load does. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Links like /work#projects should land on that section instead.
    const target = hash && document.getElementById(hash.slice(1));

    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
