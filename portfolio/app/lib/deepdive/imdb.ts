/**
 * IMDb Analytics deep-dive content: Azure + Snowflake build.
 *
 * STACK: this documents the project as built and as the public repository
 * describes it — Azure Data Factory and Azure Data Lake Gen2 for ingestion and
 * orchestration, Alteryx and Python for profiling and cleaning, a two-layer
 * Snowflake warehouse (staging → curated dimensional), and Power BI plus
 * Tableau for serving.
 *
 * ROW COUNTS: per-dataset figures are the real IMDb dataset sizes from the
 * repository README and sum to ~190M. title.principals alone is 91M, the
 * largest single table and the cast/crew bridge that decides warehouse
 * performance.
 */

export type Stat = { value: string; label: string; note?: string };

export const HEADLINE: Stat[] = [
  { value: "190M", label: "Rows ingested", note: "across 7 datasets" },
  { value: "2-layer", label: "Snowflake warehouse", note: "staging → curated" },
  { value: "91M", label: "Cast/crew bridge", note: "title.principals" },
  { value: "2", label: "BI tools", note: "Power BI + Tableau" },
];

export const SCALE: Stat[] = [
  { value: "190M", label: "Total rows" },
  { value: "7", label: "Source datasets" },
  { value: "91M", label: "Largest table" },
  { value: "51M", label: "Alternate titles" },
  { value: "2-layer", label: "Snowflake warehouse" },
  { value: "2025", label: "Delivered" },
];

/** The seven IMDb datasets, with real record counts from the README. */
export const DATASETS = [
  { name: "title.principals", rows: 90_984_000, role: "Cast and crew per title", note: "many-to-many bridge" },
  { name: "title.akas", rows: 51_409_000, role: "Alternate titles by region", note: "localisation" },
  { name: "name.basics", rows: 14_195_000, role: "People master data", note: "people dimension" },
  { name: "title.basics", rows: 11_464_000, role: "Core title metadata", note: "title dimension" },
  { name: "title.crew", rows: 11_464_000, role: "Directors and writers", note: "creative ownership" },
  { name: "title.episode", rows: 8_815_000, role: "Episode to series links", note: "TV hierarchy" },
  { name: "title.ratings", rows: 1_536_000, role: "Ratings and vote counts", note: "the measures" },
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
    tool: "Azure Data Factory → Data Lake Gen2",
    facts: [
      "7 IMDb .tsv.gz datasets pulled to a raw zone",
      "Landed unmodified in Azure Data Lake Gen2",
      "ADF pipelines schedule and monitor the pulls",
      "Compression kept until load",
    ],
    decision: {
      chose: "Land raw, transform later",
      over: ["Transform in flight on ingest"],
      because: [
        "A reload never needs to re-download ~190M rows",
        "Raw files are the audit trail when a number is questioned",
        "Cleaning belongs in a dedicated stage, not the fetch",
      ],
      cost: "Two copies of the data: raw and modelled.",
    },
    output: [
      { value: "7", label: "datasets" },
      { value: "190M", label: "rows landed" },
    ],
  },
  {
    id: "profile",
    step: "02",
    title: "Profile",
    tool: "Alteryx + Python",
    facts: [
      "All 7 datasets profiled before modelling",
      "Null density, cardinality, value distributions",
      "IMDb encodes missing as the literal backslash-N",
      "Multi-value fields: genres, professions, knownForTitles",
    ],
    decision: {
      chose: "Profile before designing the schema",
      over: ["Design from the documented column list"],
      because: [
        "Cardinality decides what can be a dimension key",
        "Null density decides what can be NOT NULL",
        "Documented types and actual values disagree in public data",
      ],
      cost: "A profiling pass that produces no user-facing output.",
    },
    output: [{ value: "7", label: "profiles" }],
  },
  {
    id: "clean",
    step: "03",
    title: "Clean",
    tool: "Alteryx + Python",
    facts: [
      "Backslash-N normalised to true NULL",
      "String-encoded numerics cast to real types",
      "Multi-value fields split out for analysis",
      "Logical constraints validated: year ranges, runtimes",
    ],
    decision: {
      chose: "Global cleaning rules, applied consistently",
      over: ["Per-dataset ad-hoc fixes"],
      because: [
        "The same placeholder and type issues recur across all 7 datasets",
        "One rule set is testable; scattered fixes are not",
      ],
      cost: "Rules to re-check whenever IMDb changes a field.",
    },
    output: [{ value: "7", label: "datasets cleaned" }],
  },
  {
    id: "load",
    step: "04",
    title: "Load",
    tool: "Azure Data Factory → Snowflake",
    facts: [
      "Dependency-aware loads orchestrated in ADF",
      "COPY INTO from stage, not row-by-row INSERT",
      "Error handling and automated re-runs",
      "Datasets loaded in referential order",
    ],
    decision: {
      chose: "Dependency-aware orchestration",
      over: ["Load every dataset in parallel"],
      because: [
        "The 7 datasets have referential dependencies that must load in order",
        "COPY INTO bulk-loads in parallel, far faster than INSERT",
        "Re-runnable loads survive a mid-pipeline failure",
      ],
      cost: "An orchestration graph to maintain as datasets change.",
    },
    output: [{ value: "Snowflake", label: "staging loaded" }],
  },
  {
    id: "model",
    step: "05",
    title: "Model",
    tool: "Snowflake · 2-layer · ER Studio",
    facts: [
      "7 staging tables hold the cleaned raw",
      "Curated dimensional layer built for BI",
      "title.akas (51M) handled for region and language",
      "title.principals (91M) is the cast/crew bridge",
    ],
    decision: {
      chose: "Separate staging from a curated layer",
      over: ["Model straight on the raw load", "One wide denormalised table"],
      because: [
        "Heavy cleaning never slows a BI query",
        "A dimensional model answers genre-by-year without scanning everything",
        "Conformed dimensions are reused, not duplicated per dashboard",
      ],
      cost: "An extra layer to keep in sync with staging.",
    },
    output: [
      { value: "2-layer", label: "warehouse" },
      { value: "91M", label: "bridge rows" },
    ],
  },
  {
    id: "serve",
    step: "06",
    title: "Serve",
    tool: "Power BI + Tableau",
    facts: [
      "Genre trends and rating distributions",
      "Content-type comparisons",
      "Cast and crew participation analysis",
      "Row-count reconciliation + PK-uniqueness across layers",
    ],
    decision: {
      chose: "Validate every layer before serving",
      over: ["Trust the load and debug in dashboards"],
      because: [
        "Row-count reconciliation catches a dropped batch",
        "PK-uniqueness catches a fan-out join",
        "A dashboard built on bad data is worse than none",
      ],
      cost: "Validation queries add time to each run.",
    },
    output: [{ value: "2", label: "BI tools" }],
  },
];

