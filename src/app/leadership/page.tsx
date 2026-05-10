'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('list');

  const boardMembers = [
    {
      id: 'willis-ayieko',
      name: 'Professor Willis Ayieko',
      title: 'Chairperson of the Board',
      image: '/images/Prof Willis.png',
      expertise: 'Epidemiology, Biostatistics, Global Health Research',
      experience: '20+ years',
      currentRole: 'Assistant Professor, London School of Hygiene & Tropical Medicine',
      background: 'An accomplished epidemiologist and global health researcher with over two decades of experience in health systems research and implementation science.',
      achievements: [
        'Leadership in multi-country epidemiological studies',
        'Extensive publications in peer-reviewed journals',
        'Expert consultation for international health organizations'
      ],
      education: [
        'PhD in Epidemiology - University of London',
        'MSc in Medical Statistics - London School of Hygiene & Tropical Medicine',
        'BSc in Mathematics - University of Nairobi'
      ],
      quote: 'Evidence-based approaches are cornerstone of effective public health interventions.'
    },
    {
      id: 'daisy-onyango',
      name: 'Daisy Onyango',
      title: 'Board Member',
      image: '/images/Daisy.png',
      expertise: 'Health Systems, Digital Health, Information Management',
      experience: '15+ years',
      currentRole: 'Digital Health Specialist, AFADU',
      background: 'Digital health and health systems expert with extensive experience in information management systems, digital transformation, and health technology implementation.',
      achievements: [
        'Digital health system implementations',
        'Health information management expertise',
        'Technology integration in healthcare delivery'
      ],
      education: [
        'MSc in Health Informatics - University of Nairobi',
        'BSc in Computer Science - Kenyatta University',
        'Digital Health certifications'
      ],
      quote: 'Digital health solutions are foundation of modern, efficient healthcare delivery.'
    },
    {
      id: 'moses-ombuoro',
      name: 'Moses Ombuoro',
      title: 'Board Member',
      image: '/images/Mose.png',
      expertise: 'Biomedical Engineering, Health Technology, Innovation',
      experience: '18+ years',
      currentRole: 'Biomedical Engineer, AFADU',
      background: 'Biomedical engineering and health technology expert with extensive experience in medical device innovation, health technology assessment, and digital health solutions.',
      achievements: [
        'Medical device innovation and development',
        'Health technology assessment expertise',
        'Digital health solution implementations'
      ],
      education: [
        'MSc in Biomedical Engineering - University of Nairobi',
        'BSc in Electrical Engineering - Jomo Kenyatta University of Agriculture and Technology',
        'Health Technology certifications'
      ],
      quote: 'Innovation in health technology is critical for advancing healthcare delivery.'
    },
        {
      id: 'andrew-oluga',
      name: 'Andrew Oluga',
      title: 'Secretary & Executive Director',
      image: '/images/Andrew Oluga.png',
      expertise: 'Pharmaceuticals, Health Systems, Project Management',
      experience: '22+ years',
      currentRole: 'Executive Director, AFADU',
      background: 'Pharmaceuticals and health systems expert with extensive experience in policy development, program design, and comprehensive M&E.',
      achievements: [
        'Multi-country assignments with IGAD, UNDP',
        'Projects with UNICEF, British Council, GIZ',
        'Systems design and operational research',
        'Institutional capacity building',
        'Policy and programmatic solutions'
      ],
      education: [
        'Advanced Pharmaceutical Sciences training',
        'Project Management certifications',
        'Health Systems professional development'
      ],
      quote: 'Effective health systems require strong leadership, evidence-based policies, and sustainable programs.'
    },
    {
      id: 'david-dianga',
      name: 'David Dianga',
      title: 'Board Member',
      image: '/images/David Dianga.png',
      expertise: 'Pharmaceutical Supply Chain, Health Systems',
      experience: '22+ years',
      currentRole: 'Supply Chain Specialist, AFADU',
      background: 'Pharmaceutical supply chain and health systems expert with extensive experience in supply chain management, health systems strengthening, and program coordination.',
      achievements: [
        'Supply chain system implementations',
        'Health systems strengthening projects',
        'Program design and coordination',
        'Multi-stakeholder partnership development'
      ],
      education: [
        'Pharmaceutical Sciences qualifications',
        'Supply Chain Management training',
        'Global Health Programs development'
      ],
      quote: 'Efficient supply chains are backbone of accessible and quality healthcare delivery.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Logo Background */}
        <div className="absolute inset-0">
          <img 
            src="/images/logo1.png" 
            alt="AFADU Logo Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-5 rounded-full mb-8 backdrop-blur-sm border border-white border-opacity-10">
                <span className="text-5xl">👥</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-black">
              Leadership &amp; Governance
            </h1>
            <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
              Meet the distinguished board of experts guiding AFADU&apos;s mission to transform 
              healthcare through rational medicine use and strategic leadership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveView('grid')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeView === 'grid' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl' 
                    : 'bg-white bg-opacity-80 text-green-600 hover:bg-opacity-90 backdrop-blur-sm border-2 border-green-400'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeView === 'list' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl' 
                    : 'bg-white bg-opacity-80 text-blue-600 hover:bg-opacity-90 backdrop-blur-sm border-2 border-blue-400'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-600 opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-500 opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gray-400 opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Board Introduction */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Board of Directors
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AFADU is governed by a distinguished multidisciplinary board comprising experts from 
              epidemiology, biomedical engineering, information management, pharmaceuticals, 
              and health supply chain management, providing comprehensive oversight and strategic direction.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Display */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  {/* Content Section */}
                  <div className="p-8 text-center">
                    {/* Circular Image */}
                    <div className="flex justify-center mb-6">
                      {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-24 h-24 object-cover object-center rounded-full shadow-lg border-4 border-white"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200">
                          <span className="text-2xl font-bold text-gray-700">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    
                                        
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-slate-600 font-semibold mb-4">{member.title}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                        <span className="font-medium">{member.experience} experience</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                        <span>{member.expertise}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {member.background}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="text-slate-600 font-semibold hover:text-slate-700 transition-colors duration-200">
                        {selectedMember === member.id ? 'Show Less' : 'View Profile →'}
                      </button>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer border ${
                    index % 3 === 0 ? 'border-l-4 border-blue-200' : 
                    index % 3 === 1 ? 'border-l-4 border-green-200' : 
                    index % 3 === 2 ? 'border-l-4 border-slate-200' : 
                    'border-gray-100'
                  }`}
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  <div className="flex flex-col lg:flex-row items-center">
                    {/* Content Section */}
                    <div className="p-8 text-center lg:text-left">
                      {/* Circular Image */}
                      <div className="flex justify-center lg:justify-center mb-6">
                        {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-32 h-32 object-cover object-center rounded-full shadow-lg border-4 border-white"
                          />
                        ) : (
                          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200">
                            <span className="text-xl font-bold text-gray-700">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-slate-600 font-semibold text-lg mb-2">{member.title}</p>
                          <p className="text-gray-600 text-sm mb-4">{member.currentRole}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                            <span className="font-medium">{member.experience}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                            <span>{member.expertise}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {member.background}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600">
                                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Education */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Education:</h4>
                          <ul className="space-y-2">
                            {member.education.map((edu, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600">
                                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                <span>{edu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Quote */}
                        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-lg border-l-4 border-slate-400">
                          <p className="text-gray-700 italic font-medium">&quot;{member.quote}&quot;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Leadership;
