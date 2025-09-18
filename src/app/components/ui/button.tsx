"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 select-none outline-none " +
    "font-medium transition-colors rounded-[var(--radius-md)] " +
    "focus-visible:ring-2 focus-visible:ring-brand/60 " +
    "disabled:opacity-60 disabled:pointer-events-none relative ",
  {
    variants: {
      variant: {
        primary: "bg-brand text-bg hover:bg-brand/90",
        secondary: "bg-fg text-bg hover:bg-fg/90",
        ghost: "bg-transparent text-fg hover:bg-fg/10 border border-fg/20",
      },
      size: {
        sm: "h-9 px-3 text-[0.9rem]",
        md: "h-10 px-4 text-[1rem]",
        lg: "h-12 px-6 text-[1.125rem]",
      },
      full: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      full: false,
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      full,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={twMerge(buttonVariants({ variant, size, full }), className)}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        type={props.type ?? "button"}
        {...props}
      >
        {leftIcon && !loading ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}

        <span className={clsx(loading && "opacity-0")}>{children}</span>

        {rightIcon && !loading ? (
          <span className="shrink-0">{rightIcon}</span>
        ) : null}

        {loading ? (
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <Spinner className="size-5" />
          </span>
        ) : null}
      </button>
    );
  }
);
Button.displayName = "Button";

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={twMerge("animate-spin", className)}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Loading"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className="opacity-25"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        className="opacity-75"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
