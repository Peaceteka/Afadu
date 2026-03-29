'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img 
                src="/images/Afadulogo.png" 
                alt="AFADU Logo" 
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Programs
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 w-48">
                  <a href="/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">View All Programs</a>
                  <a href="/programs#access" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Medicines Access</a>
                  <a href="/programs#amr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">AMR Stewardship</a>
                  <a href="/programs#training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Health Training</a>
                  <a href="/programs#community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Community Health</a>
                </div>
              </div>
              <a href="#impact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Impact</a>
              <a href="#partnerships" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Partnerships</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
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
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="/home" className="text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
              <a href="/programs" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Impact</a>
              <a href="#partnerships" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Partnerships</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
