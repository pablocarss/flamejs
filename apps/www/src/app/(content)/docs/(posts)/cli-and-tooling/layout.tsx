import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'CLI & Tooling | Flame.js',
  description:
    'Master the Flame.js CLI to streamline your development workflow. Learn about project scaffolding with `Flame init`, running the dev server with `Flame dev`, and code generation.',
  keywords: [
    'Flame.js',
    'CLI',
    'command line interface',
    'tooling',
    'scaffolding',
    'code generation',
    'Flame init',
    'Flame dev',
    'Flame generate',
    'developer tools',
  ],
  openGraph: {
    title: 'CLI & Tooling | Flame.js',
    description:
      'Explore the powerful command-line tools that come with Flame.js to boost your productivity from project creation to deployment.',
    type: 'article',
    url: 'https://Flamejs.com/docs/cli-and-tooling',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-cli-and-tooling.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js CLI and Tooling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLI & Tooling | Flame.js',
    description:
      'Explore the powerful command-line tools that come with Flame.js to boost your productivity from project creation to deployment.',
    images: ['https://Flamejs.com/og/docs-cli-and-tooling.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





