export type FaqItem = { q: string; a: string };

export const creatorsContent = {
  proof: {
    eyebrow: "Why creators stay",
    stats: [
      { value: "1 profile", label: "Replaces the PDF media kit you rebuild for every pitch" },
      { value: "6 channels", label: "Instagram, TikTok, YouTube, X, Facebook and LinkedIn in one view" },
      { value: "0 chasing", label: "Payment status visible from approved work to wallet" },
    ],
  },
  mediaKit: {
    eyebrow: "Your media kit",
    headline: "Stop rebuilding\nyour deck every pitch.",
    body: "Your profile is live, not a file. Connect your channels once and every brand sees current audience data, past work and the rates you set.",
    points: [
      "Rates you control, per platform and per deliverable.",
      "Audience split by location, age and interest, pulled from your channels.",
      "A portfolio of published work with the numbers attached.",
      "One link you can share anywhere, or keep private to invited brands.",
    ],
    card: {
      name: "Dennis Ombachi",
      handle: "@roamingchef",
      niche: "Culinary · Nairobi",
      avatar: "/avatars/dennis-ombachi.webp",
      rates: [
        { label: "TikTok video", value: "KES 180,000" },
        { label: "Instagram reel", value: "KES 150,000" },
        { label: "Story series", value: "KES 60,000" },
      ],
      audience: [
        { label: "Kenya", value: 62, color: "var(--im-violet)" },
        { label: "Tanzania", value: 14, color: "var(--im-blue)" },
        { label: "Uganda", value: 11, color: "#ff4fd8" },
        { label: "Other", value: 13, color: "#c7c7d1" },
      ],
    },
  },
  journey: {
    eyebrow: "How it works",
    headline: "From profile to payment.",
    body: "Everything a working creator needs between being discovered and being paid.",
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
  earnings: {
    eyebrow: "Getting paid",
    headline: "Know what is owed,\nand when it lands.",
    body: "The worst part of creator work is not the work. It is the invoice that goes quiet. Every campaign carries its payment state with it.",
    pipeline: [
      { label: "Paid out", value: 420, color: "var(--im-violet)" },
      { label: "Approved", value: 180, color: "var(--im-blue)" },
      { label: "In review", value: 95, color: "#ff4fd8" },
    ],
    notes: [
      "Escrow-backed campaigns show funds committed before you start producing.",
      "Invoices generate from approved deliverables, so the numbers already agree.",
      "Withholding tax handled correctly for Kenyan creators, with certificates issued.",
    ],
  },
  voices: {
    eyebrow: "Creator voices",
    headline: "Built with working creators,\nnot for a pitch deck.",
    quotes: [
      {
        quote:
          "I used to keep rates in my notes app and screenshots of my analytics in a folder. Now a brand sees all of it in one link.",
        name: "Dennis Ombachi",
        role: "Culinary · Nairobi",
        avatar: "/images/marketing/creators/dennis-ombachi.webp",
      },
      {
        quote:
          "The briefs are actually briefs. I know the deliverable, the deadline and the fee before I say yes.",
        name: "Bien Baraza",
        role: "Music · Nairobi",
        avatar: "/images/marketing/creators/bien-baraza.webp",
      },
      {
        quote:
          "Being able to point at last quarter's numbers changed how I negotiate. I stopped guessing my rate.",
        name: "Janet Mbugua",
        role: "Media · Nairobi",
        avatar: "/images/marketing/creators/janet-mbugua.webp",
      },
    ],
  },
  faq: [
    {
      q: "Does it cost anything to join as a creator?",
      a: "Creating a profile and receiving opportunities is free. Fees apply only on campaigns you accept and complete, and they are shown before you agree to anything.",
    },
    {
      q: "Do I have to give up my existing brand relationships?",
      a: "No. You can run existing partnerships exactly as you do today. Many creators add their current clients to the platform purely for the briefing and payment workflow.",
    },
    {
      q: "What data do brands see about my audience?",
      a: "Aggregate audience data from the channels you connect: location, age bands, interests and engagement quality. Brands never see your follower list or your direct messages.",
    },
    {
      q: "How quickly do I get paid?",
      a: "Payment is released against approved deliverables. For escrow-backed campaigns the funds are committed before production starts, so approval is the only step between finishing and being paid.",
    },
    {
      q: "Can I set different rates for different platforms?",
      a: "Yes. Rates are set per platform and per deliverable type, and you can adjust them at any time or quote a custom fee on a specific brief.",
    },
  ] as FaqItem[],
};

export const brandsContent = {
  outcomes: {
    eyebrow: "What teams are seeing",
    headline: "Creator marketing,\nheld to a media standard.",
    body: "Figures drawn from campaigns and research published in our resources library.",
    stats: [
      { value: "-28%", label: "CPM against standard paid display", meta: "FMCG TikTok test" },
      { value: "3.4x", label: "Higher video completion rate", meta: "FMCG TikTok test" },
      { value: "+38%", label: "Install rate against paid social", meta: "SHOWAPP launch wave" },
      { value: "3.2x", label: "Return on retainers vs one-off spikes", meta: "Africa 2026 report" },
    ],
  },
  lifecycle: {
    eyebrow: "The campaign lifecycle",
    headline: "Brief in. Results out.",
    body: "The full lifecycle runs in one workspace, so nothing falls into a spreadsheet or a side conversation.",
    stages: [
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
        title: "Publishing",
        body: "Content goes live and is monitored for compliance, engagement and performance.",
      },
      {
        title: "Performance",
        body: "Validate quality and report results against the metrics you set at the start.",
      },
    ],
  },
  shortlist: {
    eyebrow: "Discovery",
    headline: "A shortlist you can\ndefend in the room.",
    body: "Match Score ranks creators against the actual brief: audience location and demographics, category credibility, engagement quality and brand safety. Not follower count.",
    query: "Kenyan food creators with a Gen Z audience and clean brand safety",
    results: [
      {
        name: "Dennis Ombachi",
        meta: "Culinary · Nairobi · 1.6M",
        score: 95,
        avatar: "/avatars/dennis-ombachi.webp",
      },
      {
        name: "Bien Baraza",
        meta: "Music · Nairobi · 1.2M",
        score: 91,
        avatar: "/avatars/bien-baraza.webp",
      },
      {
        name: "Nyashinski",
        meta: "Music · Nairobi · 870K",
        score: 88,
        avatar: "/avatars/nyashinski.webp",
      },
      {
        name: "Janet Mbugua",
        meta: "Media · Nairobi · 1.3M",
        score: 84,
        avatar: "/avatars/janet-mbugua.webp",
      },
    ],
    signals: [
      "Audience location and age against your target market",
      "Bot and inactive follower ratio",
      "Engagement depth, not just engagement rate",
      "Category credibility and past brand work",
      "Brand safety review of prior content",
    ],
  },
  comparison: {
    eyebrow: "Making the case",
    headline: "How creator budget\nearns its place.",
    body: "Creator spend competes with paid media for the same budget line. These are the differences worth putting in the deck.",
    rows: [
      {
        dimension: "Trust",
        paid: "Interruptive, filtered out by habit",
        creator: "Peer recommendation from a known voice",
      },
      {
        dimension: "Creative volume",
        paid: "Few assets, high production cost",
        creator: "Many native assets, reusable in paid",
      },
      {
        dimension: "Targeting",
        paid: "Platform audience segments",
        creator: "Communities already gathered around a topic",
      },
      {
        dimension: "Measurement",
        paid: "Mature and standardised",
        creator: "Trackable when links, codes and QR are set up first",
      },
      {
        dimension: "Compounding value",
        paid: "Stops when spend stops",
        creator: "Relationship and content library carry forward",
      },
    ],
  },
  faq: [
    {
      q: "How is Match Score calculated?",
      a: "It weighs audience fit against your brief, engagement quality, category credibility, authenticity checks and brand safety review. Every score can be opened to see the factors behind it, so it is a starting point for judgement rather than a black box.",
    },
    {
      q: "Can we bring creators we already work with?",
      a: "Yes. Existing partners can be added to your workspace and managed through the same briefing, approval and payment flow, which is how most teams start.",
    },
    {
      q: "How does attribution actually work?",
      a: "Each creator gets trackable links, unique promo codes and QR destinations issued before the campaign starts. Conversions map back to the individual creator rather than to the channel as a whole.",
    },
    {
      q: "Who owns the content produced?",
      a: "Usage rights are agreed in the contract at the point of booking, including whether content can be reused in paid media. Those terms are recorded against the campaign so nobody has to reconstruct them later.",
    },
    {
      q: "Do you work outside Kenya?",
      a: "Yes. Campaigns run across East, West and Southern African markets, with mobile money and local checkout paths supported where they matter for conversion.",
    },
  ] as FaqItem[],
};

