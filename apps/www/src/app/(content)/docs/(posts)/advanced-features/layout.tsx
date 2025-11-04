import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Advanced Features | Flame.js',
  description:
    'Explore advanced Flame.js features like background job queues, caching with the Store adapter, real-time communication via WebSockets, and how to extend functionality with plugins.',
  keywords: [
    'Flame.js',
    'advanced features',
    'background jobs',
    'queues',
    'caching',
    'pub/sub',
    'store',
    'realtime',
    'WebSockets',
    'plugins',
  ],
  openGraph: {
    title: 'Advanced Features | Flame.js',
    description:
      'Dive deeper into the powerful, built-in features that make Flame.js a complete ecosystem for modern TypeScript applications.',
    type: 'article',
    url: 'https://Flamejs.com/docs/advanced-features',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-advanced-features.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Advanced Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Features | Flame.js',
    description:
      'Dive deeper into the powerful, built-in features that make Flame.js a complete ecosystem for modern TypeScript applications.',
    images: ['https://Flamejs.com/og/docs-advanced-features.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





