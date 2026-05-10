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
      title: 'Chairperson of the Board',
      image: '/images/Prof Willis.png',
      expertise: 'Epidemiology, Biostatistics, Global Health Research, Health Economics, Vaccine Policy',
      experience: '20+ years',
      currentRole: 'Assistant Professor of Medical Statistics and Epidemiology, London School of Hygiene & Tropical Medicine (LSHTM)',
      background: 'Professor Willis Ayieko is an accomplished epidemiologist, biostatistician, and global health researcher with over two decades of experience in health systems research, clinical epidemiology, and implementation science. His work spans Africa and international research institutions, with a strong focus on improving child health outcomes, strengthening health systems, and advancing evidence-based policy and practice in low- and middle-income countries.',
      detailedProfile: 'Dr. Ayieko currently serves as an Assistant Professor of Medical Statistics and Epidemiology at the London School of Hygiene & Tropical Medicine (LSHTM), where he is also a Statistician with the Mwanza Intervention Trials Unit (MITU) in Tanzania. In this role, he provides advanced statistical leadership and methodological expertise across large-scale clinical trials and public health research programs, supporting design, analysis, and interpretation of complex health data to inform policy and practice.\n\nPrior to this, Dr. Ayieko held senior research leadership roles at the Kenya Medical Research Institute (KEMRI)–Wellcome Trust Research Programme, where he served as Lead Epidemiologist for the Clinical Information Network (CIN). In this capacity, he played a pivotal role in strengthening data systems and improving quality of paediatric care across Kenyan hospitals through the use of real-time clinical data, audit, and feedback mechanisms. His work contributed significantly to shaping national approaches to quality improvement in hospital care.\n\nHis earlier career includes postdoctoral research at the Health Services Implementation Research and Clinical Excellence Collaboration (SIRCLE), where he focused on translating research evidence into improved clinical practice, as well as progressive roles within KEMRI–Wellcome Trust as a Research Officer and Assistant Research Officer. Across these roles, he has led and contributed to major multicenter studies, including longitudinal research on pediatric hospital admissions and large-scale cost-effectiveness analyses of vaccines and child health interventions.\n\nDr. Ayieko holds a PhD in Epidemiology and Biostatistics from the University of Amsterdam, as well as a Master of Science and Postgraduate Diploma in Epidemiology from LSHTM, one of the world\'s leading institutions in public health. He also earned a Bachelor of Science from the University of Nairobi, grounding his career in both local and global academic excellence.\n\nInternationally, Dr. Ayieko has held prestigious academic and research appointments, including serving as an Honorary Visiting Research Fellow at the University of Oxford\'s Nuffield Department of Medicine and as Adjunct Faculty at Pwani University in Kenya. These roles reflect his recognition as a thought leader and his commitment to building research capacity and academic collaboration across institutions.\n\nHis research portfolio is distinguished by high-impact contributions in child health, health economics, vaccine policy, and health systems strengthening. Notably, he has contributed to landmark studies assessing the cost-effectiveness of pneumococcal vaccines in Kenyan infants, as well as large multicenter hospital studies involving thousands of patients and health workers. His work has directly informed policy decisions and resource allocation in maternal and child health programs.\n\nDr. Ayieko has authored multiple peer-reviewed scientific publications and presented his work at leading international conferences, including the International Symposium on Pneumococci and Pneumococcal Diseases and global health economics forums. His expertise spans advanced statistical analysis, epidemiological modeling, and the application of data to improve clinical care and public health outcomes.\n\nIn addition to his technical expertise, Dr. Ayieko is recognized for his strong analytical, communication, and mentorship skills. He is highly proficient in a wide range of statistical and data management tools and has played a key role in building capacity among researchers and healthcare professionals.\n\nOverall, Dr. Philip Ayieko is a highly respected global health expert whose work bridges rigorous research and practical health system improvements. His contributions continue to shape evidence-based healthcare delivery, particularly in resource-limited settings, with lasting impact on policy, practice, and population health outcomes.',
      achievements: [
        'Leadership in multi-country epidemiological studies',
        'Extensive publications in peer-reviewed journals',
        'Expert consultation for international health organizations',
        'Cost-effectiveness analyses of vaccines and child health interventions',
        'Statistical leadership in large-scale clinical trials',
        'Health systems strengthening across Kenyan hospitals',
        'Academic appointments at Oxford, LSHTM, and Pwani University',
        'Mentorship and capacity building for researchers'
      ],
      education: [
        'PhD in Epidemiology and Biostatistics - University of Amsterdam',
        'MSc in Medical Statistics - London School of Hygiene & Tropical Medicine',
        'BSc in Mathematics - University of Nairobi'
      ],
      quote: 'Evidence-based approaches are cornerstone of effective public health interventions.'
    },
    {
      id: 'daisy-onyango',
      name: 'Daisy Onyango',
      title: 'Treasurer to the Board',
      image: '/images/Daisy.png',
      expertise: 'Health Informatics, Information Management, Digital Health Systems, Healthcare Data Security',
      experience: '10+ years',
      currentRole: 'Health Informatics Officer, Digital Health Agency',
      background: 'Daisy Onyango is a seasoned Information Management professional with over 10 years of experience driving digital transformation across Kenya\'s public health, legal, and government sectors. Currently serving as a Health Informatics Officer at the Digital Health Agency, Daisy specializes in building secure, high-accuracy healthcare systems designed to optimize institutional efficiency and service delivery. Her diverse career includes managing critical Health Information Systems for Nairobi City County, coordinating data for the national COVID-19 vaccination program, and overseeing large-scale digitization projects for the Kenyan Judiciary and National Museums.',
      detailedProfile: 'Throughout her career, Daisy has demonstrated exceptional leadership in health informatics, combining technical expertise with strategic vision. Her work at Nairobi City County involved managing complex health data systems that serve millions of residents, ensuring data accuracy and system reliability. During the COVID-19 pandemic, she played a crucial role in coordinating vaccination data systems, contributing to national public health response efforts.\n\nHer experience with the Digital Health Agency has positioned her at the forefront of Kenya\'s digital health transformation, where she continues to innovate and implement cutting-edge healthcare technology solutions. Her work with the Kenyan Judiciary and National Museums showcases her versatility in applying health informatics principles across different government sectors.\n\nDaisy\'s academic foundation includes a B.Sc. in Information Science from Kenyatta University, and she is currently pursuing an MBA in Healthcare Management to bridge the gap between technical informatics and strategic health leadership. This commitment to continuous learning reflects her dedication to staying current with emerging healthcare technologies and management practices.\n\nHer expertise spans health information systems architecture, data security, project management, and digital health strategy, making her a valuable asset to AFADU\'s mission of promoting appropriate drug use through technology-enabled solutions.',
      achievements: [
        'Managed critical Health Information Systems for Nairobi City County',
        'Coordinated data for national COVID-19 vaccination program',
        'Led digitization projects for Kenyan Judiciary and National Museums',
        'Health informatics leadership at Digital Health Agency',
        'B.Sc. in Information Science from Kenyatta University',
        'Pursuing MBA in Healthcare Management',
        '10+ years experience in digital transformation',
        'Expertise in healthcare data security and system optimization'
      ],
      education: [
        'B.Sc. in Information Science - Kenyatta University',
        'MBA in Healthcare Management (In Progress) - Current Program'
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
      title: 'Secretary to the Board & Executive Director',
      image: '/images/Andrew Oluga.png',
      expertise: 'Pharmaceuticals, Health Systems, Community Development, Project Management, Grant Writing, Monitoring & Evaluation',
      experience: '22+ years',
      currentRole: 'Executive Director, AFADU',
      background: 'Andrew Oluga is a Pharmaceuticals, Health Systems, Community Development, and Project Management professional, with over 22 years of experience spanning policy development and analysis, pharmaceutical care practice, health systems strengthening, program and project design and management, grant writing, and comprehensive monitoring and evaluation (M&E), including logical frameworks and theory of change. Mr. Oluga is also skilled in strategy development, organizational restructuring, participatory approaches, and rational medicines management.',
      detailedProfile: 'Mr. Oluga has participated in complex multi-country assignments with Intergovernmental Authority on Development (IGAD), United Nations Development Programme (UNDP), UNICEF, British Council, Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ), Ecumenical Pharmaceutical Network (EPN), and other international organizations. He has proven ability to design systems, conduct operational research, build institutional capacity, and deliver high-impact policy and programmatic solutions.\n\nHis expertise encompasses pharmaceutical care practice, health systems strengthening, program design and management, grant writing, and comprehensive M&E including logical frameworks and theory of change. This diverse skill set enables him to address complex healthcare challenges through integrated, evidence-based approaches.\n\nAndrew has demonstrated exceptional leadership in strategy development and organizational restructuring, with strong capabilities in participatory approaches that engage stakeholders and ensure sustainable program implementation. His work with international organizations highlights his ability to operate effectively in multi-cultural environments and deliver results that align with global health priorities.\n\nHis specialization in rational medicines management positions him as a key thought leader in appropriate drug use advocacy and policy development, contributing significantly to AFADU\'s mission and strategic objectives.',
      achievements: [
        'Multi-country assignments with IGAD, UNDP, UNICEF, British Council, GIZ',
        'Projects with Ecumenical Pharmaceutical Network (EPN)',
        'Systems design and operational research',
        'Institutional capacity building',
        'Policy and programmatic solutions',
        'Strategy development and organizational restructuring',
        'Participatory approaches to program implementation',
        'Grant writing and comprehensive M&E frameworks',
        'Rational medicines management expertise'
      ],
      education: [
        'Pharmacy Degree - University of Nairobi',
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
      expertise: 'Pharmaceutical Supply Chain, Health Systems, Programme Implementation, Partnerships, Donor Engagement',
      experience: '22+ years',
      currentRole: 'Supply Chain Specialist, AFADU',
      background: 'David Dianga is a highly experienced pharmaceutical and health supply chain specialist with over 22 years of practice, including 14 years in HIV, TB, and malaria programmes. As a Technical Officer, Chain Supply Management at Amref Health Africa, he provided strategic leadership in programme implementation, partnerships, and donor engagement, working closely with government and global partners.',
      detailedProfile: 'David has demonstrated exceptional expertise in health systems strengthening, programme design, and multi-stakeholder coordination. His work at Amref Health Africa involves managing complex supply chain systems that ensure essential medicines reach communities in need across Kenya.\n\nThroughout his career, David has been recognized for his ability to coordinate large-scale health programmes and build effective partnerships with government agencies, international donors, and community organizations. His experience spans technical implementation, strategic planning, and operational management.\n\nHis specialization in pharmaceutical supply chain management has been critical in ensuring reliable access to essential medicines, particularly in resource-limited settings. David\'s work contributes directly to AFADU\'s mission of promoting rational medicine use through efficient supply systems and program coordination.\n\nDavid\'s expertise includes health systems strengthening, programme design, multi-stakeholder coordination, and donor relationship management. His comprehensive understanding of both technical and programmatic aspects makes him a valuable asset to AFADU\'s leadership team.',
      achievements: [
        '22+ years experience in pharmaceutical supply chain management',
        '14 years specialized experience in HIV, TB, and malaria programmes',
        'Technical Officer, Supply Chain Management at Amref Health Africa',
        'Strategic leadership in programme implementation',
        'Expertise in partnerships and donor engagement',
        'Health systems strengthening across multiple health programmes',
        'Multi-stakeholder coordination and management'
      ],
      education: [
        'Pharmacy Degree - University of Nairobi',
        'Advanced Pharmaceutical Supply Chain Management Training',
        'Health Systems Strengthening Certifications'
      ],
      quote: 'Efficient supply chains are backbone of accessible and quality healthcare delivery.'
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
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-5 rounded-full mb-8">
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
