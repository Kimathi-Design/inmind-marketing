import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className
      )}
    >
      {icon ? (
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] border border-[var(--im-line)] bg-white/80 text-[var(--im-muted)]">
          {icon}
        </span>
      ) : null}
      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--im-ink)]">
        {title}
      </h3>
      {description ? (
        <p className="mt-1.5 max-w-sm text-[13.5px] leading-relaxed text-[var(--im-muted)]">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-5 flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}
