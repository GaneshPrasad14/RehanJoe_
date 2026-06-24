export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  outcome: string;
  size: "large" | "medium" | "small"; // For bento box grid variations
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  metrics: string;
}

export interface EngagementOption {
  id: string;
  title: string;
  description: string;
  tag: string;
  duration: string;
}

export const CHALLENGES: ChallengeItem[] = [
  {
    id: "stall",
    title: "Revenue Has Stalled",
    description: "Growth has slowed despite a strong product. Revenue targets are missed. Expansion is harder than expected. Every quarter feels uncertain.",
    outcome: "A clear growth strategy and revenue system designed for scale.",
    size: "large",
    tag: "STAGNATION RISK"
  },
  {
    id: "pipeline",
    title: "Pipeline Is Unpredictable",
    description: "Opportunities arrive inconsistently. Forecasting becomes impossible. Growth becomes reactive.",
    outcome: "A predictable pipeline engine that supports sustainable revenue growth.",
    size: "medium",
    tag: "DEMAND INEFFICIENCY"
  },
  {
    id: "gtm",
    title: "Go-To-Market Isn't Working",
    description: "The market isn't responding the way it should. Positioning lacks clarity. Customer acquisition is expensive. Sales cycles are too long.",
    outcome: "Clear positioning, stronger market traction, and faster revenue growth.",
    size: "medium",
    tag: "POSITIONING MISALIGNMENT"
  },
  {
    id: "pmf",
    title: "PMF Isn't Translating Into Scale",
    description: "Customers see value. Growth remains inconsistent. The company has traction but lacks a repeatable growth model.",
    outcome: "A scalable commercial framework designed for expansion.",
    size: "large",
    tag: "SCALING INERTIA"
  },
  {
    id: "leaking",
    title: "Revenue Is Leaking Across The Funnel",
    description: "Opportunities are being lost. Conversion rates remain low. Deals stall. Pipeline velocity slows.",
    outcome: "Higher win rates, improved conversion, and greater revenue efficiency.",
    size: "small",
    tag: "FUNNEL LEAKAGE"
  },
  {
    id: "forecasting",
    title: "Forecasting Lacks Accuracy",
    description: "Leadership lacks visibility into future revenue. Decisions are made without confidence.",
    outcome: "Reliable forecasting and revenue intelligence.",
    size: "small",
    tag: "VISIBILITY GAP"
  },
  {
    id: "people",
    title: "Growth Depends On A Few People",
    description: "Critical revenue activities sit with a small number of individuals. Scaling becomes difficult.",
    outcome: "Repeatable systems that support growth across teams.",
    size: "medium",
    tag: "PERSONNEL LOCK-IN"
  },
  {
    id: "expansion",
    title: "Expansion Efforts Are Underperforming",
    description: "New markets, products, or initiatives fail to generate expected returns.",
    outcome: "Structured expansion strategies with measurable commercial outcomes.",
    size: "medium",
    tag: "EXPANSION UNCERTAINTY"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "growth-strategy",
    title: "Revenue Growth Strategy",
    description: "Aligning your product strength with systemic commercial strategy to break through stagnation plateaus.",
    details: [
      "Rigorous unit economics & customer lifetime value mapping",
      "Dynamic pricing structure and monetization alignment",
      "Core value proposition re-architecture"
    ],
    metrics: "+140% YOY Avg Growth"
  },
  {
    id: "gtm-strategy",
    title: "Go-To-Market Strategy",
    description: "Translating value propositions into clear, rapid customer acquisition playbooks.",
    details: [
      "Ideal Customer Profile (ICP) crystal definition",
      "Value-based messaging matrices for sales teams",
      "Multi-channel distribution strategy formulation"
    ],
    metrics: "-35% CAC Reduction"
  },
  {
    id: "rev-architecture",
    title: "Revenue Architecture",
    description: "Designing end-to-end organizational designs and data streams for flawless commercial alignment.",
    details: [
      "Cross-functional alignment (Product, Marketing, Sales, Success)",
      "Growth metrics, attribution modeling, and tracking frameworks",
      "Incentive structures & commission plans design"
    ],
    metrics: "100% Funnel Alignment"
  },
  {
    id: "pipeline-gen",
    title: "Pipeline & Demand Generation",
    description: "Building automated, predictable systems to keep outbound and inbound channels flowing consistently.",
    details: [
      "Account-Based Marketing (ABM) framework design",
      "Inbound content engine development guidance",
      "High-velocity outbound sequence structures"
    ],
    metrics: "3.2x Pipeline Velocity"
  },
  {
    id: "sales-opt",
    title: "Sales Performance Optimization",
    description: "Turning sales forces into high-conversion machinery via training, playbooks, and systems.",
    details: [
      "Sales playbooks & custom qualification matrices (BANT/MEDDPICC)",
      "High-converting demo structures & objection handling frameworks",
      "Manager coaching & leadership cadence implementation"
    ],
    metrics: "+28% Close-Rate Lift"
  },
  {
    id: "rev-ops",
    title: "Revenue Operations",
    description: "Establishing single-source-of-truth dashboards and process automation to remove friction.",
    details: [
      "Tech-stack consolidation and API mapping",
      "Predictive analytics & multi-stage forecasting models",
      "Automated pipeline leakage alarms and reporting"
    ],
    metrics: "98% Forecast Accuracy"
  },
  {
    id: "market-expansion",
    title: "Market Expansion Strategy",
    description: "Mitigating risks and accelerating commercial capture when entering new regions or launching new suites.",
    details: [
      "New geography risk assessment & TAM modeling",
      "Partner program architecture and channel enablement",
      "Localized launch playbook execution guidance"
    ],
    metrics: "4mo Average Entry Speed"
  },
  {
    id: "fractional-cro",
    title: "Fractional CRO",
    description: "Hands-on, senior executive leadership inside your team without the full-time search overhead.",
    details: [
      "Direct commercial team leadership and execution oversight",
      "Weekly strategic leadership and stakeholder reporting",
      "Scale readiness audit and permanent CRO search transitioning"
    ],
    metrics: "Immediate Executive Impact"
  }
];

export const ENGAGEMENTS: EngagementOption[] = [
  {
    id: "audit",
    title: "Revenue Audit",
    description: "A comprehensive strategic assessment of your growth engine. We deep-dive into your analytics, talk to your sales reps, review GTM alignment, and identify critical bottlenecks, untapped opportunities, and high-priority action items.",
    tag: "DIAGNOSTIC",
    duration: "2-3 Weeks"
  },
  {
    id: "gtm-sprint",
    title: "GTM Sprint",
    description: "Rapid, intensive go-to-market optimization designed to resolve positioning misalignment, shorten long sales cycles, and accelerate commercial momentum for current pipeline opportunities.",
    tag: "ACCELERATOR",
    duration: "4-6 Weeks"
  },
  {
    id: "fractional-cro",
    title: "Fractional CRO",
    description: "Ongoing, highly collaborative strategic and operational leadership. I act as an integrated member of your executive suite, running your revenue meetings, managing your team, and building your systems.",
    tag: "EXECUTIVE LEADERSHIP",
    duration: "6+ Months"
  },
  {
    id: "advisor",
    title: "Strategic Advisor",
    description: "Long-term advisory and advisory board partnership for ambitious, growth-oriented technology companies seeking structured commercial guidance, monthly strategy audits, and high-level growth coaching.",
    tag: "PARTNERSHIP",
    duration: "Ongoing retainer"
  }
];
