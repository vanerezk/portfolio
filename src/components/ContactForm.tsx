"use client";

import { useActionState, useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/content";
import { sendContact, type ContactField, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { status: "idle" };

/** Formulario de contacto: funciona sin JavaScript (Server Action) y lo mejora si lo hay. */
export function ContactForm({ t, lang }: { t: Dictionary; lang: Locale }) {
  const f = t.contact.form;
  const [state, action, pending] = useActionState(sendContact, initial);
  const [startedAt, setStartedAt] = useState(0);
  useEffect(() => setStartedAt(Date.now()), []);

  if (state.status === "sent") {
    return (
      <div role="status" className="relative border border-line-strong p-6 md:p-10">
        <span
          aria-hidden
          className="annot absolute -top-4 right-6 rotate-[-12deg] border-2 border-accent bg-paper px-4 py-2 text-base text-accent [animation:stamp-in_400ms_ease-out_both]"
        >
          {f.stamp}
        </span>
        <p className="text-h2 font-medium">{f.sentTitle}</p>
        <p className="mt-4 max-w-[44ch] text-lead text-ink-soft">{f.sentBody}</p>
      </div>
    );
  }

  const values = state.status === "invalid" || state.status === "error" ? state.values : undefined;
  const invalid = (name: ContactField) => state.status === "invalid" && state.fields.includes(name);

  const fieldClass =
    "w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-lg outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent focus-visible:outline-none aria-[invalid=true]:border-accent";

  return (
    <form action={action} noValidate className="grid gap-8">
      <input type="hidden" name="lang" value={lang} />
      <input type="hidden" name="startedAt" value={startedAt || ""} />
      {/* Trampa para bots: invisible para personas y lectores de pantalla */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {(["name", "email"] as const).map((name, i) => (
          <div key={name}>
            <label htmlFor={`contact-${name}`} className="annot flex gap-3 text-ink-soft">
              <span className="text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
              {f[name]}
            </label>
            <input
              id={`contact-${name}`}
              name={name}
              type={name === "email" ? "email" : "text"}
              autoComplete={name === "email" ? "email" : "name"}
              required
              maxLength={name === "email" ? 254 : 120}
              defaultValue={values?.[name]}
              aria-invalid={invalid(name)}
              aria-describedby={invalid(name) ? `contact-${name}-error` : undefined}
              className={fieldClass}
            />
            {invalid(name) && (
              <p id={`contact-${name}-error`} className="annot mt-2 normal-case tracking-normal text-accent-ink">
                {f.errors[name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="contact-message" className="annot flex gap-3 text-ink-soft">
          <span className="text-accent-ink">03</span>
          {f.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder={f.messagePlaceholder}
          defaultValue={values?.message}
          aria-invalid={invalid("message")}
          aria-describedby={invalid("message") ? "contact-message-error" : undefined}
          className={`${fieldClass} resize-y`}
        />
        {invalid("message") && (
          <p id="contact-message-error" className="annot mt-2 normal-case tracking-normal text-accent-ink">
            {f.errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-3 bg-ink px-5 py-3 text-paper transition-[background-color,transform] hover:bg-accent hover:text-white active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? f.sending : f.send}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
        <p role="status" className="annot normal-case tracking-normal text-accent-ink">
          {state.status === "error" ? f.errors.send : ""}
        </p>
      </div>
    </form>
  );
}
