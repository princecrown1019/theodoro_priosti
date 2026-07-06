import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Selected Work
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects &amp; platforms
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-muted)] transition-all group-hover:text-[var(--color-accent-2)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[var(--color-bg-soft)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-2)]">
                  {p.linkLabel}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
