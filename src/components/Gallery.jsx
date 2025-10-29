import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511396275275-0a95533fdd19?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Recent work</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A glimpse at our finishes—from glossy restorations to bold custom transformations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={src}
                alt={`Painted car ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/40"
        >
          Request a custom color sample
        </a>
      </div>
    </section>
  );
}
