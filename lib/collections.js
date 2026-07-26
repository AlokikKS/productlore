// Curated thematic collections. Each story lives in 1+ collections.

export const COLLECTIONS = [
  {
    id: 'indian-innovation',
    title: 'Indian Innovation',
    subtitle: 'Product journeys born in India, shaped by India.',
    accent: '#FF9933',
    slugs: ['tata', 'reliance-jio', 'infosys', 'asian-paints', 'amul', 'zerodha', 'razorpay', 'freshworks', 'cred', 'postman'],
  },
  {
    id: 'marketplace',
    title: 'Marketplace Products',
    subtitle: 'Two-sided platforms that rewired trust, discovery, and payments.',
    accent: '#FF385C',
    slugs: ['airbnb', 'uber', 'amazon'],
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    subtitle: 'Products that developers evangelize into their teams.',
    accent: '#FF6C37',
    slugs: ['figma', 'notion', 'postman', 'openai'],
  },
  {
    id: 'consumer',
    title: 'Consumer Apps',
    subtitle: 'Everyday products that quietly rewired attention and habit.',
    accent: '#E50914',
    slugs: ['netflix', 'spotify', 'apple', 'cred', 'airbnb'],
  },
  {
    id: 'fintech',
    title: 'Fintech',
    subtitle: 'Money as a product surface — payments, credit, and trust.',
    accent: '#387ED1',
    slugs: ['zerodha', 'razorpay', 'cred'],
  },
  {
    id: 'b2b-saas',
    title: 'B2B SaaS',
    subtitle: 'Software that quietly became the operating layer for modern work.',
    accent: '#25C16F',
    slugs: ['figma', 'notion', 'postman', 'freshworks', 'infosys'],
  },
  {
    id: 'ai',
    title: 'AI-native Products',
    subtitle: 'The first generation of products where intelligence is the product.',
    accent: '#10A37F',
    slugs: ['openai'],
  },
];

export function getCollection(id) {
  return COLLECTIONS.find((c) => c.id === id);
}

export function getCollectionsForStory(slug) {
  return COLLECTIONS.filter((c) => c.slugs.includes(slug));
}
