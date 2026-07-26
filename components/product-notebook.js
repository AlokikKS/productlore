'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Trash2, Check, Sparkles } from 'lucide-react';
import { CANVAS_FIELDS, readNotebook, writeNotebook, removeSavedItem } from '@/lib/notebook';

export function ProductNotebook() {
  const [nb, setNb] = useState(null);
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    setNb(readNotebook());
  }, []);

  // Autosave the canvas fields with debounce.
  useEffect(() => {
    if (!nb) return;
    const t = setTimeout(() => {
      writeNotebook(nb);
      setSavedFlash(true);
      const t2 = setTimeout(() => setSavedFlash(false), 1000);
      return () => clearTimeout(t2);
    }, 400);
    return () => clearTimeout(t);
  }, [nb]);

  const savedItems = nb?.savedItems || [];

  const filled = useMemo(() => {
    if (!nb) return 0;
    return CANVAS_FIELDS.reduce((acc, f) => (nb[f.key]?.trim() ? acc + 1 : acc), 0);
  }, [nb]);

  if (!nb) return <div className="h-40 rounded-3xl border border-border bg-[hsl(var(--surface-1))] animate-pulse" />;

  const setField = (k, v) => setNb((prev) => ({ ...prev, [k]: v }));

  const onRemove = (id) => {
    removeSavedItem(id);
    setNb(readNotebook());
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Product Canvas · {filled}/{CANVAS_FIELDS.length} filled
        </div>
        <AnimatePresence>
          {savedFlash && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground"
            >
              <Check className="h-3 w-3" /> Saved locally
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {CANVAS_FIELDS.map((f) => (
          <div key={f.key} className="rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-5">
            <div className="flex items-center justify-between">
              <div className="font-serif-display text-xl">{f.label}</div>
              {nb[f.key]?.trim() && <Check className="h-3.5 w-3.5 text-muted-foreground" />}
            </div>
            <div className="mt-1 text-[12px] text-muted-foreground">{f.hint}</div>
            <textarea
              value={nb[f.key] || ''}
              onChange={(e) => setField(f.key, e.target.value)}
              rows={3}
              placeholder="Type your thinking here…"
              className="mt-3 w-full resize-y rounded-xl border border-border bg-[hsl(var(--surface-2))] px-4 py-3 text-[14.5px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-foreground/40 transition-colors"
            />
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          Saved from stories · {savedItems.length}
        </div>

        {savedItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-transparent p-8 text-center text-muted-foreground text-sm">
            Nothing captured yet. Look for the “Save to notebook” chip next to quotes and decisions in any story.
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {savedItems.map((s) => (
              <li key={s.id} className="rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{s.source}</span>
                  <Link href={`/story/${s.storySlug}`} className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                    <BookOpen className="h-3 w-3" /> {s.storyName}
                  </Link>
                </div>
                <p className={`text-[14.5px] leading-relaxed text-foreground text-pretty ${s.source === 'quote' ? 'font-serif-display italic text-lg' : ''}`}>
                  {s.text}
                </p>
                <button
                  onClick={() => onRemove(s.id)}
                  className="self-start text-[11px] text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="h-3 w-3" /> Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
