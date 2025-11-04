import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Client-Side Integration | Flame.js',
  description:
    'Learn how to integrate Flame.js with your frontend. Discover the type-safe API client, React hooks like useQuery and useMutation, and real-time features with useRealtime.',
  keywords: [
    'Flame.js',
    'client-side',
    'React',
    'Next.js',
    'API client',
    'useQuery',
    'useMutation',
    'useRealtime',
    'type-safe',
    'full-stack',
    'frontend integration',
  ],
  openGraph: {
    title: 'Client-Side Integration | Flame.js',
    description:
      'Seamlessly connect your frontend with Flame.js. This guide covers the type-safe client, React hooks for data fetching and mutations, and real-time updates.',
    type: 'article',
    url: 'https://Flamejs.com/docs/client-side',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-client-side.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Client-Side Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client-Side Integration | Flame.js',
    description:
      'Seamlessly connect your frontend with Flame.js. This guide covers the type-safe client, React hooks for data fetching and mutations, and real-time updates.',
    images: ['https://Flamejs.com/og/docs-client-side.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





