export interface Project {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  color: string;
  overview: string;
  challenge: string;
  process: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
  lessons: string[];
  teamSize: string;
}

export const profile = {
  name: "Phuong Nguyen",
  title: "Product Team Lead",
  subtitle:
    "10 years in SaaS, HealthTech & B2B Marketplace. Building products with AI.",
  about:
    "I build products from scratch, ship AI features into real products, manage product teams of 3-8 people and work with cross-functional teams up to 15 people.",
  linkedin: "https://linkedin.com/in/phuongny829",
  email: "gabinguyen23@gmail.com",
  tools: [
    "Jira",
    "Figma",
    "Notion",
    "Product Board",
    "GA4",
    "GTM",
    "MS Clarity",
    "CleverTap",
    "GitLab",
    "Confluence",
    "LLM Tools",
  ],
  frameworks: ["OKR", "MoSCoW", "RICE", "Scrum", "Design Thinking"],
  certifications: [
    "IBM Product Manager (2023)",
    "Google UX Design (2022)",
    "PM for AI & Data Science (2025)",
  ],
};

export const projects: Project[] = [
  {
    slug: "arobid",
    title: "B2B Marketplace Platform",
    company: "Arobid Technology",
    role: "Product Team Lead",
    period: "May 2025 - Mar 2026",
    tagline: "Building a B2B marketplace from scratch with AI-powered features",
    color: "#2563EB",
    overview:
      "Led the creation of a B2B Marketplace platform from the ground up — defining requirements, managing the backlog, and coordinating cross-functional delivery. The platform includes AI-powered features for company data collection, buyer-supplier matching, and scoring systems.",
    challenge:
      "Vietnam's B2B trade still relies heavily on manual processes and fragmented channels. There was no unified platform that could intelligently connect buyers and suppliers while automating verification and matching.",
    process: [
      "Market & competitor research for B2B platforms in SEA",
      "Define product vision and MVP scope with stakeholders",
      "Design AI-powered features: URL crawler, OCR for business licenses, matching algorithm",
      "Build and manage backlog with 3-person product team",
      "Coordinate cross-functional team of 10 across engineering, design, and operations",
      "Iterative delivery with weekly releases and data-driven prioritization",
    ],
    solutions: [
      {
        title: "AI Company Data Collection",
        description:
          "Built URL crawler + OCR system to automatically extract and verify business information from company websites and official documents, reducing manual data entry by 80%.",
      },
      {
        title: "Smart Buyer-Supplier Matching",
        description:
          "Developed an AI matching engine that analyzes buyer requirements against supplier capabilities, industry, certifications, and capacity to suggest optimal matches.",
      },
      {
        title: "Product & Company Scoring",
        description:
          "Created a scoring system that evaluates product quality and company reliability based on multiple data points, helping buyers make informed decisions.",
      },
      {
        title: "End-to-End Platform",
        description:
          "Designed the full marketplace experience: onboarding, KYB verification, product listing, search & discovery, and RFQ management.",
      },
    ],
    results: [
      { metric: "+30%", label: "Operation efficiency" },
      { metric: "-40%", label: "Internal issues" },
      { metric: "+25%", label: "Main flow completion" },
    ],
    lessons: [
      "Building 0-to-1 requires ruthless prioritization — ship the core loop first, polish later.",
      "AI features need clear fallback paths. When the model is wrong, users must have manual override.",
      "Cross-functional alignment is harder than the tech — invest in shared context early.",
    ],
    teamSize: "3 product, 10 cross-functional",
  },
  {
    slug: "haravan",
    title: "Social Commerce Platform",
    company: "Haravan Technology",
    role: "Product Owner",
    period: "Oct 2020 - Dec 2024",
    tagline: "Scaling multi-module commerce products for B2B merchants",
    color: "#059669",
    overview:
      "Owned multiple product modules — Live Chat, Order Management, and CRM — serving B2B merchants. Set roadmaps based on business OKRs, shipped 15-20 features per month, and worked with a cross-functional team of 15 people across multiple squads.",
    challenge:
      "Merchants needed a unified platform to manage conversations, orders, and customer relationships across multiple sales channels. Fragmented tools led to high operation costs and poor customer experience.",
    process: [
      "Deep user research with merchants of different scales",
      "Define success metrics aligned with business OKRs",
      "Prioritize backlog using MoSCoW and RICE frameworks",
      "Track user behavior with GA, GTM, and MS Clarity",
      "Ship 15-20 features monthly across multiple squads",
      "Continuous A/B testing and conversion optimization",
    ],
    solutions: [
      {
        title: "Unified Live Chat",
        description:
          "Built an omnichannel live chat that consolidates Facebook, Zalo, Instagram, and website conversations into a single inbox for merchants.",
      },
      {
        title: "Order Management System",
        description:
          "Designed streamlined order processing workflows handling creation, fulfillment, shipping integration, and returns across all sales channels.",
      },
      {
        title: "Merchant CRM",
        description:
          "Created customer segmentation and lifecycle management tools that help merchants understand buying patterns and automate re-engagement.",
      },
      {
        title: "Analytics-Driven Iteration",
        description:
          "Implemented comprehensive tracking (GA4, GTM, MS Clarity) to measure feature adoption, identify drop-off points, and prioritize improvements.",
      },
    ],
    results: [
      { metric: "+35%", label: "GMV per merchant" },
      { metric: "+25%", label: "New customer conversion" },
      { metric: "-50%", label: "Operation & ads cost" },
    ],
    lessons: [
      "At scale, small UX improvements compound — a 2% conversion lift across thousands of merchants is massive.",
      "Analytics without action is just reporting. Always pair insights with a prioritized backlog item.",
      "Multi-squad coordination needs clear ownership boundaries and shared success metrics.",
    ],
    teamSize: "15 cross-functional, multi-squad",
  },
  {
    slug: "qa-solutions",
    title: "Hospital Information System",
    company: "QA Solutions",
    role: "Product Owner & BA",
    period: "Nov 2015 - Jun 2020",
    tagline:
      "Building healthcare systems that serve 10,000+ patients monthly",
    color: "#DC2626",
    overview:
      "Defined requirements and designed solutions for core hospital system modules: appointment booking, Electronic Medical Records (EMR), payment processing, inventory management, and reporting. Coordinated a team of 13 across development, testing, and design.",
    challenge:
      "Hospitals in Vietnam were running on paper-based or fragmented systems. Patient data was siloed, scheduling was manual, and compliance with Ministry of Health regulations was inconsistent.",
    process: [
      "Shadow doctors, nurses, and admin staff to understand real workflows",
      "Map end-to-end patient journeys from booking to discharge",
      "Work with hospital management to define compliance requirements",
      "Design modular system architecture for different hospital sizes",
      "Coordinate team of 13 (8 devs, 4 testers, 1 designer)",
      "Phased rollout with extensive UAT involving medical staff",
    ],
    solutions: [
      {
        title: "Appointment Booking",
        description:
          "Online and kiosk-based booking system that reduced wait times and optimized doctor schedules based on specialty and availability.",
      },
      {
        title: "Electronic Medical Records",
        description:
          "Structured EMR system with templates for different specialties, supporting the full clinical workflow from examination to prescription.",
      },
      {
        title: "Payment & Insurance",
        description:
          "Integrated payment processing with insurance claim automation, reducing billing errors and speeding up reimbursement cycles.",
      },
      {
        title: "Inventory & Reporting",
        description:
          "Real-time medical supply tracking with automated reorder alerts, plus compliance reporting aligned with Ministry of Health standards.",
      },
    ],
    results: [
      { metric: "10K+", label: "Patient visits per month" },
      { metric: "99.9%", label: "System uptime" },
      { metric: "100%", label: "MoH compliance" },
    ],
    lessons: [
      "Healthcare software has zero margin for error — invest heavily in edge case testing.",
      "Domain experts (doctors, nurses) are the best QA. Include them early and often.",
      "Compliance is not a checklist — it is a design constraint that shapes every decision.",
    ],
    teamSize: "13 people (8 dev, 4 QA, 1 designer)",
  },
  {
    slug: "laztar",
    title: "Multi-Product Consulting",
    company: "Laztar LLC",
    role: "Business Solution Manager",
    period: "Apr 2025 - Present",
    tagline:
      "Building products from scratch across Sports, MMO, and Outsourcing",
    color: "#7C3AED",
    overview:
      "Leading product development from scratch across multiple business domains — Sports Booking, MMO platforms, and Outsourcing services. Analyzing business needs, building business cases, defining go-to-market strategies, and managing a product team of 8.",
    challenge:
      "A growing company expanding into multiple verticals simultaneously needed structured product thinking to avoid scattered efforts and ensure each product had a viable path to market.",
    process: [
      "Analyze business opportunities and validate product-market fit for each vertical",
      "Build business cases with revenue models and competitive positioning",
      "Define go-to-market strategy tailored to each product's market",
      "Establish shared product processes across diverse product lines",
      "Manage team of 8 across multiple concurrent product initiatives",
      "Improve internal coordination for multi-team delivery",
    ],
    solutions: [
      {
        title: "Product Portfolio Strategy",
        description:
          "Created a structured framework for evaluating, prioritizing, and sequencing product launches across different business verticals.",
      },
      {
        title: "Standardized Product Process",
        description:
          "Established consistent product development workflows — from discovery to delivery — that work across diverse product types.",
      },
      {
        title: "Go-to-Market Playbooks",
        description:
          "Defined market entry strategies for each product vertical, including target segments, pricing models, and launch sequences.",
      },
      {
        title: "Cross-Team Coordination",
        description:
          "Redesigned internal processes to reduce handoff friction and improve visibility across multiple product streams.",
      },
    ],
    results: [
      { metric: "+40%", label: "Delivery stability" },
      { metric: "8", label: "Team members managed" },
      { metric: "3+", label: "Product verticals" },
    ],
    lessons: [
      "Multi-product management requires saying no more than saying yes — focus beats breadth.",
      "Shared processes only work when they are simple enough for every team to adopt without friction.",
      "Business case rigor upfront saves months of wasted development downstream.",
    ],
    teamSize: "8 product team members",
  },
];
