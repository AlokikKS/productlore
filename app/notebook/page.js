import { ProductNotebook } from '@/components/product-notebook';
import { AllReflections } from '@/components/all-reflections';
import { ReadingStreak } from '@/components/reading-streak';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Your Notebook — ProductLore',
  description: 'A lightweight Product Canvas + everything you’ve captured from stories. Saved locally to your browser.',
};

export default function NotebookPage() {
  return (
    <main className="relative">
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
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your notebook</div>
        <h1 className="mt-3 font-serif-display text-5xl sm:text-6xl leading-[1.05] text-balance">
          Think like a Product Manager.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground text-pretty">
          A lightweight product canvas plus everything you’ve captured while reading. Saved locally to your browser —
          no account, no cloud, no lock-in.
        </p>
      </section>

      <section className="container pb-8">
        <ReadingStreak variant="full" />
      </section>

      <section className="container py-8">
        <ProductNotebook />
      </section>

      <section className="container py-16">
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Your reflections</div>
        <AllReflections />
      </section>

      <footer className="border-t border-border mt-10">
        <div className="container py-10 text-sm text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
          Built for curious Product Managers, founders, designers and builders who love understanding why great products win.
        </div>
      </footer>
    </main>
  );
}