/** Physical and trust decisions, which is where warehouse work is actually judged. */
export const TUNING = [
  {
    key: "COPY INTO",
    on: "Data Lake stage → Snowflake staging",
    why: "Parallel bulk load across the warehouse. Row-by-row INSERT at ~190M rows is orders of magnitude slower and far heavier on the warehouse.",
  },
  {
    key: "Clustering",
    on: "title.principals (91M rows)",
    why: "Clustering the cast/crew bridge on its join key prunes micro-partitions, so the largest join scans a fraction of the table rather than all 91M rows.",
  },
  {
    key: "Staging / curated split",
    on: "two-layer Snowflake",
    why: "Cleaning runs once into staging; BI reads the modelled curated layer, so heavy transforms never re-run inside a dashboard query.",
  },
  {
    key: "Reconciliation",
    on: "every pipeline layer",
    why: "Row-count reconciliation and primary-key uniqueness checks across layers are what let the dashboards be trusted at all.",
  },
];

export const TECH_STACK: { group: string; items: string[] }[] = [
  { group: "Storage & ingest", items: ["Azure Data Factory", "Azure Data Lake Gen2"] },
  { group: "Profiling & cleaning", items: ["Alteryx", "Python"] },
  { group: "Warehouse", items: ["Snowflake", "Two-layer", "COPY INTO", "Clustering keys"] },
  { group: "Modelling", items: ["ER Studio", "Star schema", "Conformed dimensions", "Bridge tables"] },
  { group: "Serving", items: ["Power BI", "Tableau"] },
  { group: "Quality", items: ["Row-count reconciliation", "PK-uniqueness checks"] },
];
