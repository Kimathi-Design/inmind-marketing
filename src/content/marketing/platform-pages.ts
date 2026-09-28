import type { MarketingPageConfig } from "@/components/marketing/MarketingStoryPage";
import type { FaqItem } from "@/content/marketing/audiences";

export type PlatformRichPage = MarketingPageConfig & {
  proof?: {
    eyebrow: string;
    stats: { value: string; label: string }[];
  };
  modules?: {
    label: string;
    href: string;
    description: string;
    image: string;
  }[];
  spotlight?: {
    eyebrow: string;
    headline: string;
    body: string;
    points: string[];
    image: { src: string; alt: string };
    reverse?: boolean;
  };
  workflow?: {
    eyebrow: string;
    headline: string;
    body?: string;
    items: { title: string; body: string }[];
  };
  outcomes?: {
    eyebrow: string;
    headline: string;
    body?: string;
    stats: { value: string; label: string; meta?: string }[];
  };
  insights?: {
    eyebrow: string;
    headline: string;
    body?: string;
    items: string[];
  };
  socialPosts?: {
    img: string;
    views: string;
    er: string;
    lift: string;
  }[];
  shortlist?: {
    eyebrow: string;
    headline: string;
    body: string;
    query: string;
    results: {
      name: string;
      meta: string;
      score: number;
      avatar: string;
    }[];
    signals: string[];
  };
  faq?: FaqItem[];
};

export const platformOverviewPage: PlatformRichPage = {
  title: "Platform",
  description:
    "InMind connects creator intelligence, campaign operations, social performance and AI in a single governed layer.",
  hero: {
    eyebrow: "Platform",
    headline: "Everything connected.\nOne operating layer.",
    body: "Creator intelligence, campaign operations, social performance and AI, connected, not bolted on. One system of record from brief to results.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    secondaryCta: { label: "Talk to us", href: "/contact" },
    image: {
      src: "/images/marketing/hero/team-collab.webp",
      alt: "Brand and creator teams collaborating",
    },
  },
  proof: {
    eyebrow: "One system",
    stats: [
      { value: "9", label: "Core modules in a single workspace" },
      { value: "6", label: "Social platforms in one performance view" },
      { value: "1", label: "Audit trail from brief to payout" },
    ],
  },
  modules: [
    {
      label: "Creator Discovery",
      href: "/creator-discovery",
      description: "Audience fit, Match Score™ and brand safety ranked for the brief.",
      image: "/images/marketing/platform/discover.webp",
    },
    {
      label: "Campaign Management",
      href: "/campaign-management",
      description: "Brief, recruit, produce, approve, publish and report in a single workflow.",
      image: "/images/marketing/campaigns/shoot-01.webp",
    },
    {
      label: "Analytics",
      href: "/analytics",
      description: "Live performance, benchmarks and ROI while campaigns are running.",
      image: "/images/marketing/platform/measure.webp",
    },
    {
      label: "Social Intelligence",
      href: "/social-intelligence",
      description: "Every post, every platform, monitored as content goes live.",
      image: "/images/marketing/hero/creator-phone.webp",
    },
    {
      label: "InMind AI",
      href: "/ai",
      description: "Practical next steps from creator, campaign and audience signals.",
      image: "/images/marketing/resources/influence-intelligence-trends-2026.webp",
    },
    {
      label: "Creator Intelligence",
      href: "/features",
      description: "Profiles, authenticity, CRM and collaboration in one graph.",
      image: "/images/marketing/creators/larry-madowo.webp",
    },
  ],
  spotlight: {
    eyebrow: "Why one layer",
    headline: "Stop stitching tools\ntogether every campaign.",
    body: "Most teams run discovery in one place, campaigns in another and performance in five platform dashboards. InMind replaces the patchwork.",
    points: [
      "One creator record shared across discovery, campaigns and CRM.",
      "Approvals, contracts and deliverables tied to the same campaign object.",
      "Social and paid performance feeding the same scorecard.",
      "AI recommendations grounded in your actual campaign history.",
    ],
    image: {
      src: "/images/marketing/campaigns/studio-lights.webp",
      alt: "Campaign production studio",
    },
  },
  workflow: {
    eyebrow: "How teams use it",
    headline: "Discover → Manage → Measure.",
    body: "The same lifecycle every marketing team runs, without switching tools at each stage.",
    items: [
      {
        title: "Discover",
        body: "Search, rank and shortlist creators against the brief with Match Score™.",
      },
      {
        title: "Activate",
        body: "Invite, contract and brief creators from the campaign workspace.",
      },
      {
        title: "Operate",
        body: "Production, approvals and publishing with a full audit trail.",
      },
      {
        title: "Measure",
        body: "Live social, attribution and ROI feeding the next shortlist.",
      },
    ],
  },
  features: [
    { title: "Creator Intelligence", body: "Profiles, audiences, scores and authenticity." },
    { title: "Campaign OS", body: "From brief to publish with role-based control." },
    { title: "Creator CRM", body: "Relationships that improve with every campaign." },
    { title: "Social Intelligence", body: "Posts and platforms in one performance view." },
    { title: "Analytics & attribution", body: "Exposure to visits, leads and sales signals." },
    { title: "InMind AI", body: "Practical next steps from live signals." },
  ],
  faq: [
    {
      q: "Is InMind a marketplace or an operating system?",
      a: "An operating system. You run your creator marketing workflow in InMind, discovery, campaigns, social monitoring and measurement, whether you work with new creators or existing partners.",
    },
    {
      q: "Can we bring creators we already work with?",
      a: "Yes. Existing partners can be added to your workspace and managed through the same briefing, approval and payment flow.",
    },
    {
      q: "Which platforms do you support?",
      a: "Instagram, TikTok, YouTube, X, Facebook and LinkedIn for social intelligence and performance monitoring.",
    },
  ],
};

