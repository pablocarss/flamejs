import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Flame.js Docs: The AI-Friendly, Typesafe Framework',
  description:
    'Welcome to the official documentation for Flame.js. Learn how to build modern, type-safe TypeScript applications with our comprehensive guides and tutorials.',
  keywords: [
    'Flame.js',
    'documentation',
    'TypeScript framework',
    'full-stack',
    'type-safe',
    'AI-Friendly',
    'Node.js',
    'React',
    'Next.js',
    'API development',
    'tutorial',
  ],
  openGraph: {
    title: 'Flame.js Docs: The AI-Friendly, Typesafe Framework',
    description:
      'The official documentation for Flame.js. Learn to build modern, type-safe applications with features like real-time updates, background jobs, and a powerful plugin system.',
    type: 'website',
    url: 'https://Flamejs.com/docs',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-home.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Official Documentation for Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flame.js Docs: The AI-Friendly, Typesafe Framework',
    description:
      'The official documentation for Flame.js. Learn to build modern, type-safe applications with features like real-time updates, background jobs, and a powerful plugin system.',
    images: ['https://Flamejs.com/og/docs-home.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





