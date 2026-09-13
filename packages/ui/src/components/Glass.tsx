import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

export function Glass({
  className,
  children,
  hover = false,
  padding = "md",
  as: Comp = "div",
  ...props
}: HTMLAttributes<HTMLElement> & {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  as?: ElementType;
  children?: ReactNode;
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-5 md:p-6",
    lg: "p-6 md:p-8",
  };

  return (
    <Comp
      className={cn(
        "relative overflow-hidden rounded-[var(--im-radius-lg)]",
        "border border-[var(--im-glass-border)] bg-[var(--im-glass)]",
        "shadow-[var(--im-shadow-md)] backdrop-blur-[18px]",
        hover &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-[var(--im-ease)] hover:-translate-y-0.5 hover:border-[var(--im-line-strong)] hover:shadow-[var(--im-shadow-lg)]",
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Surface({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--im-radius-lg)] border border-[var(--im-line)] bg-[var(--im-fill)]",
        "shadow-[var(--im-shadow-sm)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-[var(--im-line)]", className)} />;
}
