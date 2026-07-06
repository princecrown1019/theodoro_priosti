export const profile = {
  name: "Theodoro De Almeida",
  role: "Full-Stack Software Engineer",
  tagline:
    "I build scalable web platforms and AI-integrated products — from React front ends to type-safe Node.js APIs.",
  location: "São Paulo, Brazil · Remote",
  email: "theodoropriosti@gmail.com",
  linkedin: "https://www.linkedin.com/in/theodoro-p",
};

export const stats = [
  { value: "10+", label: "Years shipping production software" },
  { value: "Full-Stack", label: "Front end to APIs & infrastructure" },
  { value: "AI-Integrated", label: "LLM features in real products" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React 18+", "Next.js 14+", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "tRPC / GraphQL", "NestJS", "PostgreSQL", "Redis"],
  },
  {
    title: "AI / LLM",
    items: ["OpenAI", "Anthropic Claude", "LangChain", "RAG", "Vector Search"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "CI/CD", "Edge Functions"],
  },
];

export const currentRole = {
  company: "CodeStream Labs",
  companyUrl: "https://www.linkedin.com/in/theodoro-p",
  title: "Lead Full-Stack Software Engineer",
  period: "Mar 2023 — Dec 2025 · US, Remote",
  summary:
    "Led end-to-end delivery of a consumer-facing home-search platform, consolidating four legacy REST endpoints into a single typed GraphQL gateway and setting the engineering standards across three squads.",
  highlights: [
    "Owned a React + TypeScript front end backed by a GraphQL gateway, cutting client round-trips and simplifying feature development.",
    "Integrated GPT-4o natural-language search into the product, reducing support tickets by 35%.",
    "Set systems-design and code-quality standards, mentoring five engineers and lifting test coverage across critical services.",
  ],
  stack: ["React", "TypeScript", "GraphQL", "Node.js", "Go", "PostgreSQL", "AWS"],
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  link: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    title: "Unified Property Search Platform",
    blurb:
      "A mobile-first property discovery app with real-time listing search, map-based filtering, and saved-search alerts, powered by a unified GraphQL gateway over Node.js and Go microservices.",
    tags: ["React", "TypeScript", "GraphQL", "Node.js", "Go", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.linkedin.com/in/theodoro-p",
    linkLabel: "View case study",
  },
  {
    title: "Multi-Agent Research Assistant",
    blurb:
      "An agentic research tool built with LangGraph, Tavily, and React that orchestrates LLM agents to gather, verify, and synthesize sources — cutting manual research time by 80%.",
    tags: ["LangGraph", "Anthropic", "React", "RAG", "Python"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.linkedin.com/in/theodoro-p",
    linkLabel: "View project",
  },
  {
    title: "Listing Workflow Automation Toolkit",
    blurb:
      "An internal automation platform orchestrating multi-step publication workflows with a CLI that scaffolds new microservices — built-in auth, structured logging, and test templates included.",
    tags: ["Node.js", "Microservices", "REST", "CI/CD", "Docker"],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.linkedin.com/in/theodoro-p",
    linkLabel: "View project",
  },
];
