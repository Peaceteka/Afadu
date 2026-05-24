'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const achievements = [
  {
    title: 'Strong Government Collaboration',
    description: 'AFADU maintains strong working relationships with Ministry of Health, County Departments of Health, regulatory authorities, and national technical working groups.',
    tag: 'Policy Partnership',
  },
  {
    title: 'Technical Excellence',
    description: 'Deep expertise in pharmaceuticals, AMR stewardship, public health systems, health policy analysis, M&E, operational research, and digital health solutions.',
    tag: 'Technical Leadership',
  },
  {
    title: 'Proven National Implementation Capacity',
    description: 'Successfully implemented large-scale public health campaigns, national medicine use interventions, health worker capacity building programmes, and county health systems strengthening projects.',
    tag: 'National Scale',
  },
  {
    title: 'Strong Monitoring & Evaluation Systems',
    description: 'Applies results-based management, performance tracking systems, evidence-driven implementation, and adaptive learning approaches across all programmes.',
    tag: 'Results-Based',
  },
  {
    title: 'Rapid Technical Mobilization',
    description: 'Can rapidly deploy multidisciplinary expert teams including pharmacists, clinicians, epidemiologists, public health specialists, researchers, and community health experts.',
    tag: 'Rapid Response',
  },
  {
    title: 'Institutional Capability & Trust',
    description: 'Established as a trusted technical leader in pharmaceutical systems strengthening and public health programming in Kenya over 18+ years.',
    tag: 'Trusted Leadership',
  },
];

const testimonials = [
  {
    name: 'Dr. Jane Mwangi',
    role: 'County Health Director',
    location: 'Nairobi County',
    content: "AFADU's training programs have transformed how our healthcare providers approach medicine use. The impact has been remarkable.",
  },
  {
    name: 'John Kamau',
    role: 'Pharmacist',
    location: 'Kiambu County',
    content: 'The AMR stewardship program has significantly improved antibiotic prescribing practices in our facility. We are seeing real results.',
  },
  {
    name: 'Mary Wanjiku',
    role: 'Community Health Volunteer',
    location: 'Nakuru County',
    content: "AFADU's community education programs have empowered our community with knowledge about safe medicine use.",
  },
];

const Impact = () => {
  const [counters, setCounters] = useState({ years: 0, counties: 0, workers: 0, lives: 0, facilities: 0, programs: 0 });

  useEffect(() => {
    const targets = { years: 18, counties: 47, workers: 5000, lives: 1000000, facilities: 200, programs: 7 };
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        years: Math.min(Math.floor((targets.years / steps) * step), targets.years),
        counties: Math.min(Math.floor((targets.counties / steps) * step), targets.counties),
        workers: Math.min(Math.floor((targets.workers / steps) * step), targets.workers),
        lives: Math.min(Math.floor((targets.lives / steps) * step), targets.lives),
        facilities: Math.min(Math.floor((targets.facilities / steps) * step), targets.facilities),
        programs: Math.min(Math.floor((targets.programs / steps) * step), targets.programs),
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* ── 1. OUR IMPACT IN NUMBERS ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            OUR IMPACT IN NUMBERS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
            {[
              { value: `${counters.years}+`, label: 'Years of Experience', sub: 'Since 2008' },
              { value: counters.counties, label: 'Counties Reached', sub: 'Nationwide' },
              { value: `${counters.workers.toLocaleString()}+`, label: 'Health Workers Trained', sub: 'Across Kenya' },
              { value: `${counters.lives.toLocaleString()}+`, label: 'Lives Impacted', sub: 'Direct & indirect' },
              { value: `${counters.facilities}+`, label: 'Health Facilities', sub: 'Supported' },
              { value: counters.programs, label: 'Program Areas', sub: 'Strategic pillars' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="font-bold text-cyan-500 text-5xl leading-none mb-2">{s.value}</div>
                <div className="font-bold text-blue-900 text-sm mb-0.5">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── 2. INSTITUTIONAL CAPABILITY ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            INSTITUTIONAL CAPABILITY &amp; ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {achievements.map((a) => (
              <div key={a.title}>
                <span className="inline-block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3">
                  {a.tag}
                </span>
                <h3 className="font-bold text-blue-900 text-lg leading-snug mb-3">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── 3. VOICES OF IMPACT ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            VOICES OF IMPACT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {testimonials.map((t) => (
              <div key={t.name}>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-blue-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role} &mdash; {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── 4. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-4">
            BE PART OF THE IMPACT
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
            Join us in transforming healthcare outcomes for communities across Kenya.
            Support our work or partner with us to extend our reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              Support Our Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-blue-900 text-sm font-bold uppercase tracking-widest rounded-full border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
