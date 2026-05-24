'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  { id: 'all', label: 'All Partners' },
  { id: 'international', label: 'International' },
  { id: 'government', label: 'Government' },
  { id: 'academic', label: 'Academic' },
  { id: 'professional', label: 'Professional' },
];

const partners = [
  {
    id: 'react-africa',
    name: 'ReAct Africa',
    category: 'international',
    website: 'https://www.reactgroup.org/africa/',
    description: 'Action on Antibiotic Resistance — A global network working to contain antimicrobial resistance through coordinated action.',
    logo: '/images/reactafrica.png',
    logoFallback: 'RA',
    partnershipType: 'Strategic Partner',
    focus: 'AMR Containment',
    accent: 'border-blue-700',
  },
  {
    id: 'corsum',
    name: 'CoRSUM',
    category: 'international',
    website: 'http://corsum.org/',
    description: 'Coalition for Rational and Safe Use of Medicines — Working globally to promote safe and rational medicine use.',
    logo: '/images/corsum.png',
    logoFallback: 'CS',
    partnershipType: 'Strategic Partner',
    focus: 'Medicine Safety',
    accent: 'border-green-600',
  },
  {
    id: 'hifa',
    name: 'HIFA',
    category: 'international',
    website: 'https://www.hifa.org/',
    description: 'Health Information For All — Global campaign working towards a world where every person has access to essential healthcare information.',
    logo: '/images/hifa.png',
    logoFallback: 'HI',
    partnershipType: 'Knowledge Partner',
    focus: 'Health Information',
    accent: 'border-blue-500',
  },
  {
    id: 'moh-kenya',
    name: 'Ministry of Health Kenya',
    category: 'government',
    website: '#',
    description: "Kenya's national health authority responsible for healthcare policy, regulation, and service delivery.",
    logo: '/images/moh.png',
    logoFallback: 'MH',
    partnershipType: 'Government Partner',
    focus: 'Health Policy',
    accent: 'border-green-700',
  },
  {
    id: 'ppb',
    name: 'Pharmacy and Poisons Board',
    category: 'government',
    website: 'https://web.pharmacyboardkenya.org/',
    description: 'National regulatory authority for medicines and pharmacy practice in Kenya.',
    logo: '/images/ppb.png',
    logoFallback: 'PP',
    partnershipType: 'Regulatory Partner',
    focus: 'Medicine Regulation',
    accent: 'border-blue-900',
  },
  {
    id: 'chak',
    name: 'Christian Health Association of Kenya',
    category: 'government',
    website: 'https://www.chak.or.ke/',
    description: 'National umbrella organization for faith-based health facilities in Kenya.',
    logo: '/images/chaok.jpeg',
    logoFallback: 'CK',
    partnershipType: 'Implementation Partner',
    focus: 'Health Service Delivery',
    accent: 'border-green-800',
  },
  {
    id: 'psk',
    name: 'Pharmaceutical Society of Kenya',
    category: 'professional',
    website: '#',
    description: 'Professional body representing pharmacists in Kenya, promoting excellence in pharmacy practice.',
    logo: '/images/psko.jpeg',
    logoFallback: 'PS',
    partnershipType: 'Professional Partner',
    focus: 'Pharmacy Practice',
    accent: 'border-blue-600',
  },
  {
    id: 'kpa',
    name: 'Kenya Pharmaceutical Association',
    category: 'professional',
    website: '#',
    description: 'Association representing pharmaceutical professionals and industry stakeholders in Kenya.',
    logo: '/images/kpa.png',
    logoFallback: 'KP',
    partnershipType: 'Professional Partner',
    focus: 'Pharmaceutical Industry',
    accent: 'border-blue-700',
  },
  {
    id: 'universities',
    name: 'Universities & Tertiary Colleges',
    category: 'academic',
    website: '#',
    description: 'Partner institutions training various cadres of health workers across Kenya.',
    logo: 'https://www.heafkenya.org/images/heaf-logo.png',
    logoFallback: 'UC',
    partnershipType: 'Academic Partner',
    focus: 'Health Workforce Training',
    accent: 'border-green-600',
  },
];

