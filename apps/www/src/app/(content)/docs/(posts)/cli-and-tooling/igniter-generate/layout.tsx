import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'CLI: `Flame generate` for Scaffolding & Schemas | Flame.js',
  description:
    'Learn how to use the `Flame generate` command to accelerate development by scaffolding entire features from your database schema and generating a type-safe client.',
  keywords: [
    'Flame.js',
    'Flame generate',
    'CLI',
    'code generation',
    'scaffolding',
    'schema-first',
    'Prisma',
    'Zod schema',
    'type-safe client',
    'developer tools',
  ],
  openGraph: {
    title: 'CLI: `Flame generate` for Scaffolding & Schemas | Flame.js',
    description:
      'Master the `Flame generate` command to automatically create feature boilerplate from your database schema and generate a fully type-safe client for your frontend.',
    type: 'article',
    url: 'https://Flamejs.com/docs/cli-and-tooling/Flame-generate',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-Flame-generate.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Code and Schema Generation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLI: `Flame generate` for Scaffolding & Schemas | Flame.js',
    description:
      'Master the `Flame generate` command to automatically create feature boilerplate from your database schema and generate a fully type-safe client for your frontend.',
    images: ['https://Flamejs.com/og/docs-Flame-generate.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





