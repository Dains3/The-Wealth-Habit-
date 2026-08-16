export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Budgeting" | "Saving" | "Make Money Online" | "Side Hustles" | "Mindset";
  readTime: string;
  date: string;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "zero-based-budget-that-actually-sticks",
    title: "The Zero-Based Budget That Actually Sticks",
    excerpt:
      "Most budgets fail in week two. Here's the version that survives real life, built around three envelopes instead of thirty.",
    category: "Budgeting",
    readTime: "6 min read",
    date: "2026-07-02",
    cover: "from-green to-green-light",
    content: [
      "A zero-based budget doesn't mean every dollar disappears into a spreadsheet cell — it means every dollar has a job before the month starts. That's the whole idea, and it's also where most people overcomplicate things.",
      "Instead of thirty categories, start with three: Fixed, Flexible, and Future. Fixed covers rent, insurance, and anything that doesn't move. Flexible covers groceries, gas, and the stuff that changes week to week. Future covers savings and debt payoff — and it gets funded first, not last.",
      "The reason most budgets collapse by week two is that they're built for a perfect month. Build yours for a normal one instead: leave a small buffer inside Flexible for the birthday dinner or the unexpected co-pay, so one surprise doesn't blow up the whole system.",
      "Review it for five minutes every Sunday. Not to feel guilty — just to move money between envelopes if one is running hot. A budget is a living document, not a test you pass or fail.",
    ],
  },
  {
    slug: "50-30-20-rule-real-numbers",
    title: "The 50/30/20 Rule, With Real Numbers",
    excerpt:
      "Needs, wants, and savings — broken down with an actual paycheck so you can see exactly where the lines fall.",
    category: "Budgeting",
    readTime: "5 min read",
    date: "2026-06-18",
    cover: "from-gold to-gold-light",
    content: [
      "The 50/30/20 rule is simple on paper: 50% of take-home pay to needs, 30% to wants, 20% to savings and debt. It gets confusing the moment you try to apply it to a real paycheck, so let's use one.",
      "On a $3,200 monthly take-home, needs get $1,600 — rent, utilities, groceries, minimum debt payments, insurance. Wants get $960 — dining out, subscriptions, hobbies. Savings and extra debt payoff get $640.",
      "If your needs are eating more than 50%, that's not a failure of willpower — it's a sign your fixed costs are too high for your income, and the fix is usually structural (housing, transportation) rather than skipping coffee.",
      "Use this as a starting ratio, not a law. Someone aggressively paying off debt might run 50/10/40. The percentages are a diagnostic tool, not a cage.",
    ],
  },
  {
    slug: "high-yield-savings-account-worth-it",
    title: "Is a High-Yield Savings Account Actually Worth It?",
    excerpt:
      "The math on moving your emergency fund out of a big-bank savings account and into something that actually pays you.",
    category: "Saving",
    readTime: "4 min read",
    date: "2026-05-27",
    cover: "from-green-light to-gold",
    content: [
      "Most big-bank savings accounts pay close to nothing — often under 0.05% APY. A high-yield savings account (HYSA) from an online bank routinely pays many times that, on the exact same FDIC-insured dollar.",
      "On a $10,000 emergency fund, that difference compounds into real money over a year, for doing nothing except moving the account. There's no risk trade-off here — it's still cash, still insured, still liquid.",
      "The one thing to check: withdrawal speed. Online HYSAs usually take one to three business days to transfer funds to your checking account, so keep a small buffer in checking for true same-day needs.",
      "If you have more than a token amount sitting in a low-rate savings account, this is one of the few genuinely free upgrades in personal finance.",
    ],
  },
  {
    slug: "automate-your-savings-in-one-afternoon",
    title: "Automate Your Savings in One Afternoon",
    excerpt:
      "A step-by-step setup for making saving the default, not a decision you have to make every single payday.",
    category: "Saving",
    readTime: "7 min read",
    date: "2026-05-09",
    cover: "from-gold-dark to-gold",
    content: [
      "Willpower is a bad long-term savings strategy because it runs out. Automation doesn't. The goal here is to make saving happen before you ever see the money, not after.",
      "Start with your paycheck split, if your employer allows it — route a fixed percentage directly to savings. If not, set an automatic transfer for the day after payday, not the day before, so it never competes with your bill money.",
      "Layer in a second automation for irregular income: round-up transfers or a percentage-of-deposit rule for freelance or side hustle income, since that money was never budgeted for spending in the first place.",
      "Name your savings accounts by goal — Emergency Fund, Travel, Car Repair — instead of leaving them generic. A named goal is harder to raid than an anonymous balance.",
    ],
  },
  {
    slug: "freelance-writing-first-client-30-days",
    title: "Freelance Writing: Landing Your First Client in 30 Days",
    excerpt:
      "A realistic, no-fluff timeline for going from zero portfolio to a paid freelance writing client in a month.",
    category: "Make Money Online",
    readTime: "8 min read",
    date: "2026-04-22",
    cover: "from-charcoal to-green",
    content: [
      "Week one is about proof, not pitching. Write three sample pieces in the niche you want to work in — even unpublished, a portfolio needs something to show. Publish them on a free platform if you don't have a site yet.",
      "Week two is outreach, and it's a numbers game. Aim for ten personalized pitches to small businesses or publications in your niche, referencing something specific about their content, not a generic template.",
      "Week three, follow up once — politely, briefly — on anything that went quiet. Most replies come from the follow-up, not the first message, because inboxes are noisy.",
      "Week four, price your first project slightly lower than you think it's worth. The goal isn't maximizing this invoice, it's getting a testimonial and a repeat client, both of which are worth more than the rate difference.",
    ],
  },
  {
    slug: "side-hustle-ideas-under-five-hours-a-week",
    title: "7 Side Hustle Ideas That Fit Into 5 Hours a Week",
    excerpt:
      "For people with a full-time job and not much spare time — options that don't require quitting anything to start.",
    category: "Side Hustles",
    readTime: "6 min read",
    date: "2026-04-03",
    cover: "from-gold to-green-light",
    content: [
      "Not every side hustle needs to become a business. Some of the best ones fit into the margins of a normal week and just quietly add income on top of what you already earn.",
      "Selling unused items, tutoring one or two students online, proofreading, pet sitting through an app, and renting out rarely-used gear are all low-setup options that can run on two or three hours a week.",
      "The common thread is low time-to-first-dollar: you want something that pays out within the first week or two, not a six-month build. That keeps motivation high while you figure out if it's worth scaling.",
      "Pick one, not three. Side hustles fail more often from scattered effort than from a bad idea — five focused hours beats fifteen split three ways.",
    ],
  },
  {
    slug: "money-mindset-shift-that-changed-everything",
    title: "The Money Mindset Shift That Changed Everything",
    excerpt:
      "Reframing saving from 'restriction' to 'buying back your future time' — and why the language you use matters more than you'd think.",
    category: "Mindset",
    readTime: "5 min read",
    date: "2026-03-14",
    cover: "from-green to-gold-dark",
    content: [
      "Language shapes behavior more than most budgeting apps do. 'I can't afford that' feels like a wall. 'That's not what this money is for right now' feels like a choice you're making on purpose.",
      "The same reframe works for saving itself: instead of thinking of it as not spending, think of it as buying back future hours — the ones you won't have to trade for a paycheck later.",
      "This isn't about pretending money stress isn't real. It's about noticing that the story you tell yourself about a purchase changes how easy the decision feels, every single time.",
      "Try it for one week: before any non-essential purchase, finish the sentence 'this money is going toward...' out loud. It turns spending back into a decision instead of a reflex.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3) {
  const current = getPostBySlug(slug);
  if (!current) return posts.slice(0, count);
  return posts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(posts.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, count);
}

export const categories = [
  "Budgeting",
  "Saving",
  "Make Money Online",
  "Side Hustles",
  "Mindset",
] as const;
