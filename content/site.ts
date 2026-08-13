export const site = {
  name: "Travis Suwanwigo",
  firstName: "Travis",
  lastName: "Suwanwigo",
  shortName: "TRAVISXCODE",
  role: "Senior Software Engineer",
  location: "Toronto, Canada",
  url: "https://travisxcode.com",
  email: "travis.suwanwigo@gmail.com",
  description:
    "Senior software engineer in Toronto. iOS specialist building products and systems across mobile, commerce, and independent software.",
  ogTitle: "Travis Suwanwigo — Senior Software Engineer",
  github: "https://github.com/travisxcode",
  linkedin: "https://www.linkedin.com/in/travis-suwanwigo",
} as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#connect", label: "Connect" },
] as const;

export const social = [
  { href: `mailto:${site.email}`, label: "Email" },
  { href: site.github, label: "GitHub" },
  { href: site.linkedin, label: "LinkedIn" },
] as const;
