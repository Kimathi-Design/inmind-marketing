"use client";

import Link from "next/link";
import { useId, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@inmind/ui";

gsap.registerPlugin(useGSAP);

export type ChartPoint = {
  label: string;
  value: number;
};

/** Build a short rising series that lands on `value` (demo trends from live KPIs). */
export function trendSeries(
  value: number,
  labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
): ChartPoint[] {
  const base = Math.max(value, 1);
  return labels.map((label, i) => {
    const t = i / Math.max(labels.length - 1, 1);
    const wobble = 0.88 + ((i * 13) % 9) / 80;
    return {
      label,
      value: Math.max(0, Math.round(base * (0.5 + t * 0.5) * wobble)),
    };
  });
}

const GROUP_COLORS = [
  "var(--im-violet)",
  "var(--im-blue)",
  "#E8A54B",
  "#34d399",
  "#f472b6",
  "#94a3b8",
];

export function chartColor(i: number) {
  return GROUP_COLORS[i % GROUP_COLORS.length];
}

function useChartMotion(root: React.RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const bars = root.current?.querySelectorAll("[data-chart-bar]");
        const hbars = root.current?.querySelectorAll("[data-chart-hbar]");
        const paths = root.current?.querySelectorAll("[data-chart-path]");
        const rings = root.current?.querySelectorAll("[data-chart-ring]");
        const fades = root.current?.querySelectorAll("[data-chart-fade]");

        if (bars?.length) {
          gsap.fromTo(
            bars,
            { scaleY: 0, transformOrigin: "bottom" },
            { scaleY: 1, duration: 0.7, stagger: 0.05, ease: "power3.out" }
          );
        }
        if (hbars?.length) {
          gsap.fromTo(
            hbars,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, stagger: 0.06, ease: "power3.out" }
          );
        }
        if (paths?.length) {
          paths.forEach((path) => {
            const el = path as SVGPathElement;
            const len = el.getTotalLength?.() ?? 0;
            if (!len) return;
            gsap.fromTo(
              el,
              { strokeDasharray: len, strokeDashoffset: len },
              { strokeDashoffset: 0, duration: 1, ease: "power2.out" }
            );
          });
        }
        if (rings?.length) {
          rings.forEach((ring) => {
            const el = ring as SVGCircleElement;
            const len = Number(el.getAttribute("data-len") || 0);
            gsap.fromTo(
              el,
              { strokeDashoffset: len },
              { strokeDashoffset: Number(el.getAttribute("data-offset") || 0), duration: 1, ease: "power3.out" }
            );
          });
        }
        if (fades?.length) {
          gsap.fromTo(
            fades,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
          );
        }
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: deps, revertOnUpdate: true }
  );
}

