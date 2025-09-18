var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/app/components/ui/button.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 select-none outline-none font-medium transition-colors rounded-[var(--radius-md)] focus-visible:ring-2 focus-visible:ring-brand/60 disabled:opacity-60 disabled:pointer-events-none relative ",
  {
    variants: {
      variant: {
        primary: "bg-brand text-bg hover:bg-brand/90",
        secondary: "bg-fg text-bg hover:bg-fg/90",
        ghost: "bg-transparent text-fg hover:bg-fg/10 border border-fg/20"
      },
      size: {
        sm: "h-9 px-3 text-[0.9rem]",
        md: "h-10 px-4 text-[1rem]",
        lg: "h-12 px-6 text-[1.125rem]"
      },
      full: {
        true: "w-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      full: false
    }
  }
);
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      full,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "full",
      "loading",
      "leftIcon",
      "rightIcon",
      "disabled",
      "children"
    ]);
    var _a2;
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ React.createElement(
      "button",
      __spreadValues({
        ref,
        className: twMerge(buttonVariants({ variant, size, full }), className),
        disabled: isDisabled,
        "aria-disabled": isDisabled || void 0,
        "aria-busy": loading || void 0,
        "data-variant": variant,
        "data-size": size,
        type: (_a2 = props.type) != null ? _a2 : "button"
      }, props),
      leftIcon && !loading ? /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, leftIcon) : null,
      /* @__PURE__ */ React.createElement("span", { className: clsx(loading && "opacity-0") }, children),
      rightIcon && !loading ? /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, rightIcon) : null,
      loading ? /* @__PURE__ */ React.createElement(
        "span",
        {
          className: "absolute inset-0 flex items-center justify-center",
          "aria-hidden": "true"
        },
        /* @__PURE__ */ React.createElement(Spinner, { className: "size-5" })
      ) : null
    );
  }
);
Button.displayName = "Button";
function Spinner({ className }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: twMerge("animate-spin", className),
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": "Loading"
    },
    /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        className: "opacity-25",
        stroke: "currentColor",
        strokeWidth: "4",
        fill: "none"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12 2a10 10 0 0 1 10 10",
        className: "opacity-75",
        stroke: "currentColor",
        strokeWidth: "4",
        fill: "none",
        strokeLinecap: "round"
      }
    )
  );
}

// src/app/components/ui/card.tsx
import * as React2 from "react";
import clsx2 from "clsx";
function Card({
  title,
  desc,
  imgSrc,
  imgAlt = "",
  variant = "elevated",
  radius = "md",
  className,
  children
}) {
  return /* @__PURE__ */ React2.createElement(
    "article",
    {
      className: clsx2(
        "overflow-hidden bg-bg/60 backdrop-blur-[1px]",
        variant === "elevated" && "shadow-[0_1px_12px_rgba(0,0,0,0.25)]",
        variant === "outline" && "border border-muted/25",
        radius === "md" ? "rounded-[var(--radius-md)]" : "rounded-[var(--radius-lg)]",
        className
      )
    },
    imgSrc ? /* @__PURE__ */ React2.createElement("div", { className: "relative aspect-[16/9] overflow-hidden" }, /* @__PURE__ */ React2.createElement(
      "img",
      {
        src: imgSrc,
        alt: imgAlt,
        className: "block h-full w-full object-cover",
        loading: "lazy"
      }
    )) : null,
    /* @__PURE__ */ React2.createElement("div", { className: "p-4" }, title ? /* @__PURE__ */ React2.createElement("h3", { className: "heading-3" }, title) : null, desc ? /* @__PURE__ */ React2.createElement("p", { className: "text-body text-fg/85 mt-1" }, desc) : null, children)
  );
}

