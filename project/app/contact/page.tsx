'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check, CloudSun, Mail, Phone } from 'lucide-react';
import { SectionLabel, ArrowButton, SubpageHero } from '@/components/Shared';
import { images, services } from '@/lib/data';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="overflow-hidden">
      <SubpageHero title="Ready to upgrade &" highlight="elevate your energy?" subtitle="Get in touch to discover how our premium, sustainable energy solutions can transform your home or business." image={images.sunset} />

      <section id="contact" className="contact-section section-pad">
        <div className="page-shell contact-grid">
          <div className="contact-copy text-center md:text-left">
            <SectionLabel>Let&apos;s talk</SectionLabel>
            <h2>Make your energy<br /><span>upgrade simple.</span></h2>
            <p>Tell us what you are thinking about. Whether you have a clear plan or just a few questions, we&apos;ll help you find the right next step.</p>
            <div className="contact-details flex flex-col items-center md:items-start">
              <a href="mailto:info@skyenergygroups.com"><Mail size={17} />info@skyenergygroups.com</a>
              <a href="tel:+61391234567"><Phone size={17} />+61 3 9123 4567</a>
              <span><CloudSun size={17} />Mon – Fri / 9:00 AM – 5:00 PM</span>
            </div>

            {/* Skyenergy Groups HQ Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#081618] border border-[#1e3639] text-left w-full max-w-sm mx-auto md:mx-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <h4 className="font-bold text-white text-sm tracking-wide uppercase">Skyenergy Groups HQ</h4>
              </div>
              <p className="text-[#8ca3a3] text-sm leading-relaxed">
                123 Innovation Drive<br />
                Melbourne, VIC 3000<br />
                Australia
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {formSent ? (
              <div className="form-success">
                <span><Check size={24} /></span>
                <h3>Thanks, we&apos;ll be in touch.</h3>
                <p>Your details are with our team. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>Full name<input required name="name" placeholder="Your name" /></label>
                  <label>Email<input required name="email" type="email" placeholder="you@email.com" /></label>
                </div>
                <div className="form-row">
                  <label>Phone<input name="phone" placeholder="Your phone number" /></label>
                  <label>Property type
                    <select name="property">
                      <option>Home</option>
                      <option>Small business</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
                <label>Service interested in
                  <select name="service">
                    <option>Choose a service</option>
                    {services.map(service => <option key={service.label}>{service.label.split(' / ')[1]}</option>)}
                  </select>
                </label>
                <label>Message<textarea name="message" placeholder="How can we help?" rows={4} /></label>
                <button type="submit" className="form-submit">Start my energy upgrade <ArrowUpRight size={18} /></button>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="section-pad bg-[#051012]">
        <div className="page-shell">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src={images.office} alt="Our Melbourne Office" fill className="object-cover" />
            </div>
            <div className="text-center md:text-left">
              <SectionLabel>Our Headquarters</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight text-white">Visit us in <span className="text-[#1fa0f9]">Melbourne.</span></h2>
              <p className="text-[#8ca3a3] mb-8 leading-relaxed">Our headquarters is the hub of our operations. It's where our engineering team designs bespoke energy systems and our support team ensures your upgrades continue to perform optimally for years to come.</p>
              
              <div className="bg-[#081618] border border-[#1e3639] p-6 rounded-2xl inline-block text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  <h4 className="font-bold text-white text-base">Skyenergy Groups HQ</h4>
                </div>
                <p className="text-[#8ca3a3] text-sm leading-relaxed">123 Innovation Drive<br />Melbourne, VIC 3000<br />Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
