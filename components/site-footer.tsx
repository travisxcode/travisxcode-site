import { Container } from "@/components/container";
import { site, social } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.78rem] font-medium tracking-[0.22em] text-ink">
            {site.shortName}
          </p>
          <p className="mt-3 text-sm text-ink-soft">{site.location}</p>
        </div>
        <nav aria-label="Connect" className="flex flex-wrap gap-x-6 gap-y-2">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : undefined)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
