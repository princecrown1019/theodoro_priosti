import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="glow left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] opacity-20" />

      <Reveal>
        <div className="card relative overflow-hidden p-10 text-center sm:p-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-muted)]">
            Open to full-stack and AI engineering roles. Reach out and I&apos;ll get back to you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-6 py-3 font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 font-medium transition-colors hover:border-[var(--color-accent)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>
          Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </footer>
    </section>
  );
}
