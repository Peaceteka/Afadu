const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/Afadulogo.png" 
                alt="AFADU Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Action for Appropriate Drug Use (AFADU) - Promoting rational, safe, and equitable use of medicines for a healthy Kenyan society.
            </p>
            <div className="mb-4">
              <p className="text-blue-300 font-medium italic">
                "Promoting Rational Medicine Use for Better Health Outcomes"
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1QeKHGWUft/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/afadungo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="mailto:afadu.org@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://afadu.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h3>
            <ul className="space-y-2">
              <a href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">About Us</a>
              <a href="/leadership" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Leadership</a>
              <a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Our Programs</a>
              <a href="/impact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Impact</a>
              <a href="/partnerships" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Partnerships</a>
              <a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contact</a>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">Phone: Available on request</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">afadu.org@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">P.O. Box 10390 – 0100, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Key Institutional Highlights</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-2xl">🏛️</span>
                <span className="text-sm font-medium">Established in 2008</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-2xl">🗺️</span>
                <span className="text-sm font-medium">National NGO operating in all 47 Counties</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-2xl">👑</span>
                <span className="text-sm font-medium">National leader in Rational Use of Medicines</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-2xl">🦠</span>
                <span className="text-sm font-medium">Strong AMR stewardship expertise</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-2xl">🤝</span>
                <span className="text-sm font-medium">Strong partnerships with MOH & global actors</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-2xl">📊</span>
                <span className="text-sm font-medium">Evidence-driven and policy-oriented</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-2xl">👥</span>
                <span className="text-sm font-medium">Community-centered and systems-focused</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-2xl">🏗️</span>
                <span className="text-sm font-medium">Proven national implementation capacity</span>
              </div>
            </div>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} AFADU. All rights reserved. | 
            <a href="#" className="hover:text-green-400 transition-colors duration-200"> Privacy Policy</a> | 
            <a href="#" className="hover:text-blue-400 transition-colors duration-200"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
