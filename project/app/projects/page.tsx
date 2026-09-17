import Image from 'next/image';
import { Quote, Sun } from 'lucide-react';
import { SectionLabel, ProjectCard, SubpageHero } from '@/components/Shared';
import { images } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <SubpageHero title="Our recent work &" highlight="featured installations." subtitle="See how we are transforming homes across Victoria into highly efficient, sustainable living spaces." image={images.installation} />
      <section id="projects" className="projects-section section-pad">
        <div className="page-shell">
          <div className="section-intro-row">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2>Energy in<br /><span>action.</span></h2>
            </div>
            <p>Thoughtful upgrades are about more than equipment. They are about making a home or business work better every day.</p>
          </div>
          <div className="project-grid">
            <ProjectCard image={images.solar} category="Solar fit" title="A brighter roofline" copy="20 solar panels installed on a family home." />
            <ProjectCard image={images.technician} category="Smart inverter" title="More from every ray" copy="An inverter upgrade for better energy conversion." wide />
            <ProjectCard image={images.installation} category="Battery install" title="Keep the good energy" copy="Battery storage to capture excess power." />
            <ProjectCard image={images.interior} category="Energy audit" title="A clearer picture" copy="A detailed analysis to reduce home energy use." />
          </div>
        </div>
      </section>

      <section className="testimonial-section section-pad">
        <div className="page-shell testimonial-inner">
          <Quote size={44} className="quote-icon" />
          <div>
            <p>“Skyenergy Groups made upgrading my home&apos;s energy simple and affordable.”</p>
            <div className="testimonial-meta">
              <span className="stars">★★★★★</span>
              <span>J. Lee / Homeowner</span>
            </div>
          </div>
          <div className="testimonial-orb">
            <div className="orb-ring" />
            <Sun size={34} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#051012]">
        <div className="page-shell">
          <SectionLabel>Featured Case Study</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-12 tracking-tight">The Greenfield <span className="text-sky-600">Transformation.</span></h2>
          
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image src={images.energy} alt="Greenfield Project" fill className="object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Challenge</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">A large manufacturing facility in Victoria was experiencing soaring energy costs due to outdated lighting systems and inefficient HVAC units. They needed a comprehensive overhaul that wouldn't disrupt their 24/7 operations.</p>
              
              <h3 className="text-2xl font-bold mb-4">Solution</h3>
              <p className="text-gray-600 leading-relaxed">We deployed a phased approach, replacing over 500 high-bay lights with intelligent LED fixtures during scheduled downtime. We also upgraded their core heating units and integrated a central energy management system to track usage in real-time.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-500">Project Stats</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-light text-lime-600 mb-1">45%</div>
                  <div className="text-sm font-semibold text-gray-600">Reduction in energy costs</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-sky-600 mb-1">120t</div>
                  <div className="text-sm font-semibold text-gray-600">Carbon emissions saved annually</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-gray-800 mb-1">18mo</div>
                  <div className="text-sm font-semibold text-gray-600">Projected ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
