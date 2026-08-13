import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const line = (text: string, strong = false) => (
  <span
    className={`block ${strong ? "text-ink" : "text-ink-faint"}`}
  >
    {text}
  </span>
);

export function WhatIDo() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeading>WHAT I DO</SectionHeading>
      <p className="display max-w-4xl text-[clamp(2rem,5.4vw,4.4rem)] font-medium leading-[1.08] tracking-[-0.04em]">
        {line("A Toronto based")}
        {line("Senior Software Engineer", true)}
        {line("at")}
        {line("Pinterest.", true)}
        {line("I build")}
        {line("products and systems", true)}
        {line("across")}
        {line("iOS,", true)}
        {line("commerce,", true)}
        {line("and")}
        {line("software I ship myself.", true)}
      </p>
    </Container>
  );
}
