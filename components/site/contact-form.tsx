"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { site } from "@/lib/site"

const fieldClass =
  "mt-1 w-full rounded-md border border-border bg-card px-3 py-2.5 text-heading placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"

// Ohne eigenes Backend: die Anfrage wird im E-Mail-Programm des Besuchers
// vorbereitet. Für einen echten Versand später z. B. eine Server Action anbinden.
export function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Anfrage: ${data.get("anliegen")}`
    const body = [
      `Name: ${data.get("name")}`,
      `Telefon: ${data.get("telefon") || "–"}`,
      `Objekt / Ort: ${data.get("ort") || "–"}`,
      "",
      `${data.get("nachricht")}`,
    ].join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block text-sm font-medium text-heading">
        Name *
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-heading">
        Telefon
        <input name="telefon" type="tel" autoComplete="tel" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-heading">
        Anliegen *
        <select name="anliegen" required className={fieldClass} defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Bauschadensgutachten</option>
          <option>Feuchte / Schimmel</option>
          <option>Baubegleitung / Abnahme</option>
          <option>Kaufberatung Immobilie</option>
          <option>Sonstiges</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-heading">
        Objekt / Ort
        <input name="ort" placeholder="z. B. Einfamilienhaus, Musterstadt" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-heading sm:col-span-2">
        Ihre Nachricht *
        <textarea name="nachricht" required rows={5} placeholder="Beschreiben Sie kurz den Schaden oder Ihr Vorhaben." className={fieldClass} />
      </label>
      <p className="text-sm text-muted-foreground sm:col-span-2">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Anfrage.
        Hinweise zum Datenschutz finden Sie in der{" "}
        <a href="/datenschutz" className="underline hover:text-accent">Datenschutzerklärung</a>.
      </p>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover"
        >
          <Send className="size-4" aria-hidden />
          Anfrage senden
        </button>
      </div>
    </form>
  )
}
