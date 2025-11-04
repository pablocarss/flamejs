import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Using Zed Editor as a Code Agent | Flame.js',
  description:
    'Learn how to use the Zed code editor with Flame.js. Guide on leveraging its automatic context detection with `AGENT.md` from our AI-friendly templates.',
  keywords: [
    'Flame.js',
    'Zed Editor',
    'AI code editor',
    'Code Agent',
    'AI development',
    'AGENT.md',
    'AI-Friendly',
    'LLM',
    'high-performance editor',
  ],
  openGraph: {
    title: 'Using Zed Editor as a Code Agent with Flame.js',
    description:
      'A guide to making the Zed editor an expert on your Flame.js project by using its automatic context detection with our official templates.',
    type: 'article',
    url: 'https://Flamejs.com/docs/code-agents/zed-editor',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-zed-editor.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Using Zed Editor with Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Using Zed Editor as a Code Agent with Flame.js',
    description:
      'A guide to making the Zed editor an expert on your Flame.js project by using its automatic context detection with our official templates.',
    images: ['https://Flamejs.com/og/docs-zed-editor.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





