'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, CheckCircle2, Circle, Sparkles } from 'lucide-react';

export function DecisionChallenge({ decision, index = 0, accent }) {
  const [picked, setPicked] = useState(null);
  if (!decision) return null;

  const revealed = picked !== null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="my-16 rounded-3xl border border-border/70 bg-[hsl(var(--surface-1))] p-6 sm:p-8 relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${accent || 'hsl(var(--foreground))'}22, transparent)` }}
      />

      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <CalendarDays className="h-3.5 w-3.5" />
        {decision.year}
        <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
        Decision {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="mt-3 font-serif-display text-3xl sm:text-4xl text-balance">
        You’re the Product Manager.
      </h3>
      <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground text-pretty max-w-2xl">
        {decision.setup}
      </p>
      <p className="mt-4 text-[15.5px] font-medium">{decision.question}</p>

      <ul className="mt-6 grid gap-2">
        {decision.options.map((opt, i) => {
          const isSelected = picked === i;
          const isCorrect = revealed && i === decision.actualIndex;
          return (
            <li key={i}>
              <button
                onClick={() => !revealed && setPicked(i)}
                disabled={revealed}
                className={`w-full text-left rounded-xl border transition-all duration-300 px-4 py-3.5 flex items-start gap-3 group
                  ${
                    revealed
                      ? isCorrect
                        ? 'border-foreground/40 bg-[hsl(var(--surface-2))]'
                        : isSelected
                        ? 'border-border bg-transparent opacity-70'
                        : 'border-border/60 bg-transparent opacity-50'
                      : 'border-border hover:border-foreground/40 hover:bg-[hsl(var(--surface-2))]'
                  }`}
              >
                <span className="mt-0.5 shrink-0">
                  {revealed && isCorrect ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Circle className="h-4 w-4 opacity-60" />
                  )}
                </span>
                <span className="text-[14.5px] leading-snug">{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 rounded-2xl border border-border/70 bg-[hsl(var(--surface-2))] p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-3 w-3" />
                What actually happened
              </div>
              <div className="mt-2 font-serif-display text-xl text-pretty">
                {decision.actual}
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground text-pretty">
                {decision.why}
              </p>
              <button
                onClick={() => setPicked(null)}
                className="mt-4 text-[12px] text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
              >
                Reset choice
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
