'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const achievements = [
  {
    title: 'Strong Government Collaboration',
    description: 'AFADU maintains strong working relationships with Ministry of Health, County Departments of Health, regulatory authorities, and national technical working groups.',
    tag: 'Policy Partnership',
    accent: 'border-blue-700',
  },
  {
    title: 'Technical Excellence',
    description: 'The organization possesses deep expertise in pharmaceuticals, AMR stewardship, public health systems, health policy analysis, monitoring & evaluation, operational research, and digital health solutions.',
    tag: 'Technical Leadership',
    accent: 'border-green-600',
  },
  {
    title: 'Proven National Implementation Capacity',
    description: 'AFADU has successfully implemented large-scale public health campaigns, national medicine use interventions, health worker capacity building programmes, community engagement initiatives, and county health systems strengthening projects.',
    tag: 'National Scale',
    accent: 'border-blue-500',
  },
  {
    title: 'Strong Monitoring & Evaluation Systems',
    description: 'The organization applies results-based management, performance tracking systems, evidence-driven implementation, and adaptive learning approaches.',
    tag: 'Results-Based',
    accent: 'border-green-700',
  },
  {
    title: 'Rapid Technical Mobilization',
    description: 'AFADU can rapidly deploy multidisciplinary expert teams including pharmacists, clinicians, epidemiologists, public health specialists, researchers, and community health experts.',
    tag: 'Rapid Response',
    accent: 'border-blue-900',
  },
  {
    title: 'Institutional Capability',
    description: 'AFADU has established itself as a trusted technical leader in pharmaceutical systems strengthening and public health programming in Kenya.',
    tag: 'Trusted Leadership',
    accent: 'border-green-800',
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
  const [counters, setCounters] = useState({ years: 0, counties: 0, healthWorkers: 0, lives: 0, facilities: 0, programs: 0 });

  useEffect(() => {
    const targets = { years: 18, counties: 47, healthWorkers: 5000, lives: 1000000, facilities: 200, programs: 7 };
    const steps = 50;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        years: Math.min(Math.floor((targets.years / steps) * step), targets.years),
        counties: Math.min(Math.floor((targets.counties / steps) * step), targets.counties),
        healthWorkers: Math.min(Math.floor((targets.healthWorkers / steps) * step), targets.healthWorkers),
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

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/healthcare-1.jpg)' }}
        />
        <div className="absolute inset-0 bg-blue-950/82" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-0.5 bg-green-500" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Measured Results</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
              Our Impact
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              Transforming healthcare across Kenya through measurable results,
              sustainable programs, and lasting community impact since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-500" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">By the Numbers</span>
              <span className="w-8 h-0.5 bg-green-500" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white uppercase">Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/15">
            {[
              { value: `${counters.years}+`, label: 'Years' },
              { value: counters.counties, label: 'Counties' },
              { value: `${counters.healthWorkers.toLocaleString()}+`, label: 'Workers Trained' },
              { value: `${counters.lives.toLocaleString()}+`, label: 'Lives Impacted' },
              { value: `${counters.facilities}+`, label: 'Facilities' },
              { value: counters.programs, label: 'Program Areas' },
            ].map((s) => (
              <div key={s.label} className="text-center py-6 px-4">
                <div className="font-display text-4xl font-bold text-white uppercase mb-1">{s.value}</div>
                <div className="text-blue-300 text-xs uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">Track Record</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-blue-950 uppercase mb-2">Institutional Capability</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Technical excellence and proven track record that drive our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className={`bg-white rounded-xl shadow-sm border-l-4 ${a.accent} border border-gray-100 p-7`}>
                <span className="inline-block text-xs font-bold text-green-700 uppercase tracking-wider mb-3">{a.tag}</span>
                <h3 className="font-display text-lg font-bold text-blue-950 uppercase leading-tight mb-3">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-500" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Voices of Impact</span>
              <span className="w-8 h-0.5 bg-green-500" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white uppercase">What People Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 rounded-xl p-7 border border-white/10">
                <p className="text-blue-100 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-blue-300 text-xs">{t.role}</p>
                  <p className="text-blue-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-blue-950 uppercase mb-4">Be Part of the Impact</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Join us in transforming healthcare outcomes for communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/donate" className="px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-700 transition-colors duration-200">
              Support Our Work
            </a>
            <a href="/contact" className="px-8 py-3.5 text-blue-900 text-sm font-bold uppercase tracking-wide rounded-full border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
