export const aboutContent = {
  title: "About",
  description:
    "InMind is building the operating system for creator marketing, one intelligent layer for discovery, campaigns and measurement.",
  hero: {
    eyebrow: "About InMind",
    headline: "We're building the infrastructure\nbehind modern influence.",
    body: "Creators have become media companies. Brands have become publishers. Culture has become increasingly distributed, yet the tools connecting them remain fragmented. InMind exists to change that.",
    primaryCta: { label: "Contact us", href: "/contact" },
    secondaryCta: { label: "Explore the platform", href: "/platform" },
    image: {
      src: "/images/marketing/editorial/film-01.webp",
      alt: "Creative production environment",
    },
  },
  beliefs: {
    eyebrow: "What we believe",
    headline: "Creator marketing deserves\na real operating system.",
    body: "Not another spreadsheet, not another inbox thread. A single place where strategy, execution and proof connect.",
    items: [
      {
        title: "Accountability over activity",
        body: "Campaigns should be judged on outcomes, not outputs. Measurement belongs in the workflow, not in a deck three weeks later.",
      },
      {
        title: "Relationships compound",
        body: "Every collaboration should make the next one faster. Creator history, performance and preferences should carry forward.",
      },
      {
        title: "Trust is infrastructure",
        body: "Governance, consent, contracts and audit trails are built into the product from the start, not handled as paperwork outside the platform.",
      },
    ],
  },
  story: {
    eyebrow: "Our story",
    headline: "Built where creator culture\nmoves fastest.",
    body: "InMind started with a simple observation: the teams running creator campaigns were world-class at culture, but the tools they used were stuck in fragments.",
    points: [
      "Discovery in one place, campaigns in another, performance scattered across platforms.",
      "Brands, agencies and creators each carrying their own version of the truth.",
      "Great work happening, but hard to repeat, hard to prove, hard to scale.",
      "We built InMind to connect the full lifecycle in one intelligent layer.",
    ],
    image: {
      src: "/images/marketing/brands/team-01.webp",
      alt: "InMind team collaborating",
    },
  },
  pillars: [
    {
      title: "Mission",
      body: "Make creator marketing a more accountable, repeatable and measurable growth channel.",
    },
    {
      title: "Vision",
      body: "Build one intelligent operating system for creators, brands and agencies.",
    },
    {
      title: "Product philosophy",
      body: "Discover, orchestrate, support, measure and learn, all within one system of record.",
    },
    {
      title: "How we work",
      body: "Small teams, high ownership, close to customers. We ship against real campaign workflows.",
    },
    {
      title: "Trust & governance",
      body: "Consent, permissions and audit trails designed in from the start.",
    },
    {
      title: "Join us",
      body: "We're growing the team. See open roles on our careers page.",
      href: "/careers",
    },
  ],
} as const;