export const discoveryPlatformPage: PlatformRichPage = {
  title: "Creator Discovery",
  description: "Find creators built for the brief. Audience fit over vanity reach.",
  hero: {
    eyebrow: "Creator discovery",
    headline: "Find creators built\nfor the brief.",
    body: "Use natural language search, advanced filters, audience matching, authenticity signals and rising talent discovery, all ranked against your campaign objectives, not follower count.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/platform/discover.webp",
      alt: "Creator discovery workspace",
    },
  },
  shortlist: {
    eyebrow: "Match Score™",
    headline: "A shortlist you can\ndefend in the room.",
    body: "Rank creators against the actual brief: audience location, category credibility, engagement quality and brand safety.",
    query: "Lifestyle creators with Gen Z audience and clean brand safety",
    results: [
      {
        name: "Dennis Ombachi",
        meta: "Culinary · Nairobi · 1.6M",
        score: 98,
        avatar: "/images/marketing/creators/dennis-ombachi.webp",
      },
      {
        name: "Bien Baraza",
        meta: "Music · Nairobi · 1.2M",
        score: 94,
        avatar: "/images/marketing/creators/bien-baraza.webp",
      },
      {
        name: "Janet Mbugua",
        meta: "Media · Nairobi · 1.3M",
        score: 91,
        avatar: "/images/marketing/creators/janet-mbugua.webp",
      },
      {
        name: "Nyashinski",
        meta: "Music · Nairobi · 870K",
        score: 88,
        avatar: "/images/marketing/creators/nyashinski.webp",
      },
    ],
    signals: [
      "Audience location and age vs target market",
      "Engagement depth, not just rate",
      "Category credibility",
      "Brand safety review",
      "Past campaign performance",
    ],
  },
  workflow: {
    eyebrow: "How it works",
    headline: "From query to\ninvited creators.",
    items: [
      {
        title: "Describe the audience",
        body: "Use natural language or filters for category, location, platform and tier.",
      },
      {
        title: "Review Match Score™",
        body: "See ranked creators with signals you can open and explain.",
      },
      {
        title: "Build your shortlist",
        body: "Save pools for the campaign or reuse across clients.",
      },
      {
        title: "Invite and contract",
        body: "Move selected creators into the campaign desk without re-entering data.",
      },
    ],
  },
  spotlight: {
    eyebrow: "Beyond followers",
    headline: "Audience fit beats\nvanity reach.",
    body: "The best creator for a brief is rarely the biggest. Discovery is built to surface fit, authenticity and performance potential.",
    points: [
      "Bot and inactive follower checks before you invite.",
      "Audience demographics pulled from connected channels.",
      "Category and brand-safety signals from prior content.",
      "Rising talent flagged for efficiency, not just scale.",
    ],
    image: {
      src: "/images/marketing/creators/lupita-nyongo.webp",
      alt: "Creator profile review",
    },
    reverse: true,
  },
  features: [
    { title: "Natural language search", body: "Describe your audience and get a ranked list of relevant creators." },
    { title: "Advanced filters", body: "Filter creators by category, location, platform, creator tier and brand safety." },
    { title: "Match Score™", body: "Match creators against your campaign objectives first." },
    { title: "Authenticity", body: "Evaluate creator quality and authenticity before you invite them." },
    { title: "Rising talent", body: "Discover emerging creators delivering strong engagement and performance." },
    { title: "Creator pools", body: "Create and save creator shortlists for future campaigns." },
  ],
  faq: [
    {
      q: "How is Match Score calculated?",
      a: "It weighs audience fit, engagement quality, category credibility, authenticity and brand safety, each factor visible so you can explain the ranking in a client meeting.",
    },
    {
      q: "Can agencies maintain separate pools per client?",
      a: "Yes. Shortlists and pools are scoped to client workspaces with their own permissions.",
    },
  ],
};

