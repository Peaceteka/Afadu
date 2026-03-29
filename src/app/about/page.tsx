'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'history', label: 'History' },
    { id: 'team', label: 'Our Team' },
    { id: 'impact', label: 'Our Impact' }
  ];

  const content = {
    mission: {
      title: 'Our Mission',
      content: [
        'AFADU is dedicated to promoting the rational use of medicines to improve healthcare systems across Kenya.',
        'We work tirelessly to ensure every Kenyan has access to safe, effective, and quality medicines while combating antimicrobial resistance.',
        'Through innovative programs, strategic partnerships, and community engagement, we\'re building a healthier future for all Kenyans through responsible medicine practices.'
      ]
    },
    history: {
      title: 'Our History',
      content: [
        'Founded in 2010, AFADU began as a small group of healthcare professionals concerned about the growing threat of antimicrobial resistance.',
        'Over the past decade, we have grown from a local initiative to a nationally recognized organization working in all 47 counties.',
        'Our journey has been marked by successful partnerships with government agencies, healthcare institutions, and community organizations.',
        'Today, AFADU stands as a leading voice for rational medicine use in Kenya, influencing policy and implementing effective programs nationwide.'
      ]
    },
    team: {
      title: 'Our Team',
      content: [
        'Our diverse team brings together healthcare professionals, researchers, community organizers, and policy experts.',
        'Led by experienced pharmacists and public health specialists, we combine scientific expertise with practical community knowledge.',
        'Our board includes representatives from various healthcare sectors, ensuring comprehensive oversight and strategic direction.',
        'With over 50 staff members and 200 volunteers, we have the capacity to implement programs at scale across Kenya.'
      ]
    },
    impact: {
      title: 'Our Impact',
      content: [
        'Reached over 1 million Kenyans with health education and awareness programs.',
        'Trained more than 5,000 healthcare workers on rational medicine use and AMR stewardship.',
        'Established medicine access programs in 200+ health facilities across all counties.',
        'Influenced national policy on antimicrobial resistance and essential medicine lists.',
        'Built partnerships with 50+ organizations including government agencies, NGOs, and private sector companies.'
      ]
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About AFADU
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, history, and the team behind Kenya's healthcare transformation
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {content[activeTab as keyof typeof content].title}
          </h2>
          
          <div className="space-y-4">
            {content[activeTab as keyof typeof content].content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Join Our Mission
            </h3>
            <p className="text-blue-700 mb-4">
              Together, we can make a difference in healthcare across Kenya. Whether you\'re a healthcare professional, 
              community leader, or concerned citizen, there\'s a role for you in promoting rational medicine use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/donate" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Support Our Work
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">47</div>
            <div className="text-gray-600">Counties Reached</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5,000+</div>
            <div className="text-gray-600">Health Workers Trained</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
            <div className="text-gray-600">Lives Impacted</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
