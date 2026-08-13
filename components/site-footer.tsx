import { Container } from "@/components/container";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-accent">
          {site.shortName}
          <span aria-hidden="true"> · </span>
          {site.location}
        </p>
        <p className="font-mono text-[0.68rem] tracking-[0.08em] text-ink-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
