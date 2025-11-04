import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'CLI: The `Flame dev` Interactive Server | Flame.js',
  description:
    'Learn to use the `Flame dev` command, the interactive development server for Flame.js projects. Monitor multiple processes and view real-time API request logs in a single dashboard.',
  keywords: [
    'Flame.js',
    'Flame dev',
    'CLI',
    'development server',
    'interactive mode',
    'API monitoring',
    'hot reloading',
    'developer experience',
    'tooling',
  ],
  openGraph: {
    title: 'CLI: The `Flame dev` Interactive Server | Flame.js',
    description:
      'Master the `Flame dev` command and its interactive dashboard to streamline your full-stack development workflow, manage multiple processes, and monitor API requests in real-time.',
    type: 'article',
    url: 'https://Flamejs.com/docs/cli-and-tooling/Flame-dev',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-Flame-dev.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Interactive Dev Server',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLI: The `Flame dev` Interactive Server | Flame.js',
    description:
      'Master the `Flame dev` command and its interactive dashboard to streamline your full-stack development workflow, manage multiple processes, and monitor API requests in real-time.',
    images: ['https://Flamejs.com/og/docs-Flame-dev.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





