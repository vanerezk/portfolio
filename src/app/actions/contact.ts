"use server";

import { site } from "@/content";

export type ContactField = "name" | "email" | "message";

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "invalid"; fields: ContactField[]; values: Record<ContactField, string> }
  | { status: "error"; values: Record<ContactField, string> };

const LIMITS: Record<ContactField, number> = { name: 120, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Un envío más rápido que esto desde que se pintó el formulario es casi seguro un bot. */
const MIN_FILL_MS = 2500;

/**
 * Envía el mensaje del formulario a mi bandeja con la API de Resend.
 * Sin dependencias: un único fetch. La clave vive solo en el servidor (RESEND_API_KEY).
 */
export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  const values = {
    name: String(form.get("name") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
  };

  // Trampa para bots: campo oculto que una persona nunca rellena. Fingimos éxito.
  const startedAt = Number(form.get("startedAt"));
  if (form.get("company") || (startedAt && Date.now() - startedAt < MIN_FILL_MS)) {
    return { status: "sent" };
  }

  const fields: ContactField[] = [];
  if (!values.name || values.name.length > LIMITS.name) fields.push("name");
  if (!EMAIL_RE.test(values.email) || values.email.length > LIMITS.email) fields.push("email");
  if (values.message.length < 10 || values.message.length > LIMITS.message) fields.push("message");
  if (fields.length) return { status: "invalid", fields, values };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] Falta RESEND_API_KEY");
    return { status: "error", values };
  }

  const lang = form.get("lang") === "en" ? "EN" : "ES";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? site.email],
      reply_to: values.email,
      subject: `Portfolio · ${values.name}`,
      text: `${values.message}\n\n—\n${values.name} <${values.email}>\nIdioma de la web: ${lang}`,
    }),
  }).catch((err: unknown) => {
    console.error("[contact] Resend no responde", err);
    return null;
  });

  if (!res?.ok) {
    if (res) console.error("[contact] Resend", res.status, await res.text());
    return { status: "error", values };
  }
  return { status: "sent" };
}
