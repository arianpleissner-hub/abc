"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import { nav, site } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-semibold text-heading">{site.name}</span>
          <span className="text-xs text-muted-foreground">{site.title}</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover"
          >
            <Phone className="size-4" aria-hidden />
            Anrufen
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-heading md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 font-medium text-heading"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-semibold text-on-accent"
              >
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
