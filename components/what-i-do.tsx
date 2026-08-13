import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function WhatIDo() {
  return (
    <Container as="section" className="py-10 sm:py-14">
      <SectionHeading>WHAT I DO</SectionHeading>
      <p className="max-w-4xl text-[clamp(1.55rem,3.1vw,2.35rem)] font-medium leading-[1.18] tracking-[-0.035em]">
        <span className="text-ink-faint">A Toronto based </span>
        <span className="text-ink">Senior Software Engineer </span>
        <span className="whitespace-nowrap">
          <span className="text-ink-faint">at </span>
          <span className="text-accent">Pinterest. </span>
        </span>
        <span className="text-ink-faint">I build </span>
        <span className="text-ink">products and systems </span>
        <span className="whitespace-nowrap">
          <span className="text-ink-faint">across </span>
          <span className="text-ink">iOS, </span>
        </span>
        <span className="text-ink">commerce, </span>
        <span className="whitespace-nowrap">
          <span className="text-ink-faint">and </span>
          <span className="text-ink">software I ship myself.</span>
        </span>
      </p>
    </Container>
  );
}
