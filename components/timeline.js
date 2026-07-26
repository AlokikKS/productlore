'use client';

import { motion } from 'framer-motion';

export function Timeline({ items = [], accent = 'currentColor' }) {
  if (!items.length) return null;
  return (
    <div className="relative">
      <div
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)' }}
      >
        {items.map((it, i) => (
          <motion.div
            key={`${it.year}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4) }}
            className="snap-start shrink-0 min-w-[160px] sm:min-w-[180px]"
          >
            <div className="relative pl-4">
              <span
                className="absolute left-0 top-1 h-2 w-2 rounded-full"
                style={{ background: accent }}
              />
              <div className="absolute left-[3px] top-3 h-full w-px bg-border" />
              <div className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                {it.year}
              </div>
              <div className="mt-1 text-[13.5px] font-medium leading-snug text-foreground text-pretty">
                {it.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
