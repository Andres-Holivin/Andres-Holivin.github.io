import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andres Holivin - Portfolio',
  description: 'Application developer & Software Engineer portfolio showcasing projects, experience, and skills.',
  keywords: ['Software Engineer', 'Developer', 'Portfolio', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Andres Holivin' }],
  openGraph: {
    title: 'Andres Holivin - Portfolio',
    description: 'Application developer & Software Engineer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
