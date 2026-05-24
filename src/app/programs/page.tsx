'use client';

import Navbar from '@/components/Navbar';

const programs = [
  {
    title: 'Access to Essential & Life-Saving Medicines',
    description: 'We strengthen medicine supply systems to ensure uninterrupted access to safe, affordable, quality-assured medicines — from procurement to last-mile delivery.',
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Antimicrobial Resistance (AMR) Stewardship',
    description: "We implement high-impact AMR containment interventions aligned with Kenya's National Action Plan, establishing AMS committees, surveillance systems, and rational antibiotic use training.",
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Health Workforce Capacity Building',
    description: 'We deliver integrated capacity strengthening for healthcare workers — from Rational Use of Medicines and pharmacovigilance to CME, HIV/TB/Malaria management, and digital health.',
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Public Health Education & Community Engagement',
    description: 'We promote health literacy and positive health-seeking behaviours through targeted SBCC campaigns, school health programmes, media advocacy, and community dialogue forums.',
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Evidence Generation & Policy Support',
    description: 'We support evidence-informed policy through medicine utilization surveys, operational research, health policy analysis, and technical assistance to the Ministry of Health.',
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Integrated Primary & Community Health Programs',
    description: 'We complement county health priorities through integrated community programming — CHV strengthening, HIV testing, NCD screening, MNCAH education, and school health.',
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Alcohol & Substance Abuse Prevention',
    description: 'We implement prevention and response programmes addressing substance use disorders — community sensitization, youth outreach, advocacy, referral, and psychosocial support.',
    icon: (
      <svg className="w-14 h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

const pillars = [
  { label: 'Pharmaceutical Systems', desc: 'Supply chain, procurement, forecasting' },
  { label: 'AMR Stewardship', desc: 'AMS programs, surveillance, containment' },
  { label: 'Health Workforce', desc: 'Training, mentorship, CME' },
  { label: 'Community Health', desc: 'Health literacy, SBCC, outreach' },
  { label: 'Policy & Evidence', desc: 'Research, policy analysis, guidelines' },
  { label: 'Patient Safety', desc: 'Pharmacovigilance, IPC, quality care' },
  { label: 'Digital Health', desc: 'Health informatics, data systems' },
  { label: 'Substance Prevention', desc: 'Prevention, rehabilitation support' },
];

const Programs = () => {
  return (
    <>
      <Navbar />

      {/* ── OUR SERVICES — 4-col icon + title + text (white, iasr style) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-center font-bold text-blue-900 text-3xl lg:text-4xl mb-16 tracking-wide">
            OUR PROGRAMS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {programs.map((program) => (
              <div key={program.title} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-5 flex items-center justify-center">
                  {program.icon}
                </div>
                {/* Title */}
                <h3 className="font-bold text-blue-900 text-lg leading-snug mb-3">
                  {program.title}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS OF SPECIALTY (navy) ───────────────────────────────────── */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-500" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Focus Areas</span>
              <span className="w-8 h-0.5 bg-green-500" />
            </div>
            <h2 className="font-display text-4xl font-bold text-white uppercase">Areas of Specialty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-200">
                <h3 className="font-display text-sm font-bold text-white uppercase mb-2">{item.label}</h3>
                <p className="text-blue-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS (white) ────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">Program Impact</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-blue-950 uppercase">Results That Matter</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '7', label: 'Program Areas', sub: 'Integrated strategic pillars' },
              { value: '47', label: 'Counties Reached', sub: 'Nationwide implementation' },
              { value: '5,000+', label: 'Workers Trained', sub: 'Healthcare professionals' },
              { value: '200+', label: 'Health Facilities', sub: 'Supported & strengthened' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-7 text-center shadow-sm border border-gray-100">
                <div className="font-display text-4xl font-bold text-blue-900 uppercase mb-1">{s.value}</div>
                <div className="font-bold text-gray-800 text-sm mb-1">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (navy) ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-green-500" />
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Get Involved</span>
            <span className="w-8 h-0.5 bg-green-500" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-4">Partner With Our Programs</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you are a healthcare professional, community leader, or concerned citizen,
            there are many ways to contribute to our mission of promoting rational medicine use in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200">
              Join Our Programs
            </a>
            <a href="/donate" className="px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wide rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200">
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
