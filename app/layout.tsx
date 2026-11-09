import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://pavanakumar-devadiga.vercel.app'),
  title: 'Pavanakumar Devadiga — Software Development Engineer',
  description:
    'Portfolio of Pavanakumar Devadiga, MCA student and aspiring Software Development Engineer. Machine Learning, Python, SQL, and full-stack project experience.',
  keywords: [
    'Pavanakumar Devadiga',
    'Software Development Engineer',
    'System Engineer',
    'MCA',
    'Machine Learning',
    'Python',
    'SQL',
    'Portfolio',
  ],
  authors: [{ name: 'Pavanakumar Devadiga' }],
  openGraph: {
    title: 'Pavanakumar Devadiga — Software Development Engineer',
    description:
      'Portfolio of Pavanakumar Devadiga, MCA student and aspiring Software Development Engineer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}