'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const boardMembers = [
  {
    id: 'willis-ayieko',
    name: 'Professor Philip Ayieko',
    title: 'Board Chairperson',
    image: '/images/Prof Willis.png',
    currentRole: 'Assistant Professor of Medical Statistics and Epidemiology, London School of Hygiene & Tropical Medicine',
    expertise: 'Epidemiology, Biostatistics, Implementation Science',
    experience: '20+ years',
    background: 'An internationally respected epidemiologist, biostatistician, and global health researcher with extensive experience in implementation science, health systems research, child health, and evidence-based policy development. Currently serves as Assistant Professor of Medical Statistics and Epidemiology at the London School of Hygiene & Tropical Medicine.',
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
  },
];

const Leadership = () => {
  const [modalMember, setModalMember] = useState<string | null>(null);
  const closeModal = () => setModalMember(null);
  const getMember = (id: string) => boardMembers.find((m) => m.id === id);

  return (
    <>
      <Navbar />

      {/* ── MODAL ────────────────────────────────────────────────────────── */}
      {modalMember && (() => {
        const m = getMember(modalMember);
        if (!m) return null;
        return (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20">
              <div className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm" onClick={closeModal} />
              <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
                <div className="bg-blue-950 px-7 py-5">
                  <h3 className="font-bold text-white text-lg tracking-wide">{m.name}</h3>
                  <p className="text-cyan-400 text-sm mt-0.5 font-semibold uppercase tracking-widest">{m.title}</p>
                </div>
                <div className="p-7">
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-32 h-32 object-cover object-top rounded-xl flex-shrink-0 border border-gray-100"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Current Role</p>
                        <p className="text-gray-800 text-sm leading-relaxed">{m.currentRole}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Expertise</p>
                        <p className="text-gray-800 text-sm">{m.expertise}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Experience</p>
                        <p className="text-cyan-600 font-bold text-sm">{m.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Profile</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.background}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 px-7 py-4 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 text-sm font-bold uppercase tracking-widest text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── BOARD OF DIRECTORS ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-3">
            BOARD OF DIRECTORS
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mb-14">
            AFADU is governed by a distinguished multidisciplinary board comprising experts in public health,
            epidemiology, pharmaceuticals, health informatics, research, and health systems strengthening —
            providing comprehensive oversight and strategic direction.
          </p>

          {/* Member grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {boardMembers.map((member) => (
              <div key={member.id} className="flex gap-5 items-start">
                {/* Photo — compact circle */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border border-gray-100"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const fb = document.createElement('div');
                    fb.className = 'w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-gray-100';
                    fb.innerHTML = `<span class="font-bold text-blue-300 text-xl">${member.name.charAt(0)}</span>`;
                    img.parentElement?.insertBefore(fb, img.nextSibling);
                  }}
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">{member.title}</span>
                  <h3 className="font-bold text-blue-900 text-base leading-snug mt-1 mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{member.experience}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-3">{member.background}</p>
                  <button
                    onClick={() => setModalMember(member.id)}
                    className="text-sm font-bold text-blue-700 hover:text-cyan-600 transition-colors uppercase tracking-wide"
                  >
                    Read Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── GOVERNANCE STRUCTURE ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            GOVERNANCE STRUCTURE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                title: 'Board Oversight',
                desc: 'The Board of Directors provides strategic oversight, fiduciary responsibility, and policy direction to ensure AFADU achieves its mission effectively and sustainably.',
              },
              {
                title: 'Executive Management',
                desc: 'Day-to-day operations are managed by the Executive Director, who oversees program implementation, resource management, stakeholder engagement, and organizational performance.',
              },
              {
                title: 'Technical Advisory',
                desc: 'Subject matter experts in public health, pharmaceuticals, epidemiology, and community health provide technical guidance to strengthen the quality and impact of all programmes.',
              },
              {
                title: 'Financial Accountability',
                desc: 'Robust financial management systems, independent audits, and transparent reporting frameworks ensure responsible stewardship of all organizational resources.',
              },
              {
                title: 'Program Governance',
                desc: 'Each programmatic pillar is governed by dedicated technical leads who ensure evidence-based implementation, compliance, and continuous quality improvement.',
              },
              {
                title: 'Stakeholder Engagement',
                desc: 'AFADU maintains structured engagement with government, donors, partners, and beneficiaries to ensure accountability, responsiveness, and participatory governance.',
              },
            ].map((g) => (
              <div key={g.title}>
                <h3 className="font-bold text-blue-900 text-lg leading-snug mb-3">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── JOIN OUR MISSION ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-4">
            JOIN OUR MISSION
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
            Partner with AFADU to drive evidence-based transformation in Kenya's healthcare sector.
            We welcome collaboration with professionals, organizations, and institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/partnerships"
              className="inline-flex items-center justify-center px-8 py-3.5 text-blue-900 text-sm font-bold uppercase tracking-widest rounded-full border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200"
            >
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
