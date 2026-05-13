'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Bar for Social Links */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Follow Us:</span>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">Contact:</span> afadu.org@gmail.com | AFADU Website
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-40">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/images/bglogo.png" 
                alt="AFADU Logo" 
                className="h-32 w-auto filter drop-shadow-lg"
              />
            </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-2">
                <a href="/" className="group relative px-6 py-3 text-lg font-extrabold text-gray-900 hover:text-slate-700 transition-all duration-300 whitespace-nowrap">
                  <span className="relative z-10">HOME</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/about" className="group relative px-6 py-3 text-lg font-extrabold text-gray-900 hover:text-slate-700 transition-all duration-300 whitespace-nowrap">
                  <span className="relative z-10">ABOUT US</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <div className="relative group">
                  <button className="group relative px-6 py-3 text-lg font-extrabold text-gray-900 hover:text-slate-700 transition-all duration-300 flex items-center whitespace-nowrap">
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
                <a href="/impact" className="group relative px-6 py-3 text-lg font-extrabold text-gray-900 hover:text-slate-700 transition-all duration-300 whitespace-nowrap">
                  <span className="relative z-10">IMPACT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/partnerships" className="group relative px-6 py-3 text-lg font-extrabold text-gray-900 hover:text-slate-700 transition-all duration-300 whitespace-nowrap">
                  <span className="relative z-10">PARTNERSHIPS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="/leadership" className="group relative px-6 py-3 text-lg font-extrabold text-gray-900 hover:text-slate-700 transition-all duration-300 whitespace-nowrap">
                  <span className="relative z-10">LEADERSHIP</span>
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
                  className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-green-400"
                >
                  DONATE
                </a>
                
                {/* Contact Button */}
                <a href="/contact" className="group relative px-6 py-3 text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-400">
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
          <a href="/" className="block px-4 py-3 text-lg font-extrabold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">HOME</a>
          <a href="/about" className="block px-4 py-3 text-lg font-extrabold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">ABOUT US</a>
          <a href="/programs" className="block px-4 py-3 text-lg font-extrabold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">PROGRAMS</a>
          <a href="/impact" className="block px-4 py-3 text-lg font-extrabold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">IMPACT</a>
          <a href="/partnerships" className="block px-4 py-3 text-lg font-extrabold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">PARTNERSHIPS</a>
          <a href="/leadership" className="block px-4 py-3 text-lg font-extrabold text-gray-900 hover:bg-slate-50 hover:text-slate-700 rounded-lg transition-colors duration-200">LEADERSHIP</a>
          <a href="/contact" className="block px-4 py-3 text-base font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors duration-200">CONTACT</a>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
