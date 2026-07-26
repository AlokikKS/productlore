'use client';

import { motion } from 'framer-motion';

export function QuoteBlock({ text, by }) {
  if (!text) return null;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="my-14 relative"
    >
      <span aria-hidden className="absolute -top-6 -left-2 font-serif-display text-8xl leading-none text-foreground/10 select-none">
        “
      </span>
      <blockquote className="font-serif-display text-3xl sm:text-4xl leading-[1.15] tracking-tight text-foreground text-pretty relative">
        {text}
      </blockquote>
      {by && (
        <figcaption className="mt-5 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
          — {by}
        </figcaption>
      )}
    </motion.figure>
  );
}
