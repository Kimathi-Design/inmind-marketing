"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "./icons";
import { cn } from "../lib/cn";

export function Checkbox({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer h-[18px] w-[18px] shrink-0 rounded-[6px] border border-[var(--im-line-strong)]",
        "bg-white transition-colors duration-150",
        "data-[state=checked]:border-[var(--im-ink)] data-[state=checked]:bg-[var(--im-ink)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--im-violet)]/30",
        "disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        <CheckIcon size={12} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
