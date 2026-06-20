'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const challenges = [
    'Irrational and inappropriate use of medicines',
    'Escalating Antimicrobial Resistance (AMR)',
    'Weak medicines monitoring and surveillance systems',
    'Inadequate pharmaceutical governance mechanisms',
    'Poor public awareness on safe medicine use',
    'Increasing burden of emerging and re-emerging diseases',
    'Inequitable access to essential medicines and healthcare services',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % challenges.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [challenges.length]);

  return (
    <section className="relative bg-blue-950 overflow-hidden">
      {/* Vibrant graphic backdrop spanning the whole hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-900 to-green-700" />
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-green-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-400/20 rounded-full blur-3xl" />
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1.5px, transparent 1.5px)',
            backgroundSize: '26px 26px',
          }}
        />
        {/* Floating pill motifs (echo the AFADU logo) */}
        <div className="absolute top-16 right-24 w-28 h-12 bg-green-400/40 rounded-full rotate-45" />
        <div className="absolute bottom-24 left-24 w-36 h-14 bg-white/15 rounded-full -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[88vh] flex items-center py-10 lg:py-14">
        {/* Large white card — almost covers the hero */}
        <div className="w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">

          {/* LEFT column — main content */}
          <div className="lg:col-span-3 px-8 py-12 sm:px-12 lg:px-16 lg:py-20 flex flex-col justify-center">

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-green-600" />
                <span className="text-xs font-bold text-green-700 tracking-widest uppercase">
                  Est. 2008 · Nairobi, Kenya
                </span>
              </div>

              {/* Headline — Oswald display font */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-blue-950 leading-tight uppercase mb-2">
                Action for
              </h1>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-green-600 leading-tight uppercase mb-2">
                Appropriate
              </h1>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-blue-950 leading-tight uppercase mb-6">
                Drug Use
              </h1>

              {/* Mission */}
              <p className="text-gray-600 text-base leading-relaxed mb-6 border-l-4 border-green-500 pl-4">
                A healthy society with equitable access to safe, quality-assured medicines
                used rationally, responsibly, and effectively.
              </p>

              {/* Animated challenge ticker */}
              <div className="mb-8 flex items-start gap-2 min-h-[2.5rem]">
                <span className="flex-shrink-0 text-xs font-bold text-green-600 uppercase tracking-wider mt-0.5">
                  Addressing:
                </span>
                <span
                  className="text-gray-500 text-sm leading-snug transition-opacity duration-400"
                  style={{ opacity: fade ? 1 : 0 }}
                >
                  {challenges[textIndex]}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-900 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-blue-800 transition-colors duration-200 shadow-md"
                >
                  Our Programs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-700 transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
          </div>

          {/* RIGHT column — vibrant accent panel */}
          <div className="hidden lg:flex lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-900 to-green-700 items-center justify-center p-10">
            {/* Soft glow */}
            <div className="absolute -top-16 -right-10 w-72 h-72 bg-green-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl" />
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Pill motifs */}
            <div className="absolute top-12 left-8 w-24 h-10 bg-green-400/40 rounded-full rotate-45" />
            <div className="absolute bottom-16 right-8 w-28 h-11 bg-white/15 rounded-full -rotate-12" />

            <div className="relative text-center">
              <span className="block text-xs font-bold text-green-300 tracking-[0.3em] uppercase mb-3">
                Est. 2008
              </span>
              <span className="block font-display text-2xl font-bold text-white uppercase leading-snug">
                Championing rational medicine use
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Stats bar — full width, navy */}
      <div className="border-t border-white/10 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-display text-3xl font-bold text-white uppercase">18+</div>
              <div className="text-blue-300 text-xs uppercase tracking-wider mt-0.5">Years of Experience</div>
            </div>
            <div className="border-x border-white/15">
              <div className="font-display text-3xl font-bold text-white uppercase">47</div>
              <div className="text-blue-300 text-xs uppercase tracking-wider mt-0.5">Counties Reached</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white uppercase">5,000+</div>
              <div className="text-blue-300 text-xs uppercase tracking-wider mt-0.5">Health Workers Trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
