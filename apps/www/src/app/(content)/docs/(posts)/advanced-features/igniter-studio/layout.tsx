import { Metadata } from 'next';
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: 'Flame Studio (API Playground) | Flame.js',
  description:
    'Explore and test your APIs interactively with Flame Studio, powered by Scalar API Reference. Learn how to enable the playground in development and production with proper security controls.',
  keywords: [
    'Flame.js',
    'Flame Studio',
    'API playground',
    'Scalar API Reference',
    'interactive API testing',
    'API explorer',
    'development tools',
    'API documentation',
    'REST API testing',
    'TypeScript',
  ],
  openGraph: {
    title: 'Flame Studio (API Playground) | Flame.js',
    description:
      'Test and explore your APIs interactively with Flame Studio. Enable the beautiful Scalar-powered playground in development and production with secure authentication controls.',
    type: 'article',
    url: 'https://Flamejs.com/docs/advanced-features/Flame-studio',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-Flame-studio.png',
        width: 1200,
        height: 630,
        alt: 'Flame.js Studio API Playground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flame Studio (API Playground) | Flame.js',
    description:
      'Test and explore your APIs interactively with Flame Studio. Enable the beautiful Scalar-powered playground in development and production with secure authentication controls.',
    images: ['https://Flamejs.com/og/docs-Flame-studio.png'],
  },
};

interface FlameStudioLayoutProps {
  children: ReactNode
}

export default function FlameStudioLayout({ children }: FlameStudioLayoutProps) {
  return children
}





