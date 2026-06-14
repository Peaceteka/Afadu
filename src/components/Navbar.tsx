'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Our Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/partnerships', label: 'Partnerships' },
    { href: '/leadership', label: 'Leadership' },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-40">

          {/* Logo — far left, large */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src="/images/bglogo.png"
              alt="AFADU"
              className="h-36 w-auto"
            />
          </a>

          {/* Desktop nav — far right, big & vibrant */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-bold text-blue-950 tracking-widest uppercase hover:text-blue-600 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/donate"
              className="ml-2 px-7 py-3 bg-green-600 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              Donate
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden ml-auto p-2 text-blue-950 hover:text-blue-600 transition-colors duration-150"
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-4 pt-3 pb-6 space-y-1 bg-white">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-base font-bold text-blue-950 uppercase tracking-widest hover:text-blue-600 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a href="/donate" className="block text-center px-6 py-3 bg-green-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-green-700 transition-colors duration-200 text-base">
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
