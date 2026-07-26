'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { stories, getStoryBySlug, badgeMeta } from '@/lib/stories';

const SECTION_ORDER = [
  { key: 'worldBefore', label: 'The World Before', num: '01' },
  { key: 'spark', label: 'The Spark', num: '02' },
  { key: 'firstMVP', label: 'The First MVP', num: '03' },
  { key: 'turningPoints', label: 'The Turning Points', num: '04' },
  { key: 'evolution', label: 'Product Evolution', num: '05' },
  { key: 'today', label: 'Today', num: '06' },
  { key: 'whatsNext', label: "What's Next?", num: '07' },
];

export default function StoryPage({ params }) {
  // Support both promise-style params (Next 15) and plain objects
  const resolved = typeof params?.then === 'function' ? use(params) : params;
  const story = getStoryBySlug(resolved.slug);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  const [active, setActive] = useState('worldBefore');

  useEffect(() => {
    if (!story) return;
    const observers = [];
    SECTION_ORDER.forEach(({ key }) => {
      const el = document.getElementById(key);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(key);
          });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [story]);

  if (!story) return notFound();

  const otherStories = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <main className="relative">
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-white to-neutral-500"
      />

      {/* Ambient hero gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(60% 60% at 50% 0%, ${story.accent}33, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]" />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-white/[0.05]">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Library
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">ProductLore</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-16 sm:pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>{story.year}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {story.readTime} min read</span>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div
              className={`h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center text-2xl font-semibold bg-gradient-to-br ${story.gradient} text-black shadow-[0_0_0_1px_hsl(0_0%_100%_/_0.08)]`}
            >
              {story.logo || story.name[0]}
            </div>
            <div>
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance">
                {story.name}
              </h1>
              <div className="mt-3 text-muted-foreground text-sm">
                Founded by {story.founders}
              </div>
            </div>
          </div>

          <p className="mt-8 font-serif-display italic text-2xl sm:text-3xl leading-snug text-neutral-200 max-w-3xl text-pretty">
            “{story.hook}”
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {story.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-neutral-300"
              >
                <span>{badgeMeta[b]?.icon}</span>
                <span>{b}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Body */}
      <section className="container py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-12">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Chapters</div>
            <ul className="space-y-2 text-sm">
              {SECTION_ORDER.map((s) => (
                <li key={s.key}>
                  <a
                    href={`#${s.key}`}
                    className={`group flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors ${
                      active === s.key ? 'text-foreground bg-white/[0.04]' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/70">{s.num}</span>
                    <span className="text-[13px]">{s.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pm"
                  className={`group flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors ${
                    active === 'pm' ? 'text-foreground bg-white/[0.04]' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="font-mono text-[10px] text-muted-foreground/70">08</span>
                  <span className="text-[13px]">If You Were the PM…</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="max-w-2xl mx-auto lg:mx-0 w-full">
          {SECTION_ORDER.map((s) => (
            <section id={s.key} key={s.key} className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-muted-foreground">{s.num}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl mb-6 text-balance">{s.label}</h2>
              <div className="prose-reader">
                <p>{story.sections[s.key]}</p>
              </div>
            </section>
          ))}

          {/* PM Section */}
          <section id="pm" className="scroll-mt-24 mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">A prompt for you</div>
              <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl text-balance">
                If you were the Product Manager…
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Sit with these for a moment. There are no correct answers — just sharper questions.
              </p>
              <ul className="mt-8 space-y-4">
                {story.pmQuestions.map((q, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex gap-4 items-start rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
                    <span className="text-[15px] leading-relaxed text-neutral-100 text-pretty">{q}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* End of story */}
          <div className="mt-16 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share this story</span>
            </div>
            <Link href="/" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              Back to library <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </section>

      {/* Recommended */}
      <section className="container py-16 sm:py-24 border-t border-white/[0.05]">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Keep reading</div>
          <h3 className="mt-2 font-serif-display text-3xl">More product journeys</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherStories.map((s) => (
            <Link key={s.slug} href={`/story/${s.slug}`} className="group">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 hover:border-white/20 hover:bg-white/[0.04] transition-all glow-ring">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center text-sm font-semibold bg-gradient-to-br ${s.gradient} text-black`}
                  >
                    {s.logo || s.name[0]}
                  </div>
                  <div className="text-sm font-medium">{s.name}</div>
                </div>
                <p className="mt-4 font-serif-display text-lg leading-snug text-neutral-100 text-pretty">
                  “{s.hook}”
                </p>
                <div className="mt-4 text-xs text-muted-foreground">{s.readTime} min read</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[0.05]">
        <div className="container py-10 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} ProductLore · A reading library for product minds.
        </div>
      </footer>
    </main>
  );
}
