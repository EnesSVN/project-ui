"use client";

import * as React from "react";

const SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function useFocusTrap<T extends HTMLElement>(enabled: boolean) {
  const containerRef = React.useRef<T | null>(null);

  React.useEffect(() => {
    if (!enabled) return;

    const root = containerRef.current;
    if (!root) return;

    const getFocusable = () =>
      Array.from(root.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
      );

    const initial = getFocusable()[0] ?? root;
    initial.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      const focusables = getFocusable();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !root || !root.contains(active)) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (active === last || !root || !root.contains(active)) {
          first.focus();
          e.preventDefault();
        }
      }
    }

    root.addEventListener("keydown", onKeyDown);

    return () => {
      root.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled]);

  return containerRef;
}
