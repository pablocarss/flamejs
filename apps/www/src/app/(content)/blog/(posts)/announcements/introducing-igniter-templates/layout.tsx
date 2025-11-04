import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Introducing Flame.js Templates: Build Full-Stack Apps Faster',
  description:
    'Discover Flame.js Templates, a collection of production-ready starters for Next.js, React, Bun, and more. Kickstart your next project in minutes with our best-practice templates.',
  keywords: [
    'Flame.js',
    'full-stack templates',
    'starter projects',
    'Next.js template',
    'React template',
    'Bun template',
    'Express API template',
    'Deno API template',
    'project scaffolding',
    'TypeScript',
    'Prisma',
  ],
  openGraph: {
    title: 'Introducing Flame.js Templates: Build Full-Stack Apps Faster',
    description:
      'Kickstart your next project in minutes. Discover our production-ready starters for Next.js, React, Bun, and more.',
    type: 'article',
    url: 'https://Flamejs.com/blog/announcements/introducing-Flame-templates',
    images: [
      {
        url: 'https://Flamejs.com/og/introducing-templates.png', // Assuming an OG image exists at this path
        width: 1200,
        height: 630,
        alt: 'Flame.js Templates Announcement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing Flame.js Templates: Build Full-Stack Apps Faster',
    description:
      'Kickstart your next project in minutes. Discover our production-ready starters for Next.js, React, Bun, and more.',
    images: ['https://Flamejs.com/og/introducing-templates.png'], // Assuming a Twitter card image exists at this path
  },
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





