import Link from "next/link"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm">{site.title}</p>
        </div>
        <address className="text-sm not-italic">
          {site.street}
          <br />
          {site.zipCity}
          <br />
          <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
          <br />
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
        </address>
        <ul className="flex gap-6 text-sm md:justify-end">
          <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
          <li><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
        </ul>
      </div>
    </footer>
  )
}
