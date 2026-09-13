import { cn } from "../lib/cn";

type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger" | "ink";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-black/[0.04] text-[var(--im-muted)]",
  accent: "bg-[linear-gradient(135deg,rgba(255,79,216,0.12),rgba(139,92,246,0.12))] text-[#7c3aed]",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-600",
  ink: "bg-[var(--im-ink)] text-white",
};

export function Badge({
  className,
  tone = "neutral",
  children,
  dot,
}: {
  className?: string;
  tone?: BadgeTone;
  children: React.ReactNode;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
        "text-[11.5px] font-medium tracking-[-0.01em]",
        tones[tone],
        className
      )}
    >
      {dot ? (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            tone === "success" && "bg-emerald-500",
            tone === "warning" && "bg-amber-500",
            tone === "danger" && "bg-red-500",
            tone === "accent" && "bg-[var(--im-violet)]",
            tone === "neutral" && "bg-[var(--im-muted)]",
            tone === "ink" && "bg-white"
          )}
        />
      ) : null}
      {children}
    </span>
  );
}
