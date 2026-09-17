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
          <div className="max-w-4xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-[1.1] drop-shadow-2xl">Elevate your energy.<br /><em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">Brilliantly designed.</em></h1>
            <p className="hero-copy text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed drop-shadow-md font-medium">Experience a curated approach to energy efficiency. We seamlessly integrate premium VEU solutions to lower bills and elevate your living space.</p>
            <div className="flex flex-wrap items-center gap-6">
              <ArrowButton light href="/contact">Start your upgrade</ArrowButton>
              <a href="/services" className="text-link-light text-white hover:text-lime-400 transition-colors">Explore our solutions <ArrowRight size={17} /></a>
            </div>
          </div>
          
          <div className="hero-bottom mt-10">
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
        <section id="solutions" className="section-pad relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1fa0f9]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="page-shell relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <SectionLabel>Core Solutions</SectionLabel>
                <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight text-[#f0f6f6]">Powering a <span className="text-[#1fa0f9]">smarter<br/>future.</span></h2>
              </div>
              <p className="text-[#8ca3a3] max-w-sm text-sm leading-relaxed">
                Discover our most popular energy upgrade pathways designed specifically for the Victorian climate and VEU requirements.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-6">
              
              {/* Card 1: Solar */}
              <a href="/services" className="group relative h-[450px] lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl block">
                <Image src={images.solar} alt="Solar Systems" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-[#051012]/30 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#051012]/60 backdrop-blur-md border border-white/10 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#051012]/80">
                  <div className="flex justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-2">01 / Generation</div>
                      <h3 className="text-3xl font-serif italic text-white mb-2">Solar Systems</h3>
                      <p className="text-[#8ca3a3] text-sm max-w-sm h-0 opacity-0 overflow-hidden group-hover:h-[40px] group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">Capture the sun\'s energy with premium tier-1 panels designed for maximum Victorian efficiency.</p>
                    </div>
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#051012] flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-lg">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Card 2: Lighting */}
              <a href="/services" className="group relative h-[450px] lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl block">
                <Image src={images.interior} alt="Smart Lighting" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-[#051012]/30 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#051012]/60 backdrop-blur-md border border-white/10 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#051012]/80">
                  <div className="flex justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="text-[#1fa0f9] text-xs font-bold tracking-widest uppercase mb-2">02 / Efficiency</div>
                      <h3 className="text-3xl font-serif italic text-white mb-2">Smart Lighting</h3>
                      <p className="text-[#8ca3a3] text-sm max-w-sm h-0 opacity-0 overflow-hidden group-hover:h-[40px] group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">Transform spaces with intelligent, energy-saving LED solutions that instantly lower bills.</p>
                    </div>
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#051012] flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-lg">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Card 3: HVAC */}
              <a href="/services" className="group relative h-[350px] lg:col-span-12 rounded-3xl overflow-hidden shadow-2xl block">
                <Image src={images.technician} alt="HVAC Upgrades" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-[#051012]/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 md:w-1/2 p-6 rounded-2xl bg-[#051012]/60 backdrop-blur-md border border-white/10 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#051012]/80">
                  <div className="flex justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="text-white text-xs font-bold tracking-widest uppercase mb-2">03 / Climate</div>
                      <h3 className="text-3xl font-serif italic text-white mb-2">HVAC Upgrades</h3>
                      <p className="text-[#8ca3a3] text-sm max-w-md h-0 opacity-0 overflow-hidden group-hover:h-[40px] group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">Engineered comfort. Upgrade to modern, high-efficiency climate control systems supported by VEU rebates.</p>
                    </div>
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#051012] flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-lg">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
              
            </div>
            
            <div className="mt-12 text-center">
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
            <div>
              <ShieldCheck size={40} className="text-lime-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
              <p className="text-[#8ca3a3] text-sm leading-relaxed">Our technicians are rigorously trained and certified to meet the highest safety and performance standards in Victoria.</p>
            </div>
            <div>
              <TrendingDown size={40} className="text-sky-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Maximum ROI</h3>
              <p className="text-[#8ca3a3] text-sm leading-relaxed">We specialize in finding the perfect intersection of VEU rebates and energy savings to ensure your investment pays off rapidly.</p>
            </div>
            <div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#051012]/95 via-[#051012]/60 to-transparent w-full md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-transparent to-[#051012]" />
  
          <div className="page-shell relative z-10 w-full">
            <div className="max-w-2xl">
              <SectionLabel light>Who we are</SectionLabel>
              <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6 tracking-tight text-[#f0f6f6]">Your partners in <br/><em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">efficiency.</em></h2>
              
              <p className="text-[#8ca3a3] mb-6 text-xl leading-relaxed font-medium">We don't just sell equipment. We are a collective of engineers, auditors, and certified installers dedicated to fundamentally improving how your property consumes energy.</p>
              
              <p className="text-[#8ca3a3] mb-10 text-lg leading-relaxed">By leveraging the Victorian Energy Upgrades (VEU) program, we've successfully slashed the carbon footprint and operating costs of thousands of properties, making the transition to green energy frictionless and financially brilliant.</p>
              
              <div className="flex flex-wrap items-center gap-8">
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div className="max-w-3xl">
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

      {/* Featured Gallery */}
      <section className="py-24 bg-[#051012] border-y border-[#1e3639]">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Inspiration</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight text-[#f0f6f6]">Curated <span className="text-[#1fa0f9]">spaces.</span></h2>
            </div>
            <a href="/projects" className="text-link hover:text-white transition-colors flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#8ca3a3]">
              View all projects <ArrowRight size={17} />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 md:col-span-2 row-span-2 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group">
              <Image src={images.custom1} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-[192px] md:h-[288px] rounded-3xl overflow-hidden group">
              <Image src={images.custom2} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[192px] md:h-[288px] rounded-3xl overflow-hidden group">
              <Image src={images.custom3} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-2 relative h-[192px] md:h-[288px] rounded-3xl overflow-hidden group">
              <Image src={images.custom4} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
             <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden group">
              <Image src={images.custom5} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden group">
              <Image src={images.custom6} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden group">
              <Image src={images.custom7} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Checker */}
      <section className="eligibility-section section-pad relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#1fa0f9]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
        <div className="page-shell eligibility-card border border-[#1e3639] rounded-[40px]">
          <div className="eligibility-copy pr-10">
            <SectionLabel>Instant Quote</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6">Check your <span className="text-lime-600">eligibility.</span></h2>
            <p className="text-[#8ca3a3] mb-10 text-lg">See if your property qualifies for thousands of dollars in VEU government rebates. It takes less than 60 seconds.</p>
            <div className="eligibility-mark bg-[#051012] inline-flex px-6 py-3 rounded-full border border-[#1e3639]">
              <span className="font-bold text-[#f0f6f6]">VEU</span>
              <span className="mark-line mx-4 bg-[#1e3639] w-12" />
              <span className="font-bold text-[#f0f6f6]">VICTORIA</span>
            </div>
          </div>
          <div className="eligibility-form bg-[#081618] p-8 rounded-3xl shadow-xl border border-[#1e3639]">
            <div className="question-block">
              <label className="text-xs font-bold text-[#8ca3a3] tracking-wider">Are you located in Victoria?</label>
              <div className="choice-row">
                {['Yes', 'No'].map(value => (
                  <button key={value} className={`flex-1 py-4 text-center border rounded-xl transition-all font-semibold ${eligibility.location === value ? 'bg-[#1fa0f9] text-[#051012] border-[#1fa0f9] shadow-lg scale-[1.02]' : 'border-[#1e3639] text-[#8ca3a3] hover:border-white/20 hover:text-white bg-[#051012]'}`} onClick={() => setEligibility({ ...eligibility, location: value })}>{value}</button>
                ))}
              </div>
            </div>
            <div className="question-block">
              <label className="text-xs font-bold text-[#8ca3a3] tracking-wider">What best describes you?</label>
              <div className="choice-row choice-wrap grid grid-cols-2 gap-3">
                {['Homeowner', 'Tenant', 'Small business', 'Commercial'].map(value => (
                  <button key={value} className={`py-4 text-center border rounded-xl transition-all font-semibold ${eligibility.type === value ? 'bg-[#1fa0f9] text-[#051012] border-[#1fa0f9] shadow-lg scale-[1.02]' : 'border-[#1e3639] text-[#8ca3a3] hover:border-white/20 hover:text-white bg-[#051012]'}`} onClick={() => setEligibility({ ...eligibility, type: value })}>{value}</button>
                ))}
              </div>
            </div>
            <div className="question-block">
              <label className="text-xs font-bold text-[#8ca3a3] tracking-wider">What are you interested in?</label>
              <div className="select-wrap relative">
                <select className="w-full py-4 px-5 bg-[#051012] border border-[#1e3639] rounded-xl font-semibold text-[#f0f6f6] appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500" value={eligibility.upgrade} onChange={e => setEligibility({ ...eligibility, upgrade: e.target.value })}>
                  <option value="">Select an upgrade area</option>
                  <option>Lighting</option>
                  <option>Heating & Cooling</option>
                  <option>Solar / Energy Systems</option>
                  <option>Energy Audit</option>
                  <option>Not sure yet</option>
                </select>
                <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8ca3a3] pointer-events-none" />
              </div>
            </div>
            <button className="w-full mt-4 py-5 bg-lime-400 hover:bg-lime-500 text-[#051012] font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Calculate Rebates <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
