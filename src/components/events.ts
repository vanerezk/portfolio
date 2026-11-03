/** Eventos globales mínimos para comunicar islas cliente sin un store. */
export const GRID_EVENT = "sheet:toggle-grid";
export const PALETTE_EVENT = "sheet:open-palette";

export const toggleGrid = () => window.dispatchEvent(new Event(GRID_EVENT));
export const openPalette = () => window.dispatchEvent(new Event(PALETTE_EVENT));

/** true si el foco está en un campo de texto (para no robar atajos). */
export function isTyping(e: KeyboardEvent) {
  const el = e.target as HTMLElement | null;
  return !!el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName));
}
