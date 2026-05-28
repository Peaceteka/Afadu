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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[88vh]">

          {/* LEFT — full-bleed photo, fills 7 cols */}
          <div className="hidden lg:block lg:col-span-7 relative -ml-8">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/images/afudu5.jpg)' }}
            />
            {/* Right-side fade so content card reads over it */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-950/80" />
          </div>

          {/* RIGHT — overlapping white content card, 5 cols */}
          <div className="lg:col-span-5 relative z-10 flex items-center">
            {/* Card overlaps the image by pulling left */}
            <div className="w-full lg:-ml-20 bg-white shadow-2xl rounded-2xl px-8 py-12 lg:px-12 my-12 lg:my-16">

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
