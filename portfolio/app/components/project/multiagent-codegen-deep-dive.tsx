import Image from "next/image";
import Link from "next/link";
import {
  AGENTS,
  RESULTS,
  SCALE,
  STAGES,
  TECH_STACK,
} from "@/app/lib/deepdive/multiagent-codegen";
import { ProjectSection as Section } from "./project-section";
import { StageStepper } from "./stage-stepper";

export function MultiAgentCodegenDeepDive() {
  return (
    <>
      <section aria-label="At a glance" className="shell pt-14 lg:pt-16">
        <dl className="grid grid-cols-3 gap-x-6 gap-y-8 border-y border-line py-8 lg:grid-cols-6">
          {SCALE.map((s) => (
            <div key={s.label}>
              <dd className="font-mono text-xl text-ink sm:text-2xl">{s.value}</dd>
              <dt className="mt-1 text-xs text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Section id="problem" label="The problem" kicker="Plausible is not working">
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            {
              x: "No proof it runs",
              y: "A single model returns code that looks right and often is not — no tests, no execution",
            },
            {
              x: "Ungrounded recall",
              y: "One prompt hallucinates APIs instead of drawing on real-world patterns",
            },
            {
              x: "One overloaded role",
              y: "Analysis, coding, testing and docs crammed into a single prompt with no audit trail",
            },
          ].map((c) => (
            <li key={c.x} className="rounded-brand border border-line bg-bg-elev p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
                <span aria-hidden="true" className="text-accent">&times;</span>
                {c.x}
              </p>
              <p className="mt-3 text-sm text-ink-soft">{c.y}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="agents" label="The crew" kicker="5 agents, design-first" wide>
        <p className="max-w-measure text-sm text-ink-soft">
          A request flows through five specialized agents. Test Designer and
          Programmer run in parallel — the tests are written before the code, so
          generation aims at a real spec rather than being graded after the fact.
        </p>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AGENTS.map((a) => (
            <li
              key={a.name}
              className="flex flex-col rounded-brand border border-line bg-bg-elev p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
                  {a.role}
                </span>
                <span className="font-mono text-[10px] text-ink-faint">{a.n}</span>
              </div>
              <p className="mt-2 text-lg">{a.name}</p>
              <p className="mt-0.5 font-mono text-[11px] text-ink-faint">{a.model}</p>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{a.job}</p>
              {a.parallel && (
                <p className="mt-4 font-mono text-[9px] tracking-[0.12em] text-accent uppercase">
                  parallel stage
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pipeline" label="Seven stages" kicker="Decisions, not descriptions" wide>
        <StageStepper stages={STAGES} label="Pipeline stages" />
      </Section>

      <Section id="architecture" label="Architecture" kicker="Ingest to serve" wide>
        <div className="overflow-hidden rounded-brand border border-line bg-white">
          <div
            role="region"
            aria-label="Multi-Agent CodeGen architecture diagram"
            tabIndex={0}
            className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Image
              src="/images/multiagent-codegen-architecture.svg"
              alt="Multi-Agent CodeGen architecture: six sources feed an Airflow ETL that parses, cleans and deduplicates code, embeds it into a Pinecone vector store of 2M+ embeddings alongside GCS and BigQuery, served by a FastAPI RAG backend into a CrewAI crew of five agents, gated by a Docker sandbox and guardrails, and surfaced through a Streamlit dashboard."
              width={880}
              height={910}
              className="mx-auto h-auto w-full max-w-[720px]"
            />
          </div>
        </div>
      </Section>

      <Section id="results" label="Results" kicker="Measured, not asserted">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">Measured evaluation results</caption>
          <thead>
            <tr className="border-b border-line text-left">
              <th scope="col" className="py-2 pr-4 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                Metric
              </th>
              <th scope="col" className="py-2 pr-4 text-right font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                Result
              </th>
              <th scope="col" className="py-2 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {RESULTS.map((r) => (
              <tr key={r.metric} className="border-b border-line/60">
                <td className="py-2.5 pr-4">{r.metric}</td>
                <td className="py-2.5 pr-4 text-right font-mono text-xs tabular-nums text-ink">
                  {r.value}
                </td>
                <td className="py-2.5 text-ink-soft">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-8 max-w-measure text-sm text-ink-soft">
          Because every generation is grounded in retrieval and gated by
          sandboxed tests, the output is code you can trust to run — not just code
          that looks plausible.
        </p>
      </Section>

      <Section id="stack" label="Stack" kicker="Everything used" wide>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((g) => (
            <div key={g.group}>
              <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
                {g.group}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-line bg-bg-elev px-3 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href="/#expertise"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          See these across every project
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </Section>
    </>
  );
}