export const campaignsPlatformPage: PlatformRichPage = {
  title: "Campaign Management",
  description: "Every campaign, creator and moving part in one continuous workflow.",
  hero: {
    eyebrow: "Campaigns",
    headline: "Every campaign.\nEvery creator.\nEvery moving part.",
    body: "Create campaigns, brief creators, manage deliverables, approve content, coordinate publishing and measure performance, all without leaving InMind.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/campaigns/shoot-01.webp",
      alt: "Campaign production",
    },
  },
  proof: {
    eyebrow: "Campaign operations",
    stats: [
      { value: "7", label: "Stages from brief to results in one flow" },
      { value: "100%", label: "Audit trail on approvals and changes" },
      { value: "0", label: "Spreadsheets required for delivery tracking" },
    ],
  },
  workflow: {
    eyebrow: "Campaign lifecycle",
    headline: "Brief in. Results out.",
    body: "The full lifecycle runs in one workspace, nothing falls into email or a side thread.",
    items: [
      { title: "Discovery", body: "Objectives, budget and success metrics set upfront." },
      { title: "Onboarding", body: "Shortlist, invite and agree terms with creators." },
      { title: "Briefing", body: "Deliverables, immersion and logistics in one place." },
      { title: "Production", body: "Concept notes and uploads in a shared queue." },
      { title: "Approvals", body: "Role-based sign-off with change notes." },
      { title: "Publishing", body: "Go-live monitoring and compliance checks." },
      { title: "Performance", body: "Report against the metrics you set at the start." },
    ],
  },
  spotlight: {
    eyebrow: "Approvals & governance",
    headline: "Creative QA with\nan audit trail.",
    body: "Brand, legal and agency reviewers see the same queue. Every note, version and sign-off is recorded against the campaign.",
    points: [
      "Role-based approval chains per client or campaign.",
      "Change notes tied to each video frame or asset.",
      "Usage rights and contract terms on the same record.",
      "Publishing checklist before content goes live.",
    ],
    image: {
      src: "/images/marketing/campaigns/stages/05-approvals.webp",
      alt: "Content approval review",
    },
  },
  features: [
    { title: "Campaign creation", body: "Define objectives, target markets, platforms and KPIs." },
    { title: "Recruitment", body: "Invite creators, negotiate terms and manage participation." },
    { title: "Deliverables", body: "Manage briefs, deadlines and live performance metrics." },
    { title: "Content approval", body: "Review content with change notes and a complete audit trail." },
    { title: "Publishing", body: "Set up tracking links and promo codes for campaign measurement." },
    { title: "Reporting", body: "Generate scorecards, attribution reports and actionable campaign learnings." },
  ],
  faq: [
    {
      q: "Can multiple reviewers approve content?",
      a: "Yes. Approval chains are configurable by role, brand, agency, legal, with full history on every asset.",
    },
    {
      q: "Does this replace our project management tool?",
      a: "For creator campaigns, yes. Briefs, deliverables, approvals and publishing are native to InMind rather than duplicated in Asana or Monday.",
    },
  ],
};

