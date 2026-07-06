"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "mt-3 rounded-full border border-[var(--color-border)] bg-[rgba(13,13,22,0.7)] backdrop-blur-xl md:max-w-4xl"
            : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-semibold tracking-tight">
          Theodoro<span className="text-gradient">.dev</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[var(--color-fg)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
