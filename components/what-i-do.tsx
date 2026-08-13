import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const practices = [
  {
    title: "Mobile product development",
    body: "I design and ship iOS products with care for the people using them — architecture, interaction, and the details that make software feel finished.",
  },
  {
    title: "Product engineering",
    body: "The interesting problems sit between product, design, and engineering. I work across those boundaries, not just inside a single layer of the stack.",
  },
  {
    title: "Systems, not just screens",
    body: "From commerce on iOS to a training platform I am building myself, I care about complete products: data, architecture, UX, and the reality of shipping.",
  },
];

export function WhatIDo() {
  return (
    <Container as="section" className="border-t border-line py-20 sm:py-28">
      <SectionHeading>WHAT I DO</SectionHeading>
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
        {practices.map((practice) => (
          <article key={practice.title}>
            <h3 className="display text-[1.85rem] leading-tight text-ink sm:text-[2.1rem]">
              {practice.title}
            </h3>
            <p className="mt-4 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
              {practice.body}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