/** Area / line sparkline with hover tooltip. */
export function SparkArea({
  series,
  className,
  height = 56,
  color = "var(--im-blue)",
  fillOpacity = 0.18,
  formatValue = (v) => v.toLocaleString(),
  showLabels = false,
}: {
  series: ChartPoint[];
  className?: string;
  height?: number;
  color?: string;
  fillOpacity?: number;
  formatValue?: (v: number, point: ChartPoint) => string;
  showLabels?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const [hover, setHover] = useState<number | null>(null);

  const vbW = 100;
  const vbH = 100;
  const padX = 0.5;
  const padTop = 8;
  const padBot = 4;
  const labelH = showLabels ? 22 : 0;
  const plotH = Math.max(height - labelH, 40);

  const { line, area, points, max, min } = useMemo(() => {
    const vals = series.map((s) => s.value);
    const maxV = Math.max(...vals, 1);
    const minV = Math.min(...vals);
    const pad = Math.max((maxV - minV) * 0.1, maxV * 0.04, 1);
    const lo = Math.max(0, minV - pad);
    const hi = maxV + pad;
    const span = Math.max(hi - lo, 1);
    const plotW = vbW - padX * 2;
    const plotHeight = vbH - padTop - padBot;

    const pts = series.map((s, i) => {
      const x =
        series.length === 1
          ? vbW / 2
          : padX + (i / (series.length - 1)) * plotW;
      const y = padTop + plotHeight - ((s.value - lo) / span) * plotHeight;
      return { x, y, ...s };
    });

    const lineD = (() => {
      if (pts.length === 0) return "";
      if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;
      let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i === 0 ? i : i - 1];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] ?? p2;
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
      }
      return d;
    })();

    const last = pts[pts.length - 1];
    const first = pts[0];
    const areaD = `${lineD} L ${last.x.toFixed(2)} ${vbH - padBot} L ${first.x.toFixed(2)} ${vbH - padBot} Z`;
    return { line: lineD, area: areaD, points: pts, max: maxV, min: minV };
  }, [series]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const path = root.current?.querySelector("[data-chart-path]");
        const fill = root.current?.querySelector("[data-chart-area]");
        if (path) {
          gsap.fromTo(
            path,
            { opacity: 0 },
            { opacity: 1, duration: 0.7, ease: "power2.out" }
          );
        }
        if (fill) {
          gsap.fromTo(
            fill,
            { opacity: 0 },
            { opacity: fillOpacity, duration: 0.9, delay: 0.1, ease: "power2.out" }
          );
        }
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [series, fillOpacity], revertOnUpdate: true }
  );

  const active = hover != null ? points[hover] : null;
  const usesCssVar = color.startsWith("var(") || color === "currentColor";
  const strokeColor = usesCssVar ? "currentColor" : color;

  return (
    <div
      ref={root}
      className={cn("relative flex w-full flex-col text-[var(--im-ink)]", className)}
      style={{
        height,
        ...(usesCssVar && color !== "currentColor" ? { color } : null),
        ...(!usesCssVar ? { color } : null),
      }}
      onMouseLeave={() => setHover(null)}
    >
      <div className="relative min-h-0 w-full flex-1" style={{ height: plotH }}>
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id={`spark-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="1" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <line
            x1={0}
            x2={vbW}
            y1={vbH - padBot}
            y2={vbH - padBot}
            stroke="currentColor"
            strokeOpacity={0.08}
            strokeWidth={0.4}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={area}
            fill={`url(#spark-${uid})`}
            opacity={fillOpacity}
            data-chart-area
          />
          <path
            d={line}
            fill="none"
            stroke={strokeColor}
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            data-chart-path
          />
          {points.map((p, i) => {
            const prevX = i === 0 ? 0 : (points[i - 1].x + p.x) / 2;
            const nextX =
              i === points.length - 1 ? vbW : (p.x + points[i + 1].x) / 2;
            return (
              <rect
                key={`hit-${p.label}-${i}`}
                x={prevX}
                y={0}
                width={Math.max(nextX - prevX, 0.5)}
                height={vbH}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
              />
            );
          })}
        </svg>
        {active ? (
          <>
            <span
              className="pointer-events-none absolute z-[1] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current shadow-[0_0_0_3px_rgba(255,255,255,0.85)]"
              style={{ left: `${active.x}%`, top: `${active.y}%` }}
            />
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 rounded-[10px] border border-[var(--im-line)] bg-[var(--im-ink)] px-2.5 py-1.5 text-[var(--im-on-ink)] shadow-[var(--im-shadow-md)]"
              style={{ left: `${active.x}%`, top: 4 }}
            >
              <p className="text-[10px] uppercase tracking-[0.06em] text-white/70">
                {active.label}
              </p>
              <p className="text-[12.5px] font-semibold tabular-nums">
                {formatValue(active.value, active)}
              </p>
            </div>
          </>
        ) : null}
      </div>
      {showLabels ? (
        <div className="mt-1 flex w-full">
          {series.map((p, i) => {
            const show =
              i === 0 ||
              i === series.length - 1 ||
              i % Math.ceil(series.length / 5) === 0;
            return (
              <span
                key={`lbl-${p.label}-${i}`}
                className={cn(
                  "min-w-0 flex-1 text-center text-[10px] tracking-[-0.01em] text-[var(--im-muted)]",
                  !show && "invisible"
                )}
              >
                {show ? p.label : "·"}
              </span>
            );
          })}
        </div>
      ) : null}
      <span className="sr-only">
        Series from {min} to {max}
      </span>
    </div>
  );
}

/** Vertical bars with hover labels. */
export function MiniBars({
  series,
  className,
  height = 88,
  color = "var(--im-violet)",
  formatValue = (v) => v.toLocaleString(),
}: {
  series: ChartPoint[];
  className?: string;
  height?: number;
  color?: string;
  formatValue?: (v: number, point: ChartPoint) => string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  useChartMotion(root, [series]);
  const max = Math.max(...series.map((s) => s.value), 1);

  return (
    <div ref={root} className={cn("relative w-full", className)}>
      <div className="flex w-full items-end gap-1" style={{ height }}>
        {series.map((point, i) => {
          const pct = Math.max(8, (point.value / max) * 100);
          const active = hover === i;
          return (
            <button
              key={point.label}
              type="button"
              className="group relative flex min-w-0 flex-1 flex-col items-center justify-end"
              style={{ height: "100%" }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
            >
              {active ? (
                <span className="absolute -top-7 z-10 whitespace-nowrap rounded-[8px] border border-[var(--im-line)] bg-[var(--im-ink)] px-2 py-0.5 text-[11px] font-medium tabular-nums text-[var(--im-on-ink)]">
                  {formatValue(point.value, point)}
                </span>
              ) : null}
              <span
                data-chart-bar
                className={cn(
                  "w-full rounded-t-[7px] transition-opacity",
                  active ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                )}
                style={{
                  height: `${pct}%`,
                  background: color,
                }}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-1.5 flex w-full gap-1">
        {series.map((point, i) => (
          <span
            key={point.label}
            className={cn(
              "min-w-0 flex-1 truncate text-center text-[10px] tracking-[-0.01em]",
              hover === i
                ? "font-medium text-current"
                : "text-current opacity-45"
            )}
          >
            {point.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Horizontal distribution bars. */
export function DistBars({
  series,
  className,
  color = "var(--im-violet)",
  formatValue = (v) => String(v),
}: {
  series: ChartPoint[];
  className?: string;
  color?: string;
  formatValue?: (v: number, point: ChartPoint) => string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  useChartMotion(root, [series]);
  const max = Math.max(...series.map((s) => s.value), 1);

  return (
    <div ref={root} className={cn("space-y-2.5", className)}>
      {series.map((point, i) => (
        <div
          key={point.label}
          data-chart-fade
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <div className="mb-1 flex items-center justify-between text-[11.5px]">
            <span className="text-[var(--im-muted)]">{point.label}</span>
            <span
              className={cn(
                "font-medium tabular-nums transition-colors",
                hover === i ? "text-[var(--im-ink)]" : "text-[var(--im-muted)]"
              )}
            >
              {formatValue(point.value, point)}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-black/[0.05]">
            <div
              data-chart-hbar
              className="h-full rounded-full"
              style={{
                width: `${Math.max(6, (point.value / max) * 100)}%`,
                background: color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Donut / progress ring with hover centre swap. */
export function DonutRing({
  segments,
  size = 128,
  thickness = 10,
  centerLabel,
  centerValue,
  centerSubtext,
  className,
}: {
  segments: Array<ChartPoint & { color: string }>;
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
  centerSubtext?: string;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  useChartMotion(root, [segments]);

  const total = Math.max(
    segments.reduce((s, seg) => s + seg.value, 0),
    1
  );
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  const active = hover != null ? segments[hover] : null;

  const valStr = active ? active.value.toLocaleString() : (centerValue || "");
  const labelStr = active?.label ?? centerLabel ?? "";

  // Dynamic font sizing based on length to prevent touching the circle
  const valLength = valStr.length;
  let valFontSize = "text-[16px]";
  if (valLength > 14) valFontSize = "text-[10px]";
  else if (valLength > 11) valFontSize = "text-[12px]";
  else if (valLength > 8) valFontSize = "text-[13.5px]";
  else if (valLength > 6) valFontSize = "text-[15px]";

  const labelLength = labelStr.length;
  let labelFontSize = "text-[10px]";
  if (labelLength > 16) labelFontSize = "text-[8.5px]";
  else if (labelLength > 12) labelFontSize = "text-[9px]";

  return (
    <div
      ref={root}
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth={thickness}
        />
        {segments.map((seg, i) => {
          const len = (seg.value / total) * c;
          const dashoffset = -offset;
          offset += len;
          return (
            <circle
              key={seg.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={thickness}
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={dashoffset}
              strokeLinecap="butt"
              data-chart-ring
              data-len={c}
              data-offset={dashoffset}
              className={cn(
                "cursor-pointer transition-opacity",
                hover != null && hover !== i ? "opacity-35" : "opacity-100"
              )}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-2">
        <p className={cn("uppercase tracking-[0.06em] text-[var(--im-muted)] leading-tight truncate max-w-full", labelFontSize)}>
          {labelStr}
        </p>
        <p className={cn("font-semibold tracking-[-0.03em] tabular-nums leading-tight mt-0.5 truncate max-w-full text-[var(--im-ink)]", valFontSize)}>
          {valStr}
        </p>
        <p className="text-[9px] font-medium text-[var(--im-muted-2)] mt-0.5 tracking-wide uppercase truncate max-w-full">
          {active ? `${Math.round((active.value / total) * 100)}% of total` : centerSubtext}
        </p>
      </div>
    </div>
  );
}

/** Animated workflow / lifecycle rail with load + hover detail. */
export function AnimatedWorkflow({
  steps,
  className,
}: {
  steps: Array<{
    id: string;
    label: string;
    status: "done" | "current" | "todo";
    detail?: string;
    href?: string;
  }>;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<string | null>(null);
  useChartMotion(root, [steps]);

  return (
    <div ref={root} className={cn("w-full", className)}>
      <ol className="flex w-full items-stretch gap-0">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          const active = hover === step.id;
          return (
            <li
              key={step.id}
              data-chart-fade
              className="relative flex min-w-0 flex-1 flex-col items-center"
              onMouseEnter={() => setHover(step.id)}
              onMouseLeave={() => setHover(null)}
            >
              {!isLast ? (
                <span
                  className={cn(
                    "absolute left-[calc(50%+14px)] right-[calc(-50%+14px)] top-[13px] h-[2px]",
                    step.status === "done" || steps[idx + 1]?.status !== "todo"
                      ? "bg-[var(--im-ink)]"
                      : "bg-[var(--im-line-strong)]"
                  )}
                  data-chart-hbar
                />
              ) : null}
              {step.href ? (
                <Link
                  href={step.href}
                  className={cn(
                    "relative z-[1] flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold transition-transform",
                    step.status === "done" &&
                      "border-[var(--im-ink)] bg-[var(--im-ink)] text-[var(--im-on-ink)]",
                    step.status === "current" &&
                      "border-[var(--im-blue)] bg-[var(--im-blue)] text-white ring-4 ring-[var(--im-blue)]/15",
                    step.status === "todo" &&
                      "border-[var(--im-line-strong)] bg-[var(--im-fill)] text-[var(--im-muted)]",
                    active && "scale-110"
                  )}
                >
                  {step.status === "done" ? "✓" : idx + 1}
                </Link>
              ) : (
                <span
                  className={cn(
                    "relative z-[1] flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold transition-transform",
                    step.status === "done" &&
                      "border-[var(--im-ink)] bg-[var(--im-ink)] text-[var(--im-on-ink)]",
                    step.status === "current" &&
                      "border-[var(--im-blue)] bg-[var(--im-blue)] text-white ring-4 ring-[var(--im-blue)]/15",
                    step.status === "todo" &&
                      "border-[var(--im-line-strong)] bg-[var(--im-fill)] text-[var(--im-muted)]",
                    active && "scale-110"
                  )}
                >
                  {step.status === "done" ? "✓" : idx + 1}
                </span>
              )}
              <p
                className={cn(
                  "mt-2 text-center text-[11.5px] font-medium tracking-[-0.01em]",
                  step.status === "todo"
                    ? "text-[var(--im-muted)]"
                    : "text-[var(--im-ink)]"
                )}
              >
                {step.label}
              </p>
              {active && step.detail ? (
                <p className="mt-1 max-w-[120px] text-center text-[10.5px] leading-snug text-[var(--im-muted)]">
                  {step.detail}
                </p>
              ) : (
                <p className="mt-1 h-[28px]" />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Compact KPI card with animated sparkline, replaces plain number tiles. */
export function StatSparkCard({
  label,
  value,
  meta,
  href,
  series,
  color = "var(--im-blue)",
  icon,
  className,
}: {
  label: string;
  value: string;
  meta?: string;
  href?: string;
  series?: ChartPoint[];
  color?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  useChartMotion(root, [series, value]);

  const spark =
    series && series.length > 1
      ? series
      : trendSeries(
          (() => {
            const n = Number(String(value).replace(/[^0-9.]/g, ""));
            return Number.isFinite(n) && n > 0 ? n : 12;
          })()
        );

  const body = (
    <div
      ref={root}
      className={cn(
        "flex h-full flex-col rounded-[14px] border border-[var(--im-line)] bg-white/65 p-3 transition-colors",
        href && "hover:border-white hover:bg-white",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] uppercase tracking-[0.06em] text-[var(--im-muted)]">
          {label}
        </p>
        {icon ? (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border border-[var(--im-line)] bg-white/80 text-[var(--im-muted)]">
            {icon}
          </span>
        ) : null}
      </div>
      <p
        data-chart-fade
        className="mt-1 text-[20px] font-semibold tracking-[-0.04em] tabular-nums text-[var(--im-ink)]"
      >
        {value}
      </p>
      {meta ? (
        <p className="mt-0.5 truncate text-[11px] text-[var(--im-muted-2)]">
          {meta}
        </p>
      ) : null}
      <div className="mt-auto pt-2">
        <SparkArea series={spark} height={36} color={color} fillOpacity={0.14} />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {body}
      </Link>
    );
  }
  return body;
}

/** Stacked money / share meter (funded → released → held). */
export function StackMeter({
  segments,
  className,
  totalLabel,
}: {
  segments: Array<{ label: string; value: number; color: string }>;
  className?: string;
  totalLabel?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  useChartMotion(root, [segments]);
  const total = Math.max(
    segments.reduce((s, seg) => s + seg.value, 0),
    1
  );
  const active = hover != null ? segments[hover] : null;

  return (
    <div ref={root} className={cn("w-full", className)}>
      <div className="mb-2 flex items-center justify-between gap-2 text-[11.5px]">
        <span className="text-[var(--im-muted)]">
          {active ? active.label : totalLabel ?? "Composition"}
        </span>
        <span className="font-medium tabular-nums text-[var(--im-ink)]">
          {active
            ? active.value.toLocaleString()
            : segments.reduce((s, seg) => s + seg.value, 0).toLocaleString()}
        </span>
      </div>
      <div className="flex h-3 overflow-hidden rounded-full bg-black/[0.05]">
        {segments.map((seg, i) => (
          <button
            key={seg.label}
            type="button"
            data-chart-hbar
            className="h-full transition-opacity hover:opacity-90"
            style={{
              width: `${Math.max(2, (seg.value / total) * 100)}%`,
              background: seg.color,
              opacity: hover != null && hover !== i ? 0.35 : 1,
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            aria-label={`${seg.label} ${seg.value}`}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
        {segments.map((seg) => (
          <span
            key={seg.label}
            className="inline-flex items-center gap-1.5 text-[10.5px] text-[var(--im-muted)]"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: seg.color }}
            />
            {seg.label}
          </span>
        ))}
      </div>
    </div>
  );
}
