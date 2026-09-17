import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'\{\/\*\s*Vertical Accordion Hover Grid\s*\*\/\}.*?<\/section>'

replacement = '''{/* Vertical Accordion Hover Grid */}
            <div className="flex flex-col md:flex-row h-auto md:h-[600px] gap-4">
              
              {/* Card 1: Solar */}
              <a href="/services" className="group relative flex-1 md:hover:flex-[3] h-[350px] md:h-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/10 shadow-2xl block">
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
                        Capture the sun\\'s energy with premium tier-1 panels designed for maximum Victorian efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Card 2: Lighting */}
              <a href="/services" className="group relative flex-1 md:hover:flex-[3] h-[350px] md:h-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/10 shadow-2xl block">
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
              <a href="/services" className="group relative flex-1 md:hover:flex-[3] h-[350px] md:h-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/10 shadow-2xl block">
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
        </section>'''

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
