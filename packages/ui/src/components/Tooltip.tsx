"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../lib/cn";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 rounded-[10px] bg-[var(--im-ink)] px-2.5 py-1.5",
          "text-[12px] font-medium tracking-[-0.01em] text-white shadow-[var(--im-shadow-md)]",
          "animate-in fade-in-0 zoom-in-95",
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}
