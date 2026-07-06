import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          About
        </p>
      </Reveal>

      <div className="mt-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            A full-stack engineer who ships across the entire stack — and into AI.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
            I&apos;ve spent over a decade building production-grade web platforms: type-safe
            React &amp; Next.js front ends, scalable Node.js and GraphQL APIs, and the cloud
            infrastructure that runs them. Lately I focus on weaving LLMs — OpenAI and
            Anthropic — into real products through natural-language search, RAG, and agentic
            interfaces.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
            I care about clean architecture, developer experience, and shipping features that
            hold up under load and over time.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="card p-5">
                <h3 className="text-sm font-semibold text-[var(--color-fg)]">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((it) => (
                    <li key={it} className="text-sm text-[var(--color-muted)]">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
