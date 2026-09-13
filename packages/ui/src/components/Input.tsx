"use client";

import { forwardRef } from "react";
import { cn } from "../lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, leadingIcon, trailing, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <label className="flex w-full flex-col gap-2">
        {label ? (
          <span className="text-[13px] font-medium tracking-[-0.01em] text-[var(--im-ink)]">
            {label}
          </span>
        ) : null}
        <span
          className={cn(
            "group relative flex h-11 items-center gap-2.5 rounded-[13px] border bg-white/70 px-3.5",
            "backdrop-blur-md transition-[border-color,box-shadow,background] duration-200",
            "border-[var(--im-line)] hover:border-[var(--im-line-strong)]",
            "focus-within:border-[var(--im-ink)]/25 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]",
            error && "border-red-400/70 focus-within:shadow-[0_0_0_3px_rgba(248,113,113,0.15)]",
            className
          )}
        >
          {leadingIcon ? (
            <span className="text-[var(--im-muted)]">{leadingIcon}</span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "h-full w-full bg-transparent text-[14px] tracking-[-0.01em] text-[var(--im-ink)]",
              "placeholder:text-[var(--im-muted-2)] outline-none"
            )}
            {...props}
          />
          {trailing ? <span className="text-[var(--im-muted)]">{trailing}</span> : null}
        </span>
        {error ? (
          <span className="text-[12px] text-red-500">{error}</span>
        ) : hint ? (
          <span className="text-[12px] text-[var(--im-muted)]">{hint}</span>
        ) : null}
      </label>
    );
  }
);

Input.displayName = "Input";
