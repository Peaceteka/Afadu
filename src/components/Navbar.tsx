'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Slim announcement bar */}
      <div className="bg-blue-950 text-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <p className="text-xs text-blue-300 tracking-wide">
            Championing universal access to quality-assured medicines across Kenya
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-blue-300">afadu.org@gmail.com</span>
            <div className="flex items-center gap-2.5">
              <a href="https://www.facebook.com/share/1QeKHGWUft/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-blue-400 hover:text-white transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/afadungo" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="text-blue-400 hover:text-white transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-blue-400 hover:text-white transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                src="/images/bglogo.png"
                alt="AFADU"
                className="h-20 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <a href="/" className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200">
                Home
              </a>
              <a href="/about" className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200">
                About Us
              </a>

              {/* Programs Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Programs
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="p-2">
                    <a href="/programs" className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      View All Programs
                    </a>
                    <a href="/programs#access" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      Medicines Access
                    </a>
                    <a href="/programs#amr" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      AMR Stewardship
                    </a>
                    <a href="/programs#training" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      Health Training
                    </a>
                    <a href="/programs#community" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      Community Health
                    </a>
                  </div>
                </div>
              </div>

              <a href="/impact" className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200">
                Impact
              </a>
              <a href="/partnerships" className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200">
                Partnerships
              </a>
              <a href="/leadership" className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200">
                Leadership
              </a>
            </div>

            {/* Right Side CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/donate"
                className="px-6 py-2.5 bg-green-600 text-white text-base font-semibold rounded-full hover:bg-green-700 transition-colors duration-200 shadow-sm"
              >
                Donate
              </a>
              <a
                href="/contact"
                className="px-6 py-2.5 text-base font-semibold text-blue-900 border-2 border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
          <div className="px-4 pt-3 pb-6 space-y-1 bg-white">
            <a href="/" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">Home</a>
            <a href="/about" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">About Us</a>
            <a href="/programs" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">Programs</a>
            <a href="/impact" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">Impact</a>
            <a href="/partnerships" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">Partnerships</a>
            <a href="/leadership" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150">Leadership</a>
            <div className="pt-2 flex flex-col gap-2">
              <a href="/donate" className="block text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-200">Donate</a>
              <a href="/contact" className="block text-center px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
