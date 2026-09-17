import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? 'text-white/60' : 'text-sky-600'}`}>
      <span className={`label-dot ${light ? 'bg-lime-300' : 'bg-sky-500'}`} />
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
