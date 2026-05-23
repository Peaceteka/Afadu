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
    <section className="relative flex flex-col min-h-[100svh]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/afudu5.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-blue-900/78 to-green-950/82" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">

            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-green-300 tracking-widest uppercase">
                Est. 2008 &nbsp;·&nbsp; National NGO &nbsp;·&nbsp; Kenya
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-7">
              Action for<br />
              <span className="text-green-400">Appropriate</span><br />
              Drug Use
            </h1>

            {/* Mission Statement */}
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              A healthy society with equitable access to safe, quality-assured medicines
              used rationally, responsibly, and effectively to achieve optimal well-being.
            </p>

            {/* Animated challenge ticker */}
            <div className="mb-10 flex items-start gap-3 max-w-xl">
              <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-green-400 uppercase tracking-widest pt-[3px]">
                Addressing:
              </span>
              <span
                className="text-white/75 text-sm sm:text-base leading-snug transition-opacity duration-400"
                style={{ opacity: fade ? 1 : 0 }}
              >
                {challenges[textIndex]}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 text-white text-[15px] font-semibold rounded-full hover:bg-green-500 transition-colors duration-200 shadow-lg shadow-green-900/30"
              >
                Explore Our Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white text-[15px] font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
              >
                Learn About AFADU
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Strip */}
      <div className="relative z-10 border-t border-white/15 bg-blue-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-white">18+</div>
              <div className="text-blue-300 text-sm mt-0.5">Years of Experience</div>
            </div>
            <div className="border-x border-white/15">
              <div className="text-3xl font-bold text-white">47</div>
              <div className="text-blue-300 text-sm mt-0.5">Counties Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5,000+</div>
              <div className="text-blue-300 text-sm mt-0.5">Health Workers Trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
