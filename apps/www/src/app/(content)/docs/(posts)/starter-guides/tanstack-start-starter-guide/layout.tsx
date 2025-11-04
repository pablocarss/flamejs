import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'TanStack Start Starter Guide | Flame.js',
  description:
    'A comprehensive guide to building a modern, full-stack application with Flame.js and the TanStack Start framework, powered by Vite.',
  keywords: [
    'Flame.js',
    'TanStack Start',
    'TanStack Router',
    'TanStack Query',
    'Vite',
    'full-stack starter',
    'type-safe API',
    'tutorial',
    'React',
    'modern stack',
  ],
  openGraph: {
    title: 'Full-Stack Guide: Building with the Flame.js TanStack Start Starter',
    description:
      'Learn to build modern, full-stack applications with Flame.js and the Vite-powered TanStack Start framework for a truly modern development experience.',
    type: 'article',
    url: 'https://Flamejs.com/docs/starter-guides/tanstack-start-starter-guide',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-tanstack-starter.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Building a Full-Stack App with TanStack Start and Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Guide: Building with the Flame.js TanStack Start Starter',
    description:
      'Learn to build modern, full-stack applications with Flame.js and the Vite-powered TanStack Start framework for a truly modern development experience.',
    images: ['https://Flamejs.com/og/docs-tanstack-starter.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





