// Editorial illustration data. Each story is a small ordered sequence of
// lucide icon names that symbolically depict the product's evolution.
// Rendered monochrome, in currentColor, so they blend with the design.

export const ILLUSTRATIONS = {
  netflix:      ['Mail', 'Disc', 'Play', 'Clapperboard'],
  apple:        ['Monitor', 'Music', 'Smartphone', 'Glasses'],
  airbnb:       ['Bed', 'Home', 'Globe', 'Sparkles'],
  uber:         ['Hand', 'Car', 'MapPin', 'Bot'],
  spotify:      ['Disc3', 'Radio', 'Music', 'Mic'],
  amazon:       ['BookOpen', 'Package', 'Cloud', 'Store'],
  tesla:        ['Battery', 'Car', 'BatteryCharging', 'Bot'],
  figma:        ['File', 'Cloud', 'Users', 'Sparkles'],
  notion:       ['FileText', 'Grid3x3', 'Database', 'Bot'],
  openai:       ['Terminal', 'MessageSquare', 'Bot', 'Sparkles'],
  tata:         ['Building2', 'Truck', 'Cpu', 'Globe'],
  'reliance-jio': ['Signal', 'Wifi', 'Smartphone', 'Bot'],
  infosys:      ['Cpu', 'Building2', 'Globe', 'Bot'],
  'asian-paints': ['Paintbrush', 'Palette', 'Droplet', 'Home'],
  amul:         ['Milk', 'Package', 'Users', 'Globe'],
  zerodha:      ['TrendingUp', 'LineChart', 'BookOpen', 'Users'],
  razorpay:     ['CreditCard', 'ArrowRightLeft', 'Building2', 'Sparkles'],
  freshworks:   ['MessageSquare', 'Users', 'Building2', 'Sparkles'],
  cred:         ['CreditCard', 'Star', 'Wallet', 'Sparkles'],
  postman:      ['Terminal', 'Send', 'Users', 'Bot'],
};

export function getIllustration(slug) {
  return ILLUSTRATIONS[slug] || [];
}
