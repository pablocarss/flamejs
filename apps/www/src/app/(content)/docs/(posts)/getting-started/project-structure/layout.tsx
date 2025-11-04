import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Recommended Project Structure | Flame.js',
  description:
    'Learn the recommended Feature-Sliced Architecture for Flame.js projects. Organize your code by features for a scalable, maintainable, and collaborative codebase.',
  keywords: [
    'Flame.js',
    'project structure',
    'architecture',
    'feature-sliced architecture',
    'scalability',
    'maintainability',
    'best practices',
    'controllers',
    'services',
    'features',
  ],
  openGraph: {
    title: 'Recommended Project Structure | Flame.js',
    description:
      'A guide to the scalable, feature-based project structure used in Flame.js applications to ensure high cohesion and low coupling.',
    type: 'article',
    url: 'https://Flamejs.com/docs/getting-started/project-structure',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-project-structure.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Project Structure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recommended Project Structure | Flame.js',
    description:
      'A guide to the scalable, feature-based project structure used in Flame.js applications to ensure high cohesion and low coupling.',
    images: ['https://Flamejs.com/og/docs-project-structure.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





