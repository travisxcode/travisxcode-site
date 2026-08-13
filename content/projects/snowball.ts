import type { Project } from "./types";

export const snowball: Project = {
  slug: "snowball",
  number: "02",
  title: "Snowball",
  category: "Personal Project / iOS",
  status: "LIVE",
  year: "TODO",
  role: "Designer & Engineer",
  platform: "iOS",
  type: "Personal Project",
  summary:
    "A personal iOS app for managing debt — a product I am building end to end, for a problem I wanted to own.",
  description:
    "Snowball is my personal debt-management application. It is not a tutorial and not a feature inside someone else’s roadmap. It is a product: a problem, a point of view, and software I am responsible for from the first screen to the architecture underneath it.",
  hero: {
    kind: "device",
    alt: "Snowball iOS app",
    label: "Snowball · iOS",
  },
  gallery: [
    {
      kind: "device",
      alt: "Snowball home screen",
      label: "Home · App Store screenshot · TODO",
    },
    {
      kind: "device",
      alt: "Snowball plan screen",
      label: "Plan · App Store screenshot · TODO",
    },
    {
      kind: "split",
      alt: "Snowball detail screens",
      label: "Detail · App Store screenshot · TODO",
    },
  ],
  technologies: ["iOS", "Swift", "Product design"],
  links: [],
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Snowball is a debt-management app for iOS. I built it as a personal product — something I could design, architect, and ship without waiting for a larger roadmap to make space for the problem.",
        "The name is a point of view. Paying down debt is easier when the plan is visible, the next step is obvious, and the software stays out of the way.",
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      paragraphs: [
        "Debt is easy to lose track of and hard to look at. Balances live in different places. Minimum payments hide the real timeline. Most tools are either a spreadsheet or a bank’s own view of a single account.",
        "I wanted software that treats the whole picture as the product: what you owe, what to do next, and how that plan feels day to day.",
      ],
    },
    {
      id: "why",
      title: "Why I Built It",
      paragraphs: [
        "I wanted to own a complete product. Not a sample app. Not a UI kit. A thing a person could open because they needed it.",
        "Personal products are where I practice the full loop: research the problem, make the calls, live with the architecture, and ship.",
      ],
    },
    {
      id: "product",
      title: "Product",
      paragraphs: [
        "The product is an iOS app. App Store screenshots and a short walkthrough of the core flows will sit here.",
      ],
      media: [
        {
          kind: "device",
          alt: "Snowball screenshot forthcoming",
          label: "App Store screenshot · TODO",
        },
        {
          kind: "device",
          alt: "Snowball screenshot forthcoming",
          label: "App Store screenshot · TODO",
        },
      ],
      todo: "Add App Store screenshots and a concise UX walkthrough of the primary flows.",
    },
    {
      id: "ux",
      title: "UX",
      paragraphs: [
        "The interface should make a stressful subject feel manageable. Hierarchy matters more than ornament. The next action should be obvious. Numbers should be honest.",
      ],
      todo: "Document key screens, empty states, and the decisions behind them.",
    },
    {
      id: "engineering",
      title: "Engineering",
      paragraphs: [
        "Snowball is a native iOS product. Architecture and technical decisions will be documented here — persistence, modeling the domain, and the choices that kept the app shippable.",
      ],
      todo: "Add architecture notes, diagrams only where they earn their place, and the technical decisions worth sharing.",
    },
    {
      id: "outcome",
      title: "Outcome",
      paragraphs: [
        "The product is live.",
      ],
      todo: "Add App Store link, version, and any public traction only when verified. Do not invent downloads or revenue.",
    },
    {
      id: "learned",
      title: "What I Learned",
      paragraphs: [
        "Building for yourself removes the hiding places. If the information architecture is wrong, you feel it. If the architecture is precious, you pay for it. The work is to keep the product small enough to finish and serious enough to trust.",
      ],
    },
  ],
};
