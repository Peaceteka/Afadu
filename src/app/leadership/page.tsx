'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const boardMembers = [
  {
    id: 'willis-ayieko',
    name: 'Professor Willis Ayieko',
    title: 'Board Chairperson',
    image: '/images/Prof Willis.png',
    currentRole: 'Assistant Professor of Medical Statistics and Epidemiology, London School of Hygiene & Tropical Medicine',
    expertise: 'Epidemiology, Biostatistics, Implementation Science',
    experience: '20+ years',
    background: 'An internationally respected epidemiologist, biostatistician, and global health researcher with extensive experience in implementation science, health systems research, child health, and evidence-based policy development. Currently serves as Assistant Professor of Medical Statistics and Epidemiology at the London School of Hygiene & Tropical Medicine.',
    accent: 'border-blue-700',
  },
  {
    id: 'moses-ombuoro',
    name: 'Moses Ombuoro',
    title: 'Vice Chairperson',
    image: '/images/Mose.png',
    currentRole: 'Vice Chairperson, AFADU',
    expertise: 'Biomedical Engineering, Epidemiology, Disease Control, Community Health Systems',
    experience: '18+ years',
    background: 'A multidisciplinary health professional with expertise in biomedical engineering, epidemiology, disease control, and community health systems.',
    accent: 'border-green-600',
  },
  {
    id: 'daisy-onyango',
    name: 'Daisy Onyango',
    title: 'Treasurer',
    image: '/images/Daisy.png',
    currentRole: 'Treasurer, AFADU',
    expertise: 'Health Informatics, Digital Transformation, Health Information Systems',
    experience: '10+ years',
    background: "An experienced health informatics and digital transformation specialist currently serving within Kenya's digital health ecosystem with expertise in health information systems and healthcare management.",
    accent: 'border-blue-500',
  },
  {
    id: 'andrew-oluga',
    name: 'Andrew Oluga',
    title: 'Executive Director & Board Secretary',
    image: '/images/Andrew Oluga.png',
    currentRole: 'Executive Director & Board Secretary, AFADU',
    expertise: 'Pharmaceuticals, Health Systems Strengthening, Project Management, M&E',
    experience: '22+ years',
    background: 'A seasoned pharmaceutical, health systems, community development, and project management expert with over 22 years of experience in health systems strengthening, policy analysis, pharmaceutical management, grant development, strategy design, and monitoring & evaluation. Has supported assignments with organizations including IGAD, UNDP, UNICEF, British Council, and GIZ.',
    accent: 'border-green-700',
  },
  {
    id: 'david-dianga',
    name: "David Diang'a",
    title: 'Board Member',
    image: '/images/David Dianga.png',
    currentRole: 'Board Member, AFADU',
    expertise: 'Pharmaceutical Supply Chain, HIV, TB, Malaria, Health Systems Strengthening',
    experience: '22+ years',
    background: 'A highly experienced pharmaceutical and health supply chain specialist with over 22 years of expertise in HIV, TB, malaria programs, and health systems strengthening.',
    accent: 'border-blue-900',
  },
];

const Leadership = () => {
  const [activeView, setActiveView] = useState<'grid' | 'list'>('list');
  const [modalMember, setModalMember] = useState<string | null>(null);

  const closeModal = () => setModalMember(null);
  const getMember = (id: string) => boardMembers.find((m) => m.id === id);

  return (
    <>
      <Navbar />

      {/* Modal */}
      {modalMember && (() => {
        const m = getMember(modalMember);
        if (!m) return null;
        return (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20">
              <div className="fixed inset-0 bg-blue-950/70 backdrop-blur-sm" onClick={closeModal} />
              <div className="relative bg-white rounded-2xl shadow-2xl sm:w-full sm:max-w-2xl overflow-hidden">
                <div className="bg-blue-950 px-7 py-5">
                  <h3 className="font-display text-xl font-bold text-white uppercase">{m.name}</h3>
                  <p className="text-blue-300 text-sm mt-0.5">{m.title}</p>
                </div>
                <div className="p-7">
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-28 h-28 object-cover object-top rounded-xl border-4 border-gray-100 shadow"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Current Role</p>
                        <p className="text-gray-800 text-sm">{m.currentRole}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Expertise</p>
                        <p className="text-gray-800 text-sm">{m.expertise}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Experience</p>
                        <p className="text-gray-800 text-sm">{m.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Profile</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{m.background}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 px-7 py-4 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/afaduleadership.png)' }}
        />
        <div className="absolute inset-0 bg-blue-950/82" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-0.5 bg-green-500" />
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Board of Directors</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
              Leadership &amp; Governance
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              Meet the distinguished board of experts guiding AFADU&apos;s mission to transform
              healthcare through rational medicine use and strategic leadership.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setActiveView('grid')}
              className={`px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeView === 'grid'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setActiveView('list')}
              className={`px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeView === 'list'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              List View
            </button>
          </div>
        </div>
      </section>

      {/* Board Intro */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-green-500" />
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Our Board</span>
            <span className="w-8 h-0.5 bg-green-500" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white uppercase mb-3">Board of Directors</h2>
          <p className="text-blue-200 text-sm max-w-3xl mx-auto leading-relaxed">
            AFADU is governed by a distinguished multidisciplinary board comprising experts in public health,
            epidemiology, pharmaceuticals, health informatics, research, and health systems strengthening —
            providing comprehensive oversight and strategic direction.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className={`bg-white rounded-2xl shadow-sm border-t-4 ${member.accent} border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
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
                    <h3 className="font-display text-lg font-bold text-blue-950 uppercase leading-tight mb-1">{member.name}</h3>
                    <p className="text-green-700 font-semibold text-xs uppercase tracking-wide mb-4">{member.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{member.background}</p>
                    <button
                      onClick={() => setModalMember(member.id)}
                      className="inline-flex items-center gap-1 text-blue-700 text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-wide"
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
            <div className="space-y-5">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className={`bg-white rounded-2xl shadow-sm border-l-4 ${member.accent} border border-gray-100 hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6 p-7">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 object-cover object-top rounded-xl border-4 border-gray-100 shadow flex-shrink-0"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display text-lg font-bold text-blue-950 uppercase leading-tight">{member.name}</h3>
                          <p className="text-green-700 font-semibold text-xs uppercase tracking-wide mt-0.5">{member.title}</p>
                        </div>
                        <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100 whitespace-nowrap">
                          {member.experience}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.background}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                          {member.expertise}
                        </span>
                        <button
                          onClick={() => setModalMember(member.id)}
                          className="text-sm font-bold text-blue-700 hover:text-blue-600 transition-colors uppercase tracking-wide"
                        >
                          View Profile →
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

      {/* CTA */}
      <section className="py-14 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-green-500" />
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Work With Us</span>
            <span className="w-8 h-0.5 bg-green-500" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-4">Join Our Mission</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Partner with AFADU to drive evidence-based transformation in Kenya&apos;s healthcare sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200">
              Contact Us
            </a>
            <a href="/partnerships" className="px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wide rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200">
              Our Partnerships
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Leadership;
