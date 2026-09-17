import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'\{\/\*\s*Testimonials\s*\*\/\}.*?</section>'

replacement = '''{/* Client Success / Testimonials */}
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
        </section>'''

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
