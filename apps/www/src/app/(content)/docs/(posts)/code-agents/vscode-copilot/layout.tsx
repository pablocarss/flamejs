import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Using VS Code Copilot as a Code Agent | Flame.js',
  description:
    'Learn how to configure GitHub Copilot in VS Code to be an expert on your Flame.js project using custom instructions and our AI-friendly templates.',
  keywords: [
    'Flame.js',
    'VS Code Copilot',
    'GitHub Copilot',
    'AI code assistant',
    'Code Agent',
    'AI development',
    '.github/copilot/instructions.md',
    'AI-Friendly',
    'LLM',
  ],
  openGraph: {
    title: 'Using VS Code Copilot as a Code Agent with Flame.js',
    description:
      'A guide to making GitHub Copilot an expert on your Flame.js project using custom instructions and official templates for a seamless AI-assisted development experience.',
    type: 'article',
    url: 'https://Flamejs.com/docs/code-agents/vscode-copilot',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-vscode-copilot.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Using VS Code Copilot with Flame.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Using VS Code Copilot as a Code Agent with Flame.js',
    description:
      'A guide to making GitHub Copilot an expert on your Flame.js project using custom instructions and official templates for a seamless AI-assisted development experience.',
    images: ['https://Flamejs.com/og/docs-vscode-copilot.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





