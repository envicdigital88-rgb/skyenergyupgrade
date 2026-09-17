'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  ChevronDown,
  CircleHelp,
  CloudSun,
  Droplets,
  Fan,
  Home as HomeIcon,
  LampCeiling,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  X,
  Zap,
} from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/18825426/pexels-photo-18825426.jpeg?auto=compress&cs=tinysrgb&w=1800',
  home: 'https://images.pexels.com/photos/16427010/pexels-photo-16427010.jpeg?auto=compress&cs=tinysrgb&w=1400',
  technician: 'https://images.pexels.com/photos/19895880/pexels-photo-19895880.jpeg?auto=compress&cs=tinysrgb&w=1400',
  solar: 'https://images.pexels.com/photos/11455626/pexels-photo-11455626.jpeg?auto=compress&cs=tinysrgb&w=1400',
  interior: 'https://images.pexels.com/photos/7836571/pexels-photo-7836571.jpeg?auto=compress&cs=tinysrgb&w=1200',
  installation: 'https://images.pexels.com/photos/14614266/pexels-photo-14614266.jpeg?auto=compress&cs=tinysrgb&w=1200',
  sunset: 'https://images.pexels.com/photos/17240063/pexels-photo-17240063.jpeg?auto=compress&cs=tinysrgb&w=1800',
};

type Service = {
  label: string;
  title: string;
  description: string;
  icon: typeof LampCeiling;
  image: string;
  points: string[];
};

const services: Service[] = [
  { label: '01 / LIGHTING', title: 'Bring every room to life.', description: 'Upgrade to energy-saving LED solutions for better lighting performance and improved energy efficiency.', icon: LampCeiling, image: images.interior, points: ['Efficient LED lighting', 'Lower electricity consumption', 'Improved lighting quality'] },
  { label: '02 / HEATING', title: 'Comfort, engineered better.', description: 'Improve heating efficiency and create a more comfortable home environment with modern energy solutions.', icon: ThermometerSun, image: images.home, points: ['Smarter temperature control', 'Comfort in every season', 'Energy-focused planning'] },
  { label: '03 / COOLING', title: 'A cooler way forward.', description: 'Improve cooling efficiency while reducing unnecessary energy consumption across your home or business.', icon: Fan, image: images.technician, points: ['Efficient cooling systems', 'More consistent comfort', 'Clear upgrade guidance'] },
  { label: '04 / ENERGY AUDITS', title: 'See the energy story.', description: 'Detailed energy assessments designed to identify opportunities to improve your property’s energy performance.', icon: Sparkles, image: images.solar, points: ['Assessment and analysis', 'Clear recommendations', 'A considered upgrade path'] },
  { label: '05 / INSTALLATION', title: 'Made right from day one.', description: 'Professional installation of energy-efficient systems aligned with VEU program requirements.', icon: ShieldCheck, image: images.installation, points: ['Professional installation', 'Thoughtful coordination', 'Customer-first support'] },
  { label: '06 / ENERGY SYSTEMS', title: 'Make power work smarter.', description: 'Modern energy systems designed to improve efficiency and support smarter energy use.', icon: BatteryCharging, image: images.solar, points: ['Modern energy solutions', 'Smarter energy use', 'Long-term thinking'] },
];

const faqs = [
  ['What is VEU?', 'Victorian Energy Upgrades is a program designed to help Victorian households and businesses improve energy efficiency. We can help you understand the process and explore suitable upgrade options.'],
  ['Who can participate?', 'Eligibility can depend on your property, location and the upgrade you are considering. Contact our team for guidance specific to your situation.'],
  ['How do I apply?', 'Start by speaking with our team. We will ask a few simple questions about your property and the outcome you are looking for, then explain the next steps.'],
  ['What services does Skyenergy Groups offer?', 'Our focus includes lighting, heating, cooling, energy audits, professional installation and modern energy systems.'],
  ['Can homeowners and small businesses participate?', 'We work with Australian homes and small businesses, particularly across Victoria. Get in touch to discuss your property.'],
  ['What areas do you service?', 'Skyenergy Groups is focused on Victoria. Our team can confirm service availability for your location when you contact us.'],
];

