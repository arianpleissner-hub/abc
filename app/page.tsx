import Image from "next/image"
import {
  ArrowRight,
  ClipboardCheck,
  Droplets,
  FileSearch,
  HardHat,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Clock,
} from "lucide-react"
import { MagicText } from "@/components/ui/magic-text"
import { ContactForm } from "@/components/site/contact-form"
import { site } from "@/lib/site"

const services = [
  {
    icon: FileSearch,
    title: "Bauschadensgutachten",
    text: "Ursachenanalyse von Rissen, Setzungen, undichten Dächern und anderen Schäden – mit klarer Dokumentation und Sanierungsempfehlung.",
  },
  {
    icon: Droplets,
    title: "Feuchte & Schimmel",
    text: "Messung und Bewertung von Feuchtigkeit und Schimmelbefall. Ich kläre, ob Bauteil oder Nutzung die Ursache ist.",
  },
  {
    icon: HardHat,
    title: "Baubegleitung & Abnahme",
    text: "Qualitätskontrolle während der Bauphase und Unterstützung bei der Bauabnahme, damit Mängel früh erkannt werden.",
  },
  {
    icon: HomeIcon,
    title: "Kaufberatung Immobilie",
    text: "Begehung vor dem Kauf: Zustand, Risiken und zu erwartender Sanierungsaufwand – bevor Sie unterschreiben.",
  },
  {
    icon: ShieldCheck,
    title: "Beweissicherung",
    text: "Dokumentation des Ist-Zustands vor Bau-, Abriss- oder Tiefbauarbeiten in der Nachbarschaft.",
  },
  {
    icon: Scale,
    title: "Streitfälle & Versicherung",
    text: "Fachliche Unterstützung bei Auseinandersetzungen mit Bauunternehmen, Vermietern oder Versicherungen.",
  },
]

const steps = [
  { title: "Kontakt", text: "Sie schildern mir kurz den Schaden oder Ihr Vorhaben – telefonisch oder per Formular." },
  { title: "Ortstermin", text: "Ich besichtige das Objekt, messe und dokumentiere alle relevanten Befunde." },
  { title: "Auswertung", text: "Ursachen werden fachlich bewertet und nachvollziehbar zusammengefasst." },
  { title: "Gutachten", text: "Sie erhalten ein schriftliches Gutachten mit konkreten Handlungsempfehlungen." },
]

const faqs = [
  {
    q: "Was kostet ein Gutachten?",
    a: "Das hängt vom Umfang ab – eine kurze Beratung vor Ort ist günstiger als ein ausführliches schriftliches Gutachten. Sie erhalten vorab eine transparente Kostenschätzung.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "In dringenden Fällen, etwa bei akutem Wasserschaden, bemühe ich mich um einen kurzfristigen Ortstermin. Rufen Sie am besten direkt an.",
  },
  {
    q: "Was sollte ich zum Ortstermin bereithalten?",
    a: "Hilfreich sind vorhandene Pläne, Verträge, Fotos vom Schadensverlauf und Korrespondenz mit Beteiligten. Fehlt etwas, ist das kein Problem.",
  },
  {
    q: "Bin ich als Gutachter unabhängig?",
    a: "Ja. Ich arbeite ausschließlich in Ihrem Auftrag und bin weder an Baufirmen noch an Sanierungsunternehmen gebunden.",
  },
]

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            {site.title} · {site.region}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Klarheit bei Bauschäden – unabhängig und verständlich.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">{site.claim}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover"
            >
              Termin anfragen
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Werte-Leiste */}
      <section aria-label="Vorteile" className="border-b border-border bg-card">
        <ul className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            { icon: ShieldCheck, text: "Unabhängig & neutral" },
            { icon: ClipboardCheck, text: "Nachvollziehbare Gutachten" },
            { icon: Clock, text: "Kurzfristige Ortstermine" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 font-medium text-heading">
              <span className="flex size-10 items-center justify-center rounded-md bg-muted text-accent">
                <Icon className="size-5" aria-hidden />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="Leistungen"
          title="Wobei ich Ihnen helfe"
          intro="Vom feuchten Keller bis zur Bauabnahme: Ich finde die Ursache und zeige Ihnen, was jetzt zu tun ist."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-lg border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <Icon className="size-8 text-accent" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-semibold text-heading">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading eyebrow="Ablauf" title="So läuft ein Gutachten ab" />
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-display text-5xl font-semibold text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-heading">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-300">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
              alt="Baustelle mit Rohbau"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Über mich" title={site.name} />
            <p className="mt-6 text-lg text-muted-foreground">
              Als Sachverständiger für Bauschäden unterstütze ich private Bauherren,
              Eigentümer, Käufer und Vermieter dabei, Schäden richtig einzuordnen und
              fundierte Entscheidungen zu treffen.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              {/* PLATZHALTER: Qualifikation, Ausbildung und Berufserfahrung ergänzen. */}
              [Hier Qualifikation, Ausbildung und Berufserfahrung ergänzen.]
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-3xl text-heading">
          <MagicText text="Ein gutes Gutachten zeigt nicht nur, was beschädigt ist – sondern warum, und was jetzt zu tun ist." />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading eyebrow="FAQ" title="Häufige Fragen" />
          <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-heading">
                  {f.q}
                  <span aria-hidden className="text-2xl text-accent transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title="Schildern Sie mir Ihr Anliegen"
              intro="Ich melde mich zeitnah bei Ihnen zurück."
            />
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                <a href={site.phoneHref} className="font-medium text-heading hover:text-accent">{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${site.email}`} className="font-medium text-heading hover:text-accent">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                <span>{site.street}, {site.zipCity}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
