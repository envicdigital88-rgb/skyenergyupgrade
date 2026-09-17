import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skyenergy Groups | Energy Upgrades Made Simple',
  description: 'Skyenergy Groups helps Australian homes and small businesses improve energy efficiency through energy upgrades and VEU Australia program support.',
  keywords: ['Victorian Energy Upgrades', 'VEU Australia', 'energy upgrades Victoria', 'energy efficiency', 'solar solutions', 'LED lighting', 'heating', 'cooling', 'energy audits'],
  openGraph: {
    title: 'Skyenergy Groups | Energy Upgrades Made Simple',
    description: 'Smarter energy. Simpler upgrades for Australian homes and small businesses.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
