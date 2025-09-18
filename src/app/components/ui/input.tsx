"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  full?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      leftIcon,
      rightIcon,
      size = "md",
      full,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const descId = error ? `${inputId}-error` : undefined;

    return (
      <div className={twMerge(full ? "w-full" : "", "space-y-1")}>
        {label ? (
          <label htmlFor={inputId} className="text-body text-fg/90">
            {label}
          </label>
        ) : null}

        <div
          className={clsx(
            "relative flex items-center rounded-[var(--radius-md)] border bg-bg/60",
            "focus-within:ring-2 focus-within:ring-brand/50",
            error ? "border-[#ff6666]/60" : "border-muted/25",
            size === "sm" && "h-9",
            size === "md" && "h-10",
            size === "lg" && "h-12"
          )}
        >
          {leftIcon ? (
            <span className="pl-3 text-muted/90">{leftIcon}</span>
          ) : null}

          <input
            id={inputId}
            ref={ref}
            aria-invalid={!!error || undefined}
            aria-describedby={descId}
            className={twMerge(
              "peer w-full bg-transparent outline-none text-body text-fg/95",
              leftIcon ? "px-3 pl-2" : "px-3",
              rightIcon ? "pr-2" : ""
            )}
            {...props}
          />

          {rightIcon ? (
            <span className="pr-3 text-muted/90">{rightIcon}</span>
          ) : null}
        </div>

        {error ? (
          <p id={descId} className="text-caption" style={{ color: "#ff8080" }}>
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";
