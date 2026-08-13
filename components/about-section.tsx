import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <Container as="section" id="about" className="py-10 sm:py-14">
      <SectionHeading>OUTSIDE WORK</SectionHeading>
      <p className="max-w-4xl text-[clamp(1.55rem,3.1vw,2.35rem)] font-medium leading-[1.18] tracking-[-0.035em]">
        <span className="text-ink-faint">I live in </span>
        <span className="text-ink">Toronto </span>
        <span className="text-ink-faint">and spend most of my time </span>
        <span className="text-ink">building products </span>
        <span className="text-ink-faint">on iOS, and the ones </span>
        <span className="text-ink">I ship myself.</span>
      </p>
    </Container>
  );
}
