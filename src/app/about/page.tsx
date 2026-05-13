'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Vision & Mission', icon: '🎯' },
    { id: 'history', label: 'Who We Are', icon: '🏢' },
    { id: 'values', label: 'Core Values', icon: '💎' },
    { id: 'leadership', label: 'Leadership', icon: '👥' }
  ];

  const content = {
    mission: {
      title: 'Our Vision & Mission',
      content: [
        '**Our Vision:** A healthy society characterized by the rational, safe, and equitable use of medicines.',
        '',
        '**Our Mission:** To promote a healthy Kenyan society by improving access to quality healthcare and empowering communities with the skills, information, confidence, and resources required to ensure the safe, effective, and wise use of medicines.',
        '',
        'AFADU\'s mission is grounded in the recognition that access to essential medicines is a fundamental pillar of a functional health system and a critical determinant of health outcomes, particularly for vulnerable and underserved populations.'
      ]
    },
    history: {
      title: 'Who We Are',
      content: [
        'Action for Appropriate Drug Use (AFADU) is a Kenyan non-profit, non-political, and non-racial organization established in 2008 by a team of distinguished medical doctors, pharmacists, public health specialists, and health systems experts.',
        '',
        'For over 18 years, AFADU has been at the forefront of Rational Use of Medicines (RUM) in Kenya—leading interventions, shaping policy, strengthening systems, and empowering communities with vital knowledge for safe, effective, and affordable medicine use.',
        '',
        'AFADU was established as a strategic and timely response to a convergence of systemic public health challenges that were increasingly undermining the effectiveness, safety, and sustainability of healthcare delivery in Kenya.',
        '',
        'At the core of its formation was the widespread inappropriate use of medicines across both community and clinical settings, the escalating threat of antimicrobial resistance (AMR), structural weaknesses within the health system, and a dynamic evolving disease burden characterized by recurring epidemics and emerging diseases.'
      ]
    },
    values: {
      title: 'Our Core Values',
      content: [
        '**Transparency and Integrity:** AFADU upholds openness in its operations, decision-making processes, and resource utilization, ensuring that stakeholders have confidence in its work. Integrity is reflected in adherence to ethical standards, honesty in engagements, and consistency between commitments and actions.',
        '',
        '**Professionalism:** The organization maintains high standards of technical excellence, discipline, and competence across all levels of its work, with a commitment to continuous learning and application of best practices.',
        '',
        '**Accountability:** AFADU takes responsibility for its actions, results, and use of resources, ensuring that programs are implemented efficiently and deliver measurable impact through robust monitoring, evaluation, and reporting mechanisms.',
        '',
        '**Respect for Life and Human Rights:** The organization recognizes health as a fundamental human right and prioritizes the dignity, safety, and well-being of all individuals in its interventions.',
        '',
        '**Strategic Partnerships:** Collaboration with government agencies, development partners, civil society, and communities is integral to AFADU\'s approach, enhancing reach, sustainability, and impact.',
        '',
        '**Universal Access to Healthcare:** AFADU is committed to ensuring that all individuals, regardless of socioeconomic status or geographic location, have access to safe, effective, and affordable medicines and health services.',
        '',
        '**Community Empowerment:** The organization recognizes communities as active participants in shaping their health outcomes, promoting health literacy and responding to local needs and contexts.'
      ]
    },
    leadership: {
      title: 'Leadership & Governance',
      content: [
        'AFADU is governed by a distinguished and multidisciplinary Board of Directors comprising experts from various fields including epidemiology, biomedical engineering, information management, pharmaceuticals, and health supply chain management.',
        '',
        '**Professor Willis Ayieko** - Chairman of the Board: An accomplished epidemiologist, biostatistician, and global health researcher with over two decades of experience. Currently serves as Assistant Professor at London School of Hygiene & Tropical Medicine.',
        '',
        '**Moses Ombuoro** - Vice-Chair: A multidisciplinary health professional with expertise spanning biomedical engineering, community health, and public health, holding a Master\'s Degree in Public Health specializing in Epidemiology and Disease Control.',
        '',
        '**Daisy Onyango** - Treasurer: A seasoned Information Management professional with over 10 years of experience driving digital transformation across Kenya\'s public health, legal, and government sectors.',
        '',
        '**Andrew Oluga** - Secretary and Executive Director: A Pharmaceuticals, Health Systems, and Project Management professional with over 22 years of experience spanning policy development, pharmaceutical care practice, and health systems strengthening.',
        '',
        '**David Diang\'a** - Board Member: A highly experienced pharmaceutical and health supply chain specialist with over 22 years of practice, including 14 years in HIV, TB, and malaria programmes.'
      ]
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/boardroom.png)' }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-5 rounded-full mb-6">
                <span className="text-4xl">🏥</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About AFADU
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Leading Kenya's healthcare transformation through rational medicine use and 
              <span className="font-semibold text-white"> 18+ years </span> 
              of dedicated service to communities nationwide
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/leadership" 
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Meet Our Team
              </a>
              <a 
                href="#programs" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Our Programs
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">47</div>
              <div className="text-gray-600 font-medium">Counties Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Health Workers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-slate-600 to-gray-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              
              {/* Content Header */}
              <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-8 py-6 text-white">
                <h2 className="text-3xl font-bold">
                  {content[activeTab as keyof typeof content].title}
                </h2>
              </div>
              
              {/* Content Body */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {content[activeTab as keyof typeof content].content.map((paragraph, index) => (
                    <div key={index} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph.startsWith('**') ? (
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-slate-600 rounded-full mt-3"></div>
                          <strong className="font-semibold text-gray-900">
                            {paragraph.replace(/\*\*/g, '')}
                          </strong>
                        </div>
                      ) : paragraph === '' ? (
                        <div className="h-4"></div>
                      ) : (
                        <p className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-3"></span>
                          <span>{paragraph}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Enhanced Call to Action */}
                <div className="mt-12 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border border-slate-200">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-600 rounded-full mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Join Our Mission
                    </h3>
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                      Together, we can make a difference in healthcare across Kenya. Whether you're a healthcare professional, 
                      community leader, or concerned citizen, there's a role for you in promoting rational medicine use.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="/donate" 
                        className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Support Our Work
                      </a>
                      <a 
                        href="/contact" 
                        className="bg-white text-slate-600 border-2 border-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Impact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to healthcare excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">47</div>
              <div className="text-gray-600 font-medium">Counties Reached</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Health Workers Trained</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
