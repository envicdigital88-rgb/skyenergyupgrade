'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Home as HomeIcon,
  Sun,
  Zap,
  ShieldCheck,
  Award,
  TrendingDown
} from 'lucide-react';
import { SectionLabel, ArrowButton, ProjectCard } from '@/components/Shared';
import { images } from '@/lib/data';

export default function Home() {
  const [eligibility, setEligibility] = useState({ location: '', type: '', upgrade: '' });

  return (
    <main className="overflow-hidden bg-[#f7f9f8] text-[#0b1719]">
      {/* Enhanced Hero Section */}
      <section id="top" className="hero-section">
        <Image src={images.hero} alt="Modern home with solar panels in warm evening light" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-content page-shell">
          <div className="max-w-4xl relative z-10">
            <div className="eyebrow light-eyebrow inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"><span className="pulse-dot mr-3" /> Australia's Premier Energy Upgrade Specialists</div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">Energy upgrades<br /><em className="text-lime-400 not-italic">made brilliant.</em></h1>
            <p className="hero-copy text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">Transform your property with state-of-the-art energy efficiency. We navigate the VEU program to bring you premium solutions that lower bills and elevate comfort.</p>
            <div className="flex flex-wrap items-center gap-6">
              <ArrowButton light href="/contact">Start your upgrade</ArrowButton>
              <a href="/services" className="text-link-light text-white hover:text-lime-400 transition-colors">Explore our solutions <ArrowRight size={17} /></a>
            </div>
          </div>
          
          <div className="hero-bottom mt-20">
            <div className="flex items-center gap-8">
              <div className="text-white/60">
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-xs uppercase tracking-widest">Installations</div>
              </div>
              <div className="text-white/60">
                <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-xs uppercase tracking-widest">Customer Rating</div>
              </div>
            </div>
            <a href="#solutions" className="scroll-cue hidden md:flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
        <div className="energy-flow hidden lg:flex" aria-hidden="true">
          <div className="flow-node"><Sun size={16} />Sun</div>
          <div className="flow-line" />
          <div className="flow-node"><Zap size={16} />Upgrade</div>
          <div className="flow-line" />
          <div className="flow-node"><HomeIcon size={16} />Home</div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="border-b border-gray-200 bg-white py-10">
        <div className="page-shell flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Accredited by</span>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 font-bold text-xl md:text-2xl text-gray-600 tracking-tighter">
            <span>VEU Victoria</span>
            <span>Clean Energy Council</span>
            <span>EnergySafe</span>
            <span>Master Electricians</span>
          </div>
        </div>
      </section>

      {/* Beautiful Featured Solutions Grid */}
      <section id="solutions" className="section-pad bg-[#f7f9f8]">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Core Solutions</SectionLabel>
              <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight">Powering a <span className="text-sky-600">smarter future.</span></h2>
            </div>
            <p className="text-gray-600 max-w-sm text-sm leading-relaxed">Discover our most popular energy upgrade pathways designed specifically for the Victorian climate and VEU requirements.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              <Image src={images.solar} alt="Solar" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-3 block">01 / Generation</span>
                <h3 className="text-white text-3xl font-bold mb-2">Solar Systems</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Capture the sun's energy with high-efficiency tier-1 solar panels.</p>
              </div>
            </div>
            
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              <Image src={images.interior} alt="Lighting" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-3 block">02 / Efficiency</span>
                <h3 className="text-white text-3xl font-bold mb-2">Smart Lighting</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Upgrade to intelligent LED solutions that dramatically cut your baseline energy draw.</p>
              </div>
            </div>
            
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1">
              <Image src={images.technician} alt="HVAC" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-white text-xs font-bold tracking-widest uppercase mb-3 block">03 / Climate</span>
                <h3 className="text-white text-3xl font-bold mb-2">HVAC Upgrades</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Modern heating and cooling systems designed for ultimate comfort and efficiency.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <ArrowButton href="/services">View all services</ArrowButton>
          </div>
        </div>
      </section>

      {/* Value Strip */}
      <section className="bg-[#0b1719] text-white py-24">
        <div className="page-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">The Skyenergy Advantage</h2>
            <p className="text-gray-400">We do more than install equipment; we engineer long-term energy resilience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            <div>
              <ShieldCheck size={40} className="text-lime-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Our technicians are rigorously trained and certified to meet the highest safety and performance standards in Victoria.</p>
            </div>
            <div>
              <TrendingDown size={40} className="text-sky-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Maximum ROI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We specialize in finding the perfect intersection of VEU rebates and energy savings to ensure your investment pays off rapidly.</p>
            </div>
            <div>
              <Award size={40} className="text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We exclusively source tier-1 components that are built to withstand harsh Australian conditions for decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Checker */}
      <section className="eligibility-section section-pad relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-sky-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
        <div className="page-shell eligibility-card border border-gray-100 rounded-[40px]">
          <div className="eligibility-copy pr-10">
            <SectionLabel>Instant Quote</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6">Check your <span className="text-lime-600">eligibility.</span></h2>
            <p className="text-gray-600 mb-10 text-lg">See if your property qualifies for thousands of dollars in VEU government rebates. It takes less than 60 seconds.</p>
            <div className="eligibility-mark bg-gray-50 inline-flex px-6 py-3 rounded-full border border-gray-200">
              <span className="font-bold text-gray-700">VEU</span>
              <span className="mark-line mx-4 bg-gray-300 w-12" />
              <span className="font-bold text-gray-700">VICTORIA</span>
            </div>
          </div>
          <div className="eligibility-form bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
            <div className="question-block">
              <label className="text-xs font-bold text-gray-400 tracking-wider">Are you located in Victoria?</label>
              <div className="choice-row">
                {['Yes', 'No'].map(value => (
                  <button key={value} className={`flex-1 py-4 text-center border rounded-xl transition-all font-semibold ${eligibility.location === value ? 'bg-[#0b1719] text-white border-[#0b1719] shadow-lg scale-[1.02]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`} onClick={() => setEligibility({ ...eligibility, location: value })}>{value}</button>
                ))}
              </div>
            </div>
            <div className="question-block">
              <label className="text-xs font-bold text-gray-400 tracking-wider">What best describes you?</label>
              <div className="choice-row choice-wrap grid grid-cols-2 gap-3">
                {['Homeowner', 'Tenant', 'Small business', 'Commercial'].map(value => (
                  <button key={value} className={`py-4 text-center border rounded-xl transition-all font-semibold ${eligibility.type === value ? 'bg-[#0b1719] text-white border-[#0b1719] shadow-lg scale-[1.02]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`} onClick={() => setEligibility({ ...eligibility, type: value })}>{value}</button>
                ))}
              </div>
            </div>
            <div className="question-block">
              <label className="text-xs font-bold text-gray-400 tracking-wider">What are you interested in?</label>
              <div className="select-wrap relative">
                <select className="w-full py-4 px-5 bg-gray-50 border border-gray-200 rounded-xl font-semibold text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500" value={eligibility.upgrade} onChange={e => setEligibility({ ...eligibility, upgrade: e.target.value })}>
                  <option value="">Select an upgrade area</option>
                  <option>Lighting</option>
                  <option>Heating & Cooling</option>
                  <option>Solar / Energy Systems</option>
                  <option>Energy Audit</option>
                  <option>Not sure yet</option>
                </select>
                <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <button className="w-full mt-4 py-5 bg-lime-400 hover:bg-lime-500 text-[#0b1719] font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Calculate Rebates <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
