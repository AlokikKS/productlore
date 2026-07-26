'use client';

import { use, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { getStoryBySlug, getRelatedStories, badgeMeta } from '@/lib/stories';
import { LogoIcon } from '@/lib/logos';
import { ThemeToggle } from '@/components/theme-toggle';
import { Timeline } from '@/components/timeline';
import { MetricsCard } from '@/components/metrics-card';
import { QuoteBlock } from '@/components/quote-block';
import { DecisionChallenge } from '@/components/decision-challenge';
import { Reflection } from '@/components/reflection';
import { ShareCTA } from '@/components/share-cta';
import { RelatedStories } from '@/components/related-stories';

const CHAPTERS = [
  { key: 'openingScene', label: 'Opening Scene', num: '00' },
  { key: 'worldBefore', label: 'The World Before', num: '01' },
  { key: 'problem', label: 'The Problem', num: '02' },
  { key: 'spark', label: 'The Spark', num: '03' },
  { key: 'firstMVP', label: 'The First MVP', num: '04' },
  { key: 'biggestProductDecisions', label: 'Biggest Product Decisions', num: '05' },
  { key: 'failuresAndPivots', label: 'Failures & Pivots', num: '06' },
  { key: 'evolution', label: 'Product Evolution', num: '07' },
  { key: 'today', label: 'Today', num: '08' },
  { key: 'whatsNext', label: "What's Next", num: '09' },
];

export default function StoryPage({ params }) {
  const resolved = typeof params?.then === 'function' ? use(params) : params;
  const story = getStoryBySlug(resolved.slug);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  const [active, setActive] = useState('openingScene');

  useEffect(() => {
    if (!story) return;
    const observers = [];
    CHAPTERS.forEach(({ key }) => {
      const el = document.getElementById(key);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(key)),
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [story]);

  const related = useMemo(() => (story ? getRelatedStories(story, 4) : []), [story]);

  if (!story) return notFound();

  // Interleave decision checkpoints with narrative sections.
  const decisionAt = {
    firstMVP: story.decisions?.[0],
    biggestProductDecisions: story.decisions?.[1],
    evolution: story.decisions?.[2],
  };

  return (
    <main className="relative">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-foreground"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10">
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: `radial-gradient(60% 60% at 50% 0%, ${story.accent}33, transparent 70%)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Library
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" /> ProductLore
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-16 sm:pt-24 pb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>{story.year}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {story.readTime} min read</span>
            {story.region === 'india' && (
              <>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>Made in India</span>
              </>
            )}
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center border border-border bg-[hsl(var(--surface-1))]">
              <LogoIcon slug={story.logoSlug || story.slug} className="h-8 w-8" title={story.name} />
            </div>
            <div>
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance">
                {story.name}
              </h1>
              <div className="mt-3 text-muted-foreground text-sm">Founded by {story.founders}</div>
            </div>
          </div>

          <p className="mt-8 font-serif-display italic text-2xl sm:text-3xl leading-snug text-foreground max-w-3xl text-pretty">
            “{story.hook}”
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {story.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-[hsl(var(--surface-1))] px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                <span>{badgeMeta[b]?.icon}</span>
                <span>{b}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline (visual) */}
      <section className="container py-6 sm:py-10">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Product evolution timeline</div>
        <Timeline items={story.timeline || []} accent={story.accent} />
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Body + Sidebar */}
      <section className="container py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_260px] gap-10">
        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Chapters</div>
            <ul className="space-y-1.5 text-sm">
              {CHAPTERS.map((s) => (
                <li key={s.key}>
                  <a
                    href={`#${s.key}`}
                    className={`group flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors ${
                      active === s.key
                        ? 'text-foreground bg-[hsl(var(--surface-1))]'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/70">{s.num}</span>
                    <span className="text-[13px]">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="max-w-2xl mx-auto lg:mx-0 w-full">
          {/* Opening Scene as a cinematic italic block */}
          <section id="openingScene" className="scroll-mt-24 mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] text-muted-foreground">00</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl mb-6 text-balance">Opening scene</h2>
            <p className="font-serif-display italic text-2xl sm:text-[27px] leading-[1.35] text-foreground text-pretty">
              {story.openingScene}
            </p>
          </section>

          {/* Remaining narrative sections */}
          {CHAPTERS.slice(1).map((s) => (
            <div key={s.key}>
              <section id={s.key} className="scroll-mt-24 mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[11px] text-muted-foreground">{s.num}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h2 className="font-serif-display text-3xl sm:text-4xl mb-6 text-balance">{s.label}</h2>
                <div className="prose-reader">
                  <p>{story.sections?.[s.key]}</p>
                </div>
              </section>

              {/* Interleaved decision checkpoint */}
              {decisionAt[s.key] && (
                <DecisionChallenge
                  decision={decisionAt[s.key]}
                  index={Object.keys(decisionAt).findIndex((k) => k === s.key)}
                  accent={story.accent}
                />
              )}

              {/* Interleave first quote after Failures & Pivots, second after Today */}
              {s.key === 'failuresAndPivots' && story.quotes?.[0] && (
                <QuoteBlock text={story.quotes[0].text} by={story.quotes[0].by} />
              )}
              {s.key === 'today' && story.quotes?.[1] && (
                <QuoteBlock text={story.quotes[1].text} by={story.quotes[1].by} />
              )}
            </div>
          ))}

          <Reflection slug={story.slug} />
          <ShareCTA story={story} />
        </article>

        {/* Right sidebar — Metrics */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <MetricsCard metrics={story.metrics} />
          </div>
        </aside>
      </section>

      {/* Metrics for mobile/tablet (below article) */}
      <section className="container lg:hidden pb-10">
        <MetricsCard metrics={story.metrics} />
      </section>

      {/* Related */}
      <section className="container border-t border-border">
        <RelatedStories stories={related} />
      </section>

      <footer className="border-t border-border">
        <div className="container py-10 text-sm text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
          Built for curious Product Managers, founders, designers and builders who love understanding why great products win.
        </div>
      </footer>
    </main>
  );
}
