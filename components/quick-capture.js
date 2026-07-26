'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookmarkPlus, Check } from 'lucide-react';
import { saveItemToNotebook } from '@/lib/notebook';

export function QuickCapture({ storySlug, storyName, text, source, sectionType, label = 'Save to notebook', className = '' }) {
  const [state, setState] = useState('idle'); // idle | saved | dup
  const timer = useRef(null);

  useEffect(() => () => timer.current && clearTimeout(timer.current), []);

  const onSave = () => {
    const res = saveItemToNotebook({ storySlug, storyName, text, source, sectionType });
    setState(res.ok ? 'saved' : 'dup');
    timer.current = setTimeout(() => setState('idle'), 1600);
  };

  const showSaved = state === 'saved';
  const showDup = state === 'dup';

  return (
    <button
      onClick={onSave}
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-[hsl(var(--surface-1))] px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors ${className}`}
      aria-label={label}
    >
      <AnimatePresence mode="wait" initial={false}>
        {showSaved ? (
          <motion.span key="ok" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-1.5">
            <Check className="h-3 w-3" /> Saved
          </motion.span>
        ) : showDup ? (
          <motion.span key="dup" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-1.5">
            <Check className="h-3 w-3" /> Already saved
          </motion.span>
        ) : (
          <motion.span key="idle" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-1.5">
            <BookmarkPlus className="h-3 w-3" /> {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
