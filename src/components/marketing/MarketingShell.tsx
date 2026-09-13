import { cn } from "@inmind/ui";

/** Shared marketing page gutters, keep hero, sections, nav, footer aligned. */
export const marketingShellClass =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12";

export const marketingSectionY = "py-16 sm:py-20 md:py-24 lg:py-28";

export function MarketingShell({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  return <Tag className={cn(marketingShellClass, className)}>{children}</Tag>;
}
