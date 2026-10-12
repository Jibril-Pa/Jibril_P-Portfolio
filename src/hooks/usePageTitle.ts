import { useEffect } from "react";

import { site } from "../data/site";

/** Sets the browser tab title. Call with no argument on the home page. */
export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name;
  }, [title]);
}
