import type { Project } from "./types";

export const pinterest: Project = {
  slug: "pinterest",
  number: "01",
  title: "Pinterest",
  thesis: "Turn a recipe pin into something you can actually shop.",
  category: "Commerce / iOS",
  status: "LIVE",
  year: "2024–present",
  role: "Senior iOS Engineer",
  platform: "iOS",
  summary:
    "Shoppable recipes on iOS — from a pin you saved to a list you can buy, without turning Pinterest into a grocery store.",
  description:
    "People come to Pinterest for food. They save recipes. For a long time, the most we could do with a rich recipe pin was show the ingredients. Shoppable recipes close that gap: a shop action on the pin, a list you can edit, and a handoff to a retailer when you are ready to buy.",
  glow: {
    from: "#3b0d18",
    via: "#c41e3a",
    to: "#1a0a12",
  },
  hero: {
    kind: "device",
    src: "/images/projects/pinterest/pin-closeup.png",
    alt: "Pinterest recipe pin with a Shop ingredients button",
    caption: "The pin is still a pin. Shopping starts with one action.",
  },
  gallery: [
    {
      kind: "device",
      src: "/images/projects/pinterest/pin-closeup.png",
      alt: "Recipe pin closeup with Shop ingredients",
      caption: "Shop ingredients.",
    },
    {
      kind: "device",
      src: "/images/projects/pinterest/cart.png",
      alt: "Ingredient list matched to products with quantities",
      caption: "A list you can edit.",
    },
    {
      kind: "device",
      src: "/images/projects/pinterest/alternatives.png",
      alt: "Choosing an alternative product for an ingredient",
      caption: "Swap an item.",
    },
    {
      kind: "device",
      src: "/images/projects/pinterest/choose-store.png",
      alt: "Choosing a store by zip code",
      caption: "Pick a store.",
    },
    {
      kind: "device",
      src: "/images/projects/pinterest/walmart-cart.png",
      alt: "The same items in a retailer cart, ready to check out",
      caption: "Finish where you already shop.",
    },
  ],
  technologies: ["iOS", "Swift", "Product engineering", "Commerce"],
  links: [],
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Pinterest is where people find ideas they want to bring into the world. For food, that idea is often a recipe. Commerce is one of the ways it becomes dinner — without making the whole app feel like a storefront.",
        "Shoppable recipes is iOS work I did on that surface. The product is live in the United States, in partnership with Walmart.",
      ],
    },
    {
      id: "problem",
      title: "The Problem",
      paragraphs: [
        "A rich recipe pin already has a lot of structure: time, servings, an ingredients list. That list is still just text. You cannot cook from a screenshot of someone else's pantry, and you cannot buy from a string that says “sugar” with no size, brand, or store.",
        "Inspiration and shopping are not the same job. One is about possibility. The other is a decision. The product problem was to keep those close — a shop action on the pin — without collapsing Pinterest into a grocery app.",
      ],
    },
    {
      id: "role",
      title: "My Role",
      paragraphs: [
        "Senior iOS Engineer. I worked on the iOS path from the pin to a list the person can trust, then out to the retailer.",
        "Internal systems, partner contracts, and unreleased work stay inside the company. What belongs here is the shape of the problem and the experience we shipped.",
      ],
    },
    {
      id: "journey",
      title: "User journey",
      paragraphs: [
        "The path is short on purpose. Stay on the pin, build a list you can edit, pick a store, finish where groceries already happen.",
      ],
      diagrams: [
        {
          caption: "From a recipe pin to a retailer cart.",
          chart: `journey
    title Shop ingredients
    section Pin
      Open a recipe: 5: Person
      Tap Shop ingredients: 5: Person
    section List
      Review matched items: 4: Person
      Change quantity: 4: Person
      Swap an alternative: 3: Person
    section Store
      Search by zip code: 4: Person
      Choose a store: 4: Person
    section Retailer
      Continue to checkout: 5: Person`,
        },
      ],
    },
    {
      id: "pin",
      title: "Start on the pin",
      paragraphs: [
        "The closeup is still Pinterest: the photo, the save, the recipe. Shopping is one clear action — Shop ingredients — not a redesign of the pin.",
        "That is the contract. If this screen feels like ads, we lost. If it feels like the next step on a recipe you already wanted, we did the job.",
      ],
      media: [
        {
          kind: "device",
          src: "/images/projects/pinterest/pin-closeup.png",
          alt: "Easy Banana Bread recipe pin with Shop ingredients at the bottom",
          caption: "Shop ingredients, on the pin you were already looking at.",
        },
      ],
    },
    {
      id: "list",
      title: "A list you can edit",
      paragraphs: [
        "Ingredients on a pin are messy. People write them for humans, not for a shelf. The work is to turn that list into items you can actually buy — then let the person fix what we got wrong.",
        "Quantity up or down. Remove a line. The list has to feel like theirs before they leave Pinterest.",
      ],
      media: [
        {
          kind: "device",
          src: "/images/projects/pinterest/cart.png",
          alt: "Select options screen with matched grocery items, prices, and quantity steppers",
          caption: "Each line is a product, with a quantity you can change.",
        },
      ],
    },
    {
      id: "swap",
      title: "Swap what you do not want",
      paragraphs: [
        "Matching an ingredient to a product is a guess. Alternatives make that guess honest. Pick another size or brand without abandoning the rest of the list.",
      ],
      media: [
        {
          kind: "device",
          src: "/images/projects/pinterest/alternatives.png",
          alt: "Choose an alternative sheet over the ingredient list",
          caption: "Swap one item. Keep the rest.",
        },
      ],
    },
    {
      id: "store",
      title: "The store has to be yours",
      paragraphs: [
        "Price and availability are local. Search by zip code, pick a store, keep going. The list should follow the place you actually shop.",
      ],
      media: [
        {
          kind: "device",
          src: "/images/projects/pinterest/choose-store.png",
          alt: "Choose store screen with zip code search and a list of nearby locations",
          caption: "Find a store from a zip code.",
        },
      ],
    },
    {
      id: "handoff",
      title: "Finish where you buy",
      paragraphs: [
        "Pinterest is not the checkout. When the list is right, the person continues on Walmart — the cart they already know, on the site or in the app.",
        "Inspiration stays on Pinterest. The purchase happens where groceries already happen.",
      ],
      media: [
        {
          kind: "device",
          src: "/images/projects/pinterest/walmart-cart.png",
          alt: "Walmart cart with the recipe items ready to check out",
          caption: "The same items, ready to check out.",
        },
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      paragraphs: [
        "This is production iOS inside a large consumer product. The interesting work is not a single screen. It is how a pin becomes a list, how that list stays editable, and how the handoff to a partner still feels like one decision.",
        "The feature sits in a familiar iOS shape: views bind to a view model, the view model talks to app services, and those services reach a retailer when the person is ready to leave Pinterest. Partner internals stay off this page.",
      ],
      diagrams: [
        {
          caption: "Views, view models, services, then a retailer — not a grocery store inside Pinterest.",
          chart: `flowchart TB
  View[View]
  VM[ViewModel]
  Services[App services]
  Retailer[Retailer]
  View --> VM
  VM --> View
  VM --> Services
  Services --> Retailer`,
        },
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      paragraphs: [
        "Shoppable recipes shipped on iOS in the United States. People can shop ingredients from a recipe pin and complete the purchase with Walmart.",
      ],
    },
    {
      id: "learned",
      title: "What I Learned",
      paragraphs: [
        "Commerce on Pinterest only works if it stays in the background of the idea. The craft is the space between a recipe you saved and a cart that still feels like your own decision.",
        "A match you cannot edit is a dead end. The product is the shop action, the list, and the right to change your mind before you leave.",
      ],
    },
  ],
};
