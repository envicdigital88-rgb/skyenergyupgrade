'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.max(1, Math.floor(Math.random() * 8) + 3);
        return Math.min(100, prev + step);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 350);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1100);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#051012] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isLoaded ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      aria-hidden={isLoaded}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#1fa0f9]/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-lime-400/10 blur-[100px] pointer-events-none translate-x-10 translate-y-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Main Logo & Glowing Ring Container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer Rotating Energy Ring */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
          {/* Outer dashed spinning ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#1fa0f9]/30 animate-[spin_12s_linear_infinite]" />
          
          {/* Inner counter-spinning glowing gradient ring */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#1fa0f9] border-r-lime-400/80 animate-[spin_4s_linear_infinite_reverse]" />
          
          {/* Pulsating backplate */}
          <div className="absolute inset-5 rounded-full bg-gradient-to-tr from-[#081618] to-[#0d2327] border border-white/10 shadow-[0_0_40px_rgba(31,160,249,0.2)] flex items-center justify-center overflow-hidden">
            {/* Logo Wrapper */}
            <div className="relative z-10 w-28 sm:w-36 h-12 flex items-center justify-center">
              <Image
                src="/images/sky-logo-Q48KBUb3butXN7eD-removebg-preview.png"
                alt="Skyenergy Logo"
                width={160}
                height={56}
                priority
                className="object-contain filter drop-shadow-[0_0_15px_rgba(31,160,249,0.6)] brightness-105"
              />
            </div>
          </div>
        </div>

        {/* Brand Tagline & Status */}
        <div className="mt-8 flex flex-col items-center text-center">
          <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#1fa0f9] flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
            Empowering Victoria
          </span>
          <h4 className="text-white/80 font-medium text-sm sm:text-base mt-2 tracking-tight">
            Curating your energy future
          </h4>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 sm:w-64 mt-6">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-[1px] backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-[#1fa0f9] via-lime-400 to-[#1fa0f9] rounded-full transition-all duration-200 ease-out shadow-[0_0_12px_rgba(31,160,249,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2.5 px-0.5 text-[11px] font-mono text-white/50">
            <span className="uppercase tracking-wider">Loading</span>
            <span className="text-lime-400 font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
