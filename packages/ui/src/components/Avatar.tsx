"use client";

import { useState } from "react";
import { cn } from "../lib/cn";

const sizes = {
  sm: "h-7 w-7 text-[11px]",
  md: "h-9 w-9 text-[12px]",
  lg: "h-11 w-11 text-[14px]",
  xl: "h-14 w-14 text-[16px]",
} as const;

export function Avatar({
  name,
  src,
  size = "md",
  className,
}: {
  name: string;
  src?: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const showImage = Boolean(src?.trim()) && !failed;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden",
        "rounded-full border border-white/70 bg-[var(--im-surface)]",
        "font-medium tracking-[-0.02em] text-[var(--im-ink)] shadow-[var(--im-shadow-sm)]",
        sizes[size],
        className
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        initials || "?"
      )}
    </span>
  );
}
