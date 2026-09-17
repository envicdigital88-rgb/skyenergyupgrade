import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { navItems } from '@/lib/data';

export default function Footer() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Background elements for the glass effect to blur */}
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-[#1fa0f9]/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-lime-400/10 rounded-full blur-[80px] -z-10" />
      
      <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand-mark">
              <Image src="/images/sky-logo-Q48KBUb3butXN7eD-removebg-preview.png" alt="Skyenergy Groups" width={184} height={64} className="opacity-90" />
            </Link>
            <p>
              Energy upgrades
              <br />
              made simple.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>Explore</span>
              {navItems.map(([label, href]) => (
                <Link key={href} href={`/${href}`}>
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <span>Contact</span>
              <a href="mailto:info@skyenergygroups.com">info@skyenergygroups.com</a>
              <a href="tel:+61391234567">+61 3 9123 4567</a>
              <Link href="/contact">Melbourne, Victoria</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Skyenergy Groups. All rights reserved.</span>
          <span>Serving Victoria, Australia</span>
          <div className="social-links">
            <Link href="/contact" aria-label="LinkedIn">
              <Linkedin size={16} />
            </Link>
            <a href="mailto:info@skyenergygroups.com" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
