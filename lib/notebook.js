'use client';

// LocalStorage-backed notebook helpers. All keys namespaced under `productlore:`.

export const NOTEBOOK_KEY = 'productlore:notebook:v1';
export const STREAK_KEY = 'productlore:streak:v1';
export const REFLECTION_PREFIX = 'productlore:reflection:';

export const CANVAS_FIELDS = [
  { key: 'idea',            label: 'The Idea',           hint: 'One sentence. What are you building, in plain words?' },
  { key: 'problem',         label: 'The Problem',        hint: 'Whose pain? How obvious is it? How often does it happen?' },
  { key: 'targetUser',      label: 'Target User',        hint: 'Who feels this problem sharpest? Where do they hang out?' },
  { key: 'mvp',             label: 'The First MVP',      hint: 'What is the smallest thing you can ship this week?' },
  { key: 'differentiator',  label: 'Differentiator',     hint: 'Why will people choose you over the current alternative?' },
  { key: 'metrics',         label: 'North-Star Metrics', hint: 'What single number tells you it’s working?' },
  { key: 'risks',           label: 'Biggest Risks',      hint: 'What could kill this? Where is your biggest assumption?' },
  { key: 'nextExperiment',  label: 'Next Experiment',    hint: 'What will you test in the next 7 days to learn faster?' },
];

const emptyNotebook = () => ({
  idea: '', problem: '', targetUser: '', mvp: '',
  differentiator: '', metrics: '', risks: '', nextExperiment: '',
  savedItems: [],
});

export function readNotebook() {
  try {
    const raw = window.localStorage.getItem(NOTEBOOK_KEY);
    if (!raw) return emptyNotebook();
    const parsed = JSON.parse(raw);
    return { ...emptyNotebook(), ...parsed, savedItems: parsed.savedItems || [] };
  } catch {
    return emptyNotebook();
  }
}

export function writeNotebook(nb) {
  try {
    window.localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(nb));
  } catch {}
}

export function saveItemToNotebook(item) {
  const nb = readNotebook();
  const withId = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    savedAt: new Date().toISOString(),
    ...item,
  };
  // De-dupe by (text + source + storySlug)
  const dupeKey = `${item.storySlug}|${item.source}|${(item.text || '').slice(0, 120)}`;
  const existing = nb.savedItems.some(
    (s) => `${s.storySlug}|${s.source}|${(s.text || '').slice(0, 120)}` === dupeKey
  );
  if (existing) return { ok: false, reason: 'duplicate' };
  nb.savedItems = [withId, ...nb.savedItems].slice(0, 300);
  writeNotebook(nb);
  return { ok: true, item: withId };
}

export function removeSavedItem(id) {
  const nb = readNotebook();
  nb.savedItems = nb.savedItems.filter((s) => s.id !== id);
  writeNotebook(nb);
}

// ---------- Streak ----------
const todayStr = () => new Date().toISOString().slice(0, 10);
const diffDays = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);

export function readStreak() {
  try {
    const raw = window.localStorage.getItem(STREAK_KEY);
    if (!raw) {
      return { lastReadDate: null, currentStreak: 0, longestStreak: 0, totalDays: 0, storiesRead: {} };
    }
    return JSON.parse(raw);
  } catch {
    return { lastReadDate: null, currentStreak: 0, longestStreak: 0, totalDays: 0, storiesRead: {} };
  }
}

export function recordStoryRead(slug) {
  const today = todayStr();
  const s = readStreak();
  const firstReadToday = s.lastReadDate !== today;

  if (firstReadToday) {
    if (s.lastReadDate && diffDays(s.lastReadDate, today) === 1) {
      s.currentStreak += 1;
    } else {
      s.currentStreak = 1;
    }
    s.longestStreak = Math.max(s.longestStreak || 0, s.currentStreak);
    s.totalDays = (s.totalDays || 0) + 1;
    s.lastReadDate = today;
  }
  s.storiesRead = { ...(s.storiesRead || {}), [slug]: true };

  try { window.localStorage.setItem(STREAK_KEY, JSON.stringify(s)); } catch {}
  return { streak: s, firstReadToday };
}

export const STREAK_MILESTONES = [1, 3, 7, 14, 30, 60, 100];

export function readAllReflections() {
  try {
    const out = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(REFLECTION_PREFIX)) {
        const slug = k.replace(REFLECTION_PREFIX, '');
        const text = window.localStorage.getItem(k) || '';
        if (text.trim()) out.push({ slug, text });
      }
    }
    return out;
  } catch {
    return [];
  }
}
