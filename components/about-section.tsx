import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <Container as="section" id="about" className="py-16 sm:py-24">
      <SectionHeading>OUTSIDE WORK</SectionHeading>
      <p className="display max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.08] tracking-[-0.04em]">
        <span className="block text-ink-faint">I live in</span>
        <span className="block text-ink">Toronto</span>
        <span className="block text-ink-faint">and spend most of my time</span>
        <span className="block text-ink">building products</span>
        <span className="block text-ink-faint">on iOS, and the ones</span>
        <span className="block text-ink">I ship myself.</span>
      </p>
    </Container>
  );
}
