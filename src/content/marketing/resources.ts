export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type ResourceKind = "case-study" | "insight" | "blog";

export type Resource = {
  slug: string;
  kind: ResourceKind;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
  featured?: boolean;
  stats?: { value: string; label: string }[];
  body: ArticleBlock[];
};

export const RESOURCE_COLLECTIONS: {
  kind: ResourceKind;
  slug: string;
  label: string;
  title: string;
  description: string;
}[] = [
  {
    kind: "insight",
    slug: "insights",
    label: "Insights",
    title: "Creator marketing intelligence and trends",
    description:
      "Short reads on audience quality, platform shifts and what high-performing creator teams are doing differently across Africa.",
  },
  {
    kind: "case-study",
    slug: "case-studies",
    label: "Case studies",
    title: "Campaigns, and what they actually returned",
    description:
      "How brands used creator strategy, structured operations and measurement to move installs, sentiment and cost efficiency.",
  },
  {
    kind: "blog",
    slug: "blog",
    label: "Blog",
    title: "The Inmind strategy series",
    description:
      "Long-form thinking on creator selection, brand fit, campaign operations and building trust that scales.",
  },
];

export const RESOURCES: Resource[] = [
  {
    slug: "influence-intelligence-trends-2026",
    kind: "insight",
    category: "Market trends",
    title: "Influence Intelligence Trends for 2026",
    excerpt:
      "What brands and agencies across global growth markets should watch in creator marketing this year.",
    readTime: "9 min read",
    date: "March 2026",
    image: "/images/marketing/resources/influence-intelligence-trends-2026.webp",
    tags: ["Trends", "Growth markets", "Intelligence"],
    featured: true,
    body: [
      {
        type: "p",
        text: "What brands and agencies across global growth markets should watch in creator marketing this year.",
      },
      { type: "h2", text: "A maturing market" },
      {
        type: "p",
        text: "Creator marketing is undergoing a fundamental transformation, transitioning from experimental ad-hoc budgets to highly structured, programmatic media channels. Modern marketing teams no longer view creators as a transactional PR tactic; instead, they treat them as a core component of their digital acquisition strategy.",
      },
      {
        type: "p",
        text: "In 2026, the brands achieving the highest ROI are those implementing unified operations platforms. By standardising creator agreements, briefing systems, and reporting interfaces, they reduce administrative friction and focus resources directly on scaling content that converts.",
      },
      { type: "h2", text: "Key developments to watch this year" },
      {
        type: "p",
        text: "Several cultural and technological shifts are redefining how campaigns are planned and optimised. Industry leaders are focusing on the following four pillars to ensure campaign efficiency and protect brand integrity:",
      },
      {
        type: "ul",
        items: [
          "Audience quality checks: moving away from vanity follower counts and filtering profiles for active, engaged human followers to eliminate bot traffic.",
          "Commerce-ready creator content: structuring videos and posts around direct, trackable conversion pathways such as link stickers, discount codes, and integrated store checkouts.",
          "Always-on ambassador networks: replacing one-off campaign bursts with 6-to-12-month retainers, allowing creators to build genuine, recurring brand familiarity over time.",
          "Cross-platform measurement frameworks: synthesising metrics across TikTok, Instagram, and YouTube into unified attribution dashboards to measure true omni-channel lift.",
        ],
      },
      { type: "h2", text: "The power of a single operating layer" },
      {
        type: "p",
        text: "The greatest efficiency gains are unlocked when creator strategy, campaign execution, and performance attribution work in unison under a single operating layer. Historically, teams operated in silos: planners isolated from talent managers, who were in turn isolated from analytics teams. Connecting these disciplines in real time allows brands to instantly double down on high-performing creators while rotating underperforming ones before budget is wasted.",
      },
    ],
  },
  {
    slug: "state-of-creator-marketing-africa-2026",
    kind: "insight",
    category: "Market report",
    title: "State of Creator Marketing in Africa 2026",
    excerpt:
      "Market snapshot: budgets, platform mix, measurement maturity and where brands are investing next.",
    readTime: "18 min read",
    date: "March 2026",
    image: "/images/marketing/resources/state-of-creator-marketing-africa-2026.webp",
    tags: ["Research", "Africa", "2026"],
    stats: [
      { value: "72%", label: "rate attribution their top challenge" },
      { value: "80%", label: "of creator budget on TikTok and Instagram" },
      { value: "3.2x", label: "return on retainer vs one-off spikes" },
    ],
    body: [
      {
        type: "p",
        text: "Market snapshot: budgets, platform mix, measurement maturity and where brands are investing next.",
      },
      { type: "h2", text: "Executive summary" },
      {
        type: "p",
        text: "The African creator economy is experiencing rapid professionalisation. Brands are moving away from vanity-driven metrics and shifting their investments toward platforms and workflows that offer transparent attribution, operational control, and measurable business outcomes.",
      },
      {
        type: "p",
        text: "Based on data from over 150 brand managers and agency partners across East, West, and Southern Africa, this report details how the region is building its own unique creator commerce and measurement playbooks.",
      },
      { type: "h2", text: "Five core findings" },
      {
        type: "p",
        text: "Our research identified five critical trends defining creator investment decisions across growth markets this year:",
      },
      {
        type: "ul",
        items: [
          "Attribution is the priority: 72% of surveyed brands rate measurement and conversion tracking as their primary campaign challenge.",
          "TikTok and Instagram dominate: the two platforms capture over 80% of creator budgets, with TikTok leading on awareness and Instagram leading on mid-funnel trust.",
          "Mobile-first checkout adoption: creator campaigns linking to mobile money payments such as M-Pesa, Orange Money or Wave have doubled in conversion rate compared to web redirect checkouts.",
          "Long-term partnerships build equity: retainer-based creator ambassador programmes show a 3.2x higher return on spend than one-off campaign spikes.",
          "Operations platforms reduce friction: agencies using structured operations layers report 40% faster approvals and zero project delivery delays.",
        ],
      },
      { type: "h2", text: "Implications for marketing leaders" },
      {
        type: "p",
        text: "To scale creator programmes successfully, brands must invest in building dedicated creator operations pipelines. Relying on manually managed spreadsheets and loose messaging-app briefing leads to high friction, brand safety risks, and wasted ad spend. The future belongs to teams that treat creator-led content as a structured, measurable media channel.",
      },
    ],
  },
  {
    slug: "creator-intelligence-playbook",
    kind: "insight",
    category: "Playbook",
    title: "The Creator Intelligence Playbook for African Brands",
    excerpt:
      "How to move from vanity metrics to audience quality, creator fit and measurable campaign signals.",
    readTime: "12 min read",
    date: "January 2026",
    image: "/images/marketing/resources/creator-intelligence-playbook.webp",
    tags: ["Creator fit", "Audience quality", "Campaign strategy"],
    body: [
      {
        type: "p",
        text: "How to move from vanity metrics to audience quality, creator fit and measurable campaign signals.",
      },
      { type: "h2", text: "Why this matters in 2026" },
      {
        type: "p",
        text: "As budgets expand, creator marketing requires the same rigour as programmatic display and paid search. African brands can no longer afford to allocate capital based on vanity follower counts. Instead, they must base selection on verified audience quality, creator brand safety scores, and historical content performance.",
      },
      { type: "h2", text: "The three pillars of creator intelligence" },
      {
        type: "p",
        text: "Inmind proposes a strategic framework built around three critical intelligence layers to keep strategy, execution, and analytics aligned:",
      },
      {
        type: "ul",
        items: [
          "Strategy intelligence: mapping campaign objectives, target audience demographics, key message territories, and the proper creator-to-platform mix.",
          "Creator intelligence: auditing creator lists for audience location, bot follower ratios, historical engagement consistency, and brand suitability.",
          "Performance intelligence: reviewing live metrics such as reach, clicks and conversions, then generating post-campaign scorecards to continuously refine future creator rosters.",
        ],
      },
      { type: "h2", text: "Standardising your creator pipeline" },
      {
        type: "p",
        text: "Implementing this playbook gives brands a structured operating system. With clean briefs, standardised deliverables, and direct attribution, teams can run campaigns that consistently drive sales, downloads, and brand lift with complete accountability.",
      },
    ],
  },
  {
    slug: "measuring-creator-roi",
    kind: "insight",
    category: "Measurement",
    title: "Measuring Creator ROI Beyond Engagement",
    excerpt:
      "Trackable links, promo codes, QR journeys and custom landing pages: practical attribution for creator campaigns.",
    readTime: "6 min read",
    date: "February 2026",
    image: "/images/marketing/resources/measuring-creator-roi.webp",
    tags: ["ROI", "Attribution", "Performance"],
    body: [
      {
        type: "p",
        text: "Trackable links, promo codes, QR journeys and custom landing pages: practical attribution for creator campaigns.",
      },
      { type: "h2", text: "Moving past vanity metrics" },
      {
        type: "p",
        text: "While engagement rates such as likes, comments and shares serve as useful indicators of creative resonance, they are not direct business outcomes. Modern marketing leaders must translate audience attention into tangible metrics: customer acquisition cost, customer lifetime value, app installs, and direct sales.",
      },
      {
        type: "p",
        text: "Attributing conversions to specific creators requires a robust tracking architecture. By setting up custom pixels and trackable funnels before campaigns start, brands can calculate exact return on ad spend and evaluate the performance of their creator investments side by side with traditional paid social advertising.",
      },
      { type: "h2", text: "A practical attribution roadmap" },
      {
        type: "p",
        text: "Establishing a clear, reliable attribution model does not require complex software integrations. Start by structuring campaigns around specific, trackable user actions and providing creators with unique indicators that are easy for their audiences to remember:",
      },
      {
        type: "ul",
        items: [
          "Define a single primary conversion goal per campaign, such as app install, newsletter signup, or coupon code usage.",
          "Issue unique creator discount codes and trackable UTM parameters to segment incoming web traffic.",
          "Embed scan-ready QR codes in video overlays or story slides for direct mobile checkouts.",
          "Monitor conversion data daily to optimise spending and identify top-performing content formats during the campaign lifecycle.",
        ],
      },
      { type: "h2", text: "Establishing continuous learning loops" },
      {
        type: "p",
        text: "The true value of performance tracking is realised post-campaign. By building post-campaign reports that analyse creator scorecards, cost-per-acquisition metrics, and audience demographics, brands establish a learning loop. This data directly shapes the next wave of creator sourcing, briefings, and paid amplification, ensuring the marketing operating system grows smarter over time.",
      },
    ],
  },
  {
    slug: "creator-led-commerce-rise",
    kind: "insight",
    category: "Commerce",
    title: "The Rise of Creator-Led Commerce in Emerging Markets",
    excerpt:
      "How QR integrations, mobile money wallets and platform checkouts are redefining conversion paths.",
    readTime: "8 min read",
    date: "April 2026",
    image: "/images/marketing/resources/creator-led-commerce-rise.webp",
    tags: ["Commerce", "Mobile money", "Social shopping"],
    body: [
      {
        type: "p",
        text: "How QR integrations, mobile money wallets and platform checkouts are redefining conversion paths.",
      },
      { type: "h2", text: "Eliminating friction in the funnel" },
      {
        type: "p",
        text: "In emerging digital economies, traditional e-commerce funnels often suffer from high cart abandonment rates due to complex credit card checkouts and slow mobile loading speeds. Creator-led commerce bypasses this friction by integrating direct buy flows where the attention already is: inside social media feeds.",
      },
      {
        type: "p",
        text: "By pairing creator content with mobile money APIs and instant digital wallets, brands are closing the loop between inspiration and checkout. When a creator showcases a product, their audience can purchase it in a few taps without ever leaving the app interface.",
      },
      { type: "h2", text: "Tying physical retail to digital creator waves" },
      {
        type: "p",
        text: "We are witnessing a major shift in offline retail through creator-branded QR codes. Placed on physical packaging, in-store displays, or product seeding boxes, these codes link directly to exclusive creator-curated landing pages and digital offers.",
      },
      {
        type: "ul",
        items: [
          "Localised checkouts: automatically pre-filling mobile payment forms for an immediate local checkout experience.",
          "Creator attribution: attributing the transaction directly to the seed creator, even if the purchase happens in a physical supermarket.",
          "Exclusive creator discounts: offering dynamic coupon codes that encourage immediate checkout.",
        ],
      },
    ],
  },
  {
    slug: "tiktok-culture-shift-east-africa",
    kind: "insight",
    category: "Platforms",
    title: "Why TikTok Culture Is Reshaping East African Brand Launches",
    excerpt:
      "Discovery-first creators, sound trends and UGC velocity: what changed for launch campaigns in 2025 to 2026.",
    readTime: "7 min read",
    date: "January 2026",
    image: "/images/marketing/resources/tiktok-culture-shift-east-africa.webp",
    tags: ["TikTok", "Culture", "Launches"],
    body: [
      {
        type: "p",
        text: "Discovery-first creators, sound trends and UGC velocity: what changed for launch campaigns in 2025 to 2026.",
      },
      { type: "h2", text: "Discovery-first beats polished first" },
      {
        type: "p",
        text: "Brands that successfully launch products on TikTok focus heavily on platform-native storytelling, authentic creator reactions, and behind-the-scenes diaries. Polished, high-production TV-style commercials often alienate viewers, whereas raw, self-shot user generated content builds immediate trust and curiosity.",
      },
      {
        type: "p",
        text: "By letting creators lead the narrative and describe the product in their own words, brand messages feel less like traditional ads and more like genuine peer recommendations.",
      },
      { type: "h2", text: "Leveraging sound, UGC velocity and trends" },
      {
        type: "p",
        text: "Speed and cultural agility are the primary drivers of viral reach on TikTok. Brands must authorise creators to act quickly when trends and sounds emerge, rather than forcing them through lengthy multi-week corporate approval chains. The brands capturing the most attention follow these key principles:",
      },
      {
        type: "ul",
        items: [
          "Short-form hooks: designing creator briefs that require a compelling visual or audio hook in the first two seconds.",
          "Co-creation: encouraging creators to put their own spin on the brand concept rather than reading strict scripts.",
          "Amplification: instantly backing organic creator posts that show high retention with paid Spark Ads to scale their reach.",
        ],
      },
    ],
  },
  {
    slug: "showapp-launch-creator-wave",
    kind: "case-study",
    category: "App launch",
    title: "How SHOWAPP Scaled Installs With a Creator Launch Wave",
    excerpt:
      "A multi-creator TikTok and Instagram programme that drove app discovery, trials and measurable install uplift.",
    readTime: "8 min read",
    date: "March 2026",
    image: "/images/marketing/resources/showapp-launch-creator-wave.webp",
    tags: ["SHOWAPP", "App installs", "TikTok"],
    featured: true,
    stats: [
      { value: "12", label: "creators in the launch wave" },
      { value: "+38%", label: "install rate vs paid social" },
      { value: "-22%", label: "customer acquisition cost" },
    ],
    body: [
      {
        type: "p",
        text: "A multi-creator TikTok and Instagram programme that drove app discovery, trials and measurable install uplift.",
      },
      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "SHOWAPP, a rising entertainment platform, needed to drive massive app downloads and trial signups among young urban consumers. With limited traditional media budgets and high benchmarks for conversion cost, they required an acquisition model that combined broad brand awareness with direct performance outcomes.",
      },
      { type: "h2", text: "The Inmind approach" },
      {
        type: "p",
        text: "We designed a multi-phased creator launch wave, shortlisting 12 lifestyle, music, and campus creators who possessed highly engaged, verified audiences. Each creator was equipped with customised mobile download links, enabling direct install tracking, and was tasked with creating raw, native reviews of the app experience.",
      },
      {
        type: "ul",
        items: [
          "Creator vetting: verified that shortlists had less than 5% bot or inactive followers and strong local engagement ratios.",
          "Multi-format approach: combined short-form TikTok reviews with Instagram story walkthroughs and download swipe-ups.",
          "Agile optimisation: rotated creators and updated briefs weekly based on install efficiency and cost-per-registration data.",
        ],
      },
      { type: "h2", text: "The business outcome" },
      {
        type: "p",
        text: "The campaign delivered an install rate that outperformed traditional paid social ads by 38%, while lowering the overall customer acquisition cost by 22%. By using creator content directly in their paid performance pipelines, SHOWAPP built a reusable creator operations playbook for future regional expansions.",
      },
    ],
  },
  {
    slug: "brookside-family-creator-program",
    kind: "case-study",
    category: "FMCG",
    title: "Brookside: Building Familiarity Through Family Creator Stories",
    excerpt:
      "An always-on ambassador mix that turned everyday household moments into trusted dairy brand storytelling.",
    readTime: "7 min read",
    date: "February 2026",
    image: "/images/marketing/resources/brookside-family-creator-program.webp",
    tags: ["Brookside", "FMCG", "Ambassadors"],
    stats: [
      { value: "8", label: "creators on rolling retainers" },
      { value: "6 months", label: "always-on programme" },
      { value: "+45%", label: "engagement quality vs burst campaigns" },
    ],
    body: [
      {
        type: "p",
        text: "An always-on ambassador mix that turned everyday household moments into trusted dairy brand storytelling.",
      },
      { type: "h2", text: "Campaign objective" },
      {
        type: "p",
        text: "As a leading regional dairy brand, Brookside sought to maintain its top-of-mind household presence and build deep emotional connections with modern family decision-makers. They wanted to transition away from short-term campaigns and establish an always-on creator ambassador programme centred on genuine household consumption.",
      },
      { type: "h2", text: "Roster design and content strategy" },
      {
        type: "p",
        text: "Inmind structured an always-on ambassador roster composed of family lifestyle and parenting creators. Over a six-month period, these creators integrated Brookside milk, yoghurt, and butter naturally into daily family routines, documenting breakfast prep, school lunchbox ideas, and family dessert times.",
      },
      {
        type: "ul",
        items: [
          "Long-term retainers: secured 8 key parenting and culinary creators on rolling six-month contracts to ensure visual consistency.",
          "Content territories: mapped out natural cooking, health, and family-bonding scenarios rather than rigid brand placements.",
          "Community engagement: encouraged creators to interact in comment threads, answering questions about products and recipes.",
        ],
      },
      { type: "h2", text: "The outcome" },
      {
        type: "p",
        text: "The always-on strategy resulted in a 45% increase in engagement quality and comment sentiment compared to previous burst campaigns. Audience surveys revealed a significant uplift in purchase intent, proving that sustained, relatable creator presence builds deeper long-term brand equity than viral spikes.",
      },
    ],
  },
  {
    slug: "fmcg-tiktok-reach-efficiency",
    kind: "case-study",
    category: "FMCG",
    title: "FMCG TikTok Wave: Reach Efficiency vs Paid Social",
    excerpt:
      "How a packaged goods brand benchmarked creator CPM against paid social and scaled the winning creators.",
    readTime: "6 min read",
    date: "December 2025",
    image: "/images/marketing/resources/fmcg-tiktok-reach-efficiency.webp",
    tags: ["FMCG", "TikTok", "Efficiency"],
    stats: [
      { value: "-28%", label: "CPM vs standard display" },
      { value: "3.4x", label: "higher video completion rate" },
      { value: "30%", label: "of display spend moved to creators" },
    ],
    body: [
      {
        type: "p",
        text: "How a packaged goods brand benchmarked creator CPM against paid social and scaled the winning creators.",
      },
      { type: "h2", text: "Setting the benchmark" },
      {
        type: "p",
        text: "A major packaged consumer goods brand needed to evaluate the cost-efficiency of creator-produced content on TikTok compared to their standard paid programmatic and social media display advertising campaigns.",
      },
      { type: "h2", text: "Test setup and execution" },
      {
        type: "p",
        text: "Inmind designed a controlled reach efficiency test, contracting 6 creators to produce platform-native recipe and lifestyle videos. We tracked organic CPM, watch-time retention, and cost-per-engagement, then converted the top-performing organic assets into TikTok Spark Ads for paid amplification.",
      },
      { type: "h2", text: "Key learnings and scaling" },
      {
        type: "p",
        text: "The test demonstrated that combining creator-produced UGC with Spark Ads delivered a 28% lower CPM and a 3.4x higher video completion rate than standard display ads. These insights led to a revised budget allocation, shifting 30% of paid social display spend directly into creator amplification pools.",
      },
    ],
  },
  {
    slug: "people-dont-trust-ads-they-trust-people",
    kind: "blog",
    category: "Creator marketing strategy",
    title:
      "People Don't Trust Ads. They Trust People: The Shift from Buying Exposure to Building Creator Partnerships",
    excerpt:
      "Why traditional advertising is losing its edge, and how strategic creator partnerships build authentic consumer trust that scales.",
    readTime: "10 min read",
    date: "Inmind Strategy Series",
    image: "/images/marketing/resources/people-dont-trust-ads-they-trust-people.webp",
    tags: [
      "Consumer trust",
      "Influence psychology",
      "Brand creator partnerships",
      "Modern brand building",
    ],
    featured: true,
    body: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "For decades, building a successful brand was straightforward. A company created a clear message, bought ad spots on television or in magazines, and broadcast that message to as many people as possible. The rule was simple: repeat your promise often enough, and sales would follow.",
      },
      {
        type: "p",
        text: "That system no longer works. Today, traditional advertising faces a major trust crisis. People have built an automatic filter for corporate marketing. We scroll past banner ads, skip video promotions after five seconds, and check our phones during TV commercials.",
      },
      {
        type: "p",
        text: "Yet while traditional ads struggle, recommendations from real people are thriving. Consumers have not stopped trusting; they just reserve their trust for humans, not corporations. This shift marks the move from simply buying ad space to building genuine creator partnerships.",
      },
      { type: "h2", text: "The psychology of why ads lose impact" },
      {
        type: "p",
        text: "The decline of ad effectiveness is not just about media clutter; it is about human psychology. The average consumer sees thousands of commercial messages every day. To avoid feeling overwhelmed, our brains naturally tune out sales pitches. Over time, buyers have realised that corporate ads have one main goal: to sell, not necessarily to tell the full truth.",
      },
      { type: "h3", text: "How we spot persuasion" },
      {
        type: "p",
        text: "Psychologists call this persuasion knowledge. When people sense that someone is actively trying to sell them something, their guard goes up. Traditional ads trigger instant scepticism. Viewers question claims, look for catchphrase tricks, and discount promises. The more polished and commercial an ad looks, the faster people tune it out.",
      },
      { type: "h3", text: "The shift to peer trust" },
      {
        type: "p",
        text: "Trust in large institutions and corporate messages has hit an all-time low. Instead, trust has moved horizontally, from person to person. Today, an expert or creator with a loyal following and a phone camera often holds far more influence than a polished, multi-million-dollar advertising campaign.",
      },
      { type: "h2", text: "Why creators build real connections that scale" },
      {
        type: "p",
        text: "Creators are not just modern billboards; they are trusted community leaders. The power of creator marketing comes down to two key factors: personal connection and built-in curation.",
      },
      { type: "h3", text: "Relatable connection and daily presence" },
      {
        type: "p",
        text: "When creators share their daily experiences, expertise, and honest opinions over time, their audience feels connected to them. Unlike distant traditional celebrities, creators build two-way relationships. Followers see their triumphs, their mistakes, and their daily routines. This consistent presence creates a genuine sense of familiarity and trust.",
      },
      { type: "h3", text: "Curation and risk filtering" },
      {
        type: "p",
        text: "When a creator recommends a product, their audience views it as advice from a knowledgeable friend, not a corporate pitch. The creator acts as a quality filter. Because a creator's reputation depends entirely on maintaining their audience's trust, recommending a bad product costs them heavily. This creates natural alignment: creators are incentivised to share only products they truly stand behind.",
      },
      { type: "h2", text: "Buying exposure vs building partnerships" },
      {
        type: "p",
        text: "Despite this shift, many brands still treat creators like ad channels. They buy one-off posts, force creators to read rigid scripts, and demand unnatural product placements. This misses the entire point of creator marketing. When brands force creators to speak like corporate spokespeople, they remove the exact thing that makes them effective: their authentic voice.",
      },
      {
        type: "ul",
        items: [
          "Transactional exposure buying: focuses on short-term reach, rigid scripts, single posts, and vanity numbers like total follower counts. Treats creators like ad space, and results in forced messaging, low engagement, and consumer scepticism.",
          "Strategic creator partnerships: focuses on long-term brand equity, creative freedom, multi-touchpoint integration, and real business outcomes like conversions and customer loyalty. Treats creators as creative partners, and results in authentic storytelling, sustained trust, and predictable ROI.",
        ],
      },
      { type: "h2", text: "A clear framework for trust-first partnerships" },
      { type: "h3", text: "Intelligence before outreach" },
      {
        type: "p",
        text: "Great partnerships start with data, not guesswork. Brands should evaluate creators based on true audience demographics, engagement quality, brand safety, and actual interest in the product category.",
      },
      { type: "h3", text: "Collaborative guidance" },
      {
        type: "p",
        text: "Give creators clear boundaries without taking away their voice. Provide key product facts, core value points, and required guidelines, but let them choose the best way to explain it to their community.",
      },
      { type: "h3", text: "Long-term integration" },
      {
        type: "p",
        text: "Single posts rarely move the needle. Trust takes time. Multi-month or ongoing partnerships allow audiences to see organic, repeated product use, driving higher conversions and longer customer retention.",
      },
      { type: "h2", text: "Common pitfalls to avoid" },
      {
        type: "ul",
        items: [
          "Over-scripting: forcing creators to read robotic scripts ruins authenticity and turns viewers off.",
          "Chasing reach over fit: choosing massive accounts with irrelevant audiences instead of focused creators with highly engaged communities.",
          "Short-term thinking: judging success based on immediate 24-hour views rather than long-term brand preference and conversions.",
          "Disorganised workflows: managing relationships across scattered spreadsheets and emails, causing delays and inconsistent messaging.",
        ],
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Traditional ads are losing impact because consumers naturally tune out sales pitches.",
          "Trust has shifted away from corporate messages toward authentic human recommendations.",
          "Creators earn influence through consistent, honest content and category expertise.",
          "Treating creators like ad space destroys their value; long-term partnerships drive real business growth.",
          "Success requires solid audience intelligence, clear guidance, and creative freedom.",
        ],
      },
    ],
  },
  {
    slug: "follower-count-is-least-interesting-thing-about-a-creator",
    kind: "blog",
    category: "Creator selection strategy",
    title:
      "Follower Count Is the Least Interesting Thing About a Creator: A Practical Guide to Selection and Audience Fit",
    excerpt:
      "Why follower count is a misleading vanity metric, and how to select creators using data-informed audience fit and performance signals.",
    readTime: "11 min read",
    date: "Inmind Strategy Series",
    image: "/images/marketing/resources/follower-count-is-least-interesting-thing-about-a-creator.webp",
    tags: [
      "Micro vs macro creators",
      "Vanity metrics",
      "Audience quality",
      "Creator evaluation",
    ],
    body: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "When influencer marketing first started, picking creators was simple. Brands looked at one main number: follower count. The thinking was straightforward, in that more followers meant more reach, which meant better results. Big accounts got the largest budgets, while smaller creators were passed over.",
      },
      {
        type: "p",
        text: "Today, relying on follower count as your primary decision factor is an expensive mistake. Follower count is a classic vanity metric: easy to see, easy to artificially inflate, and often disconnected from real sales or engagement.",
      },
      {
        type: "p",
        text: "Social media algorithms have changed. Platforms no longer show content to every follower a creator has; they show content based on user interests and engagement signals. To get consistent results, brands must move past surface-level numbers and focus on creator intelligence.",
      },
      { type: "h2", text: "Why follower count can be misleading" },
      { type: "h3", text: "The algorithmic shift" },
      {
        type: "p",
        text: "Platforms like TikTok, Instagram, and YouTube prioritise content performance over follower lists. An account with 1,000,000 followers might only get 5,000 views per video if their audience has become inactive. Meanwhile, a creator with 15,000 followers in a specific niche might consistently hit 100,000 views because their audience is passionate and active.",
      },
      { type: "h3", text: "Inactive followers" },
      {
        type: "p",
        text: "Follower counts build up over years. Older accounts often contain old, inactive profiles, bots, or users who have moved on to new interests. Paying extra for historic follower numbers rather than active viewers is a poor use of marketing budget.",
      },
      { type: "h3", text: "The reach vs engagement trade-off" },
      {
        type: "p",
        text: "Across social media, a clear trend exists: as a creator's follower count grows, their engagement rate often drops. Massive accounts tend to have broad, general audiences. Smaller, focused creators build tight-knit communities centred on specific interests, resulting in much higher trust and stronger buying interest.",
      },
      { type: "h2", text: "The four pillars of strategic creator evaluation" },
      { type: "h3", text: "Pillar 1: Audience quality and location" },
      {
        type: "ul",
        items: [
          "Location fit: are the creator's viewers located in the countries where your product is available?",
          "Demographics: does their audience match your target age, gender, and buyer persona?",
          "Audience authenticity: use analytics tools to filter out bot accounts, fake engagement, and paid followers.",
        ],
      },
      { type: "h3", text: "Pillar 2: Niche authority" },
      {
        type: "p",
        text: "A creator might have high engagement, but do they have credibility in your industry? A tech company sponsoring a general meme account will not see strong results, but partnering with a specialised practitioner who speaks to 10,000 operations leaders daily will drive meaningful action.",
      },
      { type: "h3", text: "Pillar 3: Community engagement depth" },
      {
        type: "p",
        text: "Likes can be misleading, so look closer at the comments section. Are followers leaving thoughtful comments? Are they asking questions about the products shown? High-value creators build spaces where people ask for real recommendations.",
      },
      { type: "h3", text: "Pillar 4: Brand safety and values" },
      {
        type: "p",
        text: "Every creator you partner with reflects on your company. Review past content to ensure there are no major safety risks, inappropriate messaging, or conflicting brand values.",
      },
      { type: "h2", text: "Building a balanced creator portfolio" },
      {
        type: "ul",
        items: [
          "Micro-creators (10k to 50k followers): high trust, niche focus, strong engagement, cost-effective. Excellent for driving direct actions and creating relatable content.",
          "Mid-tier creators (50k to 250k followers): a strong balance of reach and engagement, professional routine, and clear niche authority. Ideal for steady growth and performance campaigns.",
          "Macro and celebrity creators (250k+ followers): broad visibility, high brand prestige, mass culture appeal. Best for widespread awareness and major product launches.",
        ],
      },
      {
        type: "p",
        text: "Instead of putting your entire budget into one celebrity creator, create a balanced portfolio. Use micro and mid-tier creators to drive conversions and authentic stories, while selectively using macro-creators for broad visibility.",
      },
      { type: "h2", text: "The Inmind selection model (SCOR)" },
      {
        type: "ul",
        items: [
          "Signal check: look at average view counts, real engagement rates, and performance across their last 20 to 30 posts to find their true baseline reach.",
          "Content fit: compare the creator's usual topics with your brand's core benefits. Will your product fit naturally into their regular posts?",
          "Operational reliability: check their professional track record. Do they meet deadlines, communicate easily, and follow project briefs accurately?",
          "Expected return: estimate the value of the content, taking into account post engagement, potential conversions, and whether you can reuse the content in paid ads.",
        ],
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Follower count is a surface-level metric that does not guarantee actual reach or sales.",
          "Modern algorithms show content based on audience interest, not just subscriber lists.",
          "Evaluate creators using four pillars: audience quality, niche authority, engagement depth, and brand safety.",
          "Mixing micro, mid-tier, and macro creators gives you a safer, higher-performing campaign strategy.",
        ],
      },
    ],
  },
  {
    slug: "everything-between-the-brief-and-the-results",
    kind: "blog",
    category: "Creator marketing operations",
    title:
      "Everything Between the Brief and the Results: The Operations That Make Creator Marketing Scale",
    excerpt:
      "The essential management steps between briefing creators and getting campaign results that let creator marketing run smoothly.",
    readTime: "11 min read",
    date: "Inmind Strategy Series",
    image: "/images/marketing/resources/everything-between-the-brief-and-the-results.webp",
    tags: [
      "Campaign orchestration",
      "Creator briefing",
      "Influencer management",
      "Marketing workflows",
    ],
    body: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "Most discussions about creator marketing focus on two big moments: announcing the partnership and looking at the final results chart. We celebrate creative ideas and talk about ROI. But focusing only on the beginning and the end leaves out a crucial piece. The real success of any creator campaign depends on what happens in the middle: campaign orchestration.",
      },
      {
        type: "p",
        text: "Running a campaign with 10, 30, or 100 independent creators is an operational challenge. Unlike buying digital search ads that run automatically, creator marketing means managing real people. Without structured processes, campaigns quickly face missed deadlines, off-brand posts, legal confusion, and overworked teams.",
      },
      { type: "h2", text: "Where most creator campaigns get stuck" },
      { type: "h3", text: "Unclear briefs" },
      {
        type: "p",
        text: "Briefs often make one of two mistakes: they are either rigid legal documents that destroy creativity, or vague guidelines that leave creators guessing about key rules and messaging. Both lead to endless revisions and missed deadlines.",
      },
      { type: "h3", text: "Review bottlenecks" },
      {
        type: "p",
        text: "Without a clear feedback process, reviewing content becomes messy. Different team members give conflicting edits at different times. Creators get last-minute change requests, leading to rushed reshoots and strained working relationships.",
      },
      { type: "h3", text: "Licensing and usage rights confusion" },
      {
        type: "p",
        text: "Managing usage rights, paid ad permissions, and contract terms across dozens of creators requires clear tracking. Missing rights details can lead to unexpected fees or legal issues down the road.",
      },
      { type: "h2", text: "The campaign lifecycle" },
      {
        type: "p",
        text: "To run smooth, repeatable campaigns, organisations need a clear process at each step of the journey:",
      },
      {
        type: "ul",
        items: [
          "Strategic briefing: turning marketing goals into clear, creative briefs with simple rules.",
          "Contracts and legal rights: standardising contract terms, usage rights, payment schedules, and compliance.",
          "Product fulfilment: tracking product shipments, custom packages, and onboarding steps seamlessly.",
          "Streamlined feedback and QA: giving organised feedback that protects brand messaging while keeping the creator's natural tone.",
          "Scheduled posting and promotion: coordinating post schedules and setting up high-performing content for paid amplification.",
          "Clear reporting: tracking performance, conversion data, and organising top content into a reusable asset library.",
        ],
      },
      { type: "h3", text: "Writing effective briefs" },
      {
        type: "p",
        text: "A great brief should not feel like a corporate handbook; it should inspire great content. Break information into three simple areas: the must-haves such as required tags, product disclosures and competitor guidelines; creative ideas such as suggested angles and topic hooks creators can adapt to their style; and technical rules covering video orientation, framing, sound guidelines, and submission links.",
      },
      { type: "h3", text: "Simplifying the review process" },
      {
        type: "p",
        text: "Keep feedback centralised and clear. Combine comments from all internal reviewers into a single round of edits. Focus feedback on factual accuracy and compliance rather than minor personal preferences.",
      },
      { type: "h3", text: "Boosting top content with paid media" },
      {
        type: "p",
        text: "The work does not stop once a creator posts. The best return on investment comes from taking top-performing organic posts and boosting them through paid ad channels via creator licensing and whitelisting. This requires securing ad permissions early and putting media budget behind proven content.",
      },
      { type: "h2", text: "Turning projects into a repeatable system" },
      {
        type: "p",
        text: "Managing campaigns manually means that doubling your campaign size doubles your workload and stress. Installing structured systems allows you to scale smoothly without burning out your team. Proper campaign orchestration turns creator marketing from an unpredictable project into a reliable growth channel.",
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Operations, meaning everything between briefing and reporting, is the key to scaling creator marketing.",
          "Unclear briefs and disorganised review cycles slow down campaigns and hurt content quality.",
          "Standard processes for briefing, shipping, feedback, and rights management keep campaigns on track.",
          "Combining team edits into a single feedback round saves time and keeps creator relationships positive.",
        ],
      },
    ],
  },
  {
    slug: "beyond-the-algorithm-how-to-choose-creators-that-fit",
    kind: "blog",
    category: "Creator brand fit",
    title:
      "Beyond the Algorithm: How to Choose Creators That Actually Fit Your Brand",
    excerpt:
      "Move beyond basic search tools to evaluate true creator brand fit, shared values, creative style and long-term partnership potential.",
    readTime: "10 min read",
    date: "Inmind Strategy Series",
    image: "/images/marketing/resources/beyond-the-algorithm-how-to-choose-creators-that-fit.webp",
    tags: [
      "Creator discovery",
      "Brand safety",
      "Values alignment",
      "Audience resonance",
    ],
    body: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "Marketing teams today have access to vast amounts of creator data. Database tools and search platforms allow managers to filter millions of creators by location, niche, and engagement rate in seconds. Finding creators on paper has never been easier.",
      },
      {
        type: "p",
        text: "Yet brand-creator misalignments are still common. Brands frequently hire creators who check every box on a spreadsheet, only for the resulting content to feel awkward or ineffective. In the worst cases, poor alignment can harm brand reputation. This happens because algorithms measure numbers, but audiences evaluate human connection.",
      },
      { type: "h2", text: "Where search tools fall short" },
      { type: "h3", text: "Missing context" },
      {
        type: "p",
        text: "A software tool can tell you that a creator talks about your product category often. But it cannot tell you the tone of those posts. Is the creator giving expert advice, or are they making fun of products in the space? Automated tools miss human context.",
      },
      { type: "h3", text: "Artificial numbers" },
      {
        type: "p",
        text: "Engagement can be artificially boosted. Comment groups and automated tools can trick basic search engines into marking an account as high-performing, even when their audience rarely buys products.",
      },
      { type: "h3", text: "Style and tone mismatches" },
      {
        type: "p",
        text: "Two creators can have identical follower counts and engagement rates, yet have completely different presentation styles. One might focus on quiet luxury and education, while the other relies on loud comedy. Choosing the wrong style can confuse your existing customers.",
      },
      { type: "h2", text: "The three dimensions of true brand fit" },
      {
        type: "ul",
        items: [
          "Shared values: alignment in core brand ethos, quality standards, and overall public presence.",
          "Visual and tone fit: natural compatibility between the creator's creative style and your brand's image.",
          "Proven audience trust: a track record showing that the creator's audience actually takes action based on their recommendations.",
        ],
      },
      { type: "h2", text: "Checking style and content flow" },
      {
        type: "p",
        text: "When a creator features your product, it should feel like a natural part of their regular content. If the visual quality suddenly changes or their tone becomes stiff, viewers notice immediately.",
      },
      { type: "h3", text: "The feed test" },
      {
        type: "p",
        text: "Before confirming a partnership, run a simple check. Compare the proposed content idea with the creator's last 10 organic posts and ask whether it naturally belongs there, or whether it looks like an interruption. If it feels out of place, the creative fit is not right yet.",
      },
      { type: "h2", text: "Checking content history and values" },
      {
        type: "p",
        text: "Values alignment does not mean finding creators with no opinions. It means ensuring that their overall messaging and habits do not contradict your brand's core promises. Automated software looks at recent posts, but human review should look further back: how the creator interacts with followers in the comments, how they handle past brand deals, and how they express opinions.",
      },
      { type: "h3", text: "Authenticity in paid posts" },
      {
        type: "p",
        text: "Look at past sponsored content from the creator. Do they keep their normal style and honest approach, or do they switch to reading generic talking points? Creators who maintain high standards during paid posts deliver much better long-term results.",
      },
      { type: "h2", text: "Building long-term partnerships" },
      {
        type: "p",
        text: "When you find a creator with great qualitative fit, move from single posts to multi-month partnerships. One-off posts act like traditional ads, while long-term partnerships build real credibility. When an audience sees a creator using a product consistently over several months, initial hesitation disappears and the product becomes part of the creator's routine.",
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Software tools help with early search, but human review is needed to assess true brand fit and tone.",
          "Evaluate creators across three areas: shared values, visual fit, and audience trust.",
          "Sponsored posts must feel natural alongside a creator's regular content to keep audience trust.",
          "Reviewing past sponsored content helps avoid brand safety issues and protects your reputation.",
          "Turning high-fit creators into long-term partners leads to better brand equity and consistent sales.",
        ],
      },
    ],
  },
];

export function resourcesByKind(kind: ResourceKind) {
  return RESOURCES.filter((r) => r.kind === kind);
}

export function findResource(slug: string) {
  return RESOURCES.find((r) => r.slug === slug);
}

export function collectionForKind(kind: ResourceKind) {
  return RESOURCE_COLLECTIONS.find((c) => c.kind === kind)!;
}

export function categoriesForKind(kind: ResourceKind) {
  return [...new Set(resourcesByKind(kind).map((r) => r.category))];
}
