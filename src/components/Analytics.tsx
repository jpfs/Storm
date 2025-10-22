"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Dispara pageviews em navegação cliente (App Router).
 */
export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;
    // espera o gtag carregar
    if (typeof window.gtag !== "function") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    window.gtag("config", GA_ID, {
      page_path: url,
      anonymize_ip: true,
    });
  }, [pathname, searchParams]);

  return null;
}
