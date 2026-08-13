"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { LiveClock } from "@/components/live-clock";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-accent bg-paper/80 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-3.5">
        <Link href="/" className="flex items-center gap-3">
          <LiveClock />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-accent transition-colors hover:text-ink"
          >
            Say hello 👋
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className="font-mono text-[0.68rem] tracking-[0.16em] uppercase"
          >
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
                className="font-mono text-[0.8rem] tracking-[0.16em] uppercase text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-[0.8rem] tracking-[0.16em] uppercase text-accent"
            >
              Say hello
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
