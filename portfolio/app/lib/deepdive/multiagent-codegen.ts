/**
 * Multi-Agent CodeGen deep-dive content.
 *
 * SOURCE: the project README and repository. Every figure here — Pass@1,
 * success rate, quality score, latency, cost, embedding count — comes from the
 * measured evaluation in the README, none is inferred.
 *
 * COPY POLICY: fields hold fragments, not sentences. The decision shape
 * (chose / over / because / cost) is scannable in seconds.
 */

export type Stat = { value: string; label: string; note?: string };

export const SCALE: Stat[] = [
  { value: "5", label: "Specialized agents" },
  { value: "6", label: "Data sources" },
  { value: "2M+", label: "Vector embeddings" },
  { value: "78.2%", label: "Pass@1 accuracy" },
  { value: "89.7%", label: "Success rate" },
  { value: "$0.16", label: "Cost per request" },
];

/** The five agents, in execution order. */
export type Agent = {
  n: string;
  name: string;
  role: string;
  model: string;
  job: string;
  parallel?: boolean;
};

export const AGENTS: Agent[] = [
  {
    n: "01",
    name: "Requirements Analyzer",
    role: "ANALYZE",
    model: "GPT-4",
    job: "Parses a natural-language request into a structured JSON specification the rest of the crew works from.",
  },
  {
    n: "02",
    name: "Test Designer",
    role: "SPEC",
    model: "GPT-4",
    job: "Writes the test suite from the spec, before any code exists. Design-first: the bar is set before the Programmer runs.",
    parallel: true,
  },
  {
    n: "03",
    name: "Programmer",
    role: "GENERATE",
    model: "GPT-4 + RAG",
    job: "Generates production code grounded in retrieved real-world patterns, not free-form recall.",
    parallel: true,
  },
  {
    n: "04",
    name: "Test Executor",
    role: "VERIFY",
    model: "Docker sandbox",
    job: "Runs the generated code against the test suite in an isolated container; failures trigger iterative refinement.",
  },
  {
    n: "05",
    name: "Documentation Generator",
    role: "DOCUMENT",
    model: "GPT-4",
    job: "Produces README and API docs for the accepted code, so the output ships explained.",
  },
];

export type Stage = {
  id: string;
  step: string;
  title: string;
  tool: string;
  facts: string[];
  decision: { chose: string; over: string[]; because: string[]; cost: string };
  output: { value: string; label: string }[];
};

