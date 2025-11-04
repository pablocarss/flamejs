import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'CLI: Scaffolding with `Flame init` | Flame.js',
  description:
    'Learn how to use the `Flame init` command to scaffold a new, production-ready Flame.js project in minutes with an interactive setup for frameworks, features, and database configuration.',
  keywords: [
    'Flame.js',
    'Flame init',
    'CLI',
    'scaffolding',
    'project setup',
    'boilerplate',
    'Next.js',
    'Express',
    'Prisma',
    'Docker',
    'code generation',
  ],
  openGraph: {
    title: 'CLI: Scaffolding with `Flame init` | Flame.js',
    description:
      'Get your project started in minutes. This guide covers how `Flame init` scaffolds your application with a feature-based architecture, interactive setup, and optional Docker integration.',
    type: 'article',
    url: 'https://Flamejs.com/docs/cli-and-tooling/Flame-init',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-Flame-init.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Project Scaffolding with `Flame init`',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLI: Scaffolding with `Flame init` | Flame.js',
    description:
      'Get your project started in minutes. This guide covers how `Flame init` scaffolds your application with a feature-based architecture, interactive setup, and optional Docker integration.',
    images: ['https://Flamejs.com/og/docs-Flame-init.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





