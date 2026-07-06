"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="glow left-[-10%] top-[-10%] h-[420px] w-[420px] bg-[var(--color-accent)]" />
      <div className="glow right-[-5%] top-[20%] h-[360px] w-[360px] bg-[var(--color-accent-2)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm text-[var(--color-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-2)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
            </span>
            Available for remote roles · {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-gradient">{profile.name.split(" ").slice(2).join(" ")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-[var(--color-fg)] sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-6 py-3 font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="card p-5">
                <div className="text-2xl font-semibold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
