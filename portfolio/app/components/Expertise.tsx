import { Reveal } from "./motion";

// Ordered for bento auto-placement on a 4-col grid (lg).
const categories: {
  label: string;
  skills: string[];
  span?: string;
  feature?: boolean;
  blurb?: string;
}[] = [
  {
    label: "Gen AI / LLMs",
    span: "lg:col-span-2 lg:row-span-2",
    feature: true,
    blurb: "Designing and shipping production LLM & agent systems.",
    skills: [
      "OpenAI",
      "Anthropic",
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Vector DBs",
      "Embeddings",
      "Knowledge Graphs",
      "Prompt Engineering",
      "LLM Evaluation",
      "Fine-tuning",
      "Hugging Face",
      "LlamaIndex",
      "MCP",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  {
    label: "Data Engineering",
    span: "lg:col-span-2",
    skills: [
      "Apache Spark",
      "Airflow",
      "Kafka",
      "dbt",
      "Snowflake",
      "ETL / ELT",
      "Data Warehousing",
      "Pandas",
    ],
  },
  {
    label: "Backend & APIs",
    span: "lg:col-span-2",
    skills: [
      ".NET Core",
      "Spring Boot",
      "Node.js",
      "FastAPI",
      "Django",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    label: "Languages",
    span: "lg:col-span-2",
    skills: ["Python", "SQL", "Java", "TypeScript", "JavaScript", "C#", "C++"],
  },
  {
    label: "Cloud & DevOps",
    span: "lg:col-span-2",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "pgvector"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Angular", "Tailwind"],
  },
  {
    label: "Tools",
    span: "lg:col-span-2",
    skills: ["Git", "Jira", "Postman", "Jupyter"],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-background py-20 sm:py-28 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            (01) &nbsp; Expertise
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-display-sm font-display font-bold tracking-tight mb-12 sm:mb-16">
            Skills &amp; Tools
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto lg:auto-rows-[13rem]">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.label}
              delay={i * 0.04}
              className={`${cat.span ?? ""} flex`}
            >
              <div
                className={`w-full rounded-2xl border border-border p-6 flex flex-col ${
                  cat.feature ? "bg-foreground text-background" : "bg-foreground/[0.02]"
                }`}
              >
                <h3
                  className={`font-display font-semibold ${
                    cat.feature ? "text-2xl" : "text-lg"
                  }`}
                >
                  {cat.label}
                </h3>
                {cat.blurb && (
                  <p className="text-sm text-background/60 mt-1.5 mb-4 max-w-sm">
                    {cat.blurb}
                  </p>
                )}
                <div className={`flex flex-wrap gap-2 content-start ${cat.blurb ? "" : "mt-4"}`}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 cursor-default ${
                        cat.feature
                          ? "border-background/30 text-background/85 hover:bg-background hover:text-foreground"
                          : "border-border text-muted hover:bg-foreground hover:text-background hover:border-foreground"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
