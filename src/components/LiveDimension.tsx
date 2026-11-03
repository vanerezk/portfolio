"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Línea de cota que mide la página de verdad:
 * ancho real del contenedor y LCP medido con PerformanceObserver.
 */
export function LiveDimension({ measuringLabel }: { measuringLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [lcp, setLcp] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);

    let po: PerformanceObserver | undefined;
    if (PerformanceObserver.supportedEntryTypes?.includes("largest-contentful-paint")) {
      po = new PerformanceObserver((list) => {
        const last = list.getEntries().at(-1);
        if (last) setLcp(last.startTime);
      });
      po.observe({ type: "largest-contentful-paint", buffered: true });
    }
    return () => {
      ro.disconnect();
      po?.disconnect();
    };
  }, []);

  const label =
    width === null
      ? measuringLabel
      : `${width} px${lcp !== null ? ` · LCP ${(lcp / 1000).toFixed(2)} s` : ""}`;

  return (
    <div ref={ref} className="relative flex h-6 items-center text-accent" aria-hidden>
      {/* Topes de la cota */}
      <span className="absolute left-0 h-full w-px bg-current" />
      <span className="absolute right-0 h-full w-px bg-current" />
      {/* Línea que se dibuja */}
      <span className="absolute inset-x-0 h-px origin-left bg-current [animation:draw-x_1.2s_cubic-bezier(0.2,0.7,0,1)_both]" />
      <span className="annot relative mx-auto bg-paper px-3 text-accent-ink tabular-nums">
        {label}
      </span>
    </div>
  );
}
