'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('list');
  const [modalMember, setModalMember] = useState<string | null>(null);

  const closeModal = () => {
    setModalMember(null);
  };

  const getMemberDetails = (memberId: string) => {
    return boardMembers.find(member => member.id === memberId);
  };

  const openModal = (memberId: string) => {
    setModalMember(memberId);
  };

  const boardMembers = [
    {
      id: 'willis-ayieko',
      name: 'Professor Willis Ayieko',
      title: 'Vice Chairperson',
      image: '/images/Prof Willis.png',
      currentRole: 'Assistant Professor of Medical Statistics and Epidemiology, London School of Hygiene & Tropical Medicine',
      expertise: 'Epidemiology, Biostatistics, Implementation Science',
      background: 'An internationally respected epidemiologist, biostatistician, and global health researcher with extensive experience in implementation science, health systems research, child health, and evidence-based policy development.',
      experience: '20+ years',
      detailedProfile: 'An internationally respected epidemiologist, biostatistician, and global health researcher with extensive experience in implementation science, health systems research, child health, and evidence-based policy development.',
      education: [],
      achievements: [],
      quote: ''
    },
    {
      id: 'moses-ombuoro',
      name: 'Moses Ombuoro',
      title: 'Treasurer',
      image: '/images/Mose.png',
      currentRole: 'Vice Chairperson, AFADU',
      expertise: 'Biomedical Engineering, Disease Control, Community Health Systems',
      background: 'A multidisciplinary health professional with expertise in biomedical engineering, epidemiology, disease control, and community health systems.',
      experience: '18+ years',
      detailedProfile: 'A multidisciplinary health professional with expertise in biomedical engineering, epidemiology, disease control, and community health systems.',
      education: [],
      achievements: [],
      quote: ''
    },
    {
      id: 'daisy-onyango',
      name: 'Daisy Onyango',
      title: 'Executive Director & Board Secretary',
      image: '/images/Daisy.png',
      currentRole: 'Executive Director, AFADU',
      expertise: 'Health Informatics, Digital Transformation, Health Information Systems',
      background: 'An experienced health informatics and digital transformation specialist currently serving within Kenya’s digital health ecosystem with expertise in health information systems and healthcare management.',
      experience: '10+ years',
      detailedProfile: 'An experienced health informatics and digital transformation specialist currently serving within Kenya’s digital health ecosystem with expertise in health information systems and healthcare management.',
      education: [],
      achievements: [],
      quote: ''
    },
    {
      id: 'andrew-oluga',
      name: 'Andrew Oluga',
      title: 'Board Member',
      image: '/images/Andrew Oluga.png',
      currentRole: 'Executive Director (former) / Board Member',
      expertise: 'Pharmaceuticals, Health Systems, Project Management',
      background: 'A seasoned pharmaceutical, health systems, community development, and project management expert with over 22 years of experience in health systems strengthening, policy analysis, pharmaceutical management, grant development, strategy design, and monitoring & evaluation.',
      experience: '22+ years',
      detailedProfile: 'A seasoned pharmaceutical, health systems, community development, and project management expert with over 22 years of experience.',
      education: [],
      achievements: [],
      quote: ''
    },
    {
      id: 'david-dianga',
      name: 'David Diang\'a',
      title: 'Board Member',
      image: '/images/David Dianga.png',
      currentRole: 'Supply Chain Specialist, AFADU',
      expertise: 'Pharmaceutical Supply Chain, Programme Implementation',
      background: 'A highly experienced pharmaceutical and health supply chain specialist with over 22 years of expertise in HIV, TB, malaria programs, and health systems strengthening.',
      experience: '22+ years',
      detailedProfile: 'A highly experienced pharmaceutical and health supply chain specialist with over 22 years of expertise in HIV, TB, malaria programs, and health systems strengthening.',
      education: [],
      achievements: [],
      quote: ''
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Modal Component */}
      {modalMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
            
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-full sm:max-w-4xl">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">
                  {getMemberDetails(modalMember)?.name}
                </h3>
                <p className="text-blue-100 mt-1">
                  {getMemberDetails(modalMember)?.title}
                </p>
              </div>
              
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-1">
                    <div className="flex justify-center mb-4">
                      {getMemberDetails(modalMember)?.image && (getMemberDetails(modalMember)?.image.includes('.jpg') || getMemberDetails(modalMember)?.image.includes('.png')) ? (
                        <img 
                          src={getMemberDetails(modalMember)?.image} 
                          alt={getMemberDetails(modalMember)?.name} 
                          className="w-32 h-32 object-cover object-center rounded-full shadow-lg border-4 border-white"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-200">
                          <span className="text-4xl font-bold text-gray-700">
                            {getMemberDetails(modalMember)?.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Current Role</h4>
                        <p className="text-gray-700">{getMemberDetails(modalMember)?.currentRole}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h4>
                        <p className="text-gray-700">{getMemberDetails(modalMember)?.expertise}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                        <p className="text-gray-700">{getMemberDetails(modalMember)?.experience}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {getMemberDetails(modalMember)?.detailedProfile && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Detailed Profile</h4>
                    <div className="prose prose-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {getMemberDetails(modalMember)?.detailedProfile}
                    </div>
                  </div>
                )}
                
                {getMemberDetails(modalMember)?.education && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Education</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {getMemberDetails(modalMember)?.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {getMemberDetails(modalMember)?.achievements && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {getMemberDetails(modalMember)?.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {getMemberDetails(modalMember)?.quote && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p className="text-gray-700 italic">"{getMemberDetails(modalMember)?.quote}"</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 px-6 py-3 flex justify-end">
                <button
                  type="button"
                  className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Logo Background with Thematic Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/logo1.png" 
            alt="AFADU Logo Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-green-900/60 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-8 animate-bounce">
                <span className="text-5xl">👥</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
              Leadership &amp; Governance
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Meet the distinguished board of experts guiding AFADU&apos;s mission to transform 
              healthcare through rational medicine use and strategic leadership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveView('grid')}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group ${
                  activeView === 'grid' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl ring-4 ring-green-200 ring-opacity-50' 
                    : 'bg-gradient-to-br from-white to-gray-50 text-gray-700 hover:from-green-50 hover:to-blue-50 border-2 border-green-400 hover:border-green-600'
                }`}
              >
                {/* Animated background effect for non-active state */}
                {activeView !== 'grid' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
                
                {/* Icon with enhanced styling */}
                <span className="text-xl relative z-10">📋</span>
                
                {/* Text with improved typography */}
                <span className="relative z-10 font-medium">Grid View</span>
                
                {/* Decorative element for active state */}
                {activeView === 'grid' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
                )}
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group ${
                  activeView === 'list' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl ring-4 ring-blue-200 ring-opacity-50' 
                    : 'bg-gradient-to-br from-white to-gray-50 text-gray-700 hover:from-blue-50 hover:to-green-50 border-2 border-blue-400 hover:border-blue-600'
                }`}
              >
                {/* Animated background effect for non-active state */}
                {activeView !== 'list' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
                
                {/* Icon with enhanced styling */}
                <span className="text-xl relative z-10">📝</span>
                
                {/* Text with improved typography */}
                <span className="relative z-10 font-medium">List View</span>
                
                {/* Decorative element for active state */}
                {activeView === 'list' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse delay-500"></div>
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
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(member.id);
                        }}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                      >
                        Learn More →
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
                        
                        {/* Learn More Button */}
                        <div className="mt-6">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(member.id);
                            }}
                            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More About {member.name}
                          </button>
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
