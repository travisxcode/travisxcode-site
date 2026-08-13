import type { Project } from "./types";

export const centaures: Project = {
  slug: "centaures",
  number: "03",
  title: "Centaurse",
  category: "Product / SaaS / LMS",
  status: "LIVE / DEMO",
  year: "2026",
  role: "Founder & Engineer",
  platform: "Web",
  type: "Online Training Platform",
  summary:
    "A modern training platform for teams — courses, a focused learner experience, and the admin tools to run it.",
  description:
    "Centaurse is an online training platform I am building for small and mid-size teams. Admins compose courses from lessons and content blocks. Employees move through a focused player. The product is meant to feel current — not like a slide deck wearing a login screen.",
  hero: {
    kind: "browser",
    alt: "Centaurse training platform",
    label: "Centaurse · Web",
  },
  gallery: [
    {
      kind: "browser",
      alt: "Centaurse admin experience",
      label: "Admin · screenshot · TODO",
    },
    {
      kind: "browser",
      alt: "Centaurse course player",
      label: "Learner · screenshot · TODO",
    },
    {
      kind: "split",
      alt: "Centaurse course management",
      label: "Course management · screenshot · TODO",
    },
  ],
  technologies: [
    "TypeScript",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Railway",
  ],
  links: [
    {
      label: "Product site",
      href: "https://www.centaurse.com",
      external: true,
    },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Centaurse is a training product for SMEs. Companies need employees to learn — onboarding, tools, compliance, ethics — and most of the software in that category still feels like a leftover from another decade.",
        "The product has two sides that have to be equally good. Admins need to build and run courses. Learners need a session they will actually finish.",
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      paragraphs: [
        "Training inside a company is often a pile of PDFs, a shared drive, and a tool nobody wants to open. Completion is hard to see. The experience is generic. Compliance training gets treated as a checkbox instead of a product.",
        "The job is not to recreate a traditional LMS feature-for-feature. It is to make creating a course and taking a course feel like software from now.",
      ],
    },
    {
      id: "role",
      title: "My Role",
      paragraphs: [
        "I am building Centaures as a complete product: the concept, the information architecture, the learner and admin experiences, and the systems underneath.",
        "That includes course management, a training player, progress, and the operational pieces a real company needs before they will put employees into it.",
      ],
    },
    {
      id: "product",
      title: "Product",
      paragraphs: [
        "Admins compose courses from lessons. Lessons are made of content blocks rather than a single uploaded file. Learners move through a focused player designed for attention, not for a dashboard full of chrome.",
        "The product is intended to cover the work companies actually run: skills, process, and the compliance and ethics training that has to be trackable.",
        "Demo screenshots of the admin experience, the course builder, and the learner player will be added here.",
      ],
      media: [
        {
          kind: "browser",
          alt: "Centaurse admin forthcoming",
          label: "Admin experience · TODO",
        },
        {
          kind: "browser",
          alt: "Centaurse player forthcoming",
          label: "Training player · TODO",
        },
        {
          kind: "full",
          alt: "Centaurse course management forthcoming",
          label: "Course management · TODO",
        },
      ],
      todo: "Add demo screenshots: landing, admin, course builder, learner player.",
    },
    {
      id: "engineering",
      title: "Engineering",
      paragraphs: [
        "Centaurse is a TypeScript system. The web app is Next.js. The API is NestJS. Shared types keep the contract honest. Persistence is Postgres. The architecture is layered so the domain stays independent of the framework of the week.",
        "The frontend talks to the API through a typed client. Organization-scoped courses, users, and progress are first-class. Auth is session-based. The point of the structure is to ship a product that can grow without turning into a ball of routes.",
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      paragraphs: [
        "The product is in a live / demo state. A working demo exists for walking through admin and learner flows.",
      ],
      todo: "Add a public demo URL when it should be linked from this page. Do not invent user or revenue numbers.",
    },
    {
      id: "learned",
      title: "What I Learned",
      paragraphs: [
        "A training product is two products that share a database. If the admin tools are weak, nobody assigns the course. If the player is weak, nobody finishes it. Building both, as one system, is the actual work.",
        "Shipping a SaaS product also means operations: environments, auth, data, and the unglamorous paths that make a demo feel like a company could trust it.",
      ],
    },
  ],
};
