export type JobOpening = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

export const careersContent = {
  title: "Careers",
  description:
    "Join Inmind and help build the operating system for creator marketing. Open roles in product, engineering, growth and operations.",
  hero: {
    eyebrow: "Careers",
    headline: "Build the system\nbehind modern influence.",
    body: "We're a small team solving a big problem: how creators, brands and agencies run campaigns with the same rigour as any other media channel. If that sounds like your kind of work, we'd like to hear from you.",
    primaryCta: { label: "View open roles", href: "#open-roles" },
    secondaryCta: { label: "Contact us", href: "/contact" },
    image: {
      src: "/images/marketing/agencies/studio-01.webp",
      alt: "Team at work in a modern studio",
    },
  },
  why: {
    eyebrow: "Why Inmind",
    headline: "Work on problems\nthat matter to the industry.",
    items: [
      {
        title: "Real workflows, not demos",
        body: "You'll ship against live campaign operations: discovery, briefing, approvals and measurement, not hypothetical features.",
      },
      {
        title: "Culture meets systems",
        body: "We sit at the intersection of creator economy, media and software. You'll work with people who understand both sides.",
      },
      {
        title: "Ownership early",
        body: "Small team, high trust. You'll own meaningful areas of the product and see the impact of your work quickly.",
      },
    ],
  },
  benefits: {
    eyebrow: "How we support you",
    headline: "Benefits that help you\ndo your best work.",
    items: [
      "Competitive salary and equity participation",
      "Flexible hybrid working",
      "Learning budget for courses and conferences",
      "Modern tooling and a calm, focused environment",
      "Direct access to customers and campaign operators",
      "Team offsites and culture-building time",
    ],
  },
  process: {
    eyebrow: "Hiring process",
    headline: "Simple, respectful,\nno trick questions.",
    steps: [
      {
        title: "Apply",
        body: "Send your CV and a short note on what you'd like to work on. Tell us about something you've built or shipped.",
      },
      {
        title: "Conversation",
        body: "A 30-minute call with someone from the team to understand your background and what you're looking for.",
      },
      {
        title: "Work sample",
        body: "A practical exercise relevant to the role, designed to reflect real work, not whiteboard puzzles.",
      },
      {
        title: "Meet the team",
        body: "Final conversations with the people you'd work with day to day. We answer your questions too.",
      },
    ],
  },
  openings: [
    {
      id: "product-designer",
      title: "Product Designer",
      team: "Product",
      location: "Nairobi · Hybrid",
      type: "Full-time",
      summary:
        "Shape campaign workflows, creator profiles and analytics experiences used by brands and agencies daily.",
    },
    {
      id: "fullstack-engineer",
      title: "Full-stack Engineer",
      team: "Engineering",
      location: "Remote · EAT ±3h",
      type: "Full-time",
      summary:
        "Build and ship features across our Next.js platform, APIs and integrations with social and payment systems.",
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing Lead",
      team: "Marketing",
      location: "Nairobi · Hybrid",
      type: "Full-time",
      summary:
        "Own demand generation, content and partnerships, ideally with experience in creator or B2B SaaS marketing.",
    },
    {
      id: "customer-success",
      title: "Customer Success Manager",
      team: "Operations",
      location: "Remote",
      type: "Full-time",
      summary:
        "Onboard brands and agencies, run campaign kick-offs and turn customer feedback into product improvements.",
    },
  ] satisfies JobOpening[],
  apply: {
    headline: "Don't see the right role?",
    body: "We're always interested in meeting talented people. Send your CV and a note on what you'd like to work on.",
    email: "careers@inmind.media",
    cta: "Get in touch",
    href: "/contact",
  },
} as const;
