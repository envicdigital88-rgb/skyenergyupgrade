import Image from 'next/image';
import { Check, CloudSun, ArrowUpRight } from 'lucide-react';
import { SectionLabel, ArrowButton } from '@/components/Shared';
import { images } from '@/lib/data';

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9f8] text-[#0b1719] pt-24">
      <section id="about" className="about-section page-shell section-pad">
        <div className="about-visual">
          <Image src={images.home} alt="Solar panels on a contemporary Australian home" fill sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="visual-note">
            <span className="note-icon"><CloudSun size={18} /></span>
            <span><b>Built for better</b><small>Victoria & beyond</small></span>
          </div>
        </div>
        <div className="about-copy">
          <SectionLabel>About Skyenergy Groups</SectionLabel>
          <h2>Smarter energy.<br /><span>Simpler upgrades.</span></h2>
          <p className="lead-copy">Skyenergy Groups helps Australian homes and small businesses improve their energy efficiency through the Victorian Energy Upgrades program.</p>
          <p>We make the shift to a more efficient space feel considered, practical and genuinely useful — from the first conversation through to professional installation.</p>
          <ul className="check-list">
            {['Energy upgrade guidance', 'VEU program support', 'Professional installation', 'Customer-focused service'].map(item => (
              <li key={item}><span><Check size={14} /></span>{item}</li>
            ))}
          </ul>
          <ArrowButton href="/services">Meet our approach</ArrowButton>
        </div>
      </section>

      <section className="why-section">
        <div className="page-shell why-grid">
          <div>
            <SectionLabel light>Why Skyenergy Groups</SectionLabel>
            <h2>Good energy<br /><span>starts here.</span></h2>
            <p>We make the upgrade journey feel less technical, less overwhelming and more like a smart decision for what comes next.</p>
          </div>
          <div className="why-list">
            {[
              ['01', 'Simple process'],
              ['02', 'Energy-focused solutions'],
              ['03', 'VEU program support'],
              ['04', 'Professional installation'],
              ['05', 'Customer support']
            ].map(([num, title]) => (
              <div className="why-row" key={num}>
                <span>{num}</span>
                <strong>{title}</strong>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 md:order-1 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src={images.team} alt="Skyenergy Groups Team" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <SectionLabel>Our People</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Dedicated to your <span className="text-sky-600">success.</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Our team consists of certified electricians, energy auditors, and project managers who share a unified vision: making sustainable energy accessible to all Australians. We pride ourselves on transparent communication, technical excellence, and a customer-first approach that ensures your upgrade goes smoothly from start to finish.</p>
              <ArrowButton href="/contact">Join our team</ArrowButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
