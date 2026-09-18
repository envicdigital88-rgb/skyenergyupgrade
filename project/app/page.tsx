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
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationResult, setCalculationResult] = useState<null | { eligible: boolean, amount: number }>(null);

  const handleCalculate = () => {
    setIsCalculating(true);
    setCalculationResult(null);
    setTimeout(() => {
      setIsCalculating(false);
      setCalculationResult({ eligible: true, amount: Math.floor(Math.random() * 4000) + 1500 });
    }, 1200);
  };

  return (
    <main className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section id="top" className="hero-section relative">
        <video 
          src="/images/hero-video-2.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-image absolute inset-0 w-full h-full"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-grid" />
        <div className="hero-content page-shell">
          <div className="max-w-4xl relative z-10 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-[1.1] drop-shadow-2xl">Elevate your energy.<br /><em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">Brilliantly designed.</em></h1>
            <p className="hero-copy text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed drop-shadow-md font-medium mx-auto md:mx-0">Experience a curated approach to energy efficiency. We seamlessly integrate premium VEU solutions to lower bills and elevate your living space.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <ArrowButton light href="/contact">Start your upgrade</ArrowButton>
              <a href="/services" className="text-link-light text-white hover:text-lime-400 transition-colors">Explore our solutions <ArrowRight size={17} /></a>
            </div>
          </div>
          
          <div className="hero-bottom mt-10">
            <div className="flex items-center justify-center md:justify-start gap-8">
              <div className="text-white/60 text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-xs uppercase tracking-widest">Installations</div>
              </div>
              <div className="text-white/60 text-center md:text-left">
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

      {/* Trust Banner (Marquee) */}
      <section className="border-b border-[#1e3639] bg-[#051012] py-10 overflow-hidden relative">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--paper)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--paper)] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-full opacity-60 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-16 md:gap-24 whitespace-nowrap animate-marquee px-8 shrink-0">
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">VEU Victoria</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">Clean Energy Council</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">EnergySafe</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">Master Electricians</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-16 md:gap-24 whitespace-nowrap animate-marquee px-8 shrink-0" aria-hidden="true">
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">VEU Victoria</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">Clean Energy Council</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">EnergySafe</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">Accredited by</span>
            <span className="font-bold text-xl md:text-2xl text-[#f0f6f6] tracking-tighter">Master Electricians</span>
          </div>
        </div>
      </section>        {/* Beautiful Featured Solutions Grid */}
        <section id="solutions" className="section-pad relative overflow-hidden bg-[#051012]">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1fa0f9]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="page-shell relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <SectionLabel>Core Solutions</SectionLabel>
                <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight text-[#f0f6f6]">Powering a <span className="text-[#1fa0f9]">smarter<br/>future.</span></h2>
              </div>
              <p className="text-[#8ca3a3] max-w-sm text-sm leading-relaxed text-center md:text-left">
                Discover our most popular energy upgrade pathways designed specifically for the Victorian climate and VEU requirements.
              </p>
            </div>
            
            {/* Vertical Accordion Hover Grid */}
            <div className="flex flex-col md:flex-row h-auto md:h-[600px] gap-4">
              
              {/* Card 1: Solar */}
              <a href="/services" className="group relative w-full md:flex-1 md:hover:flex-[3] h-[350px] md:h-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/10 shadow-2xl block">
                <Image src={images.solar} alt="Solar Systems" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051012]/90 via-[#051012]/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-lime-400 text-[#051012] flex items-center justify-center transform md:-rotate-45 group-hover:rotate-0 transition-all duration-700 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                      <ArrowRight size={20} />
                    </div>
                    <div className="text-lime-400 text-xs font-bold tracking-widest uppercase md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">01 / Generation</div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-0 whitespace-nowrap drop-shadow-lg">Solar Systems</h3>
                  
                  <div className="overflow-hidden md:grid md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
                    <div className="min-h-0">
                      <p className="text-[#8ca3a3] text-sm max-w-sm mt-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:delay-200">
                        Capture the sun's energy with premium tier-1 panels designed for maximum Victorian efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Card 2: Lighting */}
              <a href="/services" className="group relative w-full md:flex-1 md:hover:flex-[3] h-[350px] md:h-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/10 shadow-2xl block">
                <Image src={images.interior} alt="Smart Lighting" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051012]/90 via-[#051012]/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1fa0f9] text-white flex items-center justify-center transform md:-rotate-45 group-hover:rotate-0 transition-all duration-700 shadow-[0_0_30px_rgba(31,160,249,0.3)]">
                      <ArrowRight size={20} />
                    </div>
                    <div className="text-[#1fa0f9] text-xs font-bold tracking-widest uppercase md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">02 / Efficiency</div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-0 whitespace-nowrap drop-shadow-lg">Smart Lighting</h3>
                  
                  <div className="overflow-hidden md:grid md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
                    <div className="min-h-0">
                      <p className="text-white/70 text-sm max-w-sm mt-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:delay-200">
                        Transform spaces with intelligent, energy-saving LED solutions that instantly lower bills.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Card 3: HVAC */}
              <a href="/services" className="group relative w-full md:flex-1 md:hover:flex-[3] h-[350px] md:h-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/10 shadow-2xl block">
                <Image src={images.technician} alt="HVAC Upgrades" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051012]/90 via-[#051012]/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#051012] flex items-center justify-center transform md:-rotate-45 group-hover:rotate-0 transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                      <ArrowRight size={20} />
                    </div>
                    <div className="text-white text-xs font-bold tracking-widest uppercase md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">03 / Climate</div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-0 whitespace-nowrap drop-shadow-lg">HVAC Upgrades</h3>
                  
                  <div className="overflow-hidden md:grid md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
                    <div className="min-h-0">
                      <p className="text-white/70 text-sm max-w-sm mt-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:delay-200">
                        Engineered comfort. Upgrade to modern, high-efficiency climate control systems supported by VEU rebates.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
  
            </div>
            
            <div className="mt-16 flex justify-center">
              <ArrowButton href="/services">View all services</ArrowButton>
            </div>
          </div>
        </section>
  
        {/* Value Strip */}
        <section className="bg-[#051012] text-white py-24">
          <div className="page-shell">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">The Skyenergy Advantage</h2>
              <p className="text-[#8ca3a3]">We do more than install equipment; we engineer long-term energy resilience.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <ShieldCheck size={40} className="text-lime-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
                <p className="text-[#8ca3a3] text-sm leading-relaxed">Our technicians are rigorously trained and certified to meet the highest safety and performance standards in Victoria.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <TrendingDown size={40} className="text-sky-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Maximum ROI</h3>
                <p className="text-[#8ca3a3] text-sm leading-relaxed">We specialize in finding the perfect intersection of VEU rebates and energy savings to ensure your investment pays off rapidly.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Award size={40} className="text-white mb-6" />
                <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
                <p className="text-[#8ca3a3] text-sm leading-relaxed">We exclusively source tier-1 components that are built to withstand harsh Australian conditions for decades.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* About Snippet */}
        <section className="section-pad relative bg-[#051012] text-white overflow-hidden min-h-[700px] flex items-center border-y border-white/10">
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/about-video.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-[#051012]/70 md:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051012]/95 via-[#051012]/60 to-transparent w-full md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-transparent to-[#051012]" />
  
          <div className="page-shell relative z-10 w-full">
            <div className="max-w-2xl text-center md:text-left">
              <SectionLabel light>Who we are</SectionLabel>
              <h2 className="text-4xl md:text-7xl font-bold mt-4 mb-6 tracking-tight text-[#f0f6f6] pr-4 md:pr-0">Your partners in <br className="hidden md:block"/><em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">efficiency.</em></h2>
              
              <p className="text-[#8ca3a3] mb-6 text-lg md:text-xl leading-relaxed font-medium">We don't just sell equipment. We are a collective of engineers, auditors, and certified installers dedicated to fundamentally improving how your property consumes energy.</p>
              
              <p className="text-[#8ca3a3] mb-10 text-base md:text-lg leading-relaxed">By leveraging the Victorian Energy Upgrades (VEU) program, we've successfully slashed the carbon footprint and operating costs of thousands of properties, making the transition to green energy frictionless and financially brilliant.</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
                <ArrowButton light href="/about">Discover our story</ArrowButton>
                <div className="flex items-center gap-3 text-white/80 font-bold tracking-widest uppercase text-xs">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" /> Founded in Victoria
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Client Success / Testimonials */}
        <section className="py-32 bg-[#051012] relative overflow-hidden border-t border-white/5">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1fa0f9]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="page-shell relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
              <div className="max-w-3xl text-center md:text-left">
                <SectionLabel>Client Success</SectionLabel>
                <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight text-[#f0f6f6]">
                  Don't just take our <br />
                  <em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">word for it.</em>
                </h2>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors cursor-pointer">
                  <ArrowRight size={20} className="rotate-180" />
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors cursor-pointer">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="relative bg-[#0a171a]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 shadow-2xl group">
                <div className="absolute top-8 right-8 text-[#1fa0f9]/20 font-serif text-8xl leading-none rotate-180 select-none group-hover:text-[#1fa0f9]/30 transition-colors">"</div>
                <div className="flex gap-1 text-[#1fa0f9] mb-8 relative z-10"><Sun size={16}/><Sun size={16}/><Sun size={16}/><Sun size={16}/><Sun size={16}/></div>
                <p className="text-lg text-[#8ca3a3] mb-12 leading-relaxed relative z-10 font-medium">
                  "The entire process was seamless. The team handled all the VEU paperwork, and our new smart lighting system reduced our warehouse energy bill by 40% in the first quarter."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10">
                  <Image src={images.team} alt="Avatar" width={48} height={48} className="rounded-full object-cover w-12 h-12 grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <div className="font-bold text-white">Sarah Jenkins</div>
                    <div className="text-xs text-[#1fa0f9] uppercase tracking-wider font-semibold mt-1">Logistics Manager</div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="relative bg-gradient-to-b from-[#1fa0f9]/10 to-[#0a171a]/80 backdrop-blur-xl border border-[#1fa0f9]/30 p-8 md:p-10 rounded-[2rem] transform md:translate-y-8 hover:translate-y-4 transition-transform duration-500 shadow-2xl group overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1fa0f9]/20 blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute top-8 right-8 text-[#1fa0f9]/20 font-serif text-8xl leading-none rotate-180 select-none group-hover:text-[#1fa0f9]/40 transition-colors">"</div>
                <div className="flex gap-1 text-[#1fa0f9] mb-8 relative z-10"><Sun size={16}/><Sun size={16}/><Sun size={16}/><Sun size={16}/><Sun size={16}/></div>
                <p className="text-lg text-white mb-12 leading-relaxed relative z-10 font-medium">
                  "Skyenergy Groups completely transformed our home. The solar installation was incredibly neat, and their engineers took the time to explain exactly how to maximize our savings."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10">
                  <Image src={images.technician} alt="Avatar" width={48} height={48} className="rounded-full object-cover w-12 h-12 grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <div className="font-bold text-white">Mark Thompson</div>
                    <div className="text-xs text-lime-400 uppercase tracking-wider font-semibold mt-1">Homeowner, VIC</div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="relative bg-[#0a171a]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 shadow-2xl group">
                <div className="absolute top-8 right-8 text-[#1fa0f9]/20 font-serif text-8xl leading-none rotate-180 select-none group-hover:text-[#1fa0f9]/30 transition-colors">"</div>
                <div className="flex gap-1 text-[#1fa0f9] mb-8 relative z-10"><Sun size={16}/><Sun size={16}/><Sun size={16}/><Sun size={16}/><Sun size={16}/></div>
                <p className="text-lg text-[#8ca3a3] mb-12 leading-relaxed relative z-10 font-medium">
                  "We were hesitant about the initial costs, but the ROI projection Skyenergy provided was spot on. The HVAC upgrade paid for itself through government rebates and monthly savings."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10">
                  <Image src={images.office} alt="Avatar" width={48} height={48} className="rounded-full object-cover w-12 h-12 grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <div className="font-bold text-white">Elena Rodriguez</div>
                    <div className="text-xs text-[#1fa0f9] uppercase tracking-wider font-semibold mt-1">Retail Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Cinematic Featured Gallery */}
      <section className="py-24 md:py-32 bg-[#051012] relative overflow-hidden border-t border-white/5">
        <div className="page-shell relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <SectionLabel>Inspiration</SectionLabel>
              <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight text-[#f0f6f6]">
                Curated <br className="hidden md:block"/><em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">spaces.</em>
              </h2>
            </div>
            <a href="/projects" className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-[#8ca3a3] hover:text-white transition-colors mb-4 md:mb-0">
              View all projects 
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#1fa0f9] group-hover:border-[#1fa0f9] group-hover:text-[#051012] transition-all shadow-lg">
                <ArrowRight size={18} />
              </div>
            </a>
          </div>

          {/* Perfect Bento Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 h-auto md:h-[900px]">
            
            {/* Image 1: Massive featured (Left) */}
            <div className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group shadow-2xl h-[400px] md:h-auto border border-white/10">
              <Image src={images.custom1} alt="Curated Space 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Image 2: Small top mid */}
            <div className="relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group shadow-lg h-[250px] md:h-auto border border-white/10">
              <Image src={images.custom2} alt="Curated Space 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Image 3: Small top right */}
            <div className="relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group shadow-lg h-[250px] md:h-auto border border-white/10">
              <Image src={images.custom3} alt="Curated Space 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Image 4: Wide mid right */}
            <div className="relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden group shadow-xl h-[300px] md:h-auto border border-white/10">
              <Image src={images.custom4} alt="Curated Space 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Image 5: Small bottom left */}
            <div className="relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group shadow-lg h-[250px] md:h-auto border border-white/10">
              <Image src={images.custom5} alt="Curated Space 5" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Image 6: Small bottom mid */}
            <div className="relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group shadow-lg h-[250px] md:h-auto border border-white/10">
              <Image src={images.custom6} alt="Curated Space 6" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Image 7: Wide bottom right */}
            <div className="relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden group shadow-xl h-[300px] md:h-auto border border-white/10">
              <Image src={images.custom7} alt="Curated Space 7" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1fa0f9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Checker */}
      <section className="eligibility-section section-pad relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-400/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1fa0f9]/8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime-400/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="page-shell flex flex-col items-center text-center">
          {/* Hero-style heading */}
          <div className="mb-10 w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 text-lime-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-lime-400/10 border border-lime-400/20 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
              Instant Quote
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.92] tracking-tight text-white mb-6">
              Check your<br />
              <span className="text-lime-400 relative">
                eligibility.
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-lime-400/0 via-lime-400 to-lime-400/0 rounded-full" />
              </span>
            </h2>
            <p className="text-[#8ca3a3] text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              See if your property qualifies for thousands of dollars in VEU government rebates. It takes less than 60 seconds.
            </p>
            {/* VEU badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-[#081618] border border-[#1e3639] px-5 py-2.5 rounded-full">
              <span className="font-bold text-[#f0f6f6] text-sm tracking-wider">VEU</span>
              <span className="w-10 h-px bg-[#1e3639]" />
              <span className="font-bold text-[#f0f6f6] text-sm tracking-wider">VICTORIA</span>
            </div>
          </div>

          {/* Form card */}
          <div className="w-full max-w-lg">
            {!calculationResult ? (
              <div className="bg-[#081618] border border-[#1e3639] rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col gap-6">
                {/* Step 1 */}
                <div className="flex flex-col gap-3 text-left">
                  <label className="flex items-center gap-2 text-xs font-bold text-[#8ca3a3] tracking-[0.15em] uppercase">
                    <span className="w-5 h-5 bg-lime-400/15 border border-lime-400/30 rounded-full flex items-center justify-center text-lime-400 text-[10px] font-bold flex-shrink-0">1</span>
                    Are you located in Victoria?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Yes', 'No'].map(value => (
                      <button
                        key={value}
                        type="button"
                        onClick={(e) => { e.preventDefault(); setEligibility({ ...eligibility, location: value }); }}
                        className={`py-4 text-center border rounded-2xl transition-all duration-200 font-semibold text-sm ${
                          eligibility.location === value
                            ? 'bg-lime-400 text-[#051012] border-lime-400 shadow-[0_0_25px_rgba(163,230,53,0.35)] scale-[1.02]'
                            : 'border-[#1e3639] text-[#8ca3a3] hover:border-lime-400/30 hover:text-white hover:bg-lime-400/5 bg-[#051012]'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-3 text-left">
                  <label className="flex items-center gap-2 text-xs font-bold text-[#8ca3a3] tracking-[0.15em] uppercase">
                    <span className="w-5 h-5 bg-lime-400/15 border border-lime-400/30 rounded-full flex items-center justify-center text-lime-400 text-[10px] font-bold flex-shrink-0">2</span>
                    What best describes you?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Homeowner', 'Tenant', 'Small business', 'Commercial'].map(value => (
                      <button
                        key={value}
                        type="button"
                        onClick={(e) => { e.preventDefault(); setEligibility({ ...eligibility, type: value }); }}
                        className={`py-4 text-center border rounded-2xl transition-all duration-200 font-semibold text-sm ${
                          eligibility.type === value
                            ? 'bg-lime-400 text-[#051012] border-lime-400 shadow-[0_0_25px_rgba(163,230,53,0.35)] scale-[1.02]'
                            : 'border-[#1e3639] text-[#8ca3a3] hover:border-lime-400/30 hover:text-white hover:bg-lime-400/5 bg-[#051012]'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-3 text-left">
                  <label className="flex items-center gap-2 text-xs font-bold text-[#8ca3a3] tracking-[0.15em] uppercase">
                    <span className="w-5 h-5 bg-lime-400/15 border border-lime-400/30 rounded-full flex items-center justify-center text-lime-400 text-[10px] font-bold flex-shrink-0">3</span>
                    What are you interested in?
                  </label>
                  <div className="relative">
                    <select
                      className="w-full py-4 px-5 bg-[#051012] border border-[#1e3639] rounded-2xl font-semibold text-[#f0f6f6] appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400/40 focus:border-lime-400/40 transition-all text-sm"
                      value={eligibility.upgrade}
                      onChange={e => setEligibility({ ...eligibility, upgrade: e.target.value })}
                    >
                      <option value="">Select an upgrade area</option>
                      <option>Lighting</option>
                      <option>Heating &amp; Cooling</option>
                      <option>Solar / Energy Systems</option>
                      <option>Energy Audit</option>
                      <option>Not sure yet</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8ca3a3] pointer-events-none" />
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating || !eligibility.location || !eligibility.type}
                  className="w-full py-5 bg-lime-400 hover:bg-lime-300 disabled:bg-[#1e3639] disabled:cursor-not-allowed disabled:text-[#8ca3a3] text-[#051012] font-bold uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_15px_50px_-10px_rgba(163,230,53,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(163,230,53,0.7)] disabled:shadow-none active:scale-[0.98]"
                >
                  {isCalculating ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-inherit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </span>
                  ) : (
                    <>Calculate Rebates <ArrowRight size={16} /></>
                  )}
                </button>

                {/* Trust line */}
                <p className="text-center text-[10px] text-[#8ca3a3] tracking-wider uppercase">
                  🔒 &nbsp;No personal data required · Takes under 60 seconds
                </p>
              </div>
            ) : (
              <div className="w-full bg-[#051012] border border-lime-400/30 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(163,230,53,0.12)] flex flex-col items-center justify-center gap-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-lime-400/15 rounded-full flex items-center justify-center ring-1 ring-lime-400/30 shadow-[0_0_40px_rgba(163,230,53,0.2)]">
                  <Award size={44} className="text-lime-400" />
                </div>
                <div>
                  <div className="text-lime-400 font-extrabold text-3xl mb-2">Great news!</div>
                  <p className="text-[#8ca3a3] text-sm">Based on your answers, you may be eligible for up to</p>
                </div>
                <div className="text-lime-400 font-extrabold text-6xl sm:text-7xl leading-none">
                  ${calculationResult.amount.toLocaleString()}
                </div>
                <p className="text-xs text-[#8ca3a3] uppercase tracking-widest">in VEU government rebates</p>
                <button
                  onClick={() => { setCalculationResult(null); setEligibility({ location: '', type: '', upgrade: '' }); }}
                  className="w-full max-w-xs py-4 bg-lime-400 hover:bg-lime-300 text-[#051012] font-bold uppercase tracking-widest text-xs rounded-2xl transition-all duration-200 shadow-[0_10px_40px_-10px_rgba(163,230,53,0.5)] active:scale-[0.98]"
                >
                  Claim your rebate now
                </button>
                <button
                  onClick={() => { setCalculationResult(null); setEligibility({ location: '', type: '', upgrade: '' }); }}
                  className="text-[#8ca3a3] hover:text-white text-xs underline underline-offset-4 transition-colors"
                >
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
