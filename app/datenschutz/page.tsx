import type { Metadata } from "next"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: `Datenschutzerklärung – ${site.name}` }

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-heading">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-4 text-lg">
        <p>
          {site.name}
          <br />
          {site.street}
          <br />
          {site.zipCity}
        </p>
        <p>
          Telefon: {site.phone}
          <br />
          E-Mail: {site.email}
        </p>
        {/* PLATZHALTER: Rechtstext vor Veröffentlichung ergänzen (z. B. mit einem Generator oder anwaltlich prüfen lassen). */}
        <p className="rounded-md border border-accent/40 bg-orange-50 p-4 text-base">
          Platzhalter: Der vollständige Text der Seite „Datenschutzerklärung“ muss vor der Veröffentlichung ergänzt werden.
        </p>
      </div>
    </section>
  )
}
