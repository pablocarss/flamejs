import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Getting Started | Flame.js',
  description:
    'Your guide to getting started with Flame.js. Learn how to install the framework, set up your project, and build your first type-safe API in minutes.',
  keywords: [
    'Flame.js',
    'getting started',
    'quick start',
    'tutorial',
    'installation',
    'project structure',
    'type-safe API',
    'full-stack',
    'TypeScript',
    'backend framework',
  ],
  openGraph: {
    title: 'Getting Started with Flame.js',
    description:
      'Follow our step-by-step guides to install Flame.js, understand the project structure, and build your first fully type-safe API.',
    type: 'article',
    url: 'https://Flamejs.com/docs/getting-started',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-getting-started.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Getting Started with Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Started with Flame.js',
    description:
      'Follow our step-by-step guides to install Flame.js, understand the project structure, and build your first fully type-safe API.',
    images: ['https://Flamejs.com/og/docs-getting-started.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





