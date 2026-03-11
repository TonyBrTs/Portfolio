import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ScrollWrapper from '@/components/ScrollWrapper';
import SmoothScrollManager from '@/components/SmoothScrollManager';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anthony | Software Engineer',
  description:
    'Senior Software Engineer Portfolio - Transforming complex logic into digital experiences.',
  // Configuración de Favicons y Manifest
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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