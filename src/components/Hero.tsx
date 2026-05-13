'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  
  const subtitles = [
    'Improving healthcare systems through responsible medicine practices and community empowerment',
    'Strengthening health systems and promoting access to quality medicines',
    'Building capacity for sustainable healthcare delivery across Kenya',
    'Combating antimicrobial resistance through education and stewardship',
    'Empowering communities with knowledge for better health outcomes',
    'Partnerships for sustainable healthcare solutions in Kenya'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % subtitles.length);
    }, 4000); // Change subtitle every 4 seconds

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-300 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-6000"></div>
      </div>
      
      {/* Hero Content with Card */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Hero Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="/images/heroimage.png" 
                    alt="AFADU Hero" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  {/* Decorative overlay */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
              
              {/* Hero Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                {/* AFADU Logo */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <img 
                    src="/images/Afadulogo.png" 
                    alt="AFADU Logo" 
                    className="h-20 w-auto drop-shadow-lg"
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  ACTION FOR APPROPRIATE DRUG USE (AFADU)
                </h1>
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
                  AFADU
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A healthy society with equitable access to safe quality-assured medicines that are used rationally, responsibly, and effectively to achieve optimal health and well-being.
                </p>
                
                {/* Animated subtitle */}
                <div className="mb-8 h-8">
                  <p className="text-lg text-gray-600 italic transition-all duration-500">
                    {subtitles[textIndex]}
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="/programs" 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-blue-700 border-2 border-blue-400"
                  >
                    Our Programs
                  </a>
                  <a 
                    href="/about" 
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-green-600 hover:to-green-700 border-2 border-green-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
