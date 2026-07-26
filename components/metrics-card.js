'use client';

import { Users, Building2, Briefcase, MapPin, Landmark, Coins, Globe2, Calendar, User, Factory } from 'lucide-react';

const FIELDS = [
  { key: 'founded', label: 'Founded', Icon: Calendar },
  { key: 'founders', label: 'Founders', Icon: User },
  { key: 'ceo', label: 'CEO', Icon: Briefcase },
  { key: 'hq', label: 'Headquarters', Icon: MapPin },
  { key: 'industry', label: 'Industry', Icon: Factory },
  { key: 'revenue', label: 'Revenue', Icon: Coins },
  { key: 'users', label: 'Users / Customers', Icon: Users },
  { key: 'employees', label: 'Employees', Icon: Building2 },
  { key: 'countries', label: 'Countries served', Icon: Globe2 },
  { key: 'valuation', label: 'Market cap / valuation', Icon: Landmark },
];

export function MetricsCard({ metrics }) {
  if (!metrics) return null;
  return (
    <div className="rounded-3xl border border-border/70 bg-[hsl(var(--surface-1))]">
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Specifications</div>
          <div className="mt-1 font-serif-display text-xl">At a glance</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {FIELDS.map(({ key, label, Icon }, i) => {
          const value = metrics[key];
          if (!value) return null;
          return (
            <div
              key={key}
              className={`px-6 py-4 ${i >= 2 ? 'border-t border-border' : ''}`}
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <Icon className="h-3 w-3" />
                {label}
              </div>
              <div className="mt-1.5 text-[14.5px] font-medium leading-snug text-foreground text-pretty">
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
