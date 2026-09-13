"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@inmind/ui";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeUp className={className} delay={delay} y={16}>
      {children}
    </FadeUp>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  lines,
  className,
  as: Tag = "h1",
  delay = 0,
  nowrap = false,
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p";
  delay?: number;
  nowrap?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <Tag className={cn("whitespace-pre-line", className)}>
        {lines.join("\n")}
      </Tag>
    );
  }
  return (
    <Tag className={cn(className)}>
      {lines.map((line, i) => (
        // Padding widens the clip box so descenders survive tight leading;
        // the negative margin keeps the line rhythm unchanged.
        <span
          key={line + i}
          className="block overflow-hidden pb-[0.18em] -mb-[0.18em]"
        >
          <motion.span
            className={cn("block", nowrap && "whitespace-nowrap")}
            initial={{ y: "130%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.12,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export { EASE };
