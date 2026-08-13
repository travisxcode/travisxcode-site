type SectionHeadingProps = {
  children: string;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <header className="mb-10 sm:mb-14">
      <h2 className="section-kicker">[{children}]</h2>
    </header>
  );
}
