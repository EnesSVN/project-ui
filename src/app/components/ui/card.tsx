import * as React from "react";
import clsx from "clsx";

type CardProps = {
  title?: string;
  desc?: string;
  imgSrc?: string;
  imgAlt?: string;
  variant?: "elevated" | "outline";
  radius?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function Card({
  title,
  desc,
  imgSrc,
  imgAlt = "",
  variant = "elevated",
  radius = "md",
  className,
  children,
}: CardProps) {
  return (
    <article
      className={clsx(
        "overflow-hidden bg-bg/60 backdrop-blur-[1px]",
        variant === "elevated" && "shadow-[0_1px_12px_rgba(0,0,0,0.25)]",
        variant === "outline" && "border border-muted/25",
        radius === "md"
          ? "rounded-[var(--radius-md)]"
          : "rounded-[var(--radius-lg)]",
        className
      )}
    >
      {imgSrc ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="p-4">
        {title ? <h3 className="heading-3">{title}</h3> : null}
        {desc ? <p className="text-body text-fg/85 mt-1">{desc}</p> : null}
        {children}
      </div>
    </article>
  );
}
