import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ScrollWrapper from '@/components/ScrollWrapper';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

import SmoothScrollManager from '@/components/SmoothScrollManager';

export const metadata: Metadata = {
  title: 'Anthony | Software Engineer',
  description:
    'Senior Software Engineer Portfolio - Transforming complex logic into digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-blue-100 selection:text-blue-900`}
      >
        <SmoothScrollManager />
        {children}
        <ScrollWrapper />
      </body>
    </html>
  );
}
