import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'<div className="eligibility-form bg-\[\#081618\].*?<\/section>'

replacement = '''<div className="eligibility-form bg-[#081618] p-5 md:p-8 rounded-3xl shadow-xl border border-[#1e3639]">
              
              {!calculationResult ? (
                <>
                  <div className="question-block">
                    <label className="text-xs font-bold text-[#8ca3a3] tracking-wider">Are you located in Victoria?</label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map(value => (
                        <button key={value} className={`flex-1 py-4 text-center border rounded-xl transition-all font-semibold ${eligibility.location === value ? 'bg-[#1fa0f9] text-[#051012] border-[#1fa0f9] shadow-lg scale-[1.02]' : 'border-[#1e3639] text-[#8ca3a3] hover:border-white/20 hover:text-white bg-[#051012]'}`} type="button" onClick={(e) => { e.preventDefault(); setEligibility({ ...eligibility, location: value }); }}>{value}</button>
                      ))}
                    </div>
                  </div>
                  <div className="question-block">
                    <label className="text-xs font-bold text-[#8ca3a3] tracking-wider">What best describes you?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Homeowner', 'Tenant', 'Small business', 'Commercial'].map(value => (
                        <button key={value} className={`py-4 text-center border rounded-xl transition-all font-semibold ${eligibility.type === value ? 'bg-[#1fa0f9] text-[#051012] border-[#1fa0f9] shadow-lg scale-[1.02]' : 'border-[#1e3639] text-[#8ca3a3] hover:border-white/20 hover:text-white bg-[#051012]'}`} type="button" onClick={(e) => { e.preventDefault(); setEligibility({ ...eligibility, type: value }); }}>{value}</button>
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
                  
                  <button 
                    onClick={handleCalculate}
                    disabled={isCalculating || !eligibility.location || !eligibility.type}
                    className="w-full mt-4 py-5 bg-lime-400 hover:bg-lime-500 disabled:bg-lime-400/30 disabled:cursor-not-allowed disabled:text-white/50 text-[#051012] font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_-10px_rgba(163,230,53,0.5)] disabled:shadow-none"
                  >
                    {isCalculating ? (
                      <span className="flex items-center gap-2">
                         <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-inherit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                         Calculating...
                      </span>
                    ) : (
                      <>Calculate Rebates <ArrowRight size={16} /></>
                    )}
                  </button>
                </>
              ) : (
                <div className="w-full p-8 md:p-12 bg-[#051012] border border-lime-400/30 rounded-xl text-center animate-in fade-in zoom-in duration-500 shadow-[0_0_40px_rgba(163,230,53,0.1)] flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-20 h-20 bg-lime-400/20 rounded-full flex items-center justify-center mb-6">
                    <Award size={40} className="text-lime-400" />
                  </div>
                  <div className="text-lime-400 font-bold mb-4 text-3xl">Great news!</div>
                  <p className="text-white text-lg mb-8 leading-relaxed max-w-sm">Based on your answers, you are eligible for up to <strong className="text-lime-400 text-5xl block mt-4 font-serif italic">${calculationResult.amount}</strong><span className="block mt-2 text-sm text-[#8ca3a3] font-normal uppercase tracking-widest">in VEU rebates</span></p>
                  <button 
                    onClick={() => { setCalculationResult(null); setEligibility({ location: '', type: '', upgrade: '' }) }}
                    className="w-full max-w-[280px] py-4 bg-white hover:bg-gray-200 text-[#051012] font-bold uppercase tracking-widest text-xs rounded-xl transition-colors"
                  >
                    Claim your rebate now
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>'''

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
