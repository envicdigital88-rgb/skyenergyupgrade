import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';
import { navItems } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <span>SKY</span>
              <small>ENERGY GROUPS</small>
            </div>
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
  );
}
