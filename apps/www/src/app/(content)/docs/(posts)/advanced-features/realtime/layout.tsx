import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Flame.js Realtime: Live Data, Effortlessly',
  description:
    'Learn how to build real-time features with Flame.js using Server-Sent Events (SSE). Automatically revalidate UI, create custom data streams, and push live data from server to client with ease.',
  keywords: [
    'Flame.js',
    'realtime',
    'Server-Sent Events',
    'SSE',
    'live data',
    'UI revalidation',
    'data streams',
    'WebSockets alternative',
    'full-stack',
    'TypeScript',
  ],
  openGraph: {
    title: 'Flame.js Realtime: Live Data, Effortlessly',
    description:
      'Discover how to push live data from your server to clients using Flame.js. Implement automatic UI updates and custom data streams with our integrated SSE solution.',
    type: 'article',
    url: 'https://Flamejs.com/docs/advanced-features/realtime',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-realtime.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Flame.js Realtime Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flame.js Realtime: Live Data, Effortlessly',
    description:
      'Discover how to push live data from your server to clients using Flame.js. Implement automatic UI updates and custom data streams with our integrated SSE solution.',
    images: ['https://Flamejs.com/og/docs-realtime.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





