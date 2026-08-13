import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <Container as="section" id="about" className="border-t border-line py-20 sm:py-28">
      <SectionHeading>OUTSIDE WORK</SectionHeading>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <h3 className="display max-w-md text-[2.4rem] leading-[1.05] text-ink sm:text-[3.1rem]">
          Toronto. Products. The long work of making software feel inevitable.
        </h3>
        <div className="prose-site space-y-1">
          <p>
            I live in Toronto and spend most of my time building software — iOS
            products at work, and my own products when I want to own the whole
            problem.
          </p>
          <p>
            I care about how things feel to use, how they hold up in production,
            and whether the architecture will still make sense a year later.
            Technology shows up in the work. It is not the point of the work.
          </p>
          <p>
            Outside of shipping, I am usually learning the next system I want
            to build, or tightening one I already started.
          </p>
        </div>
      </div>
    </Container>
  );
}
