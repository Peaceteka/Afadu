'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
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
      years: 15,
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
      title: 'Access to Medicines',
      description: 'Ensuring equitable access to essential medicines through improved supply chains and distribution networks.',
      delay: 0
    },
    {
      icon: '🦠',
      title: 'AMR Stewardship',
      description: 'Combating antimicrobial resistance through education, surveillance, and responsible antibiotic use.',
      delay: 100
    },
    {
      icon: '👨‍⚕️',
      title: 'Health Worker Capacity',
      description: 'Building the skills and knowledge of healthcare professionals through training and continuous education.',
      delay: 200
    },
    {
      icon: '🏘️',
      title: 'Community Health',
      description: 'Empowering communities with health education and promoting rational medicine use at the grassroots level.',
      delay: 300
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
    { name: 'Ministry of Health', logo: 'MOH' },
    { name: 'WHO Kenya', logo: 'WHO' },
    { name: 'UNICEF', logo: 'UNICEF' },
    { name: 'CDC Foundation', logo: 'CDC' },
    { name: 'Bill & Melinda Gates', logo: 'BMGF' },
    { name: 'USAID', logo: 'USAID' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* About Snapshot Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About AFADU
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AFADU is dedicated to promoting the rational use of medicines to improve healthcare systems across Kenya. 
                We work tirelessly to ensure every Kenyan has access to safe, effective, and quality medicines while 
                combating antimicrobial resistance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through innovative programs, strategic partnerships, and community engagement, we're building a 
                healthier future for all Kenyans through responsible medicine practices.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/images/Afadulogo.png" 
                    alt="AFADU Logo" 
                    className="w-48 h-auto mx-auto mb-4"
                  />
                  <p className="text-gray-700 font-semibold">Advocacy for Rational Use of Medicines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Program Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four key focus areas driving our mission to promote rational medicine use across Kenya
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section id="impact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming healthcare through measurable results and sustainable change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{counters.years}+</div>
              <div className="text-xl text-blue-100">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{counters.counties}</div>
              <div className="text-xl text-blue-100">Counties Reached</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{counters.workers.toLocaleString()}+</div>
              <div className="text-xl text-blue-100">Health Workers Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partnerships" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to advance healthcare in Kenya
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs font-bold text-gray-600">{partner.logo}</span>
                  </div>
                  <span className="text-xs text-gray-600">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights/News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest news, research, and program updates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
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
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Become a Partner
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
