'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PencilLine, Check } from 'lucide-react';

export function Reflection({ slug }) {
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(false);
  const storageKey = `productlore:reflection:${slug}`;

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(storageKey);
      if (v) setValue(v);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Debounced autosave
  useEffect(() => {
    if (!slug) return;
    const t = setTimeout(() => {
      try {
        window.localStorage.setItem(storageKey, value);
        if (value.trim().length > 0) {
          setSaved(true);
          setTimeout(() => setSaved(false), 1400);
        }
      } catch {}
    }, 500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, slug]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="my-20 rounded-3xl border border-border/70 bg-[hsl(var(--surface-1))] p-6 sm:p-10"
    >
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <PencilLine className="h-3.5 w-3.5" />
        Your reflection
      </div>
      <h3 className="mt-3 font-serif-display text-3xl sm:text-4xl text-balance">
        What was your biggest takeaway?
      </h3>
      <p className="mt-3 text-muted-foreground max-w-xl text-pretty">
        Write it down before you close the tab. It saves locally to your browser — no account, no cloud.
      </p>
      <div className="mt-6 relative">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="The one product idea I want to remember…"
          rows={5}
          className="w-full resize-y rounded-2xl border border-border bg-[hsl(var(--surface-2))] px-5 py-4 text-[15.5px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-foreground/40 transition-colors font-serif-display"
        />
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          {saved ? (
            <>
              <Check className="h-3 w-3" />
              Saved
            </>
          ) : (
            <span>Autosaves as you type</span>
          )}
        </div>
      </div>
    </motion.section>
  );
}
