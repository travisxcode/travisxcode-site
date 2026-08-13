import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site, social } from "@/content/site";

export function ConnectSection() {
  return (
    <Container as="section" id="connect" className="py-10 sm:pb-20 sm:pt-14">
      <SectionHeading>CONNECT</SectionHeading>
      <ul className="space-y-4">
        {social.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="display text-[clamp(1.8rem,4vw,3.2rem)] font-medium tracking-[-0.04em] text-ink-soft transition-colors hover:text-accent"
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : undefined)}
            >
              {item.label === "Email" ? site.email : item.label}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
