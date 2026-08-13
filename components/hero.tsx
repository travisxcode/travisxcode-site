import Image from "next/image";
import { Container } from "@/components/container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Container as="header" className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pt-28">
      <p className="section-kicker mb-8 sm:mb-10">Senior Software Engineer</p>
      <h1 className="display text-[clamp(4.25rem,16vw,9.5rem)] text-ink">
        <span className="block">{site.firstName}</span>
        <span className="block">{site.lastName}</span>
      </h1>
      <div className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-16">
        <Image
          src="/images/travis-suwanwigo.jpg"
          alt={`${site.name}, portrait`}
          width={112}
          height={112}
          priority
          className="size-20 rounded-full object-cover ring-1 ring-line sm:size-28"
        />
        <div className="max-w-xl">
          <p className="text-lg text-ink sm:text-xl">{site.location}.</p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-[1.35rem] sm:leading-snug">
            I build products and the systems underneath them — iOS at
            Pinterest, commerce experiences, and software I design end to end.
          </p>
        </div>
      </div>
    </Container>
  );
}
