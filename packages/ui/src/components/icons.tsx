import type { SVGProps } from "react";
import { cn } from "../lib/cn";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function ChevronDown({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M4.2 6.2 8 10l3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M6.2 4.2 10 8l-3.8 3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m10.2 10.2 2.6 2.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BellIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M8 2.4a3.6 3.6 0 0 0-3.6 3.6v1.55c0 .55-.18 1.08-.5 1.52L3.2 10.2h9.6l-.7-1.13a2.6 2.6 0 0 1-.5-1.52V6A3.6 3.6 0 0 0 8 2.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.4 12.2a1.6 1.6 0 0 0 3.2 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CommandIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M5.2 5.2H3.8A1.8 1.8 0 1 1 5.6 3.4v7.2M10.8 5.2h1.4A1.8 1.8 0 1 0 10.4 3.4v7.2M5.2 8h5.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="m3.5 8.2 3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M8 3.2v9.6M3.2 8h9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M8 1.8 9.1 5.9 13.2 7 9.1 8.1 8 12.2 6.9 8.1 2.8 7l4.1-1.1L8 1.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M5 11 11 5M6.5 5H11v4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path d="M2.8 6.8 8 2.8l5.2 4V13a1 1 0 0 1-1 1H3.8a1 1 0 0 1-1-1V6.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.2 14V9.2h3.6V14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CampaignIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path d="M3 4.5h10M3 8h10M3 11.5h6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function OpportunityIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5.2v5.6M5.2 8h5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WalletIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path d="M2.8 5.2h10.4A1.2 1.2 0 0 1 14.4 6.4v6A1.2 1.2 0 0 1 13.2 13.6H2.8A1.2 1.2 0 0 1 1.6 12.4v-6A1.2 1.2 0 0 1 2.8 5.2Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.6 5.4 7.2 2.6a1 1 0 0 1 .9 0l5.3 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11.2" cy="9.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function ChartIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path d="M3 12.5V8.2M8 12.5V3.5M13 12.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Clapperboard - creator Studio / deliverable production */
export function StudioIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path
        d="M2.6 5.8h10.8v6.4a1.4 1.4 0 0 1-1.4 1.4H4a1.4 1.4 0 0 1-1.4-1.4V5.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.6 5.8 4.2 2.8h7.6l1.6 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m5.1 2.9 1.1 2.9M8 2.8v3M10.9 2.9 9.8 5.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Stacked layers - design system / component library */
export function LayersIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path
        d="M8 2.4 13.2 5.2 8 8 2.8 5.2 8 2.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m2.8 8 5.2 2.8L13.2 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m2.8 10.8 5.2 2.8 5.2-2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <circle cx="8" cy="5.2" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.2 13.2c.7-2.2 2.4-3.4 4.8-3.4s4.1 1.2 4.8 3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MessageIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path
        d="M3.2 3.5h9.6A1.3 1.3 0 0 1 14.1 4.8v5.2a1.3 1.3 0 0 1-1.3 1.3H7.1L4 13.5V11.3H3.2A1.3 1.3 0 0 1 1.9 10V4.8A1.3 1.3 0 0 1 3.2 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SettingsIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 1.6v1.4M8 13v1.4M1.6 8h1.4M13 8h1.4M3.3 3.3l1 1M11.7 11.7l1 1M12.7 3.3l-1 1M4.3 11.7l-1 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path
        d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={cn("shrink-0", className)} aria-hidden {...props}>
      <path
        d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
