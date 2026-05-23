'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('list');
  const [modalMember, setModalMember] = useState<string | null>(null);

  const closeModal = () => setModalMember(null);
  const openModal = (id: string) => setModalMember(id);
  const getMemberDetails = (id: string) => boardMembers.find((m) => m.id === id);

  const boardMembers = [
    {
      id: 'willis-ayieko',
      name: 'Professor Willis Ayieko',
      title: 'Board Chairperson',
      image: '/images/Prof Willis.png',
      currentRole: 'Assistant Professor of Medical Statistics and Epidemiology, London School of Hygiene & Tropical Medicine',
      expertise: 'Epidemiology, Biostatistics, Implementation Science',
      background: 'An internationally respected epidemiologist, biostatistician, and global health researcher with extensive experience in implementation science, health systems research, child health, and evidence-based policy development.',
      experience: '20+ years',
      detailedProfile: 'An internationally respected epidemiologist, biostatistician, and global health researcher with extensive experience in implementation science, health systems research, child health, and evidence-based policy development. Currently serves as Assistant Professor of Medical Statistics and Epidemiology at the London School of Hygiene & Tropical Medicine.',
      education: [] as string[],
      achievements: [] as string[],
      quote: '',
    },
    {
      id: 'moses-ombuoro',
      name: 'Moses Ombuoro',
      title: 'Vice Chairperson',
      image: '/images/Mose.png',
      currentRole: 'Vice Chairperson, AFADU',
      expertise: 'Biomedical Engineering, Epidemiology, Disease Control, Community Health Systems',
      background: 'A multidisciplinary health professional with expertise in biomedical engineering, epidemiology, disease control, and community health systems.',
      experience: '18+ years',
      detailedProfile: 'A multidisciplinary health professional with expertise in biomedical engineering, epidemiology, disease control, and community health systems.',
      education: [] as string[],
      achievements: [] as string[],
      quote: '',
    },
    {
      id: 'daisy-onyango',
      name: 'Daisy Onyango',
      title: 'Treasurer',
      image: '/images/Daisy.png',
      currentRole: 'Treasurer, AFADU',
      expertise: 'Health Informatics, Digital Transformation, Health Information Systems',
      background: "An experienced health informatics and digital transformation specialist currently serving within Kenya's digital health ecosystem with expertise in health information systems and healthcare management.",
      experience: '10+ years',
      detailedProfile: "An experienced health informatics and digital transformation specialist currently serving within Kenya's digital health ecosystem with expertise in health information systems and healthcare management.",
      education: [] as string[],
      achievements: [] as string[],
      quote: '',
    },
    {
      id: 'andrew-oluga',
      name: 'Andrew Oluga',
      title: 'Executive Director & Board Secretary',
      image: '/images/Andrew Oluga.png',
      currentRole: 'Executive Director & Board Secretary, AFADU',
      expertise: 'Pharmaceuticals, Health Systems Strengthening, Project Management, M&E',
      background: 'A seasoned pharmaceutical, health systems, community development, and project management expert with over 22 years of experience in health systems strengthening, policy analysis, pharmaceutical management, grant development, strategy design, and monitoring & evaluation. Has supported assignments with organizations including IGAD, UNDP, UNICEF, British Council, and GIZ.',
      experience: '22+ years',
      detailedProfile: 'A seasoned pharmaceutical, health systems, community development, and project management expert with over 22 years of experience in health systems strengthening, policy analysis, pharmaceutical management, grant development, strategy design, and monitoring & evaluation. Has supported assignments with organizations including IGAD, UNDP, UNICEF, British Council, and GIZ.',
      education: [] as string[],
      achievements: [] as string[],
      quote: '',
    },
    {
      id: 'david-dianga',
      name: "David Diang'a",
      title: 'Board Member',
      image: '/images/David Dianga.png',
      currentRole: 'Board Member, AFADU',
      expertise: 'Pharmaceutical Supply Chain, HIV, TB, Malaria, Health Systems Strengthening',
      background: 'A highly experienced pharmaceutical and health supply chain specialist with over 22 years of expertise in HIV, TB, malaria programs, and health systems strengthening.',
      experience: '22+ years',
      detailedProfile: 'A highly experienced pharmaceutical and health supply chain specialist with over 22 years of expertise in HIV, TB, malaria programs, and health systems strengthening.',
      education: [] as string[],
      achievements: [] as string[],
      quote: '',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Modal */}
      {modalMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal} />
            <div className="relative bg-white rounded-xl text-left overflow-hidden shadow-2xl sm:my-8 sm:w-full sm:max-w-3xl">
              <div className="bg-gradient-to-r from-blue-900 to-green-800 px-6 py-5">
                <h3 className="text-2xl font-bold text-white">{getMemberDetails(modalMember)?.name}</h3>
                <p className="text-blue-200 text-sm mt-1">{getMemberDetails(modalMember)?.title}</p>
              </div>
              <div className="px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex justify-center">
                    <img
                      src={getMemberDetails(modalMember)?.image}
                      alt={getMemberDetails(modalMember)?.name}
                      className="w-32 h-32 object-cover object-center rounded-full shadow-lg border-4 border-gray-100"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Current Role</p>
                      <p className="text-gray-800 text-sm">{getMemberDetails(modalMember)?.currentRole}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Expertise</p>
                      <p className="text-gray-800 text-sm">{getMemberDetails(modalMember)?.expertise}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Experience</p>
                      <p className="text-gray-800 text-sm">{getMemberDetails(modalMember)?.experience}</p>
                    </div>
                  </div>
                </div>
                {getMemberDetails(modalMember)?.detailedProfile && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Profile</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{getMemberDetails(modalMember)?.detailedProfile}</p>
                  </div>
                )}
              </div>
              <div className="bg-gray-50 px-6 py-3 flex justify-end border-t border-gray-100">
                <button
                  onClick={closeModal}
                  className="px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/afaduleadership.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-blue-900/78 to-green-950/82" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-semibold text-green-300 tracking-widest uppercase">Board of Directors</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Leadership &amp; Governance
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Meet the distinguished board of experts guiding AFADU&apos;s mission to transform
              healthcare through rational medicine use and strategic leadership.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setActiveView('grid')}
              className={`inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeView === 'grid'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setActiveView('list')}
              className={`inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeView === 'list'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              List View
            </button>
          </div>
        </div>
      </section>

      {/* Board Introduction */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Board of Directors</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            AFADU is governed by a distinguished multidisciplinary board comprising experts in
            public health, epidemiology, pharmaceuticals, health informatics, research, and
            health systems strengthening — providing comprehensive oversight and strategic direction.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-5">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 object-cover object-top rounded-full border-4 border-gray-100 shadow"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-700 font-semibold text-sm mb-4">{member.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{member.background}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); openModal(member.id); }}
                      className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold hover:text-blue-600 transition-colors"
                    >
                      View Profile
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`bg-white rounded-2xl shadow-sm border-l-4 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer ${
                    index % 2 === 0 ? 'border-blue-700' : 'border-green-700'
                  }`}
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6 p-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover object-top rounded-full border-4 border-gray-100 shadow flex-shrink-0"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                          <p className="text-green-700 font-semibold text-sm">{member.title}</p>
                        </div>
                        <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          {member.experience}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.background}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                          {member.expertise}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); openModal(member.id); }}
                          className="text-sm font-semibold text-blue-700 hover:text-blue-600 transition-colors"
                        >
                          View Full Profile →
                        </button>
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
