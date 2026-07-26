import './globals.css';

export const metadata = {
  title: 'ProductLore — Stories Behind the World\u2019s Greatest Products',
  description:
    'A premium library of product journeys. Discover the problem, the spark, the MVP, and the decisions that changed everything.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
