import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'REST API Starter Guide | Flame.js',
  description:
    'A comprehensive guide to building high-performance, type-safe REST APIs with Flame.js, covering starters for Express, Bun, and Deno.',
  keywords: [
    'Flame.js',
    'REST API',
    'headless',
    'backend service',
    'Express',
    'Bun',
    'Deno',
    'type-safe API',
    'Prisma',
    'tutorial',
  ],
  openGraph: {
    title: 'Guide: Building High-Performance, Type-Safe REST APIs with Flame.js',
    description:
      'Learn to build scalable, headless REST APIs using your choice of runtime (Express, Bun, Deno) with the structured, type-safe architecture of Flame.js.',
    type: 'article',
    url: 'https://Flamejs.com/docs/starter-guides/rest-api-starter-guide',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-rest-api-starter.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Building a REST API with Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide: Building High-Performance, Type-Safe REST APIs with Flame.js',
    description:
      'Learn to build scalable, headless REST APIs using your choice of runtime (Express, Bun, Deno) with the structured, type-safe architecture of Flame.js.',
    images: ['https://Flamejs.com/og/docs-rest-api-starter.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