export const analyticsPlatformPage: PlatformRichPage = {
  title: "Analytics",
  description: "Know what's working while it's still working.",
  hero: {
    eyebrow: "Analytics",
    headline: "Know what's working.\nWhile it's still working.",
    body: "Track live performance, compare creators, analyse content and audiences, benchmark campaigns, measure ROI and surface AI-powered insights designed to drive action, not decks you build after the campaign ends.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/platform/measure.webp",
      alt: "Live campaign analytics",
    },
  },
  outcomes: {
    eyebrow: "What teams measure",
    headline: "From engagement\nto business outcomes.",
    body: "Figures from campaigns run on InMind and published research.",
    stats: [
      { value: "-28%", label: "CPM vs paid display baseline", meta: "FMCG test" },
      { value: "3.4x", label: "Video completion vs paid social", meta: "FMCG test" },
      { value: "+38%", label: "Install rate vs paid channels", meta: "App launch" },
      { value: "3.2x", label: "Retainer ROI vs one-offs", meta: "Industry report" },
    ],
  },
  spotlight: {
    eyebrow: "Attribution",
    headline: "Connect creator work\nto revenue.",
    body: "Trackable links, promo codes and QR journeys issued before publish, so conversions map to individual creators.",
    points: [
      "Per-creator attribution, not just channel totals.",
      "Cost efficiency benchmarked against paid social.",
      "Scorecards that carry into the next shortlist.",
      "Exportable reports for finance and leadership.",
    ],
    image: {
      src: "/images/marketing/resources/measuring-creator-roi.webp",
      alt: "ROI measurement dashboard",
    },
    reverse: true,
  },
  features: [
    { title: "Live performance", body: "Track views, reach, engagement rate and tracked actions while campaigns are live." },
    { title: "Creator comparison", body: "Compare creator performance across your roster with clear scorecards." },
    { title: "Content analytics", body: "Understand which formats and narratives perform best." },
    { title: "Audience analytics", body: "Understand who actually saw and engaged with your content." },
    { title: "Campaign benchmarks", body: "Compare campaign flights and audience cohorts." },
    { title: "ROI & attribution", body: "Connect campaign exposure to measurable customer outcomes." },
  ],
  faq: [
    {
      q: "Can we compare creators within a campaign?",
      a: "Yes. Creator scorecards show relative performance on engagement, efficiency and attributed actions side by side.",
    },
    {
      q: "Do you integrate with our analytics stack?",
      a: "Campaign data exports to CSV and API. Attribution links integrate with common web analytics and mobile measurement partners.",
    },
  ],
};

export const socialPlatformPage: PlatformRichPage = {
  title: "Social Intelligence",
  description: "Every post. Every platform. One view.",
  hero: {
    eyebrow: "Social intelligence",
    headline: "See what happens\nafter you hit publish.",
    body: "Connect Instagram, TikTok, YouTube, Facebook, LinkedIn and X, then monitor campaign performance as it unfolds in a unified view across platforms.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/hero/creator-phone.webp",
      alt: "Creator publishing social content",
    },
  },
  socialPosts: [
    {
      img: "/portfolio/nairobi-dusk.webp",
      views: "1.2M",
      er: "8.4%",
      lift: "+42%",
    },
    {
      img: "/portfolio/beauty-glow.webp",
      views: "640K",
      er: "9.1%",
      lift: "+18%",
    },
    {
      img: "/portfolio/food-spread.webp",
      views: "890K",
      er: "7.6%",
      lift: "+27%",
    },
  ],
  spotlight: {
    eyebrow: "Unified view",
    headline: "Six platforms.\nOne scorecard.",
    body: "Stop logging into five apps to answer how the campaign is doing. Social intelligence aggregates live post performance in the campaign context.",
    points: [
      "Instagram, TikTok, YouTube, X, Facebook and LinkedIn.",
      "Normalized metrics for cross-platform comparison.",
      "Alerts when posts under- or over-perform expectations.",
      "Governed sync with consent and audit trails.",
    ],
    image: {
      src: "/images/marketing/campaigns/stages/06-publishing.webp",
      alt: "Content publishing and monitoring",
    },
  },
  features: [
    { title: "Instagram & TikTok", body: "Track reach, views, interactions and viewing behaviour." },
    { title: "YouTube", body: "Views, retention and channel performance." },
    { title: "X & LinkedIn", body: "Track conversations, engagement and link activity." },
    { title: "Facebook", body: "Track content performance across Meta platforms." },
    { title: "Unified metrics", body: "One unified view of performance across platforms." },
    { title: "Governance", body: "Manage permissions and consent with audit-ready data synchronisation." },
  ],
  faq: [
    {
      q: "Do creators need to connect their accounts?",
      a: "For campaign monitoring, creators authorise platform connections as part of onboarding. Permissions are scoped to campaign content.",
    },
    {
      q: "How quickly does data update?",
      a: "Live posts sync on a rolling basis, typically within hours of publish, varying by platform API.",
    },
  ],
};

