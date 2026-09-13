"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../lib/cn";

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex h-11 items-center gap-1 rounded-[14px] border border-[var(--im-line)]",
        "bg-[var(--im-surface)]/80 p-1 backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-[11px] px-3.5",
        "text-[13px] font-medium tracking-[-0.01em] text-[var(--im-muted)]",
        "transition-all duration-200",
        "data-[state=active]:bg-white data-[state=active]:text-[var(--im-ink)]",
        "data-[state=active]:shadow-[var(--im-shadow-sm)]",
        "hover:text-[var(--im-ink)] focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn("mt-5 focus-visible:outline-none", className)}
      {...props}
    />
  );
}
