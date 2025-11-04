import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Installation - Getting Started with Flame.js',
  description:
    'Learn how to install Flame.js. Start with official templates, use the `Flame init` CLI for a custom setup, or add it manually to an existing project.',
  keywords: [
    'Flame.js',
    'installation',
    'setup',
    'Flame init',
    'templates',
    'starters',
    'npm install',
    'yarn add',
    'pnpm add',
    'bun add',
    'ioredis',
    'bullmq',
    'zod',
    'peer dependencies',
    'quick start',
  ],
  openGraph: {
    title: 'Installation - Getting Started with Flame.js',
    description:
      'Step-by-step guide to installing Flame.js. Covers official templates, automated scaffolding with `Flame init`, and manual setup for existing projects.',
    type: 'article',
    url: 'https://Flamejs.com/docs/getting-started/installation',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-installation.png',
        width: 1200,
        height: 630,
        alt: 'Installing Flame.js using templates or CLI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installation - Getting Started with Flame.js',
    description:
      'Step-by-step guide to installing Flame.js. Covers official templates, automated scaffolding with `Flame init`, and manual setup for existing projects.',
    images: ['https://Flamejs.com/og/docs-installation.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





