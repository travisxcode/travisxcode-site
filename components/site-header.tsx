"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="text-[0.78rem] font-medium tracking-[0.22em] text-ink"
        >
          {site.shortName}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="text-[0.78rem] tracking-[0.18em] uppercase">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </Container>
      {open ? (
        <div id="mobile-nav" className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.9rem] tracking-[0.16em] uppercase text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
