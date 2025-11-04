import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Routing: Assembling Your API | Flame.js',
  description:
    'Learn how to assemble your API using the Flame.js Router. Combine controllers, configure base paths, and integrate with frameworks like Next.js for a unified, type-safe API.',
  keywords: [
    'Flame.js',
    'Routing',
    'AppRouter',
    'API router',
    'basePATH',
    'baseURL',
    'Next.js integration',
    'Express integration',
    'type-safe API',
    'backend development',
  ],
  openGraph: {
    title: 'Routing: Assembling Your API | Flame.js',
    description:
      'A guide to the final step of building your backend: assembling all your controllers into a single, routable API with the Flame.js Router.',
    type: 'article',
    url: 'https://Flamejs.com/docs/core-concepts/routing',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-routing.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Assembling an API with the Flame.js Router',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Routing: Assembling Your API | Flame.js',
    description:
      'A guide to the final step of building your backend: assembling all your controllers into a single, routable API with the Flame.js Router.',
    images: ['https://Flamejs.com/og/docs-routing.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





