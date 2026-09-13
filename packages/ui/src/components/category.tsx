import type { ReactElement, ReactNode, SVGProps } from "react";
import { cn } from "../lib/cn";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Glyph({
  size = 12,
  className,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
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
      {children}
    </svg>
  );
}

function TechIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <rect x="3" y="3" width="10" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6.5h4M6 9.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Glyph>
  );
}

function ProductIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M3.2 5.2 8 2.8l4.8 2.4v5.6L8 13.2l-4.8-2.4V5.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 8v5.2M3.2 5.2 8 8l4.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </Glyph>
  );
}

function StartupIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M8 13.2V7.4M5.2 10.2 8 7.4l2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 13.2h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 7.4c1.8-2.4 3.6-3.6 4.4-3.2.4 1.2-.6 3.2-2.8 4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </Glyph>
  );
}

function LifestyleIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M8 13.2S3.5 10.2 3.5 6.8A2.5 2.5 0 0 1 8 5.2a2.5 2.5 0 0 1 4.5 1.6c0 3.4-4.5 6.4-4.5 6.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Glyph>
  );
}

function CultureIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8h10M8 3c1.6 1.6 1.6 8.4 0 10M8 3c-1.6 1.6-1.6 8.4 0 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </Glyph>
  );
}

function FoodIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M5 3.2v5.2a1.6 1.6 0 0 0 3.2 0V3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.6 3.2V8M11 3.2v9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Glyph>
  );
}

function FashionIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M5.2 4.2 8 6l2.8-1.8L13 5.5l-1.2 7.7H4.2L3 5.5l2.2-1.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Glyph>
  );
}

function BeautyIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M8 3.2c1.8 2 3.6 2.8 4.4 2.2-.2 2.2-1.8 4.4-4.4 6.4-2.6-2-4.2-4.2-4.4-6.4.8.6 2.6-.2 4.4-2.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Glyph>
  );
}

function FinanceIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5v6M6.2 6.4c.4-.7 1-.9 1.8-.9 1.2 0 1.9.5 1.9 1.4s-.8 1.4-2 1.6c-1.1.2-2 .6-2 1.6s.9 1.5 2.1 1.5c.9 0 1.5-.3 1.9-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </Glyph>
  );
}

function EducationIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M2.8 6.4 8 3.6l5.2 2.8L8 9.2 2.8 6.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5.2 7.8v2.6c0 .8 1.3 1.8 2.8 1.8s2.8-1 2.8-1.8V7.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Glyph>
  );
}

function SkincareIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M6.2 13.2V7.6A1.8 1.8 0 0 1 8 5.8a1.8 1.8 0 0 1 1.8 1.8v5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 5.8V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 13.2h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Glyph>
  );
}

function TagIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        d="M2.8 8.2V3.6a.8.8 0 0 1 .8-.8h4.6L13.2 8l-5 5-5.4-4.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="6.2" cy="5.8" r="0.8" fill="currentColor" />
    </Glyph>
  );
}

const CATEGORY_ICONS: Record<string, (props: IconProps) => ReactElement> = {
  tech: TechIcon,
  product: ProductIcon,
  startup: StartupIcon,
  lifestyle: LifestyleIcon,
  culture: CultureIcon,
  food: FoodIcon,
  fashion: FashionIcon,
  beauty: BeautyIcon,
  skincare: SkincareIcon,
  finance: FinanceIcon,
  education: EducationIcon,
};

export function CategoryIcon({
  category,
  size = 12,
  className,
  ...props
}: IconProps & { category: string }) {
  const Icon = CATEGORY_ICONS[category.trim().toLowerCase()] ?? TagIcon;
  return <Icon size={size} className={className} {...props} />;
}

/** Sidebar-style category chip - icon before label, same type size as badges */
export function CategoryChip({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] px-2.5 py-1",
        "text-[11.5px] font-medium tracking-[-0.01em] text-[var(--im-muted)]",
        className
      )}
    >
      <CategoryIcon
        category={category}
        size={12}
        className="text-[var(--im-muted-2)]"
      />
      {category}
    </span>
  );
}

export function CategoryChipList({
  categories,
  limit = 3,
  className,
}: {
  categories: string[];
  limit?: number;
  className?: string;
}) {
  const shown = categories.slice(0, limit);
  const rest = categories.length - shown.length;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {shown.map((c) => (
        <CategoryChip key={c} category={c} />
      ))}
      {rest > 0 ? (
        <span className="inline-flex items-center rounded-full bg-black/[0.04] px-2.5 py-1 text-[11.5px] font-medium text-[var(--im-muted-2)]">
          +{rest}
        </span>
      ) : null}
    </div>
  );
}
