import Image from "next/image";
import { Container } from "@/components/container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Container as="header" className="pb-20 pt-16 sm:pb-28 sm:pt-24">
      <p className="section-kicker mb-10">[WHO I AM]</p>
      <div className="mb-8">
        <Image
          src="/images/travis-suwanwigo.jpg"
          alt={`${site.name}, portrait`}
          width={56}
          height={56}
          priority
          className="size-12 rounded-full object-cover ring-1 ring-white/15 sm:size-14"
        />
      </div>
      <h1 className="display text-[clamp(3.8rem,12vw,8.5rem)] text-ink">
        <span className="block">{site.firstName}</span>
        <span className="block">{site.lastName}</span>
      </h1>
      <p className="mt-8 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-ink-faint">
        {site.role}
        <span aria-hidden="true"> · </span>
        {site.location}
      </p>
    </Container>
  );
}
