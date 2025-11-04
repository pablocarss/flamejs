import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '<FlameProvider>: The Root of the Client-Side | Flame.js',
  description:
    'Learn how to set up the <FlameProvider>, the core component for managing client-side cache, real-time SSE connections, and providing context for React hooks.',
  keywords: [
    'Flame.js',
    'FlameProvider',
    'client-side',
    'React context',
    'query cache',
    'realtime',
    'SSE',
    'useQuery',
    'useMutation',
    'full-stack',
  ],
  openGraph: {
    title: '<FlameProvider>: The Root of the Client-Side | Flame.js',
    description:
      'Master the setup and configuration of the <FlameProvider>, the essential wrapper for all client-side features in your Flame.js application.',
    type: 'article',
    url: 'https://Flamejs.com/docs/client-side/Flame-provider',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-Flame-provider.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Provider Setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '<FlameProvider>: The Root of the Client-Side | Flame.js',
    description:
      'Master the setup and configuration of the <FlameProvider>, the essential wrapper for all client-side features in your Flame.js application.',
    images: ['https://Flamejs.com/og/docs-Flame-provider.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