// src/app/components/ui/input.tsx
import * as React3 from "react";
import { twMerge as twMerge2 } from "tailwind-merge";
import clsx3 from "clsx";
var Input = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      id,
      label,
      error,
      leftIcon,
      rightIcon,
      size = "md",
      full,
      className
    } = _b, props = __objRest(_b, [
      "id",
      "label",
      "error",
      "leftIcon",
      "rightIcon",
      "size",
      "full",
      "className"
    ]);
    const generatedId = React3.useId();
    const inputId = id != null ? id : generatedId;
    const descId = error ? `${inputId}-error` : void 0;
    return /* @__PURE__ */ React3.createElement("div", { className: twMerge2(full ? "w-full" : "", "space-y-1") }, label ? /* @__PURE__ */ React3.createElement("label", { htmlFor: inputId, className: "text-body text-fg/90" }, label) : null, /* @__PURE__ */ React3.createElement(
      "div",
      {
        className: clsx3(
          "relative flex items-center rounded-[var(--radius-md)] border bg-bg/60",
          "focus-within:ring-2 focus-within:ring-brand/50",
          error ? "border-[#ff6666]/60" : "border-muted/25",
          size === "sm" && "h-9",
          size === "md" && "h-10",
          size === "lg" && "h-12"
        )
      },
      leftIcon ? /* @__PURE__ */ React3.createElement("span", { className: "pl-3 text-muted/90" }, leftIcon) : null,
      /* @__PURE__ */ React3.createElement(
        "input",
        __spreadValues({
          id: inputId,
          ref,
          "aria-invalid": !!error || void 0,
          "aria-describedby": descId,
          className: twMerge2(
            "peer w-full bg-transparent outline-none text-body text-fg/95",
            leftIcon ? "px-3 pl-2" : "px-3",
            rightIcon ? "pr-2" : ""
          )
        }, props)
      ),
      rightIcon ? /* @__PURE__ */ React3.createElement("span", { className: "pr-3 text-muted/90" }, rightIcon) : null
    ), error ? /* @__PURE__ */ React3.createElement("p", { id: descId, className: "text-caption", style: { color: "#ff8080" } }, error) : null);
  }
);
Input.displayName = "Input";

// src/app/components/ui/modal.tsx
import * as React6 from "react";
import clsx4 from "clsx";

// src/app/components/utils/useFocusTrap.ts
import * as React4 from "react";
var SELECTOR = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
function useFocusTrap(enabled) {
  const containerRef = React4.useRef(null);
  React4.useEffect(() => {
    var _a;
    if (!enabled) return;
    const root = containerRef.current;
    if (!root) return;
    const getFocusable = () => Array.from(root.querySelectorAll(SELECTOR)).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
    );
    const initial = (_a = getFocusable()[0]) != null ? _a : root;
    initial.focus();
    function onKeyDown(e) {
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
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

// src/app/components/utils/portal.tsx
import * as React5 from "react";
import { createPortal } from "react-dom";
function Portal({ children }) {
  const [mounted, setMounted] = React5.useState(false);
  const elRef = React5.useRef(null);
  React5.useEffect(() => {
    elRef.current = document.body;
    setMounted(true);
  }, []);
  if (!mounted || !elRef.current) return null;
  return createPortal(children, elRef.current);
}

// src/app/components/ui/modal.tsx
function Modal({
  open,
  onClose,
  title,
  description,
  width = "md",
  children,
  closeOnOverlay = true
}) {
  const panelRef = useFocusTrap(open);
  React6.useEffect(() => {
    if (!open) return;
    function onKeydown(e) {
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
  function onOverlayClick(e) {
    if (!closeOnOverlay) return;
    if (e.target === e.currentTarget) onClose();
  }
  return /* @__PURE__ */ React6.createElement(Portal, null, /* @__PURE__ */ React6.createElement(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/70 backdrop-blur-sm",
      role: "presentation",
      onMouseDown: onOverlayClick
    },
    /* @__PURE__ */ React6.createElement(
      "div",
      {
        ref: panelRef,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? "modal-title" : void 0,
        "aria-describedby": description ? "modal-desc" : void 0,
        tabIndex: -1,
        className: clsx4(
          "w-full rounded-[var(--radius-lg)] border border-muted/25 bg-bg shadow-[0_8px_40px_rgba(0,0,0,0.45)]",
          "outline-none",
          width === "sm" && "max-w-sm",
          width === "md" && "max-w-lg",
          width === "lg" && "max-w-2xl"
        )
      },
      /* @__PURE__ */ React6.createElement("div", { className: "p-5" }, title ? /* @__PURE__ */ React6.createElement("h2", { id: "modal-title", className: "heading-2 text-fg" }, title) : null, description ? /* @__PURE__ */ React6.createElement("p", { id: "modal-desc", className: "text-body text-fg/85 mt-1" }, description) : null),
      /* @__PURE__ */ React6.createElement("div", { className: "px-5 pb-5" }, children),
      /* @__PURE__ */ React6.createElement("div", { className: "px-5 pb-5" }, /* @__PURE__ */ React6.createElement(
        "button",
        {
          className: "inline-flex h-10 items-center rounded-[var(--radius-md)] border border-muted/25 px-4 text-body hover:bg-fg/10",
          onClick: onClose
        },
        "Kapat (Esc)"
      ))
    )
  ));
}
export {
  Button,
  Card,
  Input,
  Modal
};
//# sourceMappingURL=index.mjs.map