'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import Footer from '@/components/Footer';

export default function Home() {
  const [counters, setCounters] = useState({
    years: 0,
    counties: 0,
    workers: 0
  });

  useEffect(() => {
    const targetValues = {
      years: 18,
      counties: 47,
      workers: 5000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      years: targetValues.years / steps,
      counties: targetValues.counties / steps,
      workers: targetValues.workers / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        years: Math.min(Math.floor(increment.years * currentStep), targetValues.years),
        counties: Math.min(Math.floor(increment.counties * currentStep), targetValues.counties),
        workers: Math.min(Math.floor(increment.workers * currentStep), targetValues.workers)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const programs = [
    {
      icon: '💊',
      title: 'Access to Essential & Life-Saving Medicines',
      description: 'Ensuring consistent access to safe, effective, affordable, and quality medicines through strengthened supply chains, stock management, and last-mile delivery systems.',
      delay: 0
    },
    {
      icon: '🦠',
      title: 'Antimicrobial Resistance (AMR) Stewardship',
      description: 'Delivering high-impact system-oriented interventions to contain AMR through clinical stewardship, surveillance, community education, and policy support.',
      delay: 100
    },
    {
      icon: '👨‍⚕️',
      title: 'Health Workers Education & Capacity Building',
      description: 'Building practical, system-integrated capacity development programs combining skills transfer, mentorship, and continuous learning for healthcare providers.',
      delay: 200
    },
    {
      icon: '🏘️',
      title: 'Public Health Education & Community Engagement',
      description: 'Promoting health literacy through mass campaigns, AMR education, school programs, media advocacy, and behavior change communication.',
      delay: 300
    },
    {
      icon: '📊',
      title: 'Evidence Generation & Policy Support',
      description: 'Generating and applying health systems evidence through medicine utilization surveys, operational research, and technical policy support.',
      delay: 400
    },
    {
      icon: '🤝',
      title: 'Integrated Primary & Community Health Programs',
      description: 'Complementing national health strategies through CHV training, outreach programs, NCD screening, and MNCAH education.',
      delay: 500
    },
    {
      icon: '🚫',
      title: 'Interventions against Alcohol & Substance Abuse',
      description: 'Implementing comprehensive strategies to reduce demand, availability, and harmful consequences of substance abuse through education and treatment support.',
      delay: 600
    }
  ];

  const insights = [
    {
      title: 'New AMR Guidelines Released',
      excerpt: 'Kenya launches comprehensive guidelines for antimicrobial stewardship in healthcare facilities.',
      date: 'March 15, 2024',
      category: 'Policy'
    },
    {
      title: 'Health Worker Training Success',
      excerpt: 'Over 500 healthcare workers complete our rational medicine use training program.',
      date: 'March 10, 2024',
      category: 'Training'
    },
    {
      title: 'Community Outreach Impact',
      excerpt: 'Our community health initiative reaches 10,000+ households with medicine education.',
      date: 'March 5, 2024',
      category: 'Community'
    }
  ];

  const partners = [
    { name: 'ReAct Africa', website: 'https://www.reactgroup.org/africa/' },
    { name: 'CoRSUM', website: 'http://corsum.org/' },
    { name: 'HIFA', website: 'https://www.hifa.org/' },
    { name: 'Ministry of Health Kenya', website: '#' },
    { name: 'Pharmacy & Poisons Board', website: 'https://web.pharmacyboardkenya.org/' },
    { name: 'Christian Health Association of Kenya', website: 'https://www.chak.or.ke/' },
    { name: 'Pharmaceutical Society of Kenya', website: '#' },
    { name: 'Kenya Pharmaceutical Association', website: '#' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Snapshot Section */}
      <section id="about" className="py-20 relative">
        {/* Vibrant AFADU Brand Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
          {/* Animated brand color overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/30 via-green-500/20 to-blue-600/30 animate-pulse"></div>
          </div>
          
          {/* Vibrant decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-300 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-6000"></div>
          
          {/* Dynamic brand color borders */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-600 to-green-500 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 animate-pulse animation-delay-1000"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Action for Appropriate Drug Use (AFADU) is a Kenyan non-profit, non-political, and non-racial organization established in 2008 by a team of distinguished medical doctors, pharmacists, public health specialists, and health systems experts.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over 18 years, AFADU has been at the forefront of Rational Use of Medicines (RUM) in Kenya—leading interventions, shaping policy, strengthening systems, and empowering communities with vital knowledge for safe, effective, and affordable medicine use.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                AFADU was established as a strategic response to systemic public health challenges including inappropriate medicine use, antimicrobial resistance, and structural weaknesses within health systems.
              </p>
              <a href="/about" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-blue-400">
                Learn More About Us
              </a>
            </div>
            <div className="relative">
              <div className="w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/images/Afadulogo.png" 
                    alt="AFADU Logo" 
                    className="w-48 h-auto mx-auto mb-4 drop-shadow-lg"
                  />
                  <p className="text-gray-700 font-semibold drop-shadow-md">A healthy society characterized by the rational, safe, and equitable use of medicines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
      <section id="programs" className="py-20 relative">
        {/* AFADU theme gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
          <div className="absolute inset-0 opacity-8">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/15 via-green-500/10 to-blue-600/15"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programmatic Interventions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Seven strategic focus areas driving our mission to promote rational medicine use and strengthen health systems across Kenya
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                icon={program.icon}
                title={program.title}
                description={program.description}
                delay={program.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section id="impact" className="py-20 relative text-white">
        {/* Logo Background and Watermark */}
        <div className="absolute inset-0">
          <img 
            src="/images/logo1.png" 
            alt="AFADU Logo Background" 
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-green-500/10 to-blue-600/20"></div>
        </div>
        
        {/* Very subtle decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-green-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-blue-600/20 rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming healthcare through measurable results and sustainable change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">18+</div>
              <div className="text-xl text-blue-100">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">47</div>
              <div className="text-xl text-blue-100">Counties Reached</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <div className="text-xl text-blue-100">Health Workers Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partnerships" className="py-20 relative">
        {/* Logo Background and Watermark */}
        <div className="absolute inset-0">
          <img 
            src="/images/logo1.png" 
            alt="AFADU Logo Background" 
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/15 to-blue-600/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Collaborating with leading organizations to advance healthcare in Kenya
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img 
                      src="/images/afudu1.webp" 
                      alt={partner.name} 
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-xs font-bold text-blue-600 hidden">AF</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights/News Section */}
      <section className="py-20 relative">
        {/* AFADU theme gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
          <div className="absolute inset-0 opacity-8">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/15 via-blue-500/10 to-green-600/15"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay updated with our latest news, research, and program updates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-100">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-gradient-to-r from-green-100 to-green-200 rounded-full">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{insight.date}</span>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Partner With Us for a Healthier Kenya
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're a donor, government agency, or community organization, 
            together we can make a lasting impact on healthcare in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/partnerships" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 border-2 border-green-400">
              Partner With Us
            </a>
            <a href="/programs" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border-2 border-blue-400">
              Our Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
