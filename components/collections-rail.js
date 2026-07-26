'use client';

import Link from 'next/link';
import { COLLECTIONS } from '@/lib/collections';
import { ArrowUpRight } from 'lucide-react';

export function CollectionsRail() {
  return (
    <section className="container py-6">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Curated collections</div>
          <h2 className="mt-2 font-serif-display text-2xl sm:text-3xl">Browse by theme</h2>
        </div>
      </div>
      <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.id}
            href={`/collection/${c.id}`}
            className="snap-start shrink-0 group"
          >
            <div
              className="relative w-64 sm:w-72 rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-5 hover:border-foreground/30 transition-all overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                style={{ background: `radial-gradient(closest-side, ${c.accent}, transparent)` }}
              />
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.slugs.length} stories</div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-4 font-serif-display text-2xl text-pretty leading-snug">{c.title}</div>
              <div className="mt-2 text-[13px] text-muted-foreground text-pretty">{c.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
