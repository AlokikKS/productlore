'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { stories, badgeMeta } from '@/lib/stories';

function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center shadow-[0_0_0_1px_hsl(0_0%_100%_/_0.08)]">
        <BookOpen className="h-4 w-4 text-black" />
      </div>
      <span className="text-[15px] font-semibold tracking-tight">ProductLore</span>
    </Link>
  );
}

function StoryCard({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.4), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/story/${story.slug}`} className="block group">
        <article className="relative h-full rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 transition-all duration-300 hover:border-white/20 hover:from-white/[0.06] hover:-translate-y-0.5 glow-ring overflow-hidden">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: `radial-gradient(closest-side, ${story.accent}55, transparent)` }}
          />

          <div className="flex items-center gap-3">
            <div
              className={`h-11 w-11 rounded-xl flex items-center justify-center text-lg font-semibold bg-gradient-to-br ${story.gradient} text-black shadow-[0_0_0_1px_hsl(0_0%_100%_/_0.08)]`}
            >
              {story.logo || story.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold tracking-tight">{story.name}</div>
              <div className="text-xs text-muted-foreground truncate">
                {story.founders} · {story.year}
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <p className="mt-6 font-serif-display text-2xl leading-snug text-pretty text-neutral-100">
            “{story.hook}”
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {story.badges.slice(0, 3).map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-neutral-300"
              >
                <span>{badgeMeta[b]?.icon}</span>
                <span>{b}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="uppercase tracking-[0.14em]">Read the story</span>
            <span>{story.readTime} min read</span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function Page() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stories;
    return stories.filter((s) =>
      [s.name, s.product, s.founders, s.hook, ...(s.badges || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <main className="relative">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(255,120,80,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-white/[0.05]">
        <div className="container flex h-14 items-center justify-between">
          <Logo />
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#stories" className="hover:text-foreground transition-colors">Stories</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-200 hover:bg-white/5"
            >
              Share <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-20 sm:pt-28 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300">
            <Sparkles className="h-3 w-3" />
            A library of product journeys
          </div>
          <h1 className="mt-6 font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Discover the stories behind the world’s greatest products.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
            Every iconic product started with one problem. Explore how founders discovered it, built the first MVP,
            made bold product decisions and changed the world.
          </p>

          {/* Search */}
          <div className="mt-10 relative max-w-xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search a product, founder, or theme…"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all"
            />
            <div className="absolute inset-y-0 right-4 hidden sm:flex items-center pointer-events-none">
              <kbd className="font-mono text-[10px] text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">/</kbd>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Stories grid */}
      <section id="stories" className="container py-16 sm:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Browse Stories</div>
            <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl">The library</h2>
          </div>
          <div className="text-xs text-muted-foreground">{filtered.length} of {stories.length}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-muted-foreground">
            No stories match “{query}”. Try another search.
          </div>
        )}
      </section>

      {/* About */}
      <section id="about" className="container py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About ProductLore</div>
          <h3 className="mt-3 font-serif-display text-3xl sm:text-4xl text-balance">
            Not company history. Product thinking.
          </h3>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground text-pretty">
            Each story is a short book about how a product came to exist — the problem before it,
            the spark, the first MVP, the decisions that mattered, and the questions its team is still
            wrestling with today. Read one on a coffee break. Think like a PM afterwards.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/[0.05]">
        <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <div>© {new Date().getFullYear()} ProductLore. A reading library for product minds.</div>
        </div>
      </footer>
    </main>
  );
}
