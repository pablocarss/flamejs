import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Validation with Zod & Ensure | Flame.js',
  description:
    'Learn the two layers of validation in Flame.js: schema validation for data shapes with Zod, and business logic validation for runtime rules with the Ensure utility.',
  keywords: [
    'Flame.js',
    'Validation',
    'Zod',
    'schema validation',
    'business logic',
    'Ensure utility',
    'type-safe',
    'data integrity',
    'API development',
    'backend',
  ],
  openGraph: {
    title: 'Validation: Ensuring Data Integrity and Business Rules | Flame.js',
    description:
      'A guide to building robust APIs with Flame.js using Zod for schema validation and the Ensure utility for declarative business rule assertions.',
    type: 'article',
    url: 'https://Flamejs.com/docs/core-concepts/validation',
    images: [
      {
        url: 'https://Flamejs.com/og/docs-validation.png', // Assuming an OG image exists
        width: 1200,
        height: 630,
        alt: 'Data Validation in Flame.js with Zod and Ensure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Validation: Ensuring Data Integrity and Business Rules | Flame.js',
    description:
      'A guide to building robust APIs with Flame.js using Zod for schema validation and the Ensure utility for declarative business rule assertions.',
    images: ['https://Flamejs.com/og/docs-validation.png'],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}





