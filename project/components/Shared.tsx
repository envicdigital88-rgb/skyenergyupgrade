import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? 'text-white/60' : 'text-[#1fa0f9]'}`}>
      <span className={`label-dot ${light ? 'bg-lime-300' : 'bg-[#1fa0f9]'}`} />
      {children}
    </div>
  );
}

export function ArrowButton({ children, light = false, href = '/contact' }: { children: React.ReactNode; light?: boolean; href?: string }) {
  return (
    <Link href={href} className={`arrow-button ${light ? 'arrow-button-light' : ''}`}>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={2.3} />
    </Link>
  );
}

export function PlusIcon() { 
  return (
    <span className="plus-icon">
      <span />
      <span />
    </span>
  );
}

export function ProjectCard({ image, category, title, copy, wide = false }: { image: string; category: string; title: string; copy: string; wide?: boolean }) { 
  return (
    <article className={`project-card ${wide ? 'project-card-wide' : ''}`}>
      <Image src={image} alt={title} fill sizes={wide ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 900px) 100vw, 35vw'} />
      <div className="project-overlay" />
      <div className="project-info">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
        <ArrowUpRight size={18} />
      </div>
    </article>
  );
}

export function SubpageHero({ title, highlight, subtitle, image }: { title: string, highlight: string, subtitle: string, image: string }) {
  return (
    <section className="relative min-h-[50svh] md:min-h-[60svh] flex items-end pb-24 pt-40 overflow-hidden bg-[#051012] border-b border-[#1e3639]">
      <Image src={image} alt="Background" fill priority sizes="100vw" className="object-cover object-center opacity-30 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#051012] via-[#051012]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#051012]/80 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1fa0f9]/10 blur-[120px] pointer-events-none" />
      <div className="relative z-10 page-shell max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] drop-shadow-2xl text-[#f0f6f6]">
          {title} <br className="hidden md:block" />
          <em className="text-[#1fa0f9] font-serif italic font-light tracking-normal">{highlight}</em>
        </h1>
        <p className="text-lg md:text-xl text-[#8ca3a3] max-w-2xl font-medium drop-shadow-md mt-6">
          {subtitle}
        </p>
      </div>
    </section>
  );
}