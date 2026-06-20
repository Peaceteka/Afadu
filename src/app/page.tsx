'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  const [counters, setCounters] = useState({ years: 0, counties: 0, workers: 0 });

  useEffect(() => {
    const targets = { years: 18, counties: 47, workers: 5000 };
    const steps = 60;
    const duration = 2000;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        years: Math.min(Math.floor((targets.years / steps) * step), targets.years),
        counties: Math.min(Math.floor((targets.counties / steps) * step), targets.counties),
        workers: Math.min(Math.floor((targets.workers / steps) * step), targets.workers),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const programs = [
    {
      icon: '💊',
      title: 'Access to Essential & Life-Saving Medicines',
      description: 'Ensuring consistent access to safe, effective, affordable, and quality medicines through strengthened supply chains, stock management, and last-mile delivery systems.',
      color: 'border-blue-700',
      dot: 'bg-blue-700',
    },
    {
      icon: '🦠',
      title: 'Antimicrobial Resistance (AMR) Stewardship',
      description: 'Delivering high-impact system-oriented interventions to contain AMR through clinical stewardship, surveillance, community education, and policy support.',
      color: 'border-green-600',
      dot: 'bg-green-600',
    },
    {
      icon: '👨‍⚕️',
      title: 'Health Workers Education & Capacity Building',
      description: 'Building practical, system-integrated capacity development programs combining skills transfer, mentorship, and continuous learning for healthcare providers.',
      color: 'border-blue-500',
      dot: 'bg-blue-500',
    },
    {
      icon: '🏘️',
      title: 'Public Health Education & Community Engagement',
      description: 'Promoting health literacy through mass campaigns, AMR education, school programs, media advocacy, and behavior change communication.',
      color: 'border-green-700',
      dot: 'bg-green-700',
    },
    {
      icon: '📊',
      title: 'Evidence Generation & Policy Support',
      description: 'Generating and applying health systems evidence through medicine utilization surveys, operational research, and technical policy support.',
      color: 'border-blue-900',
      dot: 'bg-blue-900',
    },
    {
      icon: '🤝',
      title: 'Integrated Primary & Community Health Programs',
      description: 'Complementing national health strategies through CHV training, outreach programs, NCD screening, and MNCAH education.',
      color: 'border-green-800',
      dot: 'bg-green-800',
    },
    {
      icon: '🚫',
      title: 'Interventions against Alcohol & Substance Abuse',
      description: 'Implementing comprehensive strategies to reduce demand, availability, and harmful consequences of substance abuse through education and treatment support.',
      color: 'border-blue-600',
      dot: 'bg-blue-600',
    },
  ];

  const insights = [
    {
      title: 'New AMR Guidelines Released',
      excerpt: 'Kenya launches comprehensive guidelines for antimicrobial stewardship in healthcare facilities.',
      date: 'March 15, 2024',
      category: 'Policy',
    },
    {
      title: 'Health Worker Training Success',
      excerpt: 'Over 500 healthcare workers complete our rational medicine use training program.',
      date: 'March 10, 2024',
      category: 'Training',
    },
    {
      title: 'Community Outreach Impact',
      excerpt: 'Our community health initiative reaches 10,000+ households with medicine education.',
      date: 'March 5, 2024',
      category: 'Community',
    },
  ];

  const partners = [
    { name: 'ReAct Africa', website: 'https://www.reactgroup.org/africa/', logo: '/images/reactafrica.png' },
    { name: 'CoRSUM', website: 'http://corsum.org/', logo: '/images/corsum.png' },
    { name: 'HIFA', website: 'https://www.hifa.org/', logo: '/images/hifa.png' },
    { name: 'Ministry of Health Kenya', website: '#', logo: '/images/moh.png' },
    { name: 'Pharmacy & Poisons Board', website: 'https://web.pharmacyboardkenya.org/', logo: '/images/ppb.png' },
    { name: 'Christian Health Association of Kenya', website: 'https://www.chak.or.ke/', logo: '/images/chaok.jpeg' },
    { name: 'Pharmaceutical Society of Kenya', website: '#', logo: '/images/psok.jpeg' },
    { name: 'Kenya Pharmaceutical Association', website: '#', logo: '/images/kpa.png' },
  ];

  const partnerLogos = partners.map((p) => p.logo);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* ── WHO WE ARE — navy background ── */}
      <section id="about" className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-0.5 bg-green-500" />
                <span className="text-xs font-bold text-green-400 tracking-widest uppercase">About AFADU</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
                Who We Are
              </h2>
              <p className="text-blue-200 text-base leading-relaxed mb-5">
                Action for Appropriate Drug Use (AFADU) is a nationally recognized Kenyan non-governmental organization established in 2008 by a multidisciplinary team of distinguished medical doctors, pharmacists, public health specialists, epidemiologists, and health systems experts committed to advancing the rational and safe use of medicines.
              </p>
              <p className="text-blue-200 text-base leading-relaxed mb-8">
                For more than eighteen years, AFADU has remained at the forefront of pharmaceutical systems strengthening and Rational Use of Medicines (RUM) in Kenya, championing evidence-based interventions aimed at improving medicine access, patient safety, antimicrobial stewardship, policy reform, and pharmaceutical governance.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Image with overlay */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-blue-950">
                <img
                  src="/images/image2.png"
                  alt="AFADU in action"
                  className="w-full h-96 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <img src="/images/Afadulogo.png" alt="AFADU Logo" className="h-12 w-auto mb-2" />
                  <p className="text-white/85 text-sm font-medium leading-snug">
                    A healthy society characterized by the rational, safe, and equitable use of medicines.
                  </p>
                </div>
              </div>
              {/* Accent corners */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-green-600 rounded-xl -z-10" />
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-blue-800 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS — white background ── */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">What We Do</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-blue-950 uppercase leading-tight mb-4">
              Our Programmatic Interventions
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Seven strategic focus areas driving our mission to promote rational medicine use
              and strengthen health systems across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border-t-0 border-r-0 border-b-0 border-l-4 ${program.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid' }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${program.dot} bg-opacity-10`}
                  style={{ backgroundColor: 'transparent', border: `2px solid` }}
                >
                  <span className="text-xl">{program.icon}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-blue-950 mb-2 uppercase leading-snug">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{program.description}</p>
                <a href="/programs" className="inline-flex items-center gap-1 text-green-700 text-xs font-bold uppercase tracking-wide hover:text-green-600 transition-colors">
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT — navy background ── */}
      <section id="impact" className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-green-400" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Our Reach</span>
              <span className="w-8 h-0.5 bg-green-400" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-4">
              Our Impact
            </h2>
            <p className="text-blue-300 text-base max-w-2xl mx-auto">
              Transforming healthcare through measurable results and sustainable change across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 border border-white/15 rounded-2xl overflow-hidden">
            {[
              { value: `${counters.years}+`, label: 'Years of Experience', sub: 'Leading healthcare transformation since 2008' },
              { value: `${counters.counties}`, label: 'Counties Reached', sub: 'Nationwide coverage across Kenya' },
              { value: `${counters.workers.toLocaleString()}+`, label: 'Health Workers Trained', sub: 'Building capacity nationwide' },
            ].map((stat) => (
              <div key={stat.label} className="px-10 py-12 text-center">
                <div className="font-display text-6xl font-bold text-white mb-3 uppercase">{stat.value}</div>
                <div className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                <p className="text-blue-400/70 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/impact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200"
            >
              View Full Impact Report
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── PARTNERS — white background ── */}
      <section id="partnerships" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">Trusted Collaborations</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-blue-950 uppercase leading-tight mb-4">
              Our Partners
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Collaborating with leading organizations to advance healthcare in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website !== '#' ? partner.website : undefined}
                target={partner.website !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium text-center leading-tight group-hover:text-blue-700 transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER MARQUEE — navy ── */}
      <section className="py-14 bg-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-bold text-green-400 tracking-widest uppercase mb-2">Partners in Motion</p>
          <h2 className="font-display text-2xl font-bold text-white uppercase">Trusted Partners on the Move</h2>
        </div>
        <div className="overflow-hidden">
          <div className="logo-marquee whitespace-nowrap inline-flex items-center gap-8 px-4">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div key={index} className="inline-flex items-center justify-center w-28 h-28 rounded-xl bg-white/95 p-3 shadow-md flex-shrink-0">
                <img
                  src={logo}
                  alt={`Partner logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS — light gray ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">News & Updates</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-blue-950 uppercase leading-tight mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Stay updated with our latest news, research, and program updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
                <div className="h-2 bg-blue-950" />
                <div className="p-7">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-green-700 bg-green-50 border border-green-100 rounded-full mb-4 uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-blue-950 mb-2 uppercase leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{insight.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{insight.date}</span>
                    <button className="text-green-700 text-xs font-bold uppercase tracking-wide hover:text-green-600 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — navy ── */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-green-400" />
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Get Involved</span>
            <span className="w-8 h-0.5 bg-green-400" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
            Partner With Us for a Healthier Kenya
          </h2>
          <p className="text-blue-200 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a donor, government agency, or community organization,
            together we can make a lasting impact on healthcare in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partnerships"
              className="inline-flex items-center justify-center px-9 py-4 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200 shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-9 py-4 bg-white/10 text-white text-sm font-bold uppercase tracking-wide rounded-full border border-white/30 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
            >
              Our Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
