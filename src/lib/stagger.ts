import type { CSSProperties } from "react";

/** Posición en una secuencia escalonada; el CSS lo lee como --i. */
export const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
