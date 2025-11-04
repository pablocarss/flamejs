import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Context: Dependency Injection & State | Flame.js',
  description:
    'Learn how Flame.js uses a dynamic, type-safe Context for dependency injection. Understand how to provide a base context and extend it with Procedures (middleware).',
  keywords: [
    'Flame.js',
    'Context',
    'dependency injection',
    'DI',
    'application state',
    'Procedures',
    'middleware',
    'type-safe',
    'Prisma',
    'backend development',
  ],
  openGraph: {
    title: 'Context: The Heart of Your Application\'s State | Flame.js',
    description:
      'Master the Flame.js Context, the powerful, type-safe dependency injection system that allows you to compose application state and services with ease.',
    type: 'article',
    url: 'https://Flamejs.com/docs/core-concepts/context',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-context.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Understanding Context in Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Context: The Heart of Your Application\'s State | Flame.js',
    description:
      'Master the Flame.js Context, the powerful, type-safe dependency injection system that allows you to compose application state and services with ease.',
    images: ['https://Flamejs.com/og/docs-context.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





