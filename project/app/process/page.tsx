import { BatteryCharging, CircleHelp, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/Shared';

export default function ProcessPage() {
  const processSteps = [
    ['01', 'Assess', 'Understand your current energy use and identify opportunities.', CircleHelp],
    ['02', 'Plan', 'Recommend suitable energy-efficiency improvements.', Sparkles],
    ['03', 'Upgrade', 'Professionally install the selected energy solutions.', Zap],
    ['04', 'Save', 'Enjoy improved efficiency and smarter energy use.', BatteryCharging]
  ] as const;

  return (
    <main className="overflow-hidden bg-[#f7f9f8] text-[#0b1719] pt-24">
      <section id="process" className="process-section section-pad">
        <div className="page-shell">
          <div className="process-top">
            <div>
              <SectionLabel light>How it works</SectionLabel>
              <h2>A better way<br />to <span>begin.</span></h2>
            </div>
            <p>Clear advice. Thoughtful upgrades. A process that respects your time, your property and your goals.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([num, title, copy, Icon]) => (
              <div className="process-card" key={num}>
                <span className="process-num">{num}</span>
                <Icon size={25} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowUpRight size={17} className="process-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#173537] text-white">
        <div className="page-shell">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel light>Guaranteed Results</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Our commitment to <span className="text-lime-400">quality.</span></h2>
            <p className="text-gray-400 leading-relaxed text-lg">We stand behind our work. Every installation is backed by industry-leading warranties and our own satisfaction guarantee, ensuring you see the energy savings we projected.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#102426] p-10 rounded-2xl">
              <div className="text-4xl font-light text-lime-400 mb-4">10<span className="text-xl">yr</span></div>
              <h4 className="font-bold mb-2">Workmanship</h4>
              <p className="text-sm text-gray-400">Comprehensive warranty on all our installation work.</p>
            </div>
            <div className="bg-[#102426] p-10 rounded-2xl">
              <div className="text-4xl font-light text-sky-400 mb-4">100<span className="text-xl">%</span></div>
              <h4 className="font-bold mb-2">Certified</h4>
              <p className="text-sm text-gray-400">All components meet strict VEU and Australian standards.</p>
            </div>
            <div className="bg-[#102426] p-10 rounded-2xl">
              <div className="text-4xl font-light text-white mb-4">24<span className="text-xl">/7</span></div>
              <h4 className="font-bold mb-2">Support</h4>
              <p className="text-sm text-gray-400">Round-the-clock emergency support for critical systems.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
