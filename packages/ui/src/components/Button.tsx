"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "soft";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--im-ink)] text-[var(--im-on-ink)] shadow-[var(--im-shadow-sm)] hover:bg-[var(--im-ink-soft)]",
  secondary:
    "bg-[var(--im-panel)] text-[var(--im-ink)] border border-[var(--im-line)] backdrop-blur-md hover:bg-[var(--im-panel-strong)] hover:border-[var(--im-line-strong)]",
  ghost:
    "bg-transparent text-[var(--im-ink)] hover:bg-[var(--im-panel-soft)]",
  accent:
    "bg-[var(--im-blue)] text-white shadow-[0_10px_30px_rgba(93,159,255,0.32)] hover:bg-[var(--im-blue-soft)]",
  soft:
    "bg-[var(--im-surface)] text-[var(--im-ink)] hover:bg-[var(--im-panel)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px] gap-1.5 rounded-[11px]",
  md: "h-11 px-[18px] text-[14px] gap-2 rounded-[13px]",
  lg: "h-12 px-5 text-[15px] gap-2 rounded-[14px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      leadingIcon,
      trailingIcon,
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={disabled ? undefined : { scale: 0.985 }}
        transition={{ type: "spring", stiffness: 520, damping: 32 }}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-[-0.01em]",
          "transition-[background,box-shadow,border-color,color] duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--im-blue)]/40 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-45",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
