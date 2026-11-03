"use client";

import { useEffect } from "react";

/**
 * Revela al entrar en pantalla los elementos con `data-reveal`.
 * Lo que ya está a la vista al cargar se marca antes de activar el modo,
 * así nada parpadea. Con reduced motion no hace nada.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const pending = els.filter((el) => {
      const r = el.getBoundingClientRect();
      const visible = r.top < window.innerHeight && r.bottom > 0;
      if (visible) el.dataset.in = "";
      return !visible;
    });
    document.documentElement.classList.add("motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.in = "";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