const Partnerships = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPartners = selectedCategory === 'all'
    ? partners
    : partners.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/afudu3.jpg)' }}
        />
        <div className="absolute inset-0 bg-blue-950/82" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-0.5 bg-green-500" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Collaboration &amp; Alliances</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
              Our Partners
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              Building strong collaborations with leading organizations to advance
              healthcare and promote rational medicine use across Kenya and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logo Strip */}
      <section className="bg-blue-900 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Our Partner Network</span>
        </div>
        <div className="overflow-hidden">
          <div className="logo-marquee flex items-center gap-8 px-8">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex items-center justify-center w-28 h-28 flex-shrink-0 rounded-xl bg-white shadow-sm p-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      const fb = document.createElement('span');
                      fb.className = 'text-blue-900 font-bold text-sm';
                      fb.textContent = partner.logoFallback;
                      parent.appendChild(fb);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">Collaboration</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-blue-950 uppercase mb-2">Why Partner With Us</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Our partnerships create mutual value and amplify our collective impact</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Enhanced Reach', desc: 'Our partnerships enable us to reach more communities and healthcare facilities across Kenya.' },
              { title: 'Shared Expertise', desc: 'Collaborating with diverse organizations brings specialized knowledge and skills to our programs.' },
              { title: 'Resource Mobilization', desc: 'Partnerships help us leverage additional resources for greater impact and sustainability.' },
              { title: 'Policy Influence', desc: 'Working with government and international partners strengthens our advocacy and policy influence.' },
            ].map((b, i) => (
              <div key={b.title} className={`bg-white rounded-xl p-6 shadow-sm border-t-4 border-gray-100 ${i % 2 === 0 ? 'border-t-blue-700' : 'border-t-green-600'}`}>
                <h3 className="font-display text-base font-bold text-blue-950 uppercase mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-50 py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'text-gray-600 bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className={`bg-white rounded-xl shadow-sm border-l-4 ${partner.accent} border border-gray-100 p-7`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const fb = img.parentElement?.querySelector('[data-fb]');
                        if (fb) (fb as HTMLElement).style.display = 'flex';
                      }}
                    />
                    <span data-fb className="hidden w-full h-full items-center justify-center text-blue-900 font-bold text-sm">
                      {partner.logoFallback}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wider">{partner.partnershipType}</span>
                    <h3 className="font-semibold text-gray-900 text-sm mt-0.5">{partner.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {partner.focus}
                  </span>
                  {partner.website !== '#' && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-700 hover:text-blue-600 flex items-center gap-1"
                    >
                      Visit
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">How We Collaborate</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-blue-950 uppercase">Types of Partnerships</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategic Partnerships',
                desc: 'Long-term collaborations with international organizations to advance our mission and amplify our impact.',
                items: ['Joint program implementation', 'Resource mobilization', 'Knowledge sharing'],
                accent: 'border-blue-700',
                dot: 'bg-blue-700',
              },
              {
                title: 'Government Partnerships',
                desc: 'Collaboration with national and county government agencies to align with health priorities and policies.',
                items: ['Policy development support', 'Program implementation', 'Regulatory compliance'],
                accent: 'border-green-600',
                dot: 'bg-green-600',
              },
              {
                title: 'Professional Partnerships',
                desc: 'Working with professional associations and academic institutions to build capacity and drive excellence.',
                items: ['Workforce development', 'Research collaboration', 'Standards development'],
                accent: 'border-blue-500',
                dot: 'bg-blue-500',
              },
            ].map((pt) => (
              <div key={pt.title} className={`bg-white rounded-xl p-8 shadow-sm border-l-4 ${pt.accent} border border-gray-100`}>
                <h3 className="font-display text-lg font-bold text-blue-950 uppercase mb-3">{pt.title}</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{pt.desc}</p>
                <ul className="space-y-2">
                  {pt.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${pt.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-green-500" />
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Join Our Network</span>
            <span className="w-8 h-0.5 bg-green-500" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-4">Become Our Partner</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Join our network of partners working to transform healthcare in Kenya.
            Whether you are an organization, government agency, or academic institution,
            together we can create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200">
              Explore Partnership
            </a>
            <a href="/donate" className="px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wide rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200">
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partnerships;
