"use client";

import { useEffect, useState } from "react";
import { GRID_EVENT, isTyping } from "./events";

/** Retícula superpuesta: tecla G o comando de la paleta. */
export function GridOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible((v) => !v);
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "g" && !e.metaKey && !e.ctrlKey && !e.altKey && !isTyping(e)) toggle();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(GRID_EVENT, toggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(GRID_EVENT, toggle);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="frame sheet-grid h-full">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={`h-full border-x border-accent/40 bg-accent/[0.04] ${i >= 4 ? "hidden md:block" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
