'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { readAllReflections } from '@/lib/notebook';
import { getStoryBySlug } from '@/lib/stories';

export function AllReflections() {
  const [items, setItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setItems(readAllReflections());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground text-sm">
        Your reflections will appear here. Finish a story to write your first one.
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map(({ slug, text }) => {
        const story = getStoryBySlug(slug);
        return (
          <li key={slug} className="rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-5">
            <Link href={`/story/${slug}`} className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors">
              <BookOpen className="h-3 w-3" />
              {story?.name || slug}
            </Link>
            <p className="mt-3 font-serif-display text-lg leading-snug text-foreground text-pretty">
              {text}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
