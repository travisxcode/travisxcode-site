type SectionHeadingProps = {
  children: string;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <header className="mb-5 sm:mb-6">
      <h2 className="section-kicker">[{children}]</h2>
    </header>
  );
}
