import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({
  href,
  children,
  external,
  className = "",
}: TextLinkProps) {
  const classes = `group inline-flex items-center gap-2 text-[0.95rem] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${className}`;
  const arrow = (
    <span
      aria-hidden="true"
      className="translate-x-0 transition-transform group-hover:translate-x-0.5"
    >
      →
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