const navItems = [['Services', 'services'], ['How it works', 'process'], ['About', 'about'], ['Projects', 'projects'], ['FAQ', 'faq'], ['Contact', 'contact']];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? 'text-white/60' : 'text-sky-600'}`}><span className={`label-dot ${light ? 'bg-lime-300' : 'bg-sky-500'}`} />{children}</div>;
}

function ArrowButton({ children, light = false, href = '#contact' }: { children: React.ReactNode; light?: boolean; href?: string }) {
  return <a href={href} className={`arrow-button ${light ? 'arrow-button-light' : ''}`}><span>{children}</span><ArrowUpRight size={17} strokeWidth={2.3} /></a>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [eligibility, setEligibility] = useState({ location: '', type: '', upgrade: '' });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="overflow-hidden bg-[#f7f9f8] text-[#0b1719]">
      <div className="scroll-progress" />
      <nav className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Main navigation">
        <a href="#top" className="brand-mark" aria-label="Skyenergy Groups home"><Image src="/images/sky-logo-Q48KBUb3butXN7eD-removebg-preview.png" alt="Skyenergy Groups" width={184} height={64} priority /></a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={`#${href}`} className="nav-link">{label}</a>)}
        </div>
        <div className="flex items-center gap-3"><a href="#contact" className="nav-cta hidden sm:inline-flex">Check your eligibility <ArrowUpRight size={15} /></a><button className="menu-button lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>{mobileOpen ? <X /> : <Menu />}</button></div>
      </nav>
      {mobileOpen && <div className="mobile-menu lg:hidden"><div className="flex flex-col gap-6">{navItems.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setMobileOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}<a href="#contact" onClick={() => setMobileOpen(false)} className="mobile-menu-cta">Check your eligibility <ArrowUpRight size={18} /></a></div></div>}

      <section id="top" className="hero-section">
        <Image src={images.hero} alt="Modern home with solar panels in warm evening light" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-content page-shell">
          <div className="max-w-3xl">
            <div className="eyebrow light-eyebrow"><span className="pulse-dot" /> Australian energy upgrade specialists</div>
            <h1>Energy upgrades<br /><em>made simple.</em></h1>
            <p className="hero-copy">Better energy efficiency for Australian homes and small businesses, with the guidance to make every next step feel clear.</p>
            <div className="flex flex-wrap items-center gap-4"><ArrowButton light href="#contact">Start your upgrade</ArrowButton><a href="#services" className="text-link-light">Explore solutions <ArrowRight size={17} /></a></div>
          </div>
          <div className="hero-bottom"><div className="hero-caption"><span>01</span><div className="caption-line" /><span>Energy efficiency, reimagined</span></div><a href="#values" className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={18} /></a></div>
        </div>
        <div className="energy-flow" aria-hidden="true"><div className="flow-node"><Sun size={16} />Sun</div><div className="flow-line" /><div className="flow-node"><Zap size={16} />Upgrade</div><div className="flow-line" /><div className="flow-node"><HomeIcon size={16} />Home</div></div>
      </section>

      <section id="values" className="value-strip"><div className="page-shell grid grid-cols-2 lg:grid-cols-4">{[['01', 'VEU program support', 'A clearer path to available support'], ['02', 'Energy efficient', 'Smarter choices for your space'], ['03', 'Professional install', 'Carefully delivered, end to end'], ['04', 'Lower energy costs', 'Designed around better use']].map(([num, title, copy]) => <div className="value-item" key={num}><span className="value-number">{num}</span><div><strong>{title}</strong><p>{copy}</p></div><ArrowUpRight className="value-arrow" size={20} /></div>)}</div></section>

      <section id="about" className="about-section page-shell section-pad"><div className="about-visual"><Image src={images.home} alt="Solar panels on a contemporary Australian home" fill sizes="(max-width: 900px) 100vw, 50vw" /><div className="visual-note"><span className="note-icon"><CloudSun size={18} /></span><span><b>Built for better</b><small>Victoria & beyond</small></span></div></div><div className="about-copy"><SectionLabel>About Skyenergy Groups</SectionLabel><h2>Smarter energy.<br /><span>Simpler upgrades.</span></h2><p className="lead-copy">Skyenergy Groups helps Australian homes and small businesses improve their energy efficiency through the Victorian Energy Upgrades program.</p><p>We make the shift to a more efficient space feel considered, practical and genuinely useful — from the first conversation through to professional installation.</p><ul className="check-list">{['Energy upgrade guidance', 'VEU program support', 'Professional installation', 'Customer-focused service'].map(item => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul><ArrowButton href="#services">Meet our approach</ArrowButton></div></section>

      <section id="services" className="services-section section-pad"><div className="page-shell"><div className="section-intro-row"><div><SectionLabel>What we do</SectionLabel><h2>Solutions designed<br /><span>around you.</span></h2></div><p>Every property has a different energy story. We bring the right questions, practical advice and the right people to help you move forward.</p></div><div className="service-experience"><div className="service-featured"><Image key={services[activeService].image} src={services[activeService].image} alt={services[activeService].title} fill sizes="(max-width: 900px) 100vw, 58vw" className="service-image" /><div className="service-shade" /><div className="service-featured-top"><span>{services[activeService].label}</span><span>Skyenergy / 2024</span></div><div className="service-featured-bottom"><div><h3>{services[activeService].title}</h3><p>{services[activeService].description}</p></div><span className="service-count">0{activeService + 1}</span></div></div><div className="service-list">{services.map((service, index) => { const Icon = service.icon; return <button key={service.label} onClick={() => setActiveService(index)} className={`service-tab ${activeService === index ? 'service-tab-active' : ''}`}><span className="service-tab-icon"><Icon size={18} /></span><span className="service-tab-label">{service.label.split(' / ')[1]}</span>{activeService === index ? <ArrowRight size={18} /> : <span className="tab-plus">+</span>}</button> })}<div className="service-points">{services[activeService].points.map(point => <div key={point}><Check size={15} />{point}</div>)}</div></div></div></div></section>

      <section id="process" className="process-section section-pad"><div className="page-shell"><div className="process-top"><div><SectionLabel light>How it works</SectionLabel><h2>A better way<br />to <span>begin.</span></h2></div><p>Clear advice. Thoughtful upgrades. A process that respects your time, your property and your goals.</p></div><div className="process-grid">{([['01', 'Assess', 'Understand your current energy use and identify opportunities.', CircleHelp], ['02', 'Plan', 'Recommend suitable energy-efficiency improvements.', Sparkles], ['03', 'Upgrade', 'Professionally install the selected energy solutions.', Zap], ['04', 'Save', 'Enjoy improved efficiency and smarter energy use.', BatteryCharging]] as [string, string, string, typeof Zap][]).map(([num, title, copy, Icon]) => <div className="process-card" key={num}><span className="process-num">{num}</span><Icon size={25} strokeWidth={1.5} /><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={17} className="process-arrow" /></div>)}</div></div></section>

      <section id="veu" className="veu-section section-pad"><div className="page-shell veu-grid"><div><SectionLabel>Victorian Energy Upgrades</SectionLabel><h2>Make your energy<br /><span>upgrade work harder.</span></h2><p className="lead-copy">VEU is designed to help Victorian households and businesses improve energy efficiency. We help make the opportunity easier to understand.</p><ArrowButton href="#contact">Find out if you qualify</ArrowButton></div><div className="faq-stack">{[['What is VEU?', 'A program designed to support energy-efficiency improvements across Victoria.'], ['What upgrades may qualify?', 'It depends on your property and the upgrade. We can help you explore the options.'], ['How can Skyenergy help?', 'We guide you through the conversation, the options and the next practical step.']].map(([question, answer], index) => <div className="veu-faq" key={question}><button onClick={() => setOpenFaq(openFaq === index + 10 ? -1 : index + 10)}><span>{question}</span>{openFaq === index + 10 ? <Minus size={18} /> : <PlusIcon />}</button>{openFaq === index + 10 && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="eligibility-section section-pad"><div className="page-shell eligibility-card"><div className="eligibility-copy"><SectionLabel>Start with a simple conversation</SectionLabel><h2>Am I eligible<br /><span>for an upgrade?</span></h2><p>Tell us a little about your property and what you are curious about. Our team will get back to you with the right next step.</p><div className="eligibility-mark"><span>VEU</span><span className="mark-line" /><span>VIC</span></div></div><div className="eligibility-form"><div className="question-block"><label>Are you located in Victoria?</label><div className="choice-row">{['Yes', 'No'].map(value => <button key={value} className={eligibility.location === value ? 'choice-selected' : ''} onClick={() => setEligibility({ ...eligibility, location: value })}>{value}</button>)}</div></div><div className="question-block"><label>What best describes you?</label><div className="choice-row choice-wrap">{['Homeowner', 'Tenant', 'Small business'].map(value => <button key={value} className={eligibility.type === value ? 'choice-selected' : ''} onClick={() => setEligibility({ ...eligibility, type: value })}>{value}</button>)}</div></div><div className="question-block"><label>What are you interested in?</label><div className="select-wrap"><select value={eligibility.upgrade} onChange={e => setEligibility({ ...eligibility, upgrade: e.target.value })}><option value="">Select an upgrade area</option><option>Lighting</option><option>Heating</option><option>Cooling</option><option>Solar / energy systems</option><option>Energy audit</option><option>Not sure yet</option></select><ChevronDown size={17} /></div></div><ArrowButton href="#contact">Talk to our team</ArrowButton></div></div></section>

      <section id="projects" className="projects-section section-pad"><div className="page-shell"><div className="section-intro-row"><div><SectionLabel>Selected work</SectionLabel><h2>Energy in<br /><span>action.</span></h2></div><p>Thoughtful upgrades are about more than equipment. They are about making a home or business work better every day.</p></div><div className="project-grid"><ProjectCard image={images.solar} category="Solar fit" title="A brighter roofline" copy="20 solar panels installed on a family home." /><ProjectCard image={images.technician} category="Smart inverter" title="More from every ray" copy="An inverter upgrade for better energy conversion." wide /><ProjectCard image={images.installation} category="Battery install" title="Keep the good energy" copy="Battery storage to capture excess power." /><ProjectCard image={images.interior} category="Energy audit" title="A clearer picture" copy="A detailed analysis to reduce home energy use." /></div></div></section>

      <section className="why-section"><div className="page-shell why-grid"><div><SectionLabel light>Why Skyenergy Groups</SectionLabel><h2>Good energy<br /><span>starts here.</span></h2><p>We make the upgrade journey feel less technical, less overwhelming and more like a smart decision for what comes next.</p></div><div className="why-list">{[['01', 'Simple process'], ['02', 'Energy-focused solutions'], ['03', 'VEU program support'], ['04', 'Professional installation'], ['05', 'Customer support']].map(([num, title]) => <div className="why-row" key={num}><span>{num}</span><strong>{title}</strong><ArrowUpRight size={18} /></div>)}</div></div></section>

      <section className="testimonial-section section-pad"><div className="page-shell testimonial-inner"><Quote size={44} className="quote-icon" /><div><p>“Skyenergy Groups made upgrading my home&apos;s energy simple and affordable.”</p><div className="testimonial-meta"><span className="stars">★★★★★</span><span>J. Lee / Homeowner</span></div></div><div className="testimonial-orb"><div className="orb-ring" /><Sun size={34} /></div></div></section>

      <section id="faq" className="faq-section section-pad"><div className="page-shell faq-grid"><div><SectionLabel>Questions, answered</SectionLabel><h2>Let&apos;s clear<br /><span>things up.</span></h2><p>Not sure where to start? These are some of the questions we hear most often.</p><a href="#contact" className="text-link">Ask our team directly <ArrowRight size={17} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span>{openFaq === index ? <Minus size={18} /> : <PlusIcon />}</button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="final-cta"><Image src={images.sunset} alt="A sustainable home in the late afternoon sun" fill sizes="100vw" className="final-cta-image" /><div className="final-cta-overlay" /><div className="page-shell final-cta-content"><SectionLabel light>Ready when you are</SectionLabel><h2>Ready to upgrade<br /><span>your energy?</span></h2><p>Let&apos;s make your energy upgrade simpler, smarter and more efficient.</p><div className="flex flex-wrap gap-4"><ArrowButton light href="#contact">Get started</ArrowButton><a href="#contact" className="text-link-light">Contact us <ArrowRight size={17} /></a></div></div></section>

      <section id="contact" className="contact-section section-pad"><div className="page-shell contact-grid"><div className="contact-copy"><SectionLabel>Let&apos;s talk</SectionLabel><h2>Make your energy<br /><span>upgrade simple.</span></h2><p>Tell us what you are thinking about. Whether you have a clear plan or just a few questions, we&apos;ll help you find the right next step.</p><div className="contact-details"><a href="mailto:info@skyenergygroups.com"><Mail size={17} />info@skyenergygroups.com</a><a href="tel:+61391234567"><Phone size={17} />+61 3 9123 4567</a><span><CloudSun size={17} />Mon – Fri / 9:00 AM – 5:00 PM</span></div></div><form className="contact-form" onSubmit={handleSubmit}>{formSent ? <div className="form-success"><span><Check size={24} /></span><h3>Thanks, we&apos;ll be in touch.</h3><p>Your details are with our team. We&apos;ll get back to you soon.</p></div> : <><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Email<input required name="email" type="email" placeholder="you@email.com" /></label></div><div className="form-row"><label>Phone<input name="phone" placeholder="Your phone number" /></label><label>Property type<select name="property"><option>Home</option><option>Small business</option><option>Other</option></select></label></div><label>Service interested in<select name="service"><option>Choose a service</option>{services.map(service => <option key={service.label}>{service.label.split(' / ')[1]}</option>)}</select></label><label>Message<textarea name="message" placeholder="How can we help?" rows={4} /></label><button type="submit" className="form-submit">Start my energy upgrade <ArrowUpRight size={18} /></button></>}</form></div></section>

      <footer className="site-footer"><div className="page-shell"><div className="footer-top"><div><div className="footer-logo"><span>SKY</span><small>ENERGY GROUPS</small></div><p>Energy upgrades<br />made simple.</p></div><div className="footer-links"><div><span>Explore</span>{navItems.map(([label, href]) => <a key={href} href={`#${href}`}>{label}</a>)}</div><div><span>Contact</span><a href="mailto:info@skyenergygroups.com">info@skyenergygroups.com</a><a href="tel:+61391234567">+61 3 9123 4567</a><a href="#contact">Melbourne, Victoria</a></div></div></div><div className="footer-bottom"><span>© 2024 Skyenergy Groups. All rights reserved.</span><span>Serving Victoria, Australia</span><div className="social-links"><a href="#contact" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="#contact" aria-label="Email"><Mail size={16} /></a></div></div></div></footer>
    </main>
  );
}

function PlusIcon() { return <span className="plus-icon"><span /><span /></span>; }
function ProjectCard({ image, category, title, copy, wide = false }: { image: string; category: string; title: string; copy: string; wide?: boolean }) { return <article className={`project-card ${wide ? 'project-card-wide' : ''}`}><Image src={image} alt={title} fill sizes={wide ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 900px) 100vw, 35vw'} /><div className="project-overlay" /><div className="project-info"><span>{category}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={18} /></div></article>; }
