"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@inmind/ui";

type MarketingImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  objectPosition?: string;
  hoverZoom?: boolean;
};

/**
 * Local marketing imagery with next/image, optional hover zoom.
 * Prefer assets under /public/images/marketing/
 */
export function MarketingImage({
  src,
  alt,
  className,
  imgClassName,
  fill,
  width,
  height,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspect,
  objectPosition = "center",
  hoverZoom = false,
}: MarketingImageProps) {
  const reduce = useReducedMotion();
  const wrap = cn(
    "relative overflow-hidden bg-[var(--im-surface)]",
    aspect,
    className
  );

  const image = fill ? (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn(
        "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        hoverZoom && !reduce && "group-hover:scale-[1.03]",
        imgClassName
      )}
      style={{ objectPosition }}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      priority={priority}
      sizes={sizes}
      className={cn(
        "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        hoverZoom && !reduce && "group-hover:scale-[1.03]",
        imgClassName
      )}
      style={{ objectPosition }}
    />
  );

  if (hoverZoom) {
    return (
      <motion.div className={cn("group", wrap)} whileHover={reduce ? undefined : { y: -2 }}>
        {image}
      </motion.div>
    );
  }

  return <div className={wrap}>{image}</div>;
}
