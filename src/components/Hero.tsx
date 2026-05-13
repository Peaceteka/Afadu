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
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image with Animated Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/boardroom.png)' }}
      >
        {/* Smooth fade gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 via-green-500/50 to-blue-700/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-500/10 to-blue-600/20"></div>
        
        {/* Subtle fade brand color accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/80 via-blue-600/80 to-green-500/80"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/80 via-green-500/80 to-blue-600/80"></div>
        
        {/* Gentle floating elements with fade */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-green-500/40 rounded-full opacity-40"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-blue-600/40 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-14 h-14 bg-green-400/40 rounded-full opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-blue-500/40 rounded-full opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
                    
                    
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-32">
            <a 
              href="/partnerships" 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:from-green-600 hover:to-green-700 border-2 border-green-400"
            >
              Partner With Us
            </a>
            <a 
              href="/programs" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:from-blue-600 hover:to-blue-700 border-2 border-blue-400"
            >
              Our Programs
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
