import type { MarketingPageConfig } from "@/components/marketing/MarketingStoryPage";

export const creatorsPage: MarketingPageConfig = {
  title: "For Creators",
  description:
    "Turn your audience, content and reputation into a professional creator profile that brands can understand and trust.",
  hero: {
    eyebrow: "For creators",
    headline: "Your creator career,\nall in one place.",
    body: "Turn your audience, content and reputation into a professional creator profile that brands can understand and trust.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/creators/dennis-ombachi.webp",
      alt: "Dennis Ombachi",
    },
  },
  features: [
    {
      title: "Professional profile",
      body: "Media kit, rates, audience and portfolio, ready for brands and agencies.",
    },
    {
      title: "Social analytics",
      body: "Understand what performs best across the channels you connect.",
    },
    {
      title: "Brand opportunities",
      body: "Receive opportunities matched to your niche, markets and audience, rather than irrelevant offers.",
    },
    {
      title: "Campaign workspace",
      body: "Manage briefs, deliverables, deadlines and publishing from one workspace.",
    },
    {
      title: "Earnings & invoices",
      body: "Track payment status from work approval through to payment.",
    },
    {
      title: "Support Desk",
      body: "Manage support tickets, SLAs and knowledge resources while maintaining a complete audit trail.",
    },
  ],
  steps: {
    eyebrow: "How it works",
    headline: "From profile to payment.",
    body: "Everything a working creator needs between being discovered and being paid, in one place.",
    items: [
      {
        title: "Build your profile",
        body: "Connect your channels and publish a media kit with rates, audience and portfolio.",
      },
      {
        title: "Get matched",
        body: "Receive invitations matched to your niche, market and audience rather than mass outreach.",
      },
      {
        title: "Agree terms",
        body: "Review the brief, deliverables and fee, then contract with the terms recorded.",
      },
      {
        title: "Produce the work",
        body: "Develop concept notes and upload deliverables against clear deadlines.",
      },
      {
        title: "Publish and track",
        body: "Post to your channels and watch performance come back into your dashboard.",
      },
      {
        title: "Get paid",
        body: "Approved work moves to invoice and wallet with payment status you can see.",
      },
    ],
  },
  deepDive: {
    eyebrow: "Your audience, understood",
    headline: "Know your worth\nbefore you negotiate.",
    body: "Your rate should reflect what your audience actually does, not just how many of them there are. InMind turns your channel data into evidence you can put in front of a brand.",
    points: [
      "Audience quality, location and demographics across every connected channel.",
      "Engagement depth and content performance history in one view.",
      "A portfolio of past collaborations that grows more valuable with each campaign.",
      "Growth insights that show which formats and topics are working for you.",
    ],
    image: {
      src: "/images/marketing/hero/creator-phone.webp",
      alt: "Creator reviewing performance on a phone",
    },
  },
};

export const brandsPage: MarketingPageConfig = {
  title: "For Brands",
  description:
    "Intelligence and infrastructure to run creator marketing from discovery through measurement.",
  hero: {
    eyebrow: "For brands",
    headline: "Find creators.\nBuild relationships.\nProve the impact.",
    body: "InMind gives modern marketing teams the intelligence and infrastructure to manage creator marketing from discovery through to measurement.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    secondaryCta: { label: "Explore platform", href: "/platform" },
    image: {
      src: "/images/marketing/brands/team-01.webp",
      alt: "Brand team collaborating",
    },
  },
  features: [
    {
      title: "Intelligent discovery",
      body: "Search a verified creator directory with Match Score™ rankings tailored to your brief.",
    },
    {
      title: "Campaign desks",
      body: "Brief and recruit creators, approve content, publish and report without switching between tools.",
    },
    {
      title: "Creator CRM",
      body: "Keep a complete history of the creators and partners you've worked with, so every relationship becomes more valuable over time.",
    },
    {
      title: "Approvals",
      body: "Review creative content with change tracking, approvals and governance controls.",
    },
    {
      title: "Social intelligence",
      body: "Monitor live performance after publishing, including views, engagement rate and tracked actions.",
    },
    {
      title: "Attribution & reports",
      body: "Export scorecards that connect campaign exposure to measurable outcomes.",
    },
  ],
  steps: {
    eyebrow: "How it works",
    headline: "Brief in. Results out.",
    body: "The full campaign lifecycle runs in one workspace, so nothing falls into a spreadsheet or a side conversation.",
    items: [
      {
        title: "Discovery",
        body: "Set objectives, timelines, budget and the success metrics the campaign will be judged on.",
      },
      {
        title: "Onboarding",
        body: "Match Score ranks creators against the brief. Shortlist, invite and agree terms.",
      },
      {
        title: "Briefing",
        body: "Deliverable briefs, product immersion and logistics issued in one place.",
      },
      {
        title: "Production",
        body: "Creators develop concept notes and your team reviews them in a single queue.",
      },
      {
        title: "Approvals",
        body: "Role-based sign-off with change notes and a full audit trail.",
      },
      {
        title: "Performance",
        body: "Track published content, validate quality and report results against the original metrics.",
      },
    ],
  },
  deepDive: {
    eyebrow: "Proving the spend",
    headline: "Connect creator work\nto business outcomes.",
    body: "Engagement is a signal, not a result. InMind is built so you can defend creator budget in the same conversation as paid media.",
    points: [
      "Trackable links, promo codes and QR journeys attached to each creator.",
      "Cost efficiency benchmarked against your paid social baseline.",
      "Creator scorecards that carry into the next shortlist instead of starting from zero.",
      "Exportable reports your finance and leadership teams can actually read.",
    ],
    image: {
      src: "/images/marketing/campaigns/studio-lights.webp",
      alt: "Campaign production environment",
    },
  },
};

