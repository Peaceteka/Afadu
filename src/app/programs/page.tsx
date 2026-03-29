'use client';

import { useState } from 'react';
import ProgramCard from '@/components/ProgramCard';
import Navbar from '@/components/Navbar';

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'access', label: 'Medicines Access' },
    { id: 'amr', label: 'AMR Stewardship' },
    { id: 'training', label: 'Health Training' },
    { id: 'community', label: 'Community Health' }
  ];

  const allPrograms = [
    {
      id: 1,
      title: 'Essential Medicines Program',
      description: 'Improving access to quality essential medicines in rural and underserved communities across Kenya.',
      icon: '💊',
      category: 'access',
      features: ['Medicine Distribution', 'Quality Assurance', 'Supply Chain Management'],
      impact: 'Reached 200+ health facilities',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Antimicrobial Resistance Initiative',
      description: 'Combating AMR through surveillance, education, and stewardship programs nationwide.',
      icon: '🦠',
      category: 'amr',
      features: ['Laboratory Testing', 'Surveillance Systems', 'Healthcare Worker Training'],
      impact: 'Trained 1,000+ professionals',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Health Worker Capacity Building',
      description: 'Enhancing skills and knowledge of healthcare professionals in rational medicine use.',
      icon: '👥',
      category: 'training',
      features: ['Training Workshops', 'Mentorship Programs', 'Certification Courses'],
      impact: '5,000+ workers trained',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Community Health Education',
      description: 'Empowering communities with knowledge for better health outcomes and medicine practices.',
      icon: '🏘',
      category: 'community',
      features: ['School Programs', 'Community Outreach', 'Public Awareness Campaigns'],
      impact: 'Reached 500,000+ people',
      status: 'Active'
    },
    {
      id: 5,
      title: 'Maternal and Child Health',
      description: 'Ensuring safe and effective medicine use for mothers and children across Kenya.',
      icon: '🤱',
      category: 'access',
      features: ['Prenatal Care', 'Pediatric Services', 'Nutrition Support'],
      impact: 'Served 50,000+ mothers',
      status: 'Active'
    },
    {
      id: 6,
      title: 'Digital Health Solutions',
      description: 'Leveraging technology to improve medicine tracking and patient outcomes.',
      icon: '💻',
      category: 'access',
      features: ['Mobile Apps', 'SMS Reminders', 'Data Analytics'],
      impact: '100,000+ app downloads',
      status: 'Pilot'
    }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? allPrograms 
    : allPrograms.filter(program => program.category === activeCategory);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to improve healthcare systems and promote rational use of medicines across Kenya
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPrograms.map((program, index) => (
            <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Program Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{program.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{program.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        program.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {program.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                  <p className="text-green-600 font-medium">{program.impact}</p>
                </div>

                {/* Learn More Button */}
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Learn More About This Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Involved in Our Programs
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Whether you\'re a healthcare professional, community leader, or concerned citizen, 
            there are many ways to contribute to our mission of promoting rational medicine use in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Join Our Programs
            </a>
            <a 
              href="/donate" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Programs;
