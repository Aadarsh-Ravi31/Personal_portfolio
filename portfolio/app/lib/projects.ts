// Centralized project content. Swapping in the real project set later is an
// edit to THIS file only — no component or routing changes required.

export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectLink {
  label: string; // "Live", "GitHub", "Case study"
  href: string;
  external?: boolean;
}

export interface CaseStudySection {
  heading?: string;
  body: string;
  points?: string[];
  image?: ImageRef;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string; // "campusnavbot" -> /work/campusnavbot
  title: string;
  tagline: string; // short one-liner for cards
  description: string; // used in generateMetadata + detail hero
  role: string;
  year: string;
  tech: string[];
  cover: ImageRef;
  gallery?: ImageRef[];
  links: ProjectLink[];
  featured?: boolean;
  metrics?: Metric[];
  demoEmbedUrl?: string; // e.g. a Google Drive /preview URL for an embedded player
  architectureImage?: string; // path to a full-width architecture diagram
  body: CaseStudySection[];
}

// NOTE: placeholder content migrated from the old Projects.tsx array.
// Real, AI/data-focused projects get swapped in during a later content pass.
export const projects: Project[] = [
  {
    slug: "podcastiq",
    title: "PodcastIQ",
    tagline: "AI-powered podcast intelligence platform",
    description:
      "An AI platform that makes podcast audio searchable, analyzable, and verifiable — semantic search across 290+ episodes powered by a 9-agent LangGraph system, a Neo4j knowledge graph, and Snowflake Cortex.",
    role: "AI / Data Engineer",
    year: "2025",
    tech: [
      "LangGraph",
      "Snowflake Cortex",
      "Neo4j",
      "dbt",
      "RAG",
      "Embeddings",
      "Streamlit",
      "Python",
    ],
    cover: {
      src: "/images/podcastiq.jpg",
      alt: "PodcastIQ — AI podcast intelligence platform",
      width: 1920,
      height: 1280,
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Aadarsh-Ravi31/PodcastIQ",
        external: true,
      },
      {
        label: "Slide Deck",
        href: "/podcastiq-deck.html",
        external: true,
      },
    ],
    featured: true,
    demoEmbedUrl:
      "https://drive.google.com/file/d/1d0jUIje5mElE8_u1BpUbYwlpnGoE9ZgP/preview",
    architectureImage: "/images/podcastiq-architecture.svg",
    metrics: [
      { value: "286", label: "Episodes indexed" },
      { value: "13.8K", label: "Searchable chunks" },
      { value: "9", label: "LangGraph agents" },
      { value: "27.8K", label: "Graph relationships" },
    ],
    body: [
      {
        heading: "The Problem",
        body: "Podcasts hold thousands of hours of expert insight, but almost none of it is searchable. You can't ask a question across episodes, compare what different guests said, or verify a claim — the knowledge is locked inside audio. PodcastIQ makes that content queryable, comparable, and verifiable.",
      },
      {
        heading: "What I Built",
        body: "An end-to-end pipeline that turns raw transcripts into an intelligent, queryable knowledge base:",
        points: [
          "Four-layer Snowflake warehouse (RAW → STAGING → CURATED → SEMANTIC), transformed and tested with dbt",
          "Embeddings and summaries via Snowflake Cortex, powering semantic search over 13,807 chunks",
          "A Neo4j knowledge graph modeling claims and their relationships (10,610 nodes, 27,807 edges)",
          "A 9-agent LangGraph system routing each query to search, comparison, insights, and fact-checking agents",
          "A Streamlit app that links every answer back to the exact timestamp in the source episode",
        ],
      },
      {
        heading: "Key Decisions",
        body: "The interesting trade-offs — and why I made them:",
        points: [
          "Kept embeddings and search inside Snowflake with Cortex to avoid moving data across systems and keep the stack simple",
          "Chose Neo4j over a relational schema because the real value is in how claims relate and evolve — a graph problem, not a table problem",
          "Used LangGraph's multi-agent routing so each query type follows a specialized path instead of one overloaded prompt",
          "Added hybrid fact-checking (LLM reasoning + live web search) so claims are grounded in evidence, not just model output",
        ],
      },
      {
        heading: "Challenges",
        body: "Three hard problems — all solved:",
        points: [
          "Cypher generation failures: LLaMA 70b produced valid-looking but broken Cypher ~30% of the time, so graph queries failed at Neo4j. I built a retry loop that feeds Neo4j's exact error back to the model to self-correct — the 2nd attempt succeeds ~95% of the time.",
          "Speaker attribution without audio: the pipeline never downloads audio (by design), which ruled out acoustic diarization. I built a two-tier text approach that infers guests from episode titles — which also names the guest, something diarization can't do.",
          "Temporal skew: extraction over-sampled 2024–25, so trend analysis found almost nothing. I redesigned the extraction layer with year-based API filtering (publishedAfter / publishedBefore) to force balanced 2022–2024 coverage.",
        ],
      },
      {
        heading: "Results",
        body: "The platform answers natural-language questions across 286 episodes with timestamp-precise citations. Temporal claim tracking surfaces how expert opinions shift over time, and hybrid fact-checking pairs LLM reasoning with live web evidence to flag and support claims.",
      },
      {
        heading: "What's Next",
        body: "Extending the corpus beyond a single podcast, adding near-real-time ingestion for new episodes, and building an evaluation harness to measure and improve agent answer quality over time.",
      },
    ],
  },
  {
    slug: "costco-quant-analysis",
    title: "Quantitative Trading Analysis on Costco Stock",
    tagline: "Data-driven trading signal analysis",
    description:
      "An exploratory quantitative analysis of Costco stock, testing trading strategies against historical market data.",
    role: "Data Analyst",
    year: "2024",
    tech: ["Python", "Pandas", "NumPy", "Jupyter"],
    cover: {
      src: "/images/project2.png",
      alt: "Quantitative trading analysis project",
      width: 1200,
      height: 800,
    },
    links: [],
    featured: true,
    body: [
      {
        body: "Placeholder case-study content for the quantitative trading analysis project.",
      },
    ],
  },
  {
    slug: "openbid",
    title: "OpenBid",
    tagline: "Secure auction web app for transparent, real-time bidding",
    description:
      "A web application enabling transparent, real-time auction bidding with a focus on security and fairness.",
    role: "Full-stack Developer",
    year: "2023",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    cover: {
      src: "/images/project3.png",
      alt: "OpenBid auction app project",
      width: 1200,
      height: 800,
    },
    links: [],
    featured: true,
    body: [
      {
        body: "Placeholder case-study content for the OpenBid auction application.",
      },
    ],
  },
  {
    slug: "healthhub-360",
    title: "HealthHub 360",
    tagline: "Online medical management system",
    description:
      "An online medical management system for coordinating patients, appointments, and records in one place.",
    role: "Full-stack Developer",
    year: "2023",
    tech: ["Angular", ".NET Core", "PostgreSQL"],
    cover: {
      src: "/images/project4.png",
      alt: "HealthHub 360 medical management project",
      width: 1200,
      height: 800,
    },
    links: [],
    featured: true,
    body: [
      {
        body: "Placeholder case-study content for the HealthHub 360 medical management system.",
      },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAllSlugs = (): string[] => projects.map((p) => p.slug);

// Adjacent projects for prev/next navigation on detail pages.
export const getAdjacentProjects = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i < projects.length - 1 ? projects[i + 1] : undefined,
  };
};
