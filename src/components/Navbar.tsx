'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img 
                src="/images/Afadulogo.png" 
                alt="AFADU Logo" 
                className="h-20 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-2">
                <a href="/" className="group relative px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-700 transition-all duration-300">
                  <span className="relative z-10">HOME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/about" className="group relative px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-700 transition-all duration-300">
                  <span className="relative z-10">ABOUT US</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/leadership" className="group relative px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-700 transition-all duration-300">
                  <span className="relative z-10">LEADERSHIP</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <div className="relative group">
                  <button className="group relative px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-700 transition-all duration-300 flex items-center">
                    <span className="relative z-10">PROGRAMS</span>
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      <a href="/programs" className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200">View All Programs</a>
                      <a href="/programs#access" className="block px-6 py-3 text-sm text-gray-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200">Medicines Access</a>
                      <a href="/programs#amr" className="block px-6 py-3 text-sm text-gray-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200">AMR Stewardship</a>
                      <a href="/programs#training" className="block px-6 py-3 text-sm text-gray-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200">Health Training</a>
                      <a href="/programs#community" className="block px-6 py-3 text-sm text-gray-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200">Community Health</a>
                    </div>
                  </div>
                </div>
                <a href="/impact" className="group relative px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-700 transition-all duration-300">
                  <span className="relative z-10">IMPACT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/partnerships" className="group relative px-6 py-3 text-sm font-bold text-gray-900 hover:text-slate-700 transition-all duration-300">
                  <span className="relative z-10">PARTNERSHIPS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              
              {/* Right Side Elements */}
              <div className="flex items-center space-x-4 ml-8">
                {/* Search Bar */}
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-48 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all duration-300 group-hover:border-slate-400"
                  />
                  <svg className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 group-hover:text-slate-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                {/* Donate Button */}
                <a 
                  href="/donate" 
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  DONATE
                </a>
                
                {/* Contact Button */}
                <a href="/contact" className="group relative px-6 py-3 text-sm font-bold bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span className="relative z-10">CONTACT</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-slate-700 hover:bg-slate-50 transition-colors duration-200"
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
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
          <a href="/" className="block px-4 py-3 text-base font-bold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">HOME</a>
          <a href="/about" className="block px-4 py-3 text-base font-bold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">ABOUT US</a>
          <a href="/leadership" className="block px-4 py-3 text-base font-bold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">LEADERSHIP</a>
          <a href="/programs" className="block px-4 py-3 text-base font-bold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">PROGRAMS</a>
          <a href="/impact" className="block px-4 py-3 text-base font-bold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">IMPACT</a>
          <a href="/partnerships" className="block px-4 py-3 text-base font-bold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">PARTNERSHIPS</a>
          <a href="/contact" className="block px-4 py-3 text-base font-bold bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg hover:from-slate-700 hover:to-gray-700 transition-colors duration-200">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
