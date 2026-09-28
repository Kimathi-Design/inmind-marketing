/** Feature flags for roadmap surfaces. Hide until ready. */
export const featureFlags = {
  aiInsights: true,
  commerce: false,
  creatorCRM: true,
  socialLiveSync: false,
} as const;

export const home = {
  hero: {
    eyebrow: "The creator economy, connected.",
    headlineLines: ["Influence,", "intelligently", "managed."],
    description:
      "InMind brings creators, brands and agencies into one intelligent platform: from discovery and campaign management to live social performance and measurable growth.",
    primaryCta: { label: "Explore InMind", href: "/platform" },
    secondaryCta: { label: "Start a Campaign", href: "/contact" },
    trust: "Built for creators. Designed for brands. Powerful for agencies.",
  },
  partners: {
    eyebrow: "Partners & clients",
    headline: "Trusted by the teams\nshaping culture.",
    body: "From global agency groups to iconic consumer brands, InMind powers creator programmes that need to move fast and prove outcomes.",
    logos: [
      {
        name: "WPP Scangroup",
        src: "/images/marketing/partners/wpp-scangroup.png",
        scale: "xl" as const,
      },
      {
        name: "Safaricom",
        src: "/images/marketing/partners/safaricom.png",
        scale: "sm" as const,
      },
      {
        name: "ShowApp",
        src: "/images/marketing/partners/showapp.png",
        scale: "sm" as const,
      },
      {
        name: "Brookside",
        src: "/images/marketing/partners/brookside.png",
        scale: "xl" as const,
      },
      {
        name: "Fanta",
        src: "/images/marketing/partners/fanta.png",
      },
      {
        name: "Coca-Cola",
        src: "/images/marketing/partners/coca-cola.png",
        scale: "sm" as const,
      },
      {
        name: "Firmbridge",
        src: "/images/marketing/partners/firmbridge.png",
      },
      {
        name: "WePlay Arcade",
        src: "/images/marketing/partners/weplay-arcade.png",
        scale: "xs" as const,
      },
      {
        name: "MediaPal",
        src: "/images/marketing/partners/mediapal.png",
      },
    ] as const,
  },
  proof: {
    eyebrow: "Proof, not promises",
    headline: "Numbers teams can defend.",
    body: "Drawn from live campaigns and published research across the markets we operate in.",
    stats: [
      {
        value: "+38%",
        label: "Install rate vs paid social",
        meta: "SHOWAPP launch wave",
      },
      {
        value: "3.2×",
        label: "Return on retainers vs one-off spikes",
        meta: "Africa 2026 report",
      },
      {
        value: "6",
        label: "Platforms in one performance view",
        meta: "Instagram to LinkedIn",
      },
      {
        value: "1",
        label: "Audit trail from brief to payout",
        meta: "Every campaign on InMind",
      },
    ],
  },
  stories: {
    eyebrow: "From the field",
    headline: "Campaigns that moved the number.",
    body: "Short stories from brands and creators who ran the work on InMind.",
    cta: { label: "All case studies", href: "/resources/case-studies" },
    items: [
      {
        brand: "SHOWAPP",
        handle: "@showapp",
        title: "A creator launch wave that beat paid social on installs.",
        result: "+38% install rate",
        image: "/images/marketing/resources/showapp-launch-creator-wave.webp",
        href: "/resources/showapp-launch-creator-wave",
      },
      {
        brand: "Brookside",
        handle: "Family programme",
        title: "Always-on creators who built household familiarity, not one-off spikes.",
        result: "Ambassador model",
        image: "/images/marketing/resources/brookside-family-creator-program.webp",
        href: "/resources/brookside-family-creator-program",
      },
      {
        brand: "FMCG",
        handle: "TikTok efficiency",
        title: "Reach efficiency that held up against standard paid display.",
        result: "-28% CPM",
        image: "/images/marketing/resources/fmcg-tiktok-reach-efficiency.webp",
        href: "/resources/fmcg-tiktok-reach-efficiency",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    headline: "What teams ask before they start.",
    tabs: [
      {
        id: "brands",
        label: "Brands",
        items: [
          {
            q: "Is InMind a marketplace or an operating system?",
            a: "An operating system. You run discovery, campaigns, social monitoring and measurement in one place, whether you work with new creators or existing partners.",
          },
          {
            q: "Do I need to bring my own creators?",
            a: "No. You can discover and shortlist from the InMind directory, invite creators you already work with, or do both on the same campaign.",
          },
          {
            q: "How do you measure ROI?",
            a: "Trackable links, promo codes and live performance sit inside the campaign desk. You see reach, engagement and attributed actions while the campaign is still running.",
          },
          {
            q: "How do we get started?",
            a: "Tell us the objective, market and budget. We shape the strategy, recommend the talent mix and onboard your team on the platform.",
          },
        ],
      },
      {
        id: "creators",
        label: "Creators",
        items: [
          {
            q: "Does it cost anything to join as a creator?",
            a: "Creating a profile and receiving opportunities is free. Fees apply only on campaigns you accept and complete, and they are shown before you agree.",
          },
          {
            q: "Do I have to give up existing brand relationships?",
            a: "No. Many creators add current clients purely for briefing and payment. Your existing partnerships stay yours.",
          },
          {
            q: "How quickly do I get paid?",
            a: "Payment releases against approved deliverables. On escrow-backed campaigns, funds are committed before production, so approval is the step between finishing and being paid.",
          },
          {
            q: "What data do brands see about my audience?",
            a: "Aggregate audience data from channels you connect: location, age bands, interests and engagement quality. Brands never see your follower list or DMs.",
          },
        ],
      },
      {
        id: "agencies",
        label: "Agencies",
        items: [
          {
            q: "Can we run multiple client books in one workspace?",
            a: "Yes. Each client keeps its own campaigns, creators and reporting, while your team works from a single operating layer.",
          },
          {
            q: "Does InMind replace our project tools?",
            a: "For creator campaigns, yes for briefs, deliverables, approvals and publishing. You do not need to duplicate that work in a separate project tracker.",
          },
          {
            q: "How do commissions and payouts work?",
            a: "Campaign commercial terms, creator fees and payout status stay visible on the desk, so finance and account teams share one source of truth.",
          },
          {
            q: "Can we use our managed roster and the open directory?",
            a: "Yes. Managed talent and InMind directory creators can sit on the same campaign with the same briefing and approval flow.",
          },
        ],
      },
    ],
  },
  trustStrip: {
    eyebrow: "Platforms",
    headline: "Built for the people\nshaping culture.",
    body: "Performance, publishing and proof across the platforms that matter most: Instagram, TikTok, YouTube, X and Meta, side by side.",
    platforms: [
      { name: "Instagram", icon: "Instagram" },
      { name: "TikTok", icon: "TikTok" },
      { name: "YouTube", icon: "YouTube" },
      { name: "X", icon: "X" },
      { name: "Meta", icon: "Facebook" },
    ] as const,
  },
  manifesto: {
    headline: "Creator marketing has evolved.\nThe tools haven't.",
    body: [
      "Discovery lives in one tool, campaigns in another, and performance is spread across multiple social platforms. Conversations are buried in email and spreadsheets.",
      "InMind brings the entire creator relationship into one intelligent operating system.",
    ],
    words: [
      { n: "01", label: "Discover" },
      { n: "02", label: "Manage" },
      { n: "03", label: "Measure" },
      { n: "04", label: "Grow" },
    ] as const,
  },
  platform: {
    eyebrow: "One operating system",
    headline: "Everything creator marketing needs,\nfinally connected.",
    body: "Discover the right people. Build campaigns. Collaborate on content. Track every post. Understand what worked, then use those insights to make the next campaign smarter.",
    modules: [
      {
        id: "01",
        title: "Discover",
        copy: "Audience fit, location, category and brand safety, all ranked against your brief.",
        image: "/images/marketing/platform/discover.webp",
      },
      {
        id: "02",
        title: "Activate",
        copy: "Invite, contract and brief creators without leaving the campaign desk.",
        image: "/images/marketing/platform/activate.webp",
      },
      {
        id: "03",
        title: "Manage",
        copy: "Deliverables, approvals and publishing with a complete audit trail.",
        image: "/images/marketing/platform/manage.webp",
      },
      {
        id: "04",
        title: "Measure",
        copy: "Live performance and attribution that feeds the next shortlist.",
        image: "/images/marketing/platform/measure.webp",
      },
    ],
  },
  discovery: {
    eyebrow: "Creator discovery",
    headline: "Find the right creator.\nNot just the biggest one.",
    body: "Search creators by audience, category, location, platform, performance and brand fit. InMind turns creator discovery into intelligent matching, ranked for outcomes, not vanity reach.",
    detail:
      "Describe the brief in plain language, open the Match Score™ signals behind every recommendation, then move shortlisted talent straight into the campaign desk.",
    query: "Find Kenyan lifestyle creators with strong Gen Z audiences.",
    points: [
      "Audience fit",
      "Authenticity",
      "Engagement quality",
      "Brand alignment",
      "Past performance",
    ],
    cta: { label: "Explore Creator Discovery", href: "/creator-discovery" },
  },
  campaigns: {
    eyebrow: "Campaigns",
    headline: "From brief to results,\nthrough one continuous workflow.",
    body: "Plan campaigns, recruit creators, manage deliverables, review content, coordinate publishing and measure performance without leaving InMind.",
    stages: [
      {
        label: "Discovery",
        copy: "Receive campaign brief and objectives, timelines, budget and success metrics.",
        image: "/images/marketing/campaigns/stages/01-discovery.webp",
      },
      {
        label: "Onboarding",
        copy: "Match Score™ ranks creators against the brief. Shortlist, invite, negotiate.",
        image: "/images/marketing/campaigns/stages/02-onboarding.webp",
      },
      {
        label: "Briefing",
        copy: "Deliverable briefs, immersion and logistics in one place.",
        image: "/images/marketing/campaigns/stages/03-briefing.webp",
      },
      {
        label: "Production",
        copy: "Creators develop concept notes and both agencies and brands review in one queue.",
        image: "/images/marketing/campaigns/stages/04-production.webp",
      },
      {
        label: "Approvals",
        copy: "Role-based approvals with change notes and a full audit trail.",
        image: "/images/marketing/campaigns/stages/05-approvals.webp",
      },
      {
        label: "Publishing",
        copy: "Content is published and monitored for compliance, engagement, and performance.",
        image: "/images/marketing/campaigns/stages/06-publishing.webp",
      },
      {
        label: "Performance",
        copy: "Measure performance, validate quality, and report results.",
        image: "/images/marketing/campaigns/stages/07-performance.webp",
      },
    ],
  },
  social: {
    eyebrow: "Live social intelligence",
    headline: "See what happens\nafter you publish.",
    body: "Connect social channels and watch campaign content perform from one place. Follow posts, creators, engagement and audience response as the campaign unfolds.",
    platforms: ["Instagram", "TikTok", "YouTube", "X", "Facebook", "LinkedIn"],
  },
  ai: {
    eyebrow: "InMind Intelligence",
    headline: "Data tells you what happened.\nInMind helps you decide what to do next.",
    body: "InMind AI connects creator, campaign and audience signals to surface the decisions that matter: from who to recruit to where to shift budget.",
    insights: [
      "Dennis's content is outperforming the campaign average by 41%.",
      "Micro-creators are generating 2.3× higher engagement.",
      "Shift 15% of the remaining budget towards TikTok.",
      "12 emerging creators match this campaign.",
    ],
    cta: { label: "Meet InMind AI", href: "/ai" },
  },
  audiences: {
    eyebrow: "Where you fit",
    headline: "One operating layer.\nBuilt for how you work.",
    body: "The platform is shared. What you need from it is not. Start with the path that matches your side of the campaign.",
    paths: [
      {
        label: "Creators",
        blurb:
          "Build a professional profile, find the right collaborations and get paid on time.",
        href: "/creators",
        img: "/images/marketing/creators/dennis-ombachi.webp",
        objectPosition: "center 18%",
      },
      {
        label: "Brands",
        blurb:
          "Find the right creators, run the campaign in one place and prove the impact.",
        href: "/brands",
        img: "/images/marketing/brands/team-01.webp",
      },
      {
        label: "Agencies",
        blurb:
          "Manage clients, roster, delivery and commissions from a single book.",
        href: "/agencies",
        img: "/images/marketing/agencies/studio-01.webp",
      },
    ],
  },
  measurement: {
    eyebrow: "Measurement",
    headline: "Turn performance data\ninto better decisions.",
    body: "Understand creators, content, campaigns and audiences through analytics designed to drive action, not simply produce reports.",
  },
  crm: {
    headline: "The best creator relationships\nshouldn't start from zero.",
    body: "InMind remembers every collaboration: campaign history, performance, communication, preferences and relationship strength, so your creator network gets more valuable over time.",
  },
  ecosystem: {
    headline: "One connected ecosystem for creators, brands and agencies.",
    nodes: [
      "Campaigns",
      "Social",
      "Analytics",
      "AI",
      "Payments",
      "CRM",
      "Community",
    ],
  },
  resources: {
    headline: "Understand what's shaping\nthe creator economy.",
    categories: [
      "Creator Economy",
      "Culture",
      "Campaign Strategy",
      "Social Intelligence",
      "Industry Reports",
      "Product Updates",
    ],
    cta: { label: "Explore Insights", href: "/resources" },
  },
  finalCta: {
    headline: "Ready to work the way\ncreator marketing should.",
    body: "Pick the path that matches your side of the campaign. Same platform. Different starting point.",
    paths: [
      {
        id: "creator",
        eyebrow: "Creators",
        title: "Get discovered. Get briefed. Get paid.",
        body: "Build a live profile, join campaigns that fit, and track payouts without chasing inboxes.",
        primary: { label: "Join as Creator", href: "/contact" },
        secondary: { label: "How it works for creators", href: "/creators" },
      },
      {
        id: "brand",
        eyebrow: "Brands & agencies",
        title: "Find talent. Run the desk. Prove the lift.",
        body: "Shortlist with Match Score™, manage the full campaign, and see performance while content is live.",
        primary: { label: "Book a demo", href: "/contact" },
        secondary: { label: "Explore for brands", href: "/brands" },
      },
    ],
  },
} as const;

export const creatorWall = [
  {
    name: "Dennis Ombachi",
    niche: "Culinary · Nairobi",
    metric: "1.6M IG",
    er: "4.2% ER",
    src: "/images/marketing/creators/dennis-ombachi.webp",
  },
  {
    name: "Lupita Nyong'o",
    niche: "Film · Culture",
    metric: "11.3M IG",
    er: "1.8% ER",
    src: "/images/marketing/creators/lupita-nyongo.webp",
  },
  {
    name: "Eliud Kipchoge",
    niche: "Athletics · Eldoret",
    metric: "3.2M IG",
    er: "4.1% ER",
    src: "/images/marketing/creators/eliud-kipchoge.webp",
  },
  {
    name: "Faith Kipyegon",
    niche: "Athletics · Eldoret",
    metric: "310K IG",
    er: "5.4% ER",
    src: "/images/marketing/creators/faith-kipyegon.webp",
  },
  {
    name: "Bien Baraza",
    niche: "Music · Nairobi",
    metric: "1.2M IG",
    er: "3.8% ER",
    src: "/images/marketing/creators/bien-baraza.webp",
  },
  {
    name: "Nyashinski",
    niche: "Music · Nairobi",
    metric: "870K IG",
    er: "4.6% ER",
    src: "/images/marketing/creators/nyashinski.webp",
  },
  {
    name: "Larry Madowo",
    niche: "Journalism · Global",
    metric: "2.4M IG",
    er: "3.7% ER",
    src: "/images/marketing/creators/larry-madowo.webp",
  },
  {
    name: "Janet Mbugua",
    niche: "Media · Nairobi",
    metric: "1.3M IG",
    er: "3.2% ER",
    src: "/images/marketing/creators/janet-mbugua.webp",
  },
  {
    name: "Savara",
    niche: "Music · Nairobi",
    metric: "480K IG",
    er: "5.1% ER",
    src: "/images/marketing/creators/savara.webp",
  },
] as const;
