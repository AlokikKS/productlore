'use client';

import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { getIllustration } from '@/lib/illustrations';
import { motion } from 'framer-motion';

export function EditorialIllustration({ slug }) {
  const items = getIllustration(slug);
  if (!items.length) return null;
  return (
    <div className="relative rounded-3xl border border-border/70 bg-[hsl(var(--surface-1))] px-6 sm:px-10 py-8 sm:py-12 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_20%,currentColor,transparent_40%)]" />
      </div>

      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Editorial illustration
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
        {items.map((iconName, i) => {
          const Icon = Icons[iconName] || Icons.Square;
          return (
            <div key={`${iconName}-${i}`} className="flex items-center gap-2 sm:gap-6 shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border border-border/70 bg-[hsl(var(--surface-2))] flex items-center justify-center">
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={1.4} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {iconName.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
              {i < items.length - 1 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" strokeWidth={1.5} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
