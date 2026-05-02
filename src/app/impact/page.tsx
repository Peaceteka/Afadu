'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    const targetValues = {
      years: 18,
      counties: 47,
      healthWorkers: 5000,
      livesImpacted: 1000000,
      facilities: 200,
      programs: 7
    };

    const duration = 2000;
    const steps = 60;
    const increment = {
      years: targetValues.years / steps,
      counties: targetValues.counties / steps,
      healthWorkers: targetValues.healthWorkers / steps,
      livesImpacted: targetValues.livesImpacted / steps,
      facilities: targetValues.facilities / steps,
      programs: targetValues.programs / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        years: Math.min(Math.floor(increment.years * currentStep), targetValues.years),
        counties: Math.min(Math.floor(increment.counties * currentStep), targetValues.counties),
        healthWorkers: Math.min(Math.floor(increment.healthWorkers * currentStep), targetValues.healthWorkers),
        livesImpacted: Math.min(Math.floor(increment.livesImpacted * currentStep), targetValues.livesImpacted),
        facilities: Math.min(Math.floor(increment.facilities * currentStep), targetValues.facilities),
        programs: Math.min(Math.floor(increment.programs * currentStep), targetValues.programs)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      title: "National Leadership in RUM",
      description: "Established AFADU as the leading organization in Rational Use of Medicines in Kenya, shaping national policies and guidelines.",
      icon: "🏆",
      impact: "Policy Influence"
    },
    {
      title: "AMR Containment Programs",
      description: "Successfully implemented antimicrobial stewardship programs across multiple counties, reducing inappropriate antibiotic use.",
      icon: "🦠",
      impact: "AMR Reduction"
    },
    {
      title: "Health System Strengthening",
      description: "Strengthened pharmaceutical supply chains and improved medicine management systems in healthcare facilities.",
      icon: "⚕️",
      impact: "System Improvement"
    },
    {
      title: "Community Health Education",
      description: "Reached over 1 million community members with education on safe and appropriate medicine use.",
      icon: "🏘️",
      impact: "Community Outreach"
    },
    {
      title: "Healthcare Worker Training",
      description: "Trained and capacitated over 5,000 healthcare workers on rational medicine use and pharmaceutical care.",
      icon: "👨‍⚕️",
      impact: "Capacity Building"
    },
    {
      title: "Research and Evidence Generation",
      description: "Conducted operational research and generated evidence to inform policy and practice improvements.",
      icon: "📊",
      impact: "Evidence-Based Practice"
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
      content: "The AMR stewardship program provided by AFADU has helped us reduce antibiotic resistance in our facility significantly.",
      location: "Mombasa County"
    },
    {
      name: "Mary Wanjiku",
      role: "Community Health Volunteer",
      content: "AFADU empowered us with knowledge to educate our communities on proper medicine use. Lives have been saved.",
      location: "Rift Valley"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-5 rounded-full mb-6">
                <span className="text-4xl">📈</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Impact
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transforming healthcare across Kenya through measurable results, 
              sustainable programs, and lasting community impact
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Main Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to healthcare excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-slate-600 mb-4">{counters.years}+</div>
              <div className="text-xl text-gray-700 font-medium">Years of Experience</div>
              <p className="text-gray-600 mt-3">Leading healthcare transformation since 2008</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-green-600 mb-4">{counters.counties}</div>
              <div className="text-xl text-gray-700 font-medium">Counties Reached</div>
              <p className="text-gray-600 mt-3">Nationwide coverage across Kenya</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-purple-600 mb-4">{counters.healthWorkers.toLocaleString()}+</div>
              <div className="text-xl text-gray-700 font-medium">Health Workers Trained</div>
              <p className="text-gray-600 mt-3">Building capacity for better healthcare</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-orange-600 mb-4">{(counters.livesImpacted / 1000000).toFixed(1)}M+</div>
              <div className="text-xl text-gray-700 font-medium">Lives Impacted</div>
              <p className="text-gray-600 mt-3">Direct and indirect beneficiaries reached</p>
            </div>
            <div className="text-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-red-600 mb-4">{counters.facilities}+</div>
              <div className="text-xl text-gray-700 font-medium">Health Facilities</div>
              <p className="text-gray-600 mt-3">Strengthened healthcare facilities</p>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-slate-600 mb-4">{counters.programs}</div>
              <div className="text-xl text-gray-700 font-medium">Program Areas</div>
              <p className="text-gray-600 mt-3">Comprehensive healthcare interventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our major accomplishments in advancing rational medicine use and healthcare systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-4">
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Voices of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our partners and beneficiaries say about our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-blue-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Our Impact
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join us in our mission to transform healthcare across Kenya. 
            Whether you're a donor, partner, or healthcare professional, 
            together we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate" 
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Support Our Work
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Impact;
