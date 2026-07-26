'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flame, BookMarked } from 'lucide-react';
import { readStreak, STREAK_MILESTONES } from '@/lib/notebook';

export function ReadingStreak({ variant = 'compact' }) {
  const [mounted, setMounted] = useState(false);
  const [s, setS] = useState({ currentStreak: 0, longestStreak: 0, totalDays: 0, storiesRead: {} });

  useEffect(() => {
    setS(readStreak());
    setMounted(true);

    // Re-read whenever a story updates the streak (fired via a custom event).
    const onUpdate = () => setS(readStreak());
    window.addEventListener('productlore:streak-updated', onUpdate);
    return () => window.removeEventListener('productlore:streak-updated', onUpdate);
  }, []);

  if (!mounted) return null;

  const readCount = Object.keys(s.storiesRead || {}).length;
  const nextMilestone = STREAK_MILESTONES.find((m) => m > s.currentStreak);

  if (variant === 'compact') {
    // Small header pill
    return (
      <Link
        href="/notebook"
        className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-[hsl(var(--surface-1))] px-3 py-1 text-[12px] text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
        aria-label="Reading streak"
      >
        <Flame className="h-3.5 w-3.5" />
        <span className="tabular-nums">{s.currentStreak}</span>
        <span className="opacity-60">day{s.currentStreak === 1 ? '' : 's'}</span>
      </Link>
    );
  }

  // Full widget for landing / notebook
  return (
    <div className="rounded-3xl border border-border bg-[hsl(var(--surface-1))] p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Flame className="h-3.5 w-3.5" />
          Reading streak
        </div>
        <Link href="/notebook" className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
          <BookMarked className="h-3 w-3" /> Notebook
        </Link>
      </div>
      <div className="mt-4 flex items-end gap-8">
        <Stat value={s.currentStreak} label={`day${s.currentStreak === 1 ? '' : 's'} in a row`} big />
        <Stat value={s.longestStreak || 0} label="longest" />
        <Stat value={readCount} label="stories read" />
      </div>
      {nextMilestone && (
        <div className="mt-5 text-[12px] text-muted-foreground">
          {nextMilestone - s.currentStreak} more day{nextMilestone - s.currentStreak === 1 ? '' : 's'} to your
          <span className="text-foreground font-medium"> {nextMilestone}-day </span>
          milestone.
        </div>
      )}
      {!s.currentStreak && (
        <div className="mt-5 text-[12px] text-muted-foreground">
          Read a story today to start your streak.
        </div>
      )}
    </div>
  );
}

function Stat({ value, label, big = false }) {
  return (
    <div>
      <div className={`font-serif-display leading-none tabular-nums ${big ? 'text-5xl sm:text-6xl' : 'text-3xl'}`}>
        {value}
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
    </div>
  );
}
