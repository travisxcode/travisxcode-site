import { AboutSection } from "@/components/about-section";
import { ConnectSection } from "@/components/connect-section";
import { Container } from "@/components/container";
import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <main id="content">
      <Container className="py-24 sm:py-32">
        <p className="section-kicker mb-6">404</p>
        <h1 className="display text-[clamp(3rem,8vw,6rem)] text-ink">
          This page is not here.
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink-soft">
          The URL may have changed. The work is on the homepage.
        </p>
        <p className="mt-8">
          <TextLink href="/">Back home</TextLink>
        </p>
      </Container>
      <AboutSection />
      <ConnectSection />
    </main>
  );
}
