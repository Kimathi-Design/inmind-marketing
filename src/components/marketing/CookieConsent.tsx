"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@inmind/ui";

const STORAGE_KEY = "inmind-cookie-consent";

export type CookieChoice = "essential" | "all";

/** Dispatched when the visitor saves a cookie preference. */
export const CONSENT_EVENT = "inmind:cookie-consent";

/** Reads the stored choice, or null when the visitor has not decided yet. */
export function getCookieConsent(): CookieChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "essential" || value === "all" ? value : null;
}

const REOPEN_EVENT = "inmind:cookie-consent-open";

/** Lets any page reopen the banner so a visitor can change their mind. */
export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent(REOPEN_EVENT));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Deferred so the banner never blocks first paint, and never renders on
    // the server where localStorage is unavailable.
    if (getCookieConsent() === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function choose(choice: CookieChoice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Private browsing can reject writes; the banner still dismisses.
    }
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-[400px]"
        >
          <div className="rounded-[20px] border border-[var(--im-line)] bg-[var(--im-glass)] p-5 shadow-[var(--im-shadow-lg)] backdrop-blur-[20px]">
            <p className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--im-ink)]">
              Cookie preferences
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--im-ink-soft)]">
              We use essential cookies for site functionality such as security
              and preferences. With your permission we also use analytics
              cookies to understand how visitors use the site. See our{" "}
              <Link
                href="/cookies"
                className="font-medium text-[var(--im-violet)] underline-offset-4 hover:underline"
              >
                Cookie Notice
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-[var(--im-violet)] underline-offset-4 hover:underline"
              >
                Privacy Notice
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => choose("essential")}
              >
                Essential only
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => choose("all")}
              >
                Accept all
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
