'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Partnerships = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Partners', icon: '🤝' },
    { id: 'international', label: 'International', icon: '🌍' },
    { id: 'government', label: 'Government', icon: '🏛️' },
    { id: 'academic', label: 'Academic', icon: '🎓' },
    { id: 'professional', label: 'Professional', icon: '⚕️' }
  ];

  const partners = [
    {
      id: 'react-africa',
      name: 'ReAct Africa',
      category: 'international',
      website: 'https://www.reactgroup.org/africa/',
      description: 'Action on Antibiotic Resistance - A global network working to contain antimicrobial resistance through coordinated action.',
      logo: '/images/reactuafrica.png',
      logoFallback: '🌍',
      partnershipType: 'Strategic Partner',
      focus: 'AMR Containment'
    },
    {
      id: 'corsum',
      name: 'CoRSUM',
      category: 'international',
      website: 'http://corsum.org/',
      description: 'Coalition for Rational and Safe Use of Medicines - Working globally to promote safe and rational medicine use.',
      logo: '/images/corsum.png',
      logoFallback: '💊',
      partnershipType: 'Strategic Partner',
      focus: 'Medicine Safety'
    },
    {
      id: 'hifa',
      name: 'HIFA',
      category: 'international',
      website: 'https://www.hifa.org/',
      description: 'Health Information For All - Global campaign working towards a world where every person has access to essential healthcare information.',
      logo: '/images/hifa.png',
      logoFallback: '📚',
      partnershipType: 'Knowledge Partner',
      focus: 'Health Information'
    },
    {
      id: 'moh-kenya',
      name: 'Ministry of Health Kenya',
      category: 'government',
      website: '#',
      description: 'Kenya\'s national health authority responsible for healthcare policy, regulation, and service delivery.',
      logo: '/images/moh.png',
      logoFallback: '🏛️',
      partnershipType: 'Government Partner',
      focus: 'Health Policy'
    },
    {
      id: 'ppb',
      name: 'Pharmacy and Poisons Board',
      category: 'government',
      website: 'https://web.pharmacyboardkenya.org/',
      description: 'National regulatory authority for medicines and pharmacy practice in Kenya.',
      logo: '/images/ppb.png',
      logoFallback: '⚗️',
      partnershipType: 'Regulatory Partner',
      focus: 'Medicine Regulation'
    },
    {
      id: 'chak',
      name: 'Christian Health Association of Kenya',
      category: 'government',
      website: 'https://www.chak.or.ke/',
      description: 'National umbrella organization for faith-based health facilities in Kenya.',
      logo: '/images/chaok.jpeg',
      logoFallback: '⛪',
      partnershipType: 'Implementation Partner',
      focus: 'Health Service Delivery'
    },
    {
      id: 'psk',
      name: 'Pharmaceutical Society of Kenya',
      category: 'professional',
      website: '#',
      description: 'Professional body representing pharmacists in Kenya, promoting excellence in pharmacy practice.',
      logo: '/images/psko.jpeg',
      logoFallback: '👨‍⚕️',
      partnershipType: 'Professional Partner',
      focus: 'Pharmacy Practice'
    },
    {
      id: 'kpa',
      name: 'Kenya Pharmaceutical Association',
      category: 'professional',
      website: '#',
      description: 'Association representing pharmaceutical professionals and industry stakeholders in Kenya.',
      logo: '/images/kpa.png',
      logoFallback: '💼',
      partnershipType: 'Professional Partner',
      focus: 'Pharmaceutical Industry'
    },
    {
      id: 'universities',
      name: 'Universities & Tertiary Colleges',
      category: 'academic',
      website: '#',
      description: 'Partner institutions training various cadres of health workers across Kenya.',
      logo: 'https://www.heafkenya.org/images/heaf-logo.png',
      logoFallback: '🎓',
      partnershipType: 'Academic Partner',
      focus: 'Health Workforce Training'
    }
  ];

  // Featured partners for showcase
  const featuredPartners = [partners[0], partners[1], partners[3], partners[4]];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const partnershipBenefits = [
    {
      title: "Enhanced Reach",
      description: "Our partnerships enable us to reach more communities and healthcare facilities across Kenya.",
      icon: "📈"
    },
    {
      title: "Shared Expertise",
      description: "Collaborating with diverse organizations brings specialized knowledge and skills to our programs.",
      icon: "🧠"
    },
    {
      title: "Resource Mobilization",
      description: "Partnerships help us leverage additional resources for greater impact and sustainability.",
      icon: "💰"
    },
    {
      title: "Policy Influence",
      description: "Working with government and international partners strengthens our advocacy and policy influence.",
      icon: "🏛️"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Logo Background with Thematic Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/logo1.png" 
            alt="AFADU Logo Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-green-900/60 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6 animate-bounce">
                <span className="text-4xl">🤝</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Our Partners
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Building strong collaborations with leading organizations to advance 
              healthcare and promote rational medicine use across Kenya and beyond
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Featured Partners Logos */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-500">
              Trusted collaborations with leading organizations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {filteredPartners.length > 0 ? (
              filteredPartners.map((partner) => (
                <div key={partner.id} className="flex flex-col items-center justify-center group">
                  <div className="w-32 h-32 flex items-center justify-center mb-6 bg-white rounded-full shadow-md border-2 border-gray-200 overflow-hidden group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          const fallback = document.createElement('span');
                          fallback.className = 'text-5xl';
                          fallback.textContent = partner.logoFallback;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-center font-semibold text-gray-800 text-sm">{partner.name}</h3>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                No partners found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our partnerships create mutual value and amplify our collective impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-green-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Collaborating with diverse organizations to achieve our shared mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl shadow-lg border border-blue-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mr-4 flex-shrink-0 border-2 border-blue-200 overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallback = (e.target as HTMLImageElement).parentElement?.querySelector('[data-fallback]');
                        if (fallback) (fallback as HTMLElement).style.display = 'block';
                      }}
                    />
                    <span data-fallback className="text-2xl">{partner.logoFallback}</span>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">
                      {partner.partnershipType}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                    {partner.focus}
                  </span>
                  {partner.website !== '#' && (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      Visit
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We engage in various forms of collaboration to maximize our impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-slate-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Partnerships</h3>
              <p className="text-gray-600 mb-4">Long-term collaborations with international organizations to advance our mission and amplify our impact.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Joint program implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Resource mobilization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Knowledge sharing
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Government Partnerships</h3>
              <p className="text-gray-600 mb-4">Collaboration with national and county government agencies to align with health priorities and policies.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Policy development support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Program implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Regulatory compliance
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-slate-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Partnerships</h3>
              <p className="text-gray-600 mb-4">Working with professional associations and academic institutions to build capacity and drive excellence.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Workforce development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Research collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Standards development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our network of partners working to transform healthcare in Kenya. 
            Whether you're an organization, government agency, or academic institution, 
            together we can create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Partnership
            </a>
            <a 
              href="/donate" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
            >
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
