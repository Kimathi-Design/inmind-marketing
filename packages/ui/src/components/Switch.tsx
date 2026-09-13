"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../lib/cn";

export function Switch({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer items-center rounded-full",
        "border border-transparent transition-colors duration-200",
        "bg-black/10 data-[state=checked]:bg-[var(--im-ink)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--im-violet)]/30",
        "disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-[18px] w-[18px] rounded-full bg-white",
          "shadow-[var(--im-shadow-sm)] transition-transform duration-200",
          "data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-[2px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}
