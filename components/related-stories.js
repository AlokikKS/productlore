'use client';

import Link from 'next/link';
import { LogoIcon } from '@/lib/logos';

export function RelatedStories({ stories = [] }) {
  if (!stories.length) return null;
  return (
    <section className="my-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Related product journeys</div>
        <h3 className="mt-2 font-serif-display text-3xl">If you liked this, you’ll love these</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stories.map((s) => (
          <Link key={s.slug} href={`/story/${s.slug}`} className="group">
            <div className="h-full rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-5 hover:border-foreground/40 hover:bg-[hsl(var(--surface-2))] transition-all">
              <div className="flex items-center gap-3">
                <span
                  className="h-9 w-9 rounded-lg flex items-center justify-center border border-border bg-[hsl(var(--surface-2))]"
                  aria-hidden
                >
                  <LogoIcon slug={s.logoSlug || s.slug} className="h-4 w-4" />
                </span>
                <div className="text-sm font-medium">{s.name}</div>
              </div>
              <p className="mt-4 font-serif-display text-lg leading-snug text-foreground text-pretty">
                “{s.hook}”
              </p>
              <div className="mt-4 text-xs text-muted-foreground">{s.readTime} min read</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
