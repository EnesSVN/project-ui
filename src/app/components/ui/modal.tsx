"use client";

import * as React from "react";
import clsx from "clsx";
import { useFocusTrap } from "../utils/useFocusTrap";
import { Portal } from "../utils/portal";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  width?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  closeOnOverlay?: boolean;
};

export function Modal({
  open,
  onClose,
  title,
  description,
  width = "md",
  children,
  closeOnOverlay = true,
}: ModalProps) {
  const panelRef = useFocusTrap<HTMLDivElement>(open);

  React.useEffect(() => {
    if (!open) return;

    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeydown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!closeOnOverlay) return;
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/70 backdrop-blur-sm"
        role="presentation"
        onMouseDown={onOverlayClick}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          aria-describedby={description ? "modal-desc" : undefined}
          tabIndex={-1}
          className={clsx(
            "w-full rounded-[var(--radius-lg)] border border-muted/25 bg-bg shadow-[0_8px_40px_rgba(0,0,0,0.45)]",
            "outline-none",
            width === "sm" && "max-w-sm",
            width === "md" && "max-w-lg",
            width === "lg" && "max-w-2xl"
          )}
        >
          <div className="p-5">
            {title ? (
              <h2 id="modal-title" className="heading-2 text-fg">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p id="modal-desc" className="text-body text-fg/85 mt-1">
                {description}
              </p>
            ) : null}
          </div>

          <div className="px-5 pb-5">{children}</div>

          <div className="px-5 pb-5">
            <button
              className="inline-flex h-10 items-center rounded-[var(--radius-md)] border border-muted/25 px-4 text-body hover:bg-fg/10"
              onClick={onClose}
            >
              Kapat (Esc)
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
