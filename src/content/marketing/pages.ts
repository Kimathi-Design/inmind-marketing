import type { MarketingPageConfig } from "@/components/marketing/MarketingStoryPage";

export const creatorsPage: MarketingPageConfig = {
  title: "For Creators",
  description:
    "Turn your audience, content and reputation into a professional creator identity brands can understand.",
  hero: {
    eyebrow: "For creators",
    headline: "Your creator career.\nOne place to grow it.",
    body: "Turn your audience, content and reputation into a professional creator identity brands can understand.",
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
      body: "Understand what performs across the channels you connect.",
    },
    {
      title: "Brand opportunities",
      body: "Invites matched to your niche, markets and audience, not noise.",
    },
    {
      title: "Campaign workspace",
      body: "Briefs, deliverables, deadlines and publishing in one desk.",
    },
    {
      title: "Earnings & invoices",
      body: "Clear payment status from approved work to wallet.",
    },
    {
      title: "Support Desk",
      body: "Tickets, SLAs and a knowledge base, without losing the audit trail.",
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
    body: "Your rate should reflect what your audience actually does, not just how many of them there are. Inmind turns your channel data into evidence you can put in front of a brand.",
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
    body: "Inmind gives modern marketing teams the intelligence and infrastructure to run creator marketing from discovery through measurement.",
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
      body: "Verified directory with Match Score™ against your brief.",
    },
    {
      title: "Campaign desks",
      body: "Brief, recruit, approve, publish and report without tool-switching.",
    },
    {
      title: "Creator CRM",
      body: "Partners you've worked with, history that compounds.",
    },
    {
      title: "Approvals",
      body: "Creative QA with change notes and governance.",
    },
    {
      title: "Social intelligence",
      body: "Live performance after publish: views, ER, tracked actions.",
    },
    {
      title: "Attribution & reports",
      body: "Exportable scorecards connecting exposure to outcomes.",
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
    body: "Engagement is a signal, not a result. Inmind is built so you can defend creator budget in the same conversation as paid media.",
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
    body: "Manage talent, clients, campaigns, approvals, reporting and revenue without stitching together five different tools.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/agencies/studio-01.webp",
      alt: "Agency workspace",
    },
  },
  features: [
    {
      title: "Multi-client book",
      body: "Clients, campaigns and commissions across your entire roster.",
    },
    {
      title: "Talent roster & pools",
      body: "Managed talent with intelligence for the next brief.",
    },
    {
      title: "Client campaigns",
      body: "Operate on behalf of brands with clear ownership.",
    },
    {
      title: "Approvals & reporting",
      body: "Client-ready reports with attribution and scorecards.",
    },
    {
      title: "Finance & commissions",
      body: "Escrow visibility and commission pipeline in one place.",
    },
    {
      title: "Mission Control",
      body: "What to do next across the book, not vanity dashboards.",
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
    body: "Notes on culture, campaign strategy, social intelligence and product updates from the Inmind team.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/editorial/camera-01.webp",
      alt: "Editorial photography",
    },
  },
  features: [
    { title: "Creator Economy", body: "Essays on infrastructure and influence." },
    { title: "Campaign Strategy", body: "Briefs, mix and measurement frameworks." },
    { title: "Social Intelligence", body: "Platform signals and creative patterns." },
    { title: "Industry Reports", body: "Research drops as they ship." },
    { title: "Product Updates", body: "What's new in Inmind OS." },
    { title: "Culture", body: "The people and moments shaping taste." },
  ],
};
