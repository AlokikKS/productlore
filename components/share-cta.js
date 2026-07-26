'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Share2, Link2, ArrowRight, Check } from 'lucide-react';

export function ShareCTA({ story }) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    (typeof window !== 'undefined' ? window.location.href : '') || `/story/${story?.slug}`;
  const shareText = story ? `“${story.hook}” — ${story.name} on ProductLore` : 'ProductLore';

  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: story?.name || 'ProductLore', text: shareText, url: shareUrl });
      } else {
        onCopy();
      }
    } catch {}
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section className="my-16 rounded-3xl border border-border/70 bg-[hsl(var(--surface-1))] p-8 sm:p-12 text-center">
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Share this experience</div>
      <h3 className="mt-3 font-serif-display text-3xl sm:text-4xl text-balance">
        Did this story change how you think?
      </h3>
      <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
        Pass it to another curious mind. Great product thinking spreads by conversation.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={onShare}
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 text-[13px] font-medium hover:opacity-90 transition-opacity"
        >
          <Share2 className="h-4 w-4" /> Share story
        </button>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13px] font-medium hover:bg-[hsl(var(--surface-2))] transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy link'}
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13px] font-medium hover:bg-[hsl(var(--surface-2))] transition-colors"
        >
          Explore another story <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
