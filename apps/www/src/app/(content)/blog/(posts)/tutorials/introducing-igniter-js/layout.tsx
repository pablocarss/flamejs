import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Introducing Flame.js: A Type-Safe Full-Stack Framework',
  description:
    'Learn about Flame.js, the modern, type-safe full-stack framework designed to solve common development complexities, enhance developer experience, and provide robust features like real-time updates and background jobs by default.',
  keywords: [
    'Flame.js',
    'TypeScript framework',
    'full-stack',
    'type-safe',
    'Node.js',
    'React',
    'Next.js',
    'web development',
    'developer experience',
    'tRPC alternative',
  ],
  openGraph: {
    title: 'Introducing Flame.js: A Type-Safe Full-Stack Framework',
    description:
      'Discover Flame.js, a modern framework that brings end-to-end type safety to your full-stack applications, simplifying state management and backend complexity.',
    type: 'article',
    url: 'https://Flamejs.com/blog/tutorials/introducing-Flame-js',
    images: [
      {
        url: 'https://Flamejs.com/og/introducing-Flame-js.png', // Assuming an OG image exists at this path
        width: 1200,
        height: 630,
        alt: 'Introducing Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing Flame.js: A Type-Safe Full-Stack Framework',
    description:
      'Discover Flame.js, a modern framework that brings end-to-end type safety to your full-stack applications, simplifying state management and backend complexity.',
    images: ['https://Flamejs.com/og/introducing-Flame-js.png'],
  },
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





