"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/cn";

export type ToastTone = "ink" | "success" | "warning";

type ToastItem = {
  id: string;
  title: string;
  description?: string;
  tone: ToastTone;
};

type ToastInput = {
  title: string;
  description?: string;
  tone?: ToastTone;
  durationMs?: number;
};

type ToastContextValue = {
  toast: (input: ToastInput) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const TONE: Record<ToastTone, string> = {
  ink: "border-[var(--im-line)] bg-[var(--im-ink)] text-white",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  warning: "border-amber-200 bg-amber-50 text-amber-950",
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toast = useCallback((input: ToastInput) => {
    const id = `toast_${Math.random().toString(36).slice(2, 10)}`;
    const item: ToastItem = {
      id,
      title: input.title,
      description: input.description,
      tone: input.tone ?? "ink",
    };
    setItems((prev) => [...prev, item].slice(-4));
    const duration = input.durationMs ?? 3200;
    window.setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted
        ? createPortal(
            <div
              className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] flex flex-col items-center gap-2 px-4 md:inset-x-auto md:bottom-6 md:right-6 md:items-end"
              aria-live="polite"
              aria-relevant="additions"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  role="status"
                  className={cn(
                    "pointer-events-auto w-full max-w-[360px] rounded-[14px] border px-4 py-3 shadow-[var(--im-shadow-md)] backdrop-blur-md",
                    TONE[item.tone]
                  )}
                >
                  <p className="text-[13.5px] font-medium tracking-[-0.01em]">
                    {item.title}
                  </p>
                  {item.description ? (
                    <p className="mt-0.5 text-[12.5px] opacity-80">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>,
            document.body
          )
        : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