export const aiPlatformPage: PlatformRichPage = {
  title: "InMind AI",
  description: "Practical intelligence for matching, planning and next actions.",
  hero: {
    eyebrow: "InMind AI",
    headline: "Data tells you what happened.\nInMind helps you decide what to do next.",
    body: "Not magic. Practical recommendations drawn from creator, campaign and audience signals, helping you decide who to recruit, where to shift budget and what to do next.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/resources/influence-intelligence-trends-2026.webp",
      alt: "InMind AI intelligence layer",
    },
  },
  insights: {
    eyebrow: "Live recommendations",
    headline: "Signals turned\ninto decisions.",
    body: "Examples of the kind of outputs InMind AI surfaces during an active campaign.",
    items: [
      "Dennis's content is outperforming the campaign average by 41%. Consider increasing his share of the budget.",
      "Micro-creators are generating 2.3× higher engagement on TikTok this campaign.",
      "Shift 15% of the remaining budget towards TikTok based on current performance.",
      "12 emerging creators match your brief but aren't on the current roster.",
      "Completion rate on Reels is 3.4× your paid social baseline, extend the format.",
      "Three creators haven't posted within the agreed window, send a reminder.",
    ],
  },
  spotlight: {
    eyebrow: "Grounded in your data",
    headline: "Recommendations\nyou can explain.",
    body: "Every AI output links back to campaign signals, not generic industry advice. You see the evidence before you act.",
    points: [
      "Creator matching ranked against your actual brief.",
      "Budget shift suggestions tied to live efficiency.",
      "Trend signals from your category and markets.",
      "Role-specific copilots for creators, brands and agencies.",
    ],
    image: {
      src: "/images/marketing/editorial/camera-01.webp",
      alt: "Intelligence and insights",
    },
    reverse: true,
  },
  features: [
    { title: "Creator matching", body: "Rank creators against your campaign brief." },
    { title: "Campaign planning", body: "Recommendations for campaign objectives, creator mix and participation." },
    { title: "Performance insights", body: "Identify what's outperforming and understand why it matters." },
    { title: "Predictive recommendations", body: "Recommend budget and content format adjustments while the campaign is live." },
    { title: "Trend intelligence", body: "Identify cultural and audience signals that can inform your next campaign brief." },
    { title: "Role copilots", body: "AI assistants tailored to creators, brands and agencies." },
  ],
  faq: [
    {
      q: "Is InMind AI a chatbot?",
      a: "It includes conversational copilots, but the core value is proactive recommendations surfaced in context, on the campaign desk, in discovery and in reporting.",
    },
    {
      q: "Does AI make decisions automatically?",
      a: "No. AI suggests; your team approves. Every recommendation is explainable and optional.",
    },
  ],
};

export const featuresPlatformPage: PlatformRichPage = {
  title: "Creator Intelligence",
  description: "Profiles, authenticity, CRM and collaboration for the full creator graph.",
  hero: {
    eyebrow: "Creator intelligence",
    headline: "Every creator.\nOne record.\nFull context.",
    body: "Verified profiles, audience analytics, Match Score™, CRM history, collaboration and payments: the intelligence layer everything else in InMind builds on.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    image: {
      src: "/images/marketing/creators/faith-kipyegon.webp",
      alt: "Creator intelligence profile",
    },
  },
  proof: {
    eyebrow: "The creator ecosystem",
    stats: [
      { value: "6", label: "Platforms per creator profile" },
      { value: "1", label: "CRM record across every collaboration" },
      { value: "∞", label: "History that compounds over time" },
    ],
  },
  spotlight: {
    eyebrow: "Creator CRM",
    headline: "Relationships that\nget smarter.",
    body: "Every campaign adds to the creator record: performance, preferences, rates and relationship strength, so the next brief starts ahead.",
    points: [
      "Collaboration timeline across every campaign together.",
      "Performance history attached to the profile.",
      "Rates, usage rights and preferences on record.",
      "Priority rebook signals for top performers.",
    ],
    image: {
      src: "/images/marketing/creators/dennis-ombachi.webp",
      alt: "Creator relationship management",
    },
  },
  workflow: {
    eyebrow: "What's included",
    headline: "Intelligence across\nthe lifecycle.",
    items: [
      { title: "Verified profiles", body: "Media kit, audience, rates and portfolio." },
      { title: "Authenticity checks", body: "Bot ratios and engagement quality." },
      { title: "Creator CRM", body: "History, notes and relationship scoring." },
      { title: "Collaboration", body: "Messages, briefs and deliverables in thread." },
      { title: "Payments visibility", body: "Escrow, invoices and payout status." },
    ],
  },
  features: [
    { title: "Creator Discovery", body: "Match Score™ and verified directory." },
    { title: "Campaign Management", body: "End-to-end desks for brands and agencies." },
    { title: "Approvals", body: "Creative QA with governance." },
    { title: "Live Analytics", body: "Performance designed for decisions." },
    { title: "Social Intelligence", body: "Cross-platform post monitoring." },
    { title: "InMind AI", body: "Next actions from live signals." },
  ],
  faq: [
    {
      q: "How is this different from Creator Discovery?",
      a: "Discovery is how you find and rank talent. Creator Intelligence is the full record: profile, CRM, collaboration and history that persists after the match.",
    },
    {
      q: "Can creators own their profile?",
      a: "Yes. Creators connect their channels, set rates and control what's visible to brands and agencies.",
    },
  ],
};
