import { cn } from "@inmind/ui";

export function SectionHeader({
  eyebrow,
  headline,
  body,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[11px] font-medium uppercase tracking-[0.14em]",
            light ? "text-white/50" : "text-[var(--im-muted)]"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "whitespace-pre-line text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.045em]",
          light ? "text-white" : "text-[var(--im-ink)]"
        )}
      >
        {headline}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[16px] leading-relaxed md:text-[17px]",
            light ? "text-white/65" : "text-[var(--im-ink-soft)]",
            align === "center" && "mx-auto"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
