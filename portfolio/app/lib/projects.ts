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
    slug: "sage-compliance-assistant",
    title: "SAGE",
    tagline: "Secure AI compliance assistant, hardened against prompt injection",
    description:
      "SAGE (Secure AI Governance Engine) answers employee policy questions with grounded, auditable, citation-backed responses — and defends against prompt-injection attacks with a 100% block rate.",
    role: "AI Engineer",
    year: "2025",
    tech: [
      "GPT-4o",
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Streamlit",
      "Docker",
      "Python",
    ],
    cover: {
      src: "/images/sage.jpg",
      alt: "SAGE — secure AI compliance assistant",
      width: 1792,
      height: 1024,
    },
    links: [
      {
        label: "Live Demo",
        href: "https://sage-compliance-assistant.streamlit.app/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Aadarsh-Ravi31/SAGE-Compliance-Assistant",
        external: true,
      },
    ],
    featured: true,
    architectureImage: "/images/sage-architecture.svg",
    metrics: [
      { value: "100%", label: "Attack block rate" },
      { value: "91%+", label: "Risk accuracy" },
      { value: "52", label: "Injection patterns" },
      { value: "8.5/10", label: "LLM-judge score" },
    ],
    body: [
      {
        heading: "The Problem",
        body: "Employees misread dense policy documents and lean on informal guidance, creating real regulatory exposure. Generic chatbots hallucinate policy details, and routing every question through legal doesn't scale. SAGE gives grounded, auditable compliance answers — and, critically, stays secure when users try to manipulate it.",
      },
      {
        heading: "What I Built",
        body: "An 8-layer security-and-reasoning pipeline that turns policy PDFs into a trustworthy assistant:",
        points: [
          "Layered request flow: query sanitization → injection detection → grounding gate → query expansion → hybrid RAG → ReAct agent → post-processing → audit logging",
          "Hybrid RAG retrieval (0.6 × semantic + 0.4 × keyword) over section-level chunks, cutting prompt tokens ~80% vs. injecting the full corpus",
          "A LangGraph ReAct agent (GPT-4o) with tools for policy search, cross-references, conflict detection, and risk assessment",
          "Structured answers with citations, a High/Medium/Low risk level, a 0–100 confidence score, and policy-conflict flags",
          "Bring-your-own-documents: upload your own policy PDFs to query a custom corpus, or explore 5 built-in demo organizations",
          "Production layer: 6-turn conversation memory, JSON audit trails, and a Streamlit chat UI",
        ],
      },
      {
        heading: "Key Decisions",
        body: "The trade-offs — and why:",
        points: [
          "Chose a ReAct agent over direct prompting so every answer traces back to tool-grounded retrieval instead of free-form generation",
          "Hardcoded 5 conflict rules (CF-001–CF-005) rather than trusting the model to surface policy tensions consistently",
          "Used hybrid semantic + keyword scoring to catch compliance jargon that pure vector search misses",
          "Fine-tuned gpt-4o-mini for ~10× lower cost, with an LLM-as-Judge scoring answers across 5 dimensions as a quality gate",
        ],
      },
      {
        heading: "Challenges",
        body: "The hard parts:",
        points: [
          "Prompt-injection defense: built a 52-pattern pipeline across 9 attack families plus 6 defensive measures — reaching a 100% block rate (37/37 vectors) while still passing 100% of legitimate queries (25/25)",
          "Output instability: 6 phrasing variations and a temperature sweep exposed 8 instabilities; resolving them lifted format compliance from 52% to 85%",
          "Retrieval gaps: 57 curated synonym mappings bridged the gap between how employees phrase questions and how policies are written",
        ],
      },
      {
        heading: "Results",
        body: "Across a 57-case evaluation set, SAGE reaches 91%+ risk-classification accuracy, ≥8.5/10 on LLM-as-Judge, 100% citation groundedness, and an 82/100 average confidence — while blocking 100% of adversarial attacks. Backed by 28 unit tests and deployable via Docker on Google Cloud Run.",
      },
      {
        heading: "What's Next",
        body: "Multi-document conflict resolution across larger policy corpora, richer analytics on flagged compliance risks, and continuous adversarial red-teaming built into the evaluation harness.",
      },
    ],
  },
  {
    slug: "reflexai",
    title: "ReflexAI",
    tagline: "AI stock & macro-risk analysis grounded in Soros's reflexivity",
    description:
      "ReflexAI pairs quantitative financial-risk diagnostics with retrieval-augmented AI reasoning grounded in George Soros's theory of reflexivity — analyzing how market feedback loops amplify financial fragility.",
    role: "AI Engineer",
    year: "2025",
    tech: [
      "Python",
      "Google Gemini",
      "RAG",
      "ChromaDB",
      "Sentence-Transformers",
      "yfinance",
      "Pandas",
      "Vercel",
    ],
    cover: {
      src: "/images/reflexai.jpg",
      alt: "ReflexAI — AI stock and macro risk analysis platform",
      width: 1792,
      height: 1024,
    },
    links: [
      {
        label: "Live Demo",
        href: "https://reflex-ai-ai-powered-stock-and-macr.vercel.app/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Aadarsh-Ravi31/ReflexAI_AI-Powered_Stock_And_Macro_Risk_Analysis_Platform",
        external: true,
      },
    ],
    featured: true,
    architectureImage: "/images/reflexai-architecture.svg",
    metrics: [
      { value: "5", label: "Analysis layers" },
      { value: "3", label: "Risk diagnostics" },
      { value: "2", label: "AI reasoning modes" },
      { value: "3", label: "REST endpoints" },
    ],
    body: [
      {
        heading: "The Problem",
        body: "Most stock tools output numbers or buy/sell signals with no reasoning about why markets become fragile. ReflexAI takes a different angle — grounded in George Soros's theory of reflexivity (perception → price → fundamentals) — analyzing how feedback loops amplify financial risk, pairing hard financials with AI reasoning that stays philosophically consistent.",
      },
      {
        heading: "What I Built",
        body: "A dual-lane platform that fuses quantitative reality with grounded AI reasoning:",
        points: [
          "Financial analysis: pulls and normalizes income statements, balance sheets, and cash flows for any public company via yfinance",
          "Risk diagnostics: computes liquidity, leverage, and profitability-resilience metrics designed to expose systemic fragility — not just report ratios",
          "Dual AI reasoning: a direct Gemini mode and a RAG mode grounded in a curated Soros knowledge corpus (Sentence-Transformer embeddings + ChromaDB)",
          "Ticker-aware context injection so the LLM reasons over a live market snapshot without becoming a trading bot",
          "A three-endpoint REST API (financials, chatbot, ragbot) behind a web UI deployed on Vercel",
        ],
      },
      {
        heading: "Key Decisions",
        body: "The trade-offs — and why:",
        points: [
          "Made RAG the core so answers stay grounded in Soros's actual framework instead of confident hallucination",
          "Used annual (not intraday) data to strip trading noise and focus on structural, macro risk",
          "Modeled leverage as a non-linear risk amplifier rather than a static ratio, separating accounting profitability from economic durability",
          "Kept ticker detection conservative to avoid false positives injecting the wrong market context",
        ],
      },
      {
        heading: "Challenges",
        body: "The hard parts:",
        points: [
          "Grounding vs. fluency: tuning retrieval so responses stay faithful to the corpus while still reading naturally",
          "Serverless vector persistence: the ChromaDB index depends on filesystem state, which is tricky on Vercel's ephemeral environment",
          "Situated reasoning: injecting just enough market context to be relevant without turning the assistant into a signal generator",
        ],
      },
      {
        heading: "Results",
        body: "An interpretable research tool that pairs quantitative risk diagnostics with grounded, Soros-style reasoning — letting users explore how narrative and fundamentals feed back on each other, live at the deployed site.",
      },
      {
        heading: "What's Next",
        body: "Agent-based macro simulations, scenario stress-testing, and portfolio-level systemic-risk views.",
      },
    ],
  },
  {
    slug: "imdb-analytics-pipeline",
    title: "IMDb Analytics Pipeline",
    tagline: "End-to-end data pipeline & BI dashboards on 200M+ IMDb records",
    description:
      "A production-style data engineering pipeline that ingests, profiles, cleans, and models ~200 million IMDb records into a Snowflake warehouse powering self-service Power BI and Tableau dashboards.",
    role: "Data Engineer (team of 2)",
    year: "2025",
    tech: [
      "Azure Data Factory",
      "Snowflake",
      "Alteryx",
      "Power BI",
      "Tableau",
      "Python",
      "ER Studio",
    ],
    cover: {
      src: "/images/imdb.jpg",
      alt: "IMDb analytics data pipeline",
      width: 1536,
      height: 1024,
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Aadarsh-Ravi31/IMDb_Analytics_FullStack_Data_Pipeline_And_Dashboarding",
        external: true,
      },
    ],
    featured: true,
    architectureImage: "/images/imdb-architecture.svg",
    metrics: [
      { value: "200M+", label: "Records processed" },
      { value: "7", label: "Source datasets" },
      { value: "91M", label: "Cast/crew links" },
      { value: "2-layer", label: "Snowflake warehouse" },
    ],
    body: [
      {
        heading: "The Problem",
        body: "IMDb publishes its full catalog as raw, messy public data — ~200 million records across seven datasets, riddled with placeholder values, string-encoded numbers, and multi-valued fields. In that state it's useless for analytics. The goal was to turn it into a clean, trustworthy warehouse that powers self-service BI.",
      },
      {
        heading: "What I Built",
        body: "An end-to-end pipeline from raw TSV to dashboards:",
        points: [
          "Ingestion of seven compressed IMDb TSV datasets (~200M records total, up to 91M rows in a single table)",
          "Data profiling and cleaning in Alteryx + Python — normalizing IMDb's \\N placeholders to NULLs, casting string-encoded numerics, and validating logical constraints",
          "Azure Data Factory pipelines for automated, dependency-aware loads with error handling and re-runs",
          "A two-layer Snowflake warehouse: 7 staging tables (cleaned raw) feeding a curated dimensional layer optimized for BI",
          "Power BI and Tableau dashboards over the curated layer — genre trends, rating distributions, and cast/crew participation",
        ],
      },
      {
        heading: "Key Decisions",
        body: "The trade-offs — and why:",
        points: [
          "Separated staging from a curated analytics layer so heavy cleaning never slows down BI queries",
          "Profiled every dataset before loading to catch quality issues upfront instead of debugging dashboards later",
          "Leaned on ADF's dependency-aware orchestration because the seven datasets must load in order to preserve referential integrity",
          "Gave the 51M-row alternate-titles dataset (title.akas) special handling to enable region and language analysis",
        ],
      },
      {
        heading: "Challenges",
        body: "The hard parts:",
        points: [
          "Scale: single tables up to 91M rows meant profiling and loads had to be batched and pushed down into Snowflake rather than done in memory",
          "Messy source data: IMDb's \\N placeholders, string-encoded numerics, and multi-valued fields all needed consistent global cleaning rules",
          "Trust: added row-count reconciliation and primary-key uniqueness checks across every pipeline layer so the dashboards could be relied on",
        ],
      },
      {
        heading: "Results",
        body: "A clean, queryable IMDb warehouse validated end-to-end with row-count reconciliation and PK-uniqueness checks, serving Power BI and Tableau dashboards for genre trends, rating distributions, content-type comparisons, and cast/crew analysis.",
      },
      {
        heading: "What's Next",
        body: "Incremental refreshes as IMDb updates its datasets, adding dbt tests to the transformation layer, and a semantic metrics layer for consistent KPIs across BI tools.",
      },
    ],
  },
  {
    slug: "food-inspection-analytics",
    title: "Food Inspection Analytics",
    tagline: "Multi-city public-health analytics on a Medallion lakehouse",
    description:
      "A data engineering platform that unifies food-safety inspection data from Chicago and Dallas into a Medallion (Bronze→Silver→Gold) lakehouse, powering cross-city compliance and risk-hotspot analytics in Tableau.",
    role: "Data Engineer (team of 2)",
    year: "2025",
    tech: [
      "Azure Data Factory",
      "Databricks",
      "PySpark",
      "Azure Data Lake",
      "Snowflake",
      "Tableau",
      "Alteryx",
    ],
    cover: {
      src: "/images/food-inspection.jpg",
      alt: "Multi-city food inspection analytics platform",
      width: 1536,
      height: 1024,
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Aadarsh-Ravi31/Public_Health_Compliance_Food_Inspection_Analytics_Platform",
        external: true,
      },
    ],
    featured: true,
    architectureImage: "/images/food-inspection-architecture.svg",
    metrics: [
      { value: "2", label: "Cities unified" },
      { value: "3-tier", label: "Medallion layers" },
      { value: "5", label: "Star-schema tables" },
      { value: "25", label: "Dallas violation blocks" },
    ],
    body: [
      {
        heading: "The Problem",
        body: "Food-safety inspection data is fragmented across jurisdictions — every city publishes it in a different schema and violation format, so you can't compare compliance or spot high-risk facilities across cities. This platform unifies Chicago and Dallas inspection data into one analytics-ready lakehouse.",
      },
      {
        heading: "What I Built",
        body: "A Medallion pipeline from raw government files to dashboards, orchestrated by Azure Data Factory:",
        points: [
          "Bronze: raw Chicago & Dallas inspection files landed unmodified in Azure Data Lake Gen2 for auditability",
          "Silver: Databricks (PySpark) cleansing to Parquet — unpivoting Dallas's wide format, parsing Chicago's pipe-separated violation strings, regex-extracting lat/long, and standardizing risk levels",
          "Integration: sequential notebooks build stg_chicago and stg_dallas, then merge into a unified table with source, job_id, and load_dt lineage fields",
          "Gold: Snowflake Dynamic Tables build a star schema — fact_inspections plus dim_establishment, dim_location, dim_violation, and dim_date",
          "Tableau dashboards for inspection outcomes, risk hotspots, and cross-city violation trends",
        ],
      },
      {
        heading: "Key Decisions",
        body: "The trade-offs — and why:",
        points: [
          "Adopted the Medallion architecture (Bronze → Silver → Gold) so raw data stays auditable while analytics reads a clean, modeled layer",
          "Built a city-agnostic, modular pipeline so a new jurisdiction can be added without rewriting core logic",
          "Tagged every record with source, job_id, and load_dt for full lineage tracking",
          "Used Snowflake Dynamic Tables for dependency-aware incremental refresh instead of full reloads",
        ],
      },
      {
        heading: "Challenges",
        body: "The hard parts:",
        points: [
          "Heterogeneous schemas: Chicago is long-format with pipe-separated violations; Dallas is wide-format with up to 25 violation blocks per row — reconciling them into one model took the most design work",
          "Profiling showed Dallas violation columns beyond #5 were >99% null, so I processed them selectively instead of wasting compute",
          "City-specific parsing: regex to pull embedded coordinates and standardizing inconsistent risk categories across both cities",
        ],
      },
      {
        heading: "Results",
        body: "A unified, lineage-tracked food-safety warehouse that lets public-health teams compare compliance across cities, rank risk hotspots, and drill into facility-level history — served through interactive Tableau dashboards.",
      },
      {
        heading: "What's Next",
        body: "Adding more cities via the modular ingestion pattern, layering predictive risk scoring on inspection history, and automating dashboard refresh on new data loads.",
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
