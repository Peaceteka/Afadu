'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const boardMembers = [
    {
      id: 1,
      name: 'Prof. Willis Ayieko',
      title: 'Chairman of the Board',
      currentRole: 'Professor of Pharmaceutical Management',
      experience: '25+ years',
      expertise: 'Pharmaceutical Policy & Healthcare Systems',
      image: '/images/Prof Willis.png',
      background: 'Prof. Willis Ayieko is a distinguished Professor of Pharmaceutical Management with over 25 years of experience in healthcare systems strengthening, pharmaceutical policy development, and rational medicine use advocacy. He has led numerous national and international projects focused on improving access to essential medicines and building sustainable healthcare systems in low and middle-income countries.',
      achievements: [
        'Led healthcare system reforms across 15+ African countries',
        'Published 50+ peer-reviewed research papers on pharmaceutical management',
        'Consultant for WHO, World Bank, and UNICEF on pharmaceutical policies',
        'Established AFADU as a leading voice for rational medicine use in Africa'
      ],
      education: [
        'PhD in Pharmaceutical Management, University of Nairobi',
        'MSc in Clinical Pharmacy, University of London',
        'BPharm, University of Nairobi',
        'Postgraduate Diploma in Health Economics, Harvard University'
      ],
      quote: 'Rational medicine use is not just a clinical practice—it\'s the foundation of sustainable healthcare systems and universal health coverage.'
    },
    {
      id: 2,
      name: 'Moses Ombuoro',
      title: 'Board Member',
      currentRole: 'Health Systems Specialist',
      experience: '20+ years',
      expertise: 'Health System Strengthening & Supply Chain Management',
      image: '/images/Mose.png',
      background: 'Moses Ombuoro is a seasoned Health Systems Specialist with extensive experience in pharmaceutical supply chain management, health system strengthening, and program implementation. He has successfully managed large-scale health interventions across multiple counties in Kenya, ensuring efficient delivery of essential medicines and strengthening local healthcare capacity.',
      achievements: [
        'Managed pharmaceutical supply chains for 200+ health facilities',
        'Implemented digital health solutions for medicine tracking',
        'Trained 5,000+ healthcare workers on supply chain management',
        'Led county-level health system strengthening initiatives'
      ],
      education: [
        'MSc in Health Systems Management, Kenyatta University',
        'BSc in Pharmacy, University of Nairobi',
        'Postgraduate Certificate in Supply Chain Management',
        'Diploma in Project Management'
      ],
      quote: 'Efficient supply chains are the backbone of effective healthcare delivery—every medicine saved is a life potentially saved.'
    },
    {
      id: 3,
      name: 'Daisy Onyango',
      title: 'Board Member', 
      currentRole: 'Public Health Expert',
      experience: '18+ years',
      expertise: 'Public Health & Community Health Programs',
      image: '/images/Daisy.png',
      background: 'Daisy Onyango is a dedicated Public Health Expert with over 18 years of experience in community health program design, implementation, and evaluation. She has been instrumental in developing and scaling up community-based interventions that promote rational medicine use and improve health outcomes at the grassroots level.',
      achievements: [
        'Designed community health programs reaching 500,000+ beneficiaries',
        'Led maternal and child health initiatives across 10 counties',
        'Developed community-based medicine use education curricula',
        'Established community health worker training programs'
      ],
      education: [
        'MPH, Johns Hopkins Bloomberg School of Public Health',
        'BSc in Nursing, University of Nairobi',
        'Postgraduate Certificate in Program Monitoring & Evaluation',
        'Certificate in Community Health Development'
      ],
      quote: 'Community engagement is the key to sustainable health outcomes—when communities understand, they embrace rational medicine use practices.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-10 rounded-full mb-8 backdrop-blur-sm border-2 border-white border-opacity-20">
                <span className="text-5xl">👥</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Leadership & Governance
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Meet the distinguished board of experts guiding AFADU's mission to promote rational medicine use 
              and strengthen healthcare systems across Kenya and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-gray-800 shadow-lg' 
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 12a4 4 0 10-8 4 4 0 008 0zM12 14a6 6 0 00-6 6v2a2 2 0 002 2h8a2 2 0 002 2v2a6 6 0 00-6-6z" />
                  </svg>
                  Grid View
                </span>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  viewMode === 'list' 
                    ? 'bg-white text-gray-800 shadow-lg' 
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List View
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of experts committed to transforming healthcare through innovation, expertise, and dedication
            </p>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-gray-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-top rounded-lg"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white border-opacity-20">
                          <span className="text-4xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                          <span className="text-gray-800 font-semibold">View Profile</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                          <p className="text-slate-600 font-semibold">{member.title}</p>
                        </div>
                        <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {member.experience}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15.797a23.931 23.931 0 01-9 7.458 23.931 23.931 0 011.879-2.251l1.014-5.114a1.125 1.125 0 01.997-1.243l1.014 5.114A11.939 11.939 0 0012 25a11.939 11.939 0 00-6.114-2.251 1.125 1.125 0 01.997-1.244l1.014 5.114A11.939 11.939 0 0012 25a11.939 11.939 0 006.114-2.251 1.125 1.125 0 01-.997-1.244l1.014 5.114A11.939 11.939 0 0012 25z" />
                          </svg>
                          {member.expertise}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-3">{member.background}</p>
                    </div>
                  </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-6 mb-12">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/3 relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-gray-600 opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white border-opacity-20">
                            <span className="text-4xl font-bold text-white">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-slate-600 font-semibold text-lg mb-2">{member.title}</p>
                          <p className="text-gray-600 text-sm mb-4">{member.currentRole}</p>
                        </div>
                        <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {member.experience}
                        </div>
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

          {/* Detailed Profile Modal */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
              <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {boardMembers
                  .filter(member => member.id === selectedMember)
                  .map(member => (
                    <div key={member.id} className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Profile Image */}
                      <div className="lg:col-span-1 relative h-96 lg:h-full bg-gradient-to-br from-slate-600 to-gray-600">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          {member.image && member.image.includes('.jpg') || member.image.includes('.png') ? (
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover object-top rounded-lg"
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
                      
                      {/* Profile Details */}
                      <div className="lg:col-span-2 p-8">
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
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Governance Philosophy Section */}
      <section className="py-20 bg-white">
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
