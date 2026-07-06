import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { currentRole } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="glow left-[30%] top-[10%] h-[300px] w-[300px] bg-[var(--color-accent)] opacity-20" />

      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Recent Experience
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;m building now
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card mt-10 overflow-hidden p-8 sm:p-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-semibold">{currentRole.company}</h3>
                <span className="rounded-full border border-[var(--color-border)] px-3 py-0.5 text-xs text-[var(--color-muted)]">
                  Latest
                </span>
              </div>
              <p className="mt-1 text-lg text-[var(--color-fg)]">{currentRole.title}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{currentRole.period}</p>
            </div>
            <a
              href={currentRole.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm transition-colors hover:border-[var(--color-accent)]"
            >
              Company <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-muted)]">
            {currentRole.summary}
          </p>

          <ul className="mt-6 space-y-3">
            {currentRole.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[var(--color-fg)]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {currentRole.stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
