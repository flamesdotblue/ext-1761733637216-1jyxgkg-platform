import React, { useState } from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name}! We will contact you shortly.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Get a quote</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Tell us about your vehicle, desired finish, and timing. We typically respond within one business day.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/80">
              <Mail size={16} className="text-emerald-400" /> hello@apexpaint.shop
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Phone size={16} className="text-emerald-400" /> (555) 014-2030
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Calendar size={16} className="text-emerald-400" /> Mon–Sat, 9am–6pm
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 p-4 text-xs text-white/70">
            Drop by our shop for a quick paint assessment. Walk-ins welcome.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-white/70" htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/60"
                placeholder="Alex Johnson"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70" htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/60"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70" htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-emerald-400/60"
                defaultValue="Full Body Respray"
              >
                <option>Full Body Respray</option>
                <option>Custom Colors & Effects</option>
                <option>Panel & Scratch Repair</option>
                <option>Ceramic Top Coat</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-xs text-white/70" htmlFor="details">Details</label>
            <textarea
              id="details"
              name="details"
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/60"
              placeholder="Vehicle model, current paint condition, desired color/finish, target date..."
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-white/60">By submitting, you agree to our terms and privacy policy.</p>
            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors"
            >
              Send request
            </button>
          </div>
          {status && (
            <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
