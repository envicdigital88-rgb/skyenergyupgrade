'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Minus, ArrowRight } from 'lucide-react';
import { SectionLabel, ArrowButton, PlusIcon } from '@/components/Shared';
import { faqs, images } from '@/lib/data';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const veuFaqs = [
    ['What is VEU?', 'A program designed to support energy-efficiency improvements across Victoria.'],
    ['What upgrades may qualify?', 'It depends on your property and the upgrade. We can help you explore the options.'],
    ['How can Skyenergy help?', 'We guide you through the conversation, the options and the next practical step.']
  ];

  return (
    <main className="overflow-hidden bg-[#f7f9f8] text-[#0b1719] pt-24">
      <section id="veu" className="veu-section section-pad">
        <div className="page-shell veu-grid">
          <div>
            <SectionLabel>Victorian Energy Upgrades</SectionLabel>
            <h2>Make your energy<br /><span>upgrade work harder.</span></h2>
            <p className="lead-copy">VEU is designed to help Victorian households and businesses improve energy efficiency. We help make the opportunity easier to understand.</p>
            <ArrowButton href="/contact">Find out if you qualify</ArrowButton>
          </div>
          <div className="faq-stack">
            {veuFaqs.map(([question, answer], index) => (
              <div className="veu-faq" key={question}>
                <button onClick={() => setOpenFaq(openFaq === index + 10 ? -1 : index + 10)}>
                  <span>{question}</span>
                  {openFaq === index + 10 ? <Minus size={18} /> : <PlusIcon />}
                </button>
                {openFaq === index + 10 && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section section-pad">
        <div className="page-shell faq-grid">
          <div>
            <SectionLabel>Questions, answered</SectionLabel>
            <h2>Let&apos;s clear<br /><span>things up.</span></h2>
            <p>Not sure where to start? These are some of the questions we hear most often.</p>
            <a href="/contact" className="text-link">Ask our team directly <ArrowRight size={17} /></a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{question}</span>
                  {openFaq === index ? <Minus size={18} /> : <PlusIcon />}
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0b1719] text-white">
        <div className="page-shell">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel light>Expert Support</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Still have <span className="text-lime-400">questions?</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">Energy upgrades can be complex, and we want you to feel completely confident in your decisions. Our support team is ready to provide detailed technical answers and guide you through the available rebates.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                  <h4 className="font-bold text-lime-400 mb-2">Technical</h4>
                  <p className="text-sm text-gray-400">Speak directly with our engineers about compatibility and integration.</p>
                </div>
                <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                  <h4 className="font-bold text-sky-400 mb-2">Financial</h4>
                  <p className="text-sm text-gray-400">Get clarity on VEU rebates, ROI calculations, and financing options.</p>
                </div>
              </div>
              <ArrowButton light href="/contact">Get in touch</ArrowButton>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src={images.tools} alt="Technical Support" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
