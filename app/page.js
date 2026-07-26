'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { stories, badgeMeta, smartSearch } from '@/lib/stories';
import { LogoIcon } from '@/lib/logos';
import { ThemeToggle } from '@/components/theme-toggle';

function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <div className="relative h-8 w-8 rounded-lg bg-foreground text-background flex items-center justify-center">
        <BookOpen className="h-4 w-4" />
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
        <article className="relative h-full rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-6 transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
            style={{ background: `radial-gradient(closest-side, ${story.accent}55, transparent)` }}
          />

          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl flex items-center justify-center border border-border bg-[hsl(var(--surface-2))]">
              <LogoIcon slug={story.logoSlug || story.slug} className="h-5 w-5" title={story.name} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold tracking-tight">{story.name}</div>
              <div className="text-xs text-muted-foreground truncate">
                {story.founders} · {story.year}
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <p className="mt-6 font-serif-display text-2xl leading-snug text-pretty text-foreground">
            “{story.hook}”
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {story.badges.slice(0, 3).map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-[hsl(var(--surface-2))] px-2.5 py-1 text-[11px] text-muted-foreground"
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

const REGION_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'global', label: 'Global' },
  { key: 'india', label: 'India' },
];

export default function Page() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('all');

  const filtered = useMemo(() => {
    let list = smartSearch(query);
    if (region !== 'all') list = list.filter((s) => s.region === region);
    return list;
  }, [query, region]);

  return (
    <main className="relative">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.18),transparent_70%)] dark:opacity-100 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(255,120,80,0.10),transparent_70%)] dark:opacity-100 opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="#stories" className="hidden sm:inline hover:text-foreground transition-colors">Stories</a>
            <a href="#about" className="hidden sm:inline hover:text-foreground transition-colors">About</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="container pt-20 sm:pt-28 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[hsl(var(--surface-1))] px-3 py-1 text-xs text-muted-foreground">
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

          <div className="mt-10 relative max-w-xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Try ‘late fee’, ‘marketplace’, ‘UPI’ or a founder’s name…"
              className="w-full rounded-2xl border border-border bg-[hsl(var(--surface-1))] py-3.5 pl-11 pr-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-foreground/40 transition-all"
            />
          </div>
        </motion.div>
      </section>

      <div className="container"><div className="hairline" /></div>

      <section id="stories" className="container py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Browse Stories</div>
            <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl">The library</h2>
          </div>
          <div className="flex items-center gap-2">
            {REGION_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setRegion(f.key)}
                className={`rounded-full border px-3 py-1.5 text-[12px] transition-colors ${
                  region === f.key
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-2 text-xs text-muted-foreground">{filtered.length} of {stories.length}</span>
          </div>
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

      <footer className="border-t border-border">
        <div className="container py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <div className="max-w-md text-center sm:text-right text-pretty">
            Built for curious Product Managers, founders, designers and builders who love understanding
            why great products win.
          </div>
        </div>
      </footer>
    </main>
  );
}
