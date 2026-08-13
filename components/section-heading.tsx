type SectionHeadingProps = {
  kicker?: string;
  children: string;
};

export function SectionHeading({ kicker, children }: SectionHeadingProps) {
  return (
    <header className="mb-10 sm:mb-14">
      {kicker ? <p className="section-kicker mb-3">{kicker}</p> : null}
      <h2 className="section-kicker text-ink">{children}</h2>
    </header>
  );
}
