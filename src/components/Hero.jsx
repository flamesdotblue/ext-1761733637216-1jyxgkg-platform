import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <header className="absolute left-0 right-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Apex <span className="text-emerald-400">Auto Paint</span>
          </a>
          <nav className="hidden gap-8 md:flex text-sm">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#gallery" className="text-white/80 hover:text-white">Gallery</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition-colors"
          >
            <Phone size={16} /> Book Now
          </a>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Premium car painting that turns heads
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            From flawless factory finishes to bold custom colors, our specialists deliver durable, mirror-smooth results using industry-leading materials and precision techniques.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
            >
              <Rocket size={18} /> Explore Services
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/40 transition-colors"
            >
              See Our Work
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
            <div className="flex -space-x-3">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
            </div>
            <span>Over 1,200 vehicles transformed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
