import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site, social } from "@/content/site";

export function ConnectSection() {
  return (
    <Container as="section" id="connect" className="border-t border-line py-20 sm:py-28">
      <SectionHeading>CONNECT</SectionHeading>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <h3 className="display max-w-xl text-[2.6rem] leading-[1.05] text-ink sm:text-[3.4rem]">
          If the work here is relevant, write to me.
        </h3>
        <div>
          <p className="max-w-sm text-lg leading-relaxed text-ink-soft">
            {site.location}. Email is the most reliable. GitHub and LinkedIn
            are up to date.
          </p>
          <ul className="mt-8 space-y-3">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xl text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : undefined)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
