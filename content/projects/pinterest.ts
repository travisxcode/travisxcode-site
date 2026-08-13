import type { Project } from "./types";

export const pinterest: Project = {
  slug: "pinterest",
  number: "01",
  title: "Pinterest",
  thesis: "Connecting inspiration with shopping on iOS.",
  category: "Commerce / iOS",
  status: "LIVE",
  year: "2024–present",
  role: "Senior iOS Engineer",
  platform: "iOS",
  summary:
    "Building commerce experiences at Pinterest — iOS work that connects inspiration with shopping.",
  description:
    "At Pinterest I work on iOS experiences at the intersection of inspiration and commerce. This case study is a living document. It will deepen as I can share more about the product work, without disclosing confidential internals.",
  glow: {
    from: "#3b0d18",
    via: "#c41e3a",
    to: "#1a0a12",
  },
  hero: {
    kind: "hero",
    alt: "Pinterest iOS commerce experience",
    label: "Pinterest · iOS",
  },
  gallery: [
    {
      kind: "device",
      alt: "Pinterest iOS product screenshot",
      label: "Product screenshot · TODO",
    },
    {
      kind: "device",
      alt: "Pinterest iOS commerce screenshot",
      label: "Commerce screenshot · TODO",
    },
  ],
  technologies: ["iOS", "Swift", "Product engineering", "Commerce"],
  links: [],
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Pinterest is where people find ideas they want to bring into the world. Commerce is one of the ways those ideas become real — a pin that becomes a product, a product that becomes part of someone’s life.",
        "I am a Senior iOS Engineer on that surface. The work is production software used by a large audience, in a product that has to feel considered rather than transactional.",
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      paragraphs: [
        "Inspiration and shopping are not the same job. One is about possibility. The other is about a decision. The product problem is to keep those two close without collapsing the experience into a storefront.",
        "On iOS that tension shows up in navigation, in merchandising, in trust, and in the small interactions that either feel like Pinterest or feel like ads.",
      ],
      todo: "Replace with a more specific, shareable problem statement when approved.",
    },
    {
      id: "role",
      title: "My Role",
      paragraphs: [
        "Senior iOS Engineer. I work on the iOS experience around commerce — the product surfaces that help people move from saving an idea to acting on it.",
        "The details of internal architecture, team structure, and unreleased work stay inside the company. What belongs here is the shape of the problem and the kind of engineering it asks for: product judgment, systems thinking, and software that has to hold up in production.",
      ],
    },
    {
      id: "product",
      title: "Product",
      paragraphs: [
        "Screenshots and walkthroughs will be added here. Until then, the product lives on the Pinterest iOS app.",
      ],
      media: [
        {
          kind: "device",
          alt: "Pinterest product still — forthcoming",
          label: "App still · TODO",
        },
        {
          kind: "device",
          alt: "Pinterest commerce still — forthcoming",
          label: "Commerce still · TODO",
        },
      ],
      todo: "Add approved product screenshots.",
    },
    {
      id: "engineering",
      title: "Engineering",
      paragraphs: [
        "This is production iOS work inside a large consumer product. The interesting engineering is rarely a single framework. It is how the feature sits in the existing system, how it degrades, how it is tested, and how it stays understandable after it ships.",
      ],
      todo: "Add non-confidential technical notes: ownership, approach, and constraints worth sharing.",
    },
    {
      id: "outcome",
      title: "Outcome",
      paragraphs: [
        "The work is live in the Pinterest iOS app.",
      ],
      todo: "Add outcomes only when they are public and verified. Do not invent metrics.",
    },
    {
      id: "learned",
      title: "What I Learned",
      paragraphs: [
        "Commerce on iOS is a product problem as much as a platform one. The craft is in the space between a beautiful idea and a purchase that still feels like the person’s own decision.",
      ],
    },
  ],
};
