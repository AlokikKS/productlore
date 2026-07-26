import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COLLECTIONS, getCollection } from '@/lib/collections';
import { stories, badgeMeta } from '@/lib/stories';
import { LogoIcon } from '@/lib/logos';
import { ThemeToggle } from '@/components/theme-toggle';
import { ArrowLeft, ArrowUpRight, BookOpen } from 'lucide-react';

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ id: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const c = getCollection(id);
  if (!c) return { title: 'Collection — ProductLore' };
  return { title: `${c.title} — ProductLore`, description: c.subtitle };
}

export default async function CollectionPage({ params }) {
  const { id } = await params;
  const c = getCollection(id);
  if (!c) return notFound();

  const bySlug = new Map(stories.map((s) => [s.slug, s]));
  const items = c.slugs.map((slug) => bySlug.get(slug)).filter(Boolean);

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] -z-10">
        <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(60% 60% at 50% 0%, ${c.accent}33, transparent 70%)` }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Library
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" /> ProductLore
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="container pt-16 sm:pt-20 pb-8">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Collection</div>
        <h1 className="mt-3 font-serif-display text-5xl sm:text-6xl leading-[1.05] text-balance">{c.title}</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground text-pretty">{c.subtitle}</p>
        <div className="mt-4 text-xs text-muted-foreground">{items.length} stories</div>
      </section>

      <section className="container py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((story) => (
            <Link key={story.slug} href={`/story/${story.slug}`} className="group block">
              <article className="relative h-full rounded-2xl border border-border bg-[hsl(var(--surface-1))] p-6 transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5 overflow-hidden">
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: `radial-gradient(closest-side, ${story.accent}55, transparent)` }}
                />
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center border border-border bg-[hsl(var(--surface-2))]">
                    <LogoIcon slug={story.logoSlug || story.slug} className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold tracking-tight">{story.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{story.founders} · {story.year}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-6 font-serif-display text-2xl leading-snug text-pretty text-foreground">
                  “{story.hook}”
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {story.badges.slice(0, 3).map((b) => (
                    <span key={b} className="inline-flex items-center gap-1 rounded-full border border-border bg-[hsl(var(--surface-2))] px-2.5 py-1 text-[11px] text-muted-foreground">
                      <span>{badgeMeta[b]?.icon}</span>
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="uppercase tracking-[0.14em]">Read the story</span>
                  <span>{story.readTime} min read</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-16">
        <div className="container py-10 text-sm text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
          Built for curious Product Managers, founders, designers and builders who love understanding why great products win.
        </div>
      </footer>
    </main>
  );
}
