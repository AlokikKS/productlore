import StoryReader from './StoryReader.jsx';
import { stories, getStoryBySlug } from '@/lib/stories';
import { notFound } from 'next/navigation';

// Pre-generate a static page for every known story at build time.
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

// Reject unknown slugs so 404 is served instead of a runtime crash.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: 'Story not found — ProductLore' };
  return {
    title: `${story.name} — ProductLore`,
    description: story.hook,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return notFound();
  return <StoryReader slug={slug} />;
}
