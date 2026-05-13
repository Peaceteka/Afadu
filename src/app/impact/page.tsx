'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const Impact = () => {
  const [counters, setCounters] = useState({
    years: 0,
    counties: 0,
    healthWorkers: 0,
    livesImpacted: 0,
    facilities: 0,
    programs: 0
  });

  useEffect(() => {
    const targetCounters = {
      years: 18,
      counties: 47,
      healthWorkers: 5000,
      livesImpacted: 1000000,
      facilities: 200,
      programs: 7
    };

    const duration = 2000;
    const steps = 50;
    const increment = {
      years: targetCounters.years / steps,
      counties: targetCounters.counties / steps,
      healthWorkers: targetCounters.healthWorkers / steps,
      livesImpacted: targetCounters.livesImpacted / steps,
      facilities: targetCounters.facilities / steps,
      programs: targetCounters.programs / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        years: Math.min(Math.floor(increment.years * currentStep), targetCounters.years),
        counties: Math.min(Math.floor(increment.counties * currentStep), targetCounters.counties),
        healthWorkers: Math.min(Math.floor(increment.healthWorkers * currentStep), targetCounters.healthWorkers),
        livesImpacted: Math.min(Math.floor(increment.livesImpacted * currentStep), targetCounters.livesImpacted),
        facilities: Math.min(Math.floor(increment.facilities * currentStep), targetCounters.facilities),
        programs: Math.min(Math.floor(increment.programs * currentStep), targetCounters.programs)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      title: "Strong Government Collaboration",
      description: "AFADU maintains strong working relationships with Ministry of Health, County Departments of Health, regulatory authorities, and national technical working groups.",
      icon: "🏛️",
      impact: "Policy Partnership"
    },
    {
      title: "Technical Excellence",
      description: "The organization possesses deep expertise in pharmaceuticals, AMR stewardship, public health systems, health policy analysis, monitoring & evaluation, operational research, and digital health solutions.",
      icon: "🎯",
      impact: "Technical Leadership"
    },
    {
      title: "Proven National Implementation Capacity",
      description: "AFADU has successfully implemented large-scale public health campaigns, national medicine use interventions, health worker capacity building programmes, community engagement initiatives, and county health systems strengthening projects.",
      icon: "🏆",
      impact: "National Scale Implementation"
    },
    {
      title: "Strong Monitoring & Evaluation Systems",
      description: "The organization applies results-based management, performance tracking systems, evidence-driven implementation, and adaptive learning approaches.",
      icon: "📊",
      impact: "Results-Based Management"
    },
    {
      title: "Rapid Technical Mobilization",
      description: "AFADU can rapidly deploy multidisciplinary expert teams including pharmacists, clinicians, epidemiologists, public health specialists, researchers, and community health experts.",
      icon: "⚡",
      impact: "Rapid Response Capacity"
    },
    {
      title: "Institutional Capability",
      description: "AFADU has established itself as a trusted technical leader in pharmaceutical systems strengthening and public health programming in Kenya.",
      icon: "🏢",
      impact: "Trusted Leadership"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Jane Mwangi",
      role: "County Health Director",
      content: "AFADU's training programs have transformed how our healthcare providers approach medicine use. The impact has been remarkable.",
      location: "Nairobi County"
    },
    {
      name: "John Kamau",
      role: "Pharmacist",
      content: "The AMR stewardship program has significantly improved antibiotic prescribing practices in our facility. We're seeing real results.",
      location: "Kiambu County"
    },
    {
      name: "Mary Wanjiku",
      role: "Community Health Volunteer",
      content: "AFADU's community education programs have empowered our community with knowledge about safe medicine use.",
      location: "Nakuru County"
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
                <span className="text-4xl">📈</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Our Impact
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transforming healthcare across Kenya through measurable results, 
              sustainable programs, and lasting community impact
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Main Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to healthcare excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
              <div className="text-6xl font-bold text-blue-600 mb-4">{counters.years}+</div>
              <div className="text-xl text-gray-700 font-medium">Years of Experience</div>
              <p className="text-gray-600 mt-3">Leading healthcare transformation since 2008</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-200">
              <div className="text-6xl font-bold text-green-600 mb-4">{counters.counties}</div>
              <div className="text-xl text-gray-700 font-medium">Counties Reached</div>
              <p className="text-gray-600 mt-3">Nationwide coverage across Kenya</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
              <div className="text-6xl font-bold text-blue-600 mb-4">{counters.healthWorkers.toLocaleString()}+</div>
              <div className="text-xl text-gray-700 font-medium">Health Workers Trained</div>
              <p className="text-gray-600 mt-3">Building capacity nationwide</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-200">
              <div className="text-6xl font-bold text-green-600 mb-4">{counters.livesImpacted.toLocaleString()}+</div>
              <div className="text-xl text-gray-700 font-medium">Lives Impacted</div>
              <p className="text-gray-600 mt-3">Direct and indirect beneficiaries</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
              <div className="text-6xl font-bold text-blue-600 mb-4">{counters.facilities}+</div>
              <div className="text-xl text-gray-700 font-medium">Health Facilities</div>
              <p className="text-gray-600 mt-3">Strengthened healthcare facilities</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
              <div className="text-6xl font-bold text-slate-600 mb-4">{counters.programs}</div>
              <div className="text-xl text-gray-700 font-medium">Program Areas</div>
              <p className="text-gray-600 mt-3">Comprehensive healthcare interventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Institutional Capability & Achievements
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Technical excellence and proven track record that drive our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mr-4">
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">
                      {achievement.impact}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Voices of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our partners and beneficiaries say about our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200">
                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mr-3">
                      <span className="text-xl">👤</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
