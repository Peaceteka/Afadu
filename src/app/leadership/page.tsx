'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');

  const boardMembers = [
    {
      id: 'willis-ayieko',
      name: 'Professor Willis Ayieko',
      title: 'Chairman of the Board',
      image: '/images/Prof Willis.png',
      expertise: 'Epidemiology, Biostatistics, Global Health Research',
      experience: '20+ years',
      currentRole: 'Assistant Professor, London School of Hygiene & Tropical Medicine',
      background: 'An accomplished epidemiologist and global health researcher with over two decades of experience in health systems research and implementation science.',
      achievements: [
        'Lead Epidemiologist at KEMRI-Wellcome Trust',
        'Statistical Leadership at MITU Tanzania',
        'Visiting Research Fellow at Oxford University',
        'Multiple peer-reviewed publications',
        'Cost-effectiveness analysis expert'
      ],
      education: [
        'PhD Epidemiology & Biostatistics - University of Amsterdam',
        'MSc Epidemiology - LSHTM',
        'BSc - University of Nairobi'
      ],
      quote: 'Evidence-based healthcare transformation requires rigorous research and strategic implementation.'
    },
    {
      id: 'moses-ombuoro',
      name: 'Moses Ombuoro',
      title: 'Vice-Chair',
      image: '/images/Mose.png',
      expertise: 'Biomedical Engineering, Public Health',
      experience: '15+ years',
      currentRole: 'Multidisciplinary Health Professional',
      background: 'Expertise spanning biomedical engineering, community health, and public health with advanced training in disease surveillance and outbreak response.',
      achievements: [
        'Biomedical equipment management',
        'Community health program development',
        'Disease surveillance systems',
        'Health system strengthening',
        'Epidemiology specialist'
      ],
      education: [
        'Diploma Biomedical Engineering',
        'BSc Community Health & Development',
        'MPH Epidemiology & Disease Control'
      ],
      quote: 'Bridging clinical technology with population health is essential for comprehensive healthcare delivery.'
    },
    {
      id: 'daisy-onyango',
      name: 'Daisy Onyango',
      title: 'Treasurer',
      image: '/images/Daisy.png',
      expertise: 'Health Informatics, Information Management',
      experience: '10+ years',
      currentRole: 'Health Informatics Officer, Digital Health Agency',
      background: 'Seasoned Information Management professional driving digital transformation across Kenya\'s public health, legal, and government sectors.',
      achievements: [
        'Health Information Systems Management',
        'COVID-19 vaccination data coordination',
        'Judiciary digitization projects',
        'National Museums digital transformation',
        'Healthcare systems optimization'
      ],
      education: [
        'BSc Information Science - Kenyatta University',
        'MBA Healthcare Management (pursuing)'
      ],
      quote: 'Digital health solutions are the foundation of modern, efficient healthcare delivery.'
    },
    {
      id: 'andrew-oluga',
      name: 'Andrew Oluga',
      title: 'Secretary & Executive Director',
      image: '/images/andrew-oluga.jpg',
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
      name: 'David Diang\'a',
      title: 'Board Member',
      image: '/images/david-dianga.jpg',
      expertise: 'Pharmaceutical Supply Chain, Health Systems',
      experience: '22+ years',
      currentRole: 'Technical Officer, Amref Health Africa',
      background: 'Highly experienced pharmaceutical and health supply chain specialist with 14 years in HIV, TB, and malaria programmes.',
      achievements: [
        'Supply chain management leadership',
        'HIV/TB/malaria program expertise',
        'Health systems strengthening',
        'Program design and coordination',
        'Multi-stakeholder partnership development'
      ],
      education: [
        'Pharmaceutical Sciences qualifications',
        'Supply Chain Management training',
        'Global Health Programs development'
      ],
      quote: 'Efficient supply chains are the backbone of accessible and quality healthcare delivery.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-5 rounded-full mb-8 backdrop-blur-sm border border-white border-opacity-10">
                <span className="text-5xl">👥</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Leadership & Governance
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Meet the distinguished board of experts guiding AFADU's mission to transform 
              healthcare through rational medicine use and strategic leadership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveView('grid')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeView === 'grid' 
                    ? 'bg-white text-gray-800 shadow-xl' 
                    : 'bg-white bg-opacity-5 text-white hover:bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeView === 'list' 
                    ? 'bg-white text-gray-800 shadow-xl' 
                    : 'bg-white bg-opacity-5 text-white hover:bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10'
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
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-top rounded-xl shadow-lg"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200">
                          <span className="text-4xl font-bold text-gray-700">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {member.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
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
            <div className="space-y-6">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/3 relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-30"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-top rounded-xl shadow-lg"
                          />
                        ) : (
                          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200">
                            <span className="text-4xl font-bold text-gray-700">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-2/3 p-8">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-slate-600 font-semibold text-lg mb-2">{member.title}</p>
                            <p className="text-gray-600 text-sm mb-4">{member.currentRole}</p>
                          </div>
                          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {member.title.split(' ')[0]}
                          </span>
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
                        
                        <blockquote className="text-gray-500 italic text-sm border-l-4 border-slate-200 pl-4 mb-4">
                          "{member.quote}"
                        </blockquote>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <button className="text-slate-600 font-semibold hover:text-slate-700 transition-colors duration-200">
                          {selectedMember === member.id ? 'Show Less' : 'View Full Profile →'}
                        </button>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                            <span className="text-xs text-slate-600">📧</span>
                          </div>
                          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                            <span className="text-xs text-slate-600">💼</span>
                          </div>
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

      {/* Detailed Member Profiles */}
      {selectedMember && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Profile</h2>
            </div>
            
            {boardMembers
              .filter(member => member.id === selectedMember)
              .map(member => (
                <div key={member.id} className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Profile Image */}
                      <div className="lg:col-span-1 relative">
                        <div className="h-96 lg:h-full bg-gradient-to-br from-slate-600 to-gray-600">
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                              <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover object-top"
                              />
                            ) : (
                              <div className="w-40 h-40 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white border-opacity-20">
                                <span className="text-5xl font-bold text-white">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Profile Details */}
                      <div className="lg:col-span-2 p-12">
                        <div className="mb-8">
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-2xl text-slate-600 font-semibold mb-4">{member.title}</p>
                          <p className="text-gray-700 text-lg mb-6">{member.currentRole}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                              <div className="flex items-center mb-3">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                                  <span className="text-xl">📊</span>
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900">Experience</h4>
                                  <p className="text-gray-600">{member.experience}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                              <div className="flex items-center mb-3">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                                  <span className="text-xl">🎯</span>
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900">Expertise</h4>
                                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <span className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">👤</span>
                              Background
                            </h4>
                            <p className="text-gray-700 leading-relaxed bg-white rounded-xl p-6 shadow-lg">
                              {member.background}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <span className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">🏆</span>
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {member.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start bg-white rounded-xl p-4 shadow-lg">
                                  <span className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                  <span className="text-gray-700">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <span className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">🎓</span>
                              Education
                            </h4>
                            <ul className="space-y-3">
                              {member.education.map((edu, index) => (
                                <li key={index} className="flex items-start bg-white rounded-xl p-4 shadow-lg">
                                  <span className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                  <span className="text-gray-700">{edu}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <blockquote className="text-xl text-gray-600 italic bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border-l-4 border-slate-600">
                            "{member.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Governance Philosophy */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Governance Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by excellence, integrity, and strategic leadership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term strategic planning and visionary leadership to guide AFADU's mission and ensure sustainable impact.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Governance</h3>
              <p className="text-gray-600 leading-relaxed">
                Inclusive decision-making processes that leverage diverse expertise and stakeholder perspectives for optimal outcomes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Commitment to high performance, accountability, and continuous improvement in all aspects of organizational governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Leadership;
