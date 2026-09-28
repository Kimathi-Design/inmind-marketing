export const contactPage = {
  title: "Contact",
  description:
    "Start a creator campaign with InMind. Tell us your objective and we'll shape the strategy, talent mix and execution plan.",
  hero: {
    eyebrow: "Start a campaign",
    headline: "Let's build your\nnext creator campaign.",
    body: "Whether you're launching a product, scaling always-on creator partnerships or proving ROI for the first time, tell us what you're working toward and we'll take it from there.",
    image: {
      src: "/images/marketing/platform/activate.webp",
      alt: "Brand and creator teams activating a campaign together",
    },
  },
  aside: {
    headline: "What you'll get",
    points: [
      {
        title: "A clear recommendation",
        body: "Creator mix, channel strategy and a realistic timeline, not a generic deck.",
      },
      {
        title: "A named point of contact",
        body: "Someone from our team who understands your objective and market.",
      },
      {
        title: "A response within 2 business days",
        body: "Most briefs get a first reply within 24 hours.",
      },
    ],
    email: "support@inmind.media",
    emailLabel: "Prefer email?",
  },
  form: {
    title: "Tell us about your campaign",
    subtitle: "All fields marked with * are required.",
    submit: "Start a Campaign",
    success: {
      headline: "Message received.",
      body: "We'll review your brief and come back within 2 business days with a recommended next step.",
      note: "Need something urgent? Email support@inmind.media directly.",
    },
  },
  audienceOptions: [
    { value: "brand", label: "Brand" },
    { value: "agency", label: "Agency" },
    { value: "creator", label: "Creator" },
    { value: "other", label: "Other" },
  ],
  objectiveOptions: [
    { value: "launch", label: "Product or app launch" },
    { value: "always-on", label: "Always-on ambassador programme" },
    { value: "one-off", label: "One-off campaign or activation" },
    { value: "discovery", label: "Creator discovery & shortlisting" },
    { value: "measurement", label: "Measurement & reporting setup" },
    { value: "other", label: "Something else" },
  ],
  budgetOptions: [
    { value: "under-10k", label: "Under $10,000" },
    { value: "10-50k", label: "$10,000 - $50,000" },
    { value: "50-150k", label: "$50,000 - $150,000" },
    { value: "150k-plus", label: "$150,000+" },
    { value: "unsure", label: "Not sure yet" },
  ],
  timelineOptions: [
    { value: "asap", label: "ASAP, within 4 weeks" },
    { value: "1-3", label: "1-3 months" },
    { value: "3-6", label: "3-6 months" },
    { value: "exploring", label: "Just exploring" },
  ],
  steps: {
    eyebrow: "What happens next",
    headline: "From brief to kick-off.",
    items: [
      {
        title: "We review your brief",
        body: "Our team reads your objective, audience and timeline to understand what success looks like.",
      },
      {
        title: "We recommend a plan",
        body: "Creator mix, channel approach, budget guidance and a proposed campaign structure.",
      },
      {
        title: "We kick off together",
        body: "Once aligned, we onboard your team and start building the campaign in InMind.",
      },
    ],
  },
} as const;
