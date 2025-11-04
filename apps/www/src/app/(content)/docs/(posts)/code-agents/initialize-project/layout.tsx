import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Initialize a Project with Liz | Flame.js',
  description:
    'Learn how to use Liz, the Flame.js AI agent, to bootstrap a new project using spec-driven development. Turn your idea into requirements, design docs, and tasks.',
  keywords: [
    'Flame.js',
    'Liz',
    'AI agent',
    'spec-driven development',
    'project initialization',
    'requirements.md',
    'design.md',
    'tasks.md',
    'Code Agent',
    'AI development',
  ],
  openGraph: {
    title: 'Initialize a Project with Liz, the Flame.js AI Agent',
    description:
      'A guide on collaborating with the Flame.js AI agent (Liz) to transform a high-level idea into a fully specified project with a clear implementation plan.',
    type: 'article',
    url: 'https://Flamejs.com/docs/code-agents/initialize-project',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-initialize-project.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Initializing a Project with the Flame.js AI Agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Initialize a Project with Liz, the Flame.js AI Agent',
    description:
      'A guide on collaborating with the Flame.js AI agent (Liz) to transform a high-level idea into a fully specified project with a clear implementation plan.',
    images: ['https://Flamejs.com/og/docs-initialize-project.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





