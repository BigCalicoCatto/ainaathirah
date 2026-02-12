import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aina Athirah - Online & Offline Tuition | Math, Science, English',
  description: 'Professional tutor specializing in STEM subjects for all levels. Expert in SPM, STPM, IB, Matriculation. Book your free 30-minute consultation today.',
  keywords: 'tuition, online teaching, STEM tutor, SPM, STPM, IB, Mathematics, Science, English, Malaysia',
  authors: [{ name: 'Aina Athirah' }],
  creator: 'FatCalico&Co',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://ainaathirah.com',
    siteName: 'Aina Athirah Tuition',
    title: 'Aina Athirah - Professional Tutor',
    description: 'Expert tuition in Math, Science, English & more. All levels welcome.',
    images: [
      {
        url: '/ainahero.webp',
        width: 1200,
        height: 1500,
        alt: 'Aina Athirah',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aina Athirah - Professional Tutor',
    description: 'Expert tuition in Math, Science, English & more.',
    images: ['/ainahero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#4A6B5F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://ainaathirah.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