export const agenciesPage: MarketingPageConfig = {
  title: "For Agencies",
  description:
    "Manage talent, clients, campaigns, approvals, reporting and revenue in one OS.",
  hero: {
    eyebrow: "For agencies",
    headline: "Run your creator business\nfrom one operating system.",
    body: "Manage talent, clients, campaigns, approvals, reporting and revenue without having to piece together multiple tools.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/agencies/studio-01.webp",
      alt: "Agency workspace",
    },
  },
  features: [
    {
      title: "Multi-client book",
      body: "Manage clients, campaigns and commissions across your entire portfolio.",
    },
    {
      title: "Talent roster & pools",
      body: "Manage your talent roster with insights that inform your next brief.",
    },
    {
      title: "Client campaigns",
      body: "Manage campaigns on behalf of brands with clear ownership and accountability.",
    },
    {
      title: "Approvals & reporting",
      body: "Create client-ready reports with attribution, performance data and scorecards.",
    },
    {
      title: "Finance & commissions",
      body: "Track escrow balances and commission pipelines in one place.",
    },
    {
      title: "Mission Control",
      body: "See what needs attention across your entire portfolio, rather than relying on vanity dashboards.",
    },
  ],
  steps: {
    eyebrow: "How it works",
    headline: "Run every client\nfrom one book.",
    body: "Built for teams running several brands and a managed roster at the same time, without a separate process for each.",
    items: [
      {
        title: "Set up the client",
        body: "Create the client workspace with its own campaigns, permissions and reporting line.",
      },
      {
        title: "Build the roster",
        body: "Maintain managed talent and creator pools ready to match against incoming briefs.",
      },
      {
        title: "Staff the brief",
        body: "Shortlist from your roster and the wider directory, then invite and contract.",
      },
      {
        title: "Operate the campaign",
        body: "Briefing, production and approvals on behalf of the brand with clear ownership.",
      },
      {
        title: "Report to the client",
        body: "Client-ready scorecards and attribution without rebuilding a deck each time.",
      },
      {
        title: "Settle commissions",
        body: "Escrow visibility and the commission pipeline tracked alongside delivery.",
      },
    ],
  },
  deepDive: {
    eyebrow: "Margin and capacity",
    headline: "Scale the book\nwithout scaling the chaos.",
    body: "Agency growth usually means more coordination overhead per campaign. Structured operations are what break that link.",
    points: [
      "One view across every client, campaign and creator commitment.",
      "Standard briefing and approval flows that new staff can pick up quickly.",
      "Usage rights, contract terms and payment schedules tracked per creator.",
      "Relationship history that makes each subsequent brief faster to staff.",
    ],
    image: {
      src: "/images/marketing/agencies/studio-01.webp",
      alt: "Agency team at work",
    },
  },
};

export const resourcesPage: MarketingPageConfig = {
  title: "Resources",
  description: "Insights on the creator economy, campaigns and social intelligence.",
  hero: {
    eyebrow: "Resources",
    headline: "Understand what's shaping\nthe creator economy.",
    body: "Insights on culture, campaign strategy, social intelligence and product updates from the InMind team.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/editorial/camera-01.webp",
      alt: "Editorial photography",
    },
  },
  features: [
    { title: "Creator Economy", body: "Essays exploring the infrastructure and ideas shaping influence." },
    { title: "Campaign Strategy", body: "Campaign briefs, creator mix and measurement frameworks." },
    { title: "Social Intelligence", body: "Insights into platform signals, audience behaviour and emerging creative patterns." },
    { title: "Industry Reports", body: "Research and reports as they are released." },
    { title: "Product Updates", body: "The latest product updates and improvements from InMind." },
    { title: "Culture", body: "The people and moments shaping taste." },
  ],
};
