import { readFile } from "node:fs/promises";
import path from "node:path";

/** TTF estáticos para generar imágenes y PDF en el servidor (next/font solo sirve para el navegador). */
const dir = path.join(process.cwd(), "src/assets/fonts");

export const fontFile = (name: string) => path.join(dir, name);
export const loadFont = (name: string) => readFile(fontFile(name));
