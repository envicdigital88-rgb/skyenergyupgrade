'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" />
      <nav className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Main navigation">
        <Link href="/" className="brand-mark" aria-label="Skyenergy Groups home">
          <Image src="/images/sky-logo-Q48KBUb3butXN7eD-removebg-preview.png" alt="Skyenergy Groups" width={184} height={64} priority />
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={`/${href}`} className="nav-link">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="nav-cta hidden sm:inline-flex">
            Check your eligibility <ArrowUpRight size={15} />
          </Link>
          <button className="menu-button lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu lg:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map(([label, href]) => (
              <Link key={href} href={`/${href}`} onClick={() => setMobileOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mobile-menu-cta">
              Check your eligibility <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
