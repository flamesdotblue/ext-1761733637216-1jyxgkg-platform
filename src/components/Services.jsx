import React from 'react';
import { Car, Palette, Paintbrush, Shield } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Full Body Respray',
    desc: 'Factory-level refinish with color-match technology for a flawless, uniform coat.',
    price: 'from $1,499',
    badge: 'Most Popular',
  },
  {
    icon: Palette,
    title: 'Custom Colors & Effects',
    desc: 'Metallics, pearls, matte, and chameleon finishes tailored to your vision.',
    price: 'from $1,999',
  },
  {
    icon: Paintbrush,
    title: 'Panel & Scratch Repair',
    desc: 'Blend and spot repair to erase scrapes, clear coat fade, and door dings.',
    price: 'from $249',
  },
  {
    icon: Shield,
    title: 'Ceramic Top Coat',
    desc: 'Hydrophobic protection that enhances gloss and shields from UV and contaminants.',
    price: 'from $399',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            We combine precision prep work, premium paint systems, and controlled curing for finishes that last.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-emerald-400 md:inline-flex"
        >
          Get a Quote
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-xl shadow-black/20 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <s.icon className="text-emerald-400" size={22} />
              </div>
              {s.badge && (
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  {s.badge}
                </span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-emerald-300">{s.price}</span>
              <a href="#contact" className="text-sm text-white/80 underline-offset-4 hover:underline">
                Book
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-600/20 via-emerald-500/10 to-transparent p-6">
        <p className="text-sm text-white/80">
          Not sure what you need? Send us photos of your vehicle and we’ll recommend the best package for your timeline and budget.
        </p>
      </div>
    </section>
  );
}
