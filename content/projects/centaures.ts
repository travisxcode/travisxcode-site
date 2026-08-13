import type { Project } from "./types";

export const centaures: Project = {
  slug: "centaures",
  number: "03",
  title: "Centaurse",
  thesis: "Training software that people will actually finish.",
  category: "Product / SaaS / LMS",
  status: "LIVE / DEMO",
  year: "2026",
  role: "Founder & Engineer",
  platform: "Web",
  type: "Online Training Platform",
  summary:
    "A modern training platform for teams — a company portal, a focused player, and the admin tools to run it.",
  description:
    "Centaurse is an online training platform I am building for small and mid-size teams. A company gets its own portal. Admins compose courses from lessons and content blocks. Learners move through a focused player and leave with a completion they can trust.",
  glow: {
    from: "#041820",
    via: "#0084c7",
    to: "#0b2a3a",
  },
  hero: {
    kind: "browser",
    src: "/images/projects/centaures/dashboard.png",
    alt: "Centaurse admin overview — people, published courses, completions, and course activity",
    caption: "The workspace: who is in it, what is assigned, and what actually got finished.",
  },
  gallery: [
    {
      kind: "browser",
      src: "/images/projects/centaures/login.png",
      alt: "Centaurse login with a company portal domain",
      caption: "A company portal, not a generic login dump.",
    },
    {
      kind: "full",
      src: "/images/projects/centaures/dashboard.png",
      alt: "Centaurse admin dashboard",
      caption: "Overview for operators.",
    },
    {
      kind: "browser",
      src: "/images/projects/centaures/admin-create-course.png",
      alt: "Create a new course as a draft",
      caption: "A course starts as a draft.",
    },
    {
      kind: "browser",
      src: "/images/projects/centaures/course-preview.png",
      alt: "Learner home showing the next course to continue",
      caption: "The next session, with time left and progress.",
    },
    {
      kind: "full",
      src: "/images/projects/centaures/course-first-page.png",
      alt: "Centaurse course player on the first lesson",
      caption: "The player.",
    },
    {
      kind: "full",
      src: "/images/projects/centaures/flips-true-false.png",
      alt: "Flip cards and a true or false check in a lesson",
      caption: "You do the course. You do not click through a PDF.",
    },
    {
      kind: "browser",
      src: "/images/projects/centaures/course-cert.png",
      alt: "Training complete screen",
      caption: "Finished.",
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
        "Centaurse is a training product for SMEs. Companies need employees to learn — onboarding, tools, hospitality, safety, compliance — and most of the software in that category still feels like a leftover from another decade.",
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
        "That includes company portals, course management, a training player, progress, and the operational pieces a real company needs before they will put employees into it.",
      ],
    },
    {
      id: "portal",
      title: "A company portal",
      paragraphs: [
        "You do not land in a generic SaaS dump. Each company has a portal — pai.centaurse.com in this demo — so login is already about that workplace.",
        "The first screen has to feel like the company's training, not a vendor's marketing site with a form on it.",
      ],
      media: [
        {
          kind: "browser",
          src: "/images/projects/centaures/login.png",
          alt: "Centaurse login — portal domain, username, and password",
          caption: "Log in to the company's training, not a shared marketplace.",
        },
      ],
    },
    {
      id: "workspace",
      title: "Run it",
      paragraphs: [
        "Operators need a room that answers the only questions that matter: who is here, what is published, what got finished, and who is stuck.",
        "From the same workspace you start a course as a draft. Title, description, then build. Nothing goes live until you publish it.",
      ],
      media: [
        {
          kind: "full",
          src: "/images/projects/centaures/dashboard.png",
          alt: "Admin overview with people, published courses, completions, and a nudge for incomplete assignments",
          caption: "Overview — people, courses, completions, and a nudge when someone stalls.",
        },
        {
          kind: "browser",
          src: "/images/projects/centaures/admin-create-course.png",
          alt: "Create a new course modal with title and short description",
          caption: "Create a draft. Publish later.",
        },
      ],
    },
    {
      id: "session",
      title: "Take it",
      paragraphs: [
        "The learner side is a session, not a dashboard full of chrome. Your next course is obvious: time left, how far you are, one button to continue.",
        "Inside the player, a lesson is blocks — intro, expand, continue — so attention stays on one beat at a time.",
      ],
      media: [
        {
          kind: "browser",
          src: "/images/projects/centaures/course-preview.png",
          alt: "Learner home with Kitchen Safety course, 15 percent complete, and a continue button",
          caption: "Your next course, with a deadline and a way back in.",
        },
        {
          kind: "full",
          src: "/images/projects/centaures/course-first-page.png",
          alt: "Course player showing Welcome to PAI Food Safety with expandable blocks",
          caption: "The player — one lesson, a few blocks, continue when you have done the work.",
        },
      ],
    },
    {
      id: "practice",
      title: "Do the work",
      paragraphs: [
        "A course people finish is a course they have to do something in. Flip the cards. Answer true or false. The player checks that the beat actually happened before you move on.",
        "That is the difference between training software and a PDF wearing a login screen.",
      ],
      media: [
        {
          kind: "full",
          src: "/images/projects/centaures/flips-true-false.png",
          alt: "Lesson with flip cards completed and a true or false question about confirming peanut ingredients",
          caption: "Flip cards, then a check. The next button waits.",
        },
      ],
    },
    {
      id: "finish",
      title: "Finish it",
      paragraphs: [
        "Completion is a moment, not a row in a spreadsheet the learner never sees. When the last lesson is done, the product says so — course name, date, done.",
        "That record is what the admin overview was counting. Both sides of the product close the same loop.",
      ],
      media: [
        {
          kind: "browser",
          src: "/images/projects/centaures/course-cert.png",
          alt: "Training complete card for Exceptional Thai Hospitality",
          caption: "Training complete.",
        },
      ],
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
        "The product is in a live / demo state. The walkthrough here is a working hospitality demo — portal, admin, player, and completion — on the public site.",
      ],
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
