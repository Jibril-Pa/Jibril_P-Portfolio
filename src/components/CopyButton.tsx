import { useEffect, useState } from "react";

import Button from "./Button";

type CopyButtonProps = {
  value: string;
  label?: string;
};

/** Copies a value to the clipboard, for visitors without a mail app set up. */
export default function CopyButton({ value, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked. The address is still on the page to select by hand.
    }
  };

  return (
    <Button variant="secondary" onClick={copy} aria-live="polite">
      {copied ? "Copied" : label}
    </Button>
  );
}
