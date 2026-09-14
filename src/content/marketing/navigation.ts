export const SITE = {
  name: "Inmind",
  product: "Inmind",
  tagline: "Influence, intelligently managed.",
  url: "https://inmind.demo",
} as const;

/** Single nav call to action while the product surfaces stay unlinked. */
export const NAV_CTA = {
  label: "Start a Campaign",
  href: "/contact",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export type MegaItem = {
  label: string;
  href: string;
  description: string;
  icon:
    | "search"
    | "chart"
    | "user"
    | "campaign"
    | "check"
    | "message"
    | "spark"
    | "layers"
    | "opportunity"
    | "studio";
};

export type MegaSection = {
  title: string;
  items: MegaItem[];
};

export const PRIMARY_NAV: NavLink[] = [
  { label: "Platform", href: "/platform" },
  { label: "Creators", href: "/creators" },
  { label: "Brands", href: "/brands" },
  { label: "Agencies", href: "/agencies" },
  { label: "Resources", href: "/resources" },
];

export const PLATFORM_MEGA: MegaSection[] = [
  {
    title: "Discover",
    items: [
      {
        label: "Creator Discovery",
        href: "/creator-discovery",
        description: "Audience fit, not vanity reach.",
        icon: "search",
      },
      {
        label: "Creator Intelligence",
        href: "/features",
        description: "Scores, authenticity, brand safety.",
        icon: "spark",
      },
      {
        label: "Audience Insights",
        href: "/analytics",
        description: "Who actually sees the work.",
        icon: "chart",
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        label: "Campaign Management",
        href: "/campaign-management",
        description: "Brief to publish in one desk.",
        icon: "campaign",
      },
      {
        label: "Creator CRM",
        href: "/features",
        description: "Relationships that compound.",
        icon: "user",
      },
      {
        label: "Approvals",
        href: "/campaign-management",
        description: "Creative QA with an audit trail.",
        icon: "check",
      },
      {
        label: "Collaboration",
        href: "/features",
        description: "Messages, briefs, deliverables.",
        icon: "message",
      },
    ],
  },
  {
    title: "Measure",
    items: [
      {
        label: "Live Analytics",
        href: "/analytics",
        description: "Know what’s working in flight.",
        icon: "chart",
      },
      {
        label: "Social Intelligence",
        href: "/social-intelligence",
        description: "Every post. Every platform.",
        icon: "layers",
      },
      {
        label: "ROI & Attribution",
        href: "/analytics",
        description: "Exposure to customer action.",
        icon: "opportunity",
      },
    ],
  },
  {
    title: "Intelligence",
    items: [
      {
        label: "Inmind AI",
        href: "/ai",
        description: "What to do next, not just what happened.",
        icon: "spark",
      },
      {
        label: "Trend Intelligence",
        href: "/ai",
        description: "Signals across creators and culture.",
        icon: "studio",
      },
      {
        label: "Predictive Insights",
        href: "/ai",
        description: "Recruit and budget with confidence.",
        icon: "opportunity",
      },
    ],
  },
];

export const FOOTER = {
  tagline: SITE.tagline,
  blurb:
    "Discovery, campaigns, social performance and creator relationships in one place. Built for creators, brands and agencies shaping culture worldwide.",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Creator Discovery", href: "/creator-discovery" },
        { label: "Campaigns", href: "/campaign-management" },
        { label: "Analytics", href: "/analytics" },
        { label: "Inmind AI", href: "/ai" },
        { label: "Social Intelligence", href: "/social-intelligence" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Creators", href: "/creators" },
        { label: "Brands", href: "/brands" },
        { label: "Agencies", href: "/agencies" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Insights", href: "/resources/insights" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Blog", href: "/resources/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ],
} as const;
