import Image from "next/image";
import { cn } from "@inmind/ui";

/**
 * Official Inmind wordmark + mark.
 * Black on light surfaces, white on dark theme / forced dark panels.
 */
export function BrandMark({
  className,
  /** Force the white mark (footer and other dark panels). */
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const size = cn("h-9 w-auto sm:h-10", className);

  if (onDark) {
    return (
      <Image
        src="/brand/inmind-white.png"
        alt="Inmind"
        width={2094}
        height={751}
        priority
        className={cn(size, "block")}
      />
    );
  }

  return (
    <span className="relative inline-flex items-center leading-none">
      <Image
        src="/brand/inmind-black.png"
        alt="Inmind"
        width={2094}
        height={751}
        priority
        className={cn(size, "block dark:hidden")}
      />
      <Image
        src="/brand/inmind-white.png"
        alt=""
        aria-hidden
        width={2094}
        height={751}
        priority
        className={cn(size, "hidden dark:block")}
      />
    </span>
  );
}
