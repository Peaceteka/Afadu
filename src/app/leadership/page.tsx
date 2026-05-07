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
      id: 'margaret-nyambura',
      name: 'Margaret Nyambura',
      title: 'Board Member',
      image: '/images/Margaret Nyambura.jpg',
      expertise: 'Public Health, Program Management, Community Health',
      experience: '12+ years',
      currentRole: 'Public Health Specialist, AFADU',
      background: 'Public health and program management expert with extensive experience in community health interventions, disease surveillance, and health program coordination.',
      achievements: [
        'Community health program coordination',
        'Disease surveillance and response',
        'Public health policy development'
      ],
      education: [
        'MPH in Public Health - University of Nairobi',
        'BSc in Nursing - University of Nairobi',
        'Public Health certifications'
      ],
      quote: 'Community engagement is essential for sustainable public health improvements.'
    },
    {
      id: 'joseph-muriuki',
      name: 'Joseph Muriuki',
      title: 'Board Member',
      image: '/images/Joseph Muriuki.jpg',
      expertise: 'Health Economics, Policy Analysis, Strategic Planning',
      experience: '16+ years',
      currentRole: 'Health Economist, AFADU',
      background: 'Health economics and policy analysis expert with extensive experience in economic evaluation, health policy development, and strategic planning.',
      achievements: [
        'Health economic evaluations',
        'Policy analysis and development',
        'Strategic health planning'
      ],
      education: [
        'MA in Health Economics - University of York',
        'BSc in Economics - University of Nairobi',
        'Health Policy certifications'
      ],
      quote: 'Economic evidence is fundamental for sustainable health system strengthening.'
    },
    {
      id: 'samuel-kamau',
      name: 'Samuel Kamau',
      title: 'Board Member',
      image: '/images/Samuel Kamau.jpg',
      expertise: 'Information Management, Digital Health, Data Analytics',
      experience: '14+ years',
      currentRole: 'Information Systems Manager, AFADU',
      background: 'Information management and digital health expert with extensive experience in health information systems, data analytics, and digital transformation.',
      achievements: [
        'Health information system implementations',
        'Data analytics and management',
        'Digital transformation projects'
      ],
      education: [
        'MSc in Information Systems - University of Nairobi',
        'BSc in Computer Science - Kenyatta University',
        'Digital Health certifications'
      ],
      quote: 'Data-driven decisions are essential for effective health system management.'
    },
    {
      id: 'grace-wanjiru',
      name: 'Grace Wanjiru',
      title: 'Board Member',
      image: '/images/Grace Wanjiru.jpg',
      expertise: 'Pharmaceuticals, Supply Chain Management, Public Health',
      experience: '20+ years',
      currentRole: 'Pharmaceutical Advisor, AFADU',
      background: 'Pharmaceutical and supply chain management expert with extensive experience in pharmaceutical supply chains, public health programs, and health system strengthening.',
      achievements: [
        'Supply chain optimization projects',
        'Public health program coordination',
        'Pharmaceutical system strengthening'
      ],
      education: [
        'MSc in Pharmaceutical Sciences - University of Nairobi',
        'BSc in Pharmacy - University of Nairobi',
        'Supply Chain Management training',
        'Global Health Programs development'
      ],
      quote: 'Efficient supply chains are backbone of accessible and quality healthcare delivery.'
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
      name: 'David Dianga',
      title: 'Board Member',
      image: '/images/david-dianga.jpg',
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
              Leadership &amp; Governance
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Meet the distinguished board of experts guiding AFADU&apos;s mission to transform 
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
