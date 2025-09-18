"use client";

import * as React from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  const elRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    elRef.current = document.body;
    setMounted(true);
  }, []);

  if (!mounted || !elRef.current) return null;
  return createPortal(children, elRef.current);
}
