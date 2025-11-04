import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'The Flame Builder: Application Foundation | Flame.js',
  description:
    'Learn about the Flame Builder, the fluent, type-safe API for composing your application. Understand how to configure context, services, and features like Store and Queues.',
  keywords: [
    'Flame.js',
    'Flame Builder',
    'builder pattern',
    'application setup',
    'type-safe',
    'fluent API',
    'dependency injection',
    'Context',
    'Store',
    'Queues',
    'Plugins',
  ],
  openGraph: {
    title: 'The Flame Builder: Your Application\'s Foundation | Flame.js',
    description:
      'Master the Flame Builder, the core of every Flame.js application. This guide covers the chainable API for a guided, type-safe configuration experience.',
    type: 'article',
    url: 'https://Flamejs.com/docs/core-concepts/Flame-builder',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-Flame-builder.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'The Flame.js Builder Pattern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Flame Builder: Your Application\'s Foundation | Flame.js',
    description:
      'Master the Flame Builder, the core of every Flame.js application. This guide covers the chainable API for a guided, type-safe configuration experience.',
    images: ['https://Flamejs.com/og/docs-Flame-builder.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





