import type { Project } from "./types";

export const snowball: Project = {
  slug: "snowball",
  number: "02",
  title: "Snowball",
  thesis: "A personal finance system for debt, investing, saving, and budgets.",
  category: "Personal Project / iOS",
  status: "LIVE",
  year: "2026",
  role: "Designer & Engineer",
  platform: "iOS",
  type: "Personal Project",
  summary:
    "A personal iOS product for debt, investing, saving, and budgets — built end to end for a problem I wanted to own.",
  description:
    "Snowball is my personal finance application. It is not a tutorial and not a feature inside someone else’s roadmap. It is a product: a problem, a point of view, and software I am responsible for from the first screen to the architecture underneath it.",
  glow: {
    from: "#071428",
    via: "#2b6cff",
    to: "#0b1b33",
  },
  hero: {
    kind: "device",
    src: "/images/projects/snowball/debt-summary.png",
    alt: "Snowball debt dashboard — remaining balance, payoff timeline, and accounts",
    caption: "Debt — remaining amount, payoff plan, and accounts.",
  },
  gallery: [
    {
      kind: "device",
      src: "/images/projects/snowball/debt-summary.png",
      alt: "Snowball debt home",
      caption: "Debt home",
    },
    {
      kind: "device",
      src: "/images/projects/snowball/debt-detail.png",
      alt: "Snowball credit card payoff detail",
      caption: "Debt detail",
    },
    {
      kind: "device",
      src: "/images/projects/snowball/investments.png",
      alt: "Snowball investments dashboard",
      caption: "Invest",
    },
    {
      kind: "device",
      src: "/images/projects/snowball/invest-detail.png",
      alt: "Snowball investment growth projection",
      caption: "Investment growth",
    },
    {
      kind: "device",
      src: "/images/projects/snowball/saving.png",
      alt: "Snowball savings goals",
      caption: "Saving",
    },
    {
      kind: "device",
      src: "/images/projects/snowball/saving-detail.png",
      alt: "Snowball savings goal progress",
      caption: "Goal progress",
    },
    {
      kind: "device",
      src: "/images/projects/snowball/budget.png",
      alt: "Snowball monthly budget",
      caption: "Budget",
    },
  ],
  technologies: ["iOS", "Swift", "Product design"],
  links: [],
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Snowball is a personal finance app for iOS. Debt, investing, saving, and budgeting sit in one product so the next decision is visible instead of scattered across bank apps and spreadsheets.",
        "I built it as a personal product — something I could design, architect, and ship without waiting for a larger roadmap to make space for the problem.",
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      paragraphs: [
        "Money is easy to lose track of and hard to look at. Balances live in different places. Minimum payments hide the real timeline. Investing, saving, and spending are usually separate tools with separate truths.",
        "I wanted software that treats the whole picture as the product: what you owe, what you are building, what you are saving for, and what the month is actually doing.",
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
        "Four rooms, one system. Debt shows remaining principal, payoff horizon, and each account. Invest projects growth. Saving tracks goals. Budget splits the month so leftover money is honest.",
      ],
      diagrams: [
        {
          caption: "One product, four rooms you actually open.",
          chart: `journey
    title Snowball
    section Debt
      See remaining balance: 5: Person
      Open an account: 4: Person
    section Invest
      Review plans: 4: Person
      Check growth: 4: Person
    section Saving
      See goals: 4: Person
      Check progress: 4: Person
    section Budget
      Split the month: 5: Person`,
        },
      ],
      media: [
        {
          kind: "device",
          src: "/images/projects/snowball/debt-summary.png",
          alt: "Snowball debt dashboard",
          caption: "Debt — remaining amount and accounts.",
        },
        {
          kind: "device",
          src: "/images/projects/snowball/debt-detail.png",
          alt: "Snowball credit card detail with payoff schedule",
          caption: "A single debt, including principal versus interest.",
        },
        {
          kind: "device",
          src: "/images/projects/snowball/investments.png",
          alt: "Snowball invest dashboard",
          caption: "Invest — plans in one list.",
        },
        {
          kind: "device",
          src: "/images/projects/snowball/invest-detail.png",
          alt: "Snowball investment growth chart",
          caption: "Growth projected over a chosen horizon.",
        },
        {
          kind: "device",
          src: "/images/projects/snowball/saving.png",
          alt: "Snowball savings goals list",
          caption: "Saving — goals with progress.",
        },
        {
          kind: "device",
          src: "/images/projects/snowball/saving-detail.png",
          alt: "Snowball savings goal detail",
          caption: "A single savings goal.",
        },
        {
          kind: "device",
          src: "/images/projects/snowball/budget.png",
          alt: "Snowball monthly budget",
          caption: "Budget — expenses against what is left.",
        },
      ],
    },
    {
      id: "ux",
      title: "UX",
      paragraphs: [
        "The interface should make a stressful subject feel manageable. Hierarchy matters more than ornament. The next action should be obvious. Numbers should be honest.",
        "Each area uses color as a way to scan, not as decoration: accounts, goals, and categories should be recognizable before you read them.",
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      paragraphs: [
        "Snowball is a native iOS product. The screens bind to view models. The view models talk to domain models for debt, investing, saving, and budget. Persistence stays on device so the numbers are there when you open the app.",
        "There is no grocery-store of a backend here. The architecture is small on purpose: a view, a view model, a model, a store. That is enough to ship a product I can live with.",
      ],
      diagrams: [
        {
          caption: "MVVM with local persistence. No remote API required.",
          chart: `flowchart TB
  Views[SwiftUI views]
  VM[ViewModels]
  Domain["Debt / Invest / Save / Budget"]
  Store[Local persistence]
  Views --> VM
  VM --> Views
  VM --> Domain
  Domain --> Store`,
        },
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      paragraphs: [
        "The product is a personal iOS application I designed, built, and use. There is no public store listing on this page.",
      ],
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
