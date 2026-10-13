// Zentrale Stammdaten der Website.
// PLATZHALTER: Alle Kontaktdaten unten sind Beispielwerte und müssen vor
// der Veröffentlichung durch die echten Angaben ersetzt werden.
export const site = {
  name: "Axel Pleissner",
  title: "Sachverständiger für Bauschäden",
  claim: "Unabhängige Gutachten für Bauschäden, Feuchte, Schimmel und Baumängel.",
  region: "Musterstadt und Umgebung",
  street: "Musterstraße 1",
  zipCity: "12345 Musterstadt",
  phone: "+49 000 000000",
  phoneHref: "tel:+49000000000",
  email: "info@example.de",
  hours: "Mo–Fr 8:00–17:00 Uhr, Termine nach Vereinbarung",
} as const

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
] as const