export const agenciesContent = {
  control: {
    eyebrow: "Mission control",
    headline: "Every client, every campaign,\none board.",
    body: "Agency work breaks down at the seams between clients. One view across the whole book means nothing is only in someone's inbox.",
    clients: [
      { name: "Brookside Dairybest", campaigns: 4, stage: "In production", progress: 68, tone: "accent" as const },
      { name: "SHOWAPP", campaigns: 2, stage: "Awaiting approval", progress: 82, tone: "warning" as const },
      { name: "Safiri Travel", campaigns: 3, stage: "Briefing", progress: 34, tone: "neutral" as const },
      { name: "Nuru Beauty", campaigns: 1, stage: "Reporting", progress: 96, tone: "success" as const },
    ],
    points: [
      "Client workspaces with their own permissions and reporting line.",
      "Delivery status across every campaign without a status call.",
      "Approvals routed to the right person on the client side.",
    ],
  },
  roster: {
    eyebrow: "Your roster",
    headline: "Talent you manage.\nTalent you can reach.",
    body: "Keep managed creators and the wider directory in the same place, so staffing a brief starts from people you already trust.",
    creators: [
      { name: "Dennis Ombachi", niche: "Culinary", src: "/avatars/dennis-ombachi.webp", managed: true },
      { name: "Bien Baraza", niche: "Music", src: "/avatars/bien-baraza.webp", managed: true },
      { name: "Nyashinski", niche: "Music", src: "/avatars/nyashinski.webp", managed: true },
      { name: "Larry Madowo", niche: "Journalism", src: "/avatars/larry-madowo.webp", managed: false },
      { name: "Janet Mbugua", niche: "Media", src: "/avatars/janet-mbugua.webp", managed: true },
      { name: "Faith Kipyegon", niche: "Athletics", src: "/avatars/faith-kipyegon.webp", managed: false },
      { name: "Eliud Kipchoge", niche: "Athletics", src: "/avatars/eliud-kipchoge.webp", managed: false },
      { name: "Savara", niche: "Music", src: "/avatars/savara.webp", managed: true },
    ],
    pools: ["Food & beverage", "Beauty", "Tech & gadgets", "Parenting", "Sport", "Music"],
  },
  commissions: {
    eyebrow: "Revenue",
    headline: "See the margin\nbefore the invoice.",
    body: "Commission, creator fees and production costs tracked against each campaign, so profitability is visible while the work is still moving.",
    split: [
      { label: "Creator fees", value: 62, color: "var(--im-blue)" },
      { label: "Agency commission", value: 26, color: "var(--im-violet)" },
      { label: "Production", value: 12, color: "#ff4fd8" },
    ],
    points: [
      "Commission rates set per client or per campaign.",
      "Escrow visibility so you know funds are committed before production.",
      "Creator payouts and agency revenue reconciled against the same record.",
    ],
  },
  workflow: {
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
  faq: [
    {
      q: "Can we white-label reporting for our clients?",
      a: "Yes. Client reports carry your agency identity, and client users only ever see the workspace and campaigns you give them access to.",
    },
    {
      q: "How are permissions handled across clients?",
      a: "Each client workspace is separate. Your team can be given access across your portfolio, while client-side users are scoped to their own campaigns, approvals and reports.",
    },
    {
      q: "Does this replace our talent management?",
      a: "No, it supports it. Managed creators sit in your roster with their history, rates and performance attached, and the wider directory is there when a brief needs someone you do not represent.",
    },
    {
      q: "How do commissions work?",
      a: "Commission is configured per client or per campaign and tracked against creator fees and production costs, so margin is visible during delivery rather than at reconciliation.",
    },
    {
      q: "What if a client wants to run campaigns directly?",
      a: "They can. Brand workspaces and agency workspaces use the same underlying campaign model, so work can move between them without being rebuilt.",
    },
  ] as FaqItem[],
};
