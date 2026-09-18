'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { services, images } from '@/lib/data';
import { SectionLabel, SubpageHero } from '@/components/Shared';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="overflow-hidden">
      <SubpageHero title="Premium upgrades." highlight="Seamlessly integrated." subtitle="Explore our range of curated energy solutions designed to lower bills and elevate your living spaces." image={images.solar} />
      <section id="services" className="services-section section-pad">
        <div className="page-shell">
          <div className="section-intro-row">
            <div className="text-center md:text-left">
              <SectionLabel>What we do</SectionLabel>
              <h2>Solutions designed<br /><span>around you.</span></h2>
            </div>
            <p className="text-center md:text-left">Every property has a different energy story. We bring the right questions, practical advice and the right people to help you move forward.</p>
          </div>
          <div className="service-experience">
            <div className="service-featured">
              <Image key={services[activeService].image} src={services[activeService].image} alt={services[activeService].title} fill sizes="(max-width: 900px) 100vw, 58vw" className="service-image" />
              <div className="service-shade" />
              <div className="service-featured-top">
                <span>{services[activeService].label}</span>
                <span>Skyenergy / 2024</span>
              </div>
              <div className="service-featured-bottom">
                <div>
                  <h3>{services[activeService].title}</h3>
                  <p>{services[activeService].description}</p>
                </div>
                <span className="service-count">0{activeService + 1}</span>
              </div>
            </div>
            <div className="service-list">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button key={service.label} onClick={() => setActiveService(index)} className={`service-tab ${activeService === index ? 'service-tab-active' : ''}`}>
                    <span className="service-tab-icon"><Icon size={18} /></span>
                    <span className="service-tab-label">{service.label.split(' / ')[1]}</span>
                    {activeService === index ? <ArrowRight size={18} /> : <span className="tab-plus">+</span>}
                  </button>
                );
              })}
              <div className="service-points">
                {services[activeService].points.map(point => (
                  <div key={point}>
                    <Check size={15} />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#051012]">
        <div className="page-shell">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <SectionLabel>Custom Solutions</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Tailored for your <span className="text-sky-600">property.</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Whether you are outfitting a new commercial build or upgrading a historic family home, our approach adapts to your specific requirements. We analyze your spatial constraints, existing infrastructure, and energy goals to recommend the perfect mix of technologies.</p>
              <ul className="space-y-4 text-gray-700 flex flex-col items-center md:items-start">
                <li className="flex items-center justify-center md:justify-start gap-3"><Check size={18} className="text-lime-500" /> Comprehensive energy audits</li>
                <li className="flex items-center justify-center md:justify-start gap-3"><Check size={18} className="text-lime-500" /> Scalable solar arrays</li>
                <li className="flex items-center justify-center md:justify-start gap-3"><Check size={18} className="text-lime-500" /> Smart grid integration</li>
              </ul>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src={images.blueprint} alt="Energy blueprints and planning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
