"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  PLAUSIBLE_DOMAIN,
  POSTHOG_HOST,
  POSTHOG_KEY,
  analyticsConfigured,
} from "@/lib/analytics";
import {
  CONSENT_EVENT,
  getCookieConsent,
  type CookieChoice,
} from "@/components/marketing/CookieConsent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Loads analytics only after "Accept all".
 * Set any of NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
 * NEXT_PUBLIC_POSTHOG_KEY (+ optional NEXT_PUBLIC_POSTHOG_HOST).
 */
export function SiteAnalytics() {
  const [consent, setConsent] = useState<CookieChoice | null>(null);
  const posthogStarted = useRef(false);

  useEffect(() => {
    setConsent(getCookieConsent());

    const onConsent = (event: Event) => {
      setConsent((event as CustomEvent<CookieChoice>).detail);
    };

    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  useEffect(() => {
    if (consent !== "all" || !POSTHOG_KEY || posthogStarted.current) return;
    posthogStarted.current = true;

    let cancelled = false;

    void import("posthog-js").then(({ default: posthog }) => {
      if (cancelled) return;
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        person_profiles: "identified_only",
        capture_pageview: true,
        capture_pageleave: true,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [consent]);

  if (!analyticsConfigured() || consent !== "all") return null;

  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      ) : null}

      {PLAUSIBLE_DOMAIN ? (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