export const STAGES: Stage[] = [
  {
    id: "ingest",
    step: "01",
    title: "Ingest",
    tool: "Apache Airflow · ETL",
    facts: [
      "6 sources: GitHub, Stack Overflow, docs, issues/PRs, examples, blogs",
      "Airflow DAGs schedule and orchestrate collection",
      "200+ high-quality GitHub repositories",
    ],
    decision: {
      chose: "Airflow-orchestrated multi-source ETL",
      over: ["A single scraper", "Manual dataset curation"],
      because: [
        "Six sources need dependency-aware scheduling and retries",
        "Real code plus real Q&A plus real issues covers how developers actually write",
      ],
      cost: "Six connectors to maintain as each source's format drifts.",
    },
    output: [{ value: "6", label: "sources" }],
  },
  {
    id: "process",
    step: "02",
    title: "Process",
    tool: "AST parsing · validation",
    facts: [
      "AST-based parsing, not regex over raw text",
      "Cleaning, validation, and deduplication",
      "Quality rules: required fields, non-empty code, valid metadata",
    ],
    decision: {
      chose: "Parse to an AST, then validate",
      over: ["Store raw snippets as-is"],
      because: [
        "AST parsing extracts real functions and classes with correct boundaries",
        "Validation drops broken or trivial snippets before they pollute retrieval",
      ],
      cost: "Language-specific parsing logic to maintain.",
    },
    output: [{ value: "10K–50K", label: "snippets" }],
  },
  {
    id: "embed",
    step: "03",
    title: "Embed & store",
    tool: "text-embedding-3-large · Pinecone",
    facts: [
      "3,072-dimension embeddings",
      "2M+ vectors in Pinecone",
      "GCS for raw/processed data, BigQuery for analytics",
    ],
    decision: {
      chose: "Pre-compute 2M+ embeddings into Pinecone",
      over: ["Embed on the fly per request"],
      because: [
        "Retrieval has to be fast at request time, not blocked on embedding",
        "A managed vector store scales past what an in-process index handles",
      ],
      cost: "Storage cost, plus re-embedding when sources update.",
    },
    output: [
      { value: "2M+", label: "embeddings" },
      { value: "3,072", label: "dimensions" },
    ],
  },
  {
    id: "retrieve",
    step: "04",
    title: "Retrieve",
    tool: "FastAPI · RAG",
    facts: [
      "Async FastAPI backend",
      "Top-K semantic retrieval over the vector store",
      "Retrieved context routed into the agent crew",
    ],
    decision: {
      chose: "Ground generation in RAG",
      over: ["Generate from model recall alone"],
      because: [
        "Retrieval anchors code to real APIs instead of plausible-looking hallucination",
        "Context is auditable — you can see what the answer was built from",
      ],
      cost: "A retrieval layer to keep in sync with the corpus.",
    },
    output: [{ value: "top-K", label: "retrieval" }],
  },
  {
    id: "generate",
    step: "05",
    title: "Generate",
    tool: "CrewAI · 5 agents · GPT-4",
    facts: [
      "Requirements → Test Designer + Programmer (parallel) → Test Executor → Docs",
      "Design-first: tests are written before the code",
      "Failing tests trigger an iterative refinement loop",
    ],
    decision: {
      chose: "Five specialized agents",
      over: ["One overloaded prompt holding every responsibility"],
      because: [
        "Each role has a focused context and is auditable step by step",
        "Design-first means code is written to pass a real spec, not rationalized after",
      ],
      cost: "Coordination overhead and more model calls per request.",
    },
    output: [
      { value: "5", label: "agents" },
      { value: "~18K", label: "tokens / generation" },
    ],
  },
  {
    id: "validate",
    step: "06",
    title: "Validate",
    tool: "Docker sandbox · guardrails",
    facts: [
      "Every candidate runs in an isolated Docker container",
      "Static analysis, security scanning, human-in-the-loop review",
      "A failed run feeds the next refinement attempt",
    ],
    decision: {
      chose: "Execute in an isolated sandbox",
      over: ["Trust generated code without running it"],
      because: [
        "Untrusted generated code must never touch the host",
        "Passing tests is the only honest signal that the code works",
      ],
      cost: "Execution overhead adds to per-request latency.",
    },
    output: [{ value: "89.7%", label: "success rate" }],
  },
  {
    id: "serve",
    step: "07",
    title: "Serve",
    tool: "Streamlit",
    facts: [
      "Streamlit dashboard for code generation and monitoring",
      "Surfaces the agent workflow and quality scores",
      "Code, tests, docs and metrics returned together",
    ],
    decision: {
      chose: "A dashboard that shows the agent workflow",
      over: ["A bare code-in, code-out endpoint"],
      because: [
        "Seeing each agent's step makes the output trustable",
        "Quality scores travel with the code",
      ],
      cost: "UI to maintain alongside the API.",
    },
    output: [{ value: "1", label: "dashboard" }],
  },
];

/** Measured evaluation from the README. */
export const RESULTS = [
  { metric: "Pass@1 accuracy", value: "78.2%", note: "across 87 test cases" },
  { metric: "Overall success rate", value: "89.7%", note: "generations that pass" },
  { metric: "Average quality score", value: "7.8 / 10", note: "graded output" },
  { metric: "Average latency", value: "23.4s", note: "end to end per request" },
  { metric: "Cost per request", value: "$0.16", note: "~18K tokens" },
  { metric: "Cache hit rate", value: "40%", note: "cost optimisation" },
];

export const TECH_STACK: { group: string; items: string[] }[] = [
  { group: "Agents", items: ["CrewAI", "GPT-4", "LangChain"] },
  { group: "Retrieval", items: ["Pinecone", "text-embedding-3-large", "RAG"] },
  { group: "Backend", items: ["FastAPI", "Async Python"] },
  { group: "Data & orchestration", items: ["Apache Airflow", "Google Cloud Storage", "BigQuery"] },
  { group: "Testing & safety", items: ["Docker sandbox", "pytest", "Security scanning", "HITL review"] },
  { group: "Interface", items: ["Streamlit"] },
];
