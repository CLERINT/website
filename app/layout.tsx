import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'CLERINT - Clean Rationale Intelligence Framework',
  description: 'CLERINT unifies global OSINT operations with explainable AI, governed pipelines, and analyst workflows engineered for accountable decision-making.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'CLERINT - Clean Rationale Intelligence Framework',
    description: 'CLERINT unifies global OSINT operations with explainable AI, governed pipelines, and analyst workflows engineered for accountable decision-making.',
    url: 'https://www.clerint.org',
    siteName: 'CLERINT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLERINT - Clean Rationale Intelligence Framework',
    description: 'CLERINT unifies global OSINT operations with explainable AI, governed pipelines, and analyst workflows engineered for accountable decision-making.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased font-sans',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
