'use client';

import Navbar from '@/components/Navbar';

const photos = [
  '/images/boardroom.png',
  '/images/image2.png',
];

const About = () => {
  return (
    <>
      <Navbar />

      {/* ── 1. MAIN HERO SECTION — split left text / right image marquee ── */}
      <section className="bg-blue-950">
        <div className="max-w-7xl mx-auto">

          {/* Top split: text left, marquee right */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — text block */}
            <div className="px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white uppercase leading-tight mb-8">
                Action for Appropriate Drug Use
              </h2>
              <p className="text-blue-200 text-base leading-relaxed mb-5" style={{ textAlign: 'justify' }}>
                AFADU harnesses the expertise of a diverse multidisciplinary team comprising medical doctors,
                pharmacists, public health specialists, epidemiologists, community health experts, researchers,
                and health systems analysts with over 18 years of experience. This seasoned team is adept at
                executing impactful programmes across Kenya's 47 counties.
              </p>
              <p className="text-blue-200 text-base leading-relaxed" style={{ textAlign: 'justify' }}>
                Action for Appropriate Drug Use (AFADU) sets the national standard for evidence-based
                pharmaceutical systems strengthening and rational use of medicines in Kenya. Through our
                work, we transform healthcare delivery, build community resilience, and promote health
                equity and accountability.
              </p>
            </div>

            {/* RIGHT — scrolling photo marquee */}
            <div className="overflow-hidden h-72 lg:h-auto relative">
              <div className="photo-marquee flex h-full">
                {[...photos, ...photos].map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-72 lg:w-80 h-full"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Full-width text below split */}
          <div className="px-8 sm:px-12 lg:px-16 py-10 border-t border-white/10">
            <p className="text-blue-200 text-base leading-relaxed max-w-5xl" style={{ textAlign: 'justify' }}>
              For close to two decades, AFADU has implemented several multi-sector public health and pharmaceutical
              systems programmes across Kenya, under bilateral and multilateral programme agreements that annually
              assist millions of the most vulnerable communities, health workers, and patients across the country.
            </p>
          </div>

          {/* Stats bar — cyan numbers, white labels */}
          <div className="px-8 sm:px-12 lg:px-16 pb-16 pt-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '18+', label: 'Years of Experience' },
                { value: '47', label: 'Counties Reached' },
                { value: '5,000+', label: 'Health Workers Trained' },
                { value: '1M+', label: 'Lives Impacted' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-5xl font-bold text-cyan-400 uppercase leading-none mb-2">{s.value}</div>
                  <div className="text-white font-bold text-sm uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. VISION · MISSION · RALLYING CALL ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">Our Foundation</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-4xl font-bold text-blue-950 uppercase">Vision, Mission &amp; Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vision',
                text: 'A healthy society with equitable access to safe quality-assured medicines that are used rationally, responsibly, and effectively to achieve optimal health and well-being.',
                accent: 'border-blue-700',
              },
              {
                title: 'Mission',
                text: 'To strengthen health systems and empower communities through evidence-based interventions, strategic partnerships, and advocacy that promote equitable access to quality-assured medicines and their safe, rational, and effective use.',
                accent: 'border-green-600',
              },
              {
                title: 'Rallying Call',
                text: 'Championing universal access to quality-assured medicines and their rational use — driving evidence-based change at community, county, and national levels across Kenya.',
                accent: 'border-blue-500',
              },
            ].map((v) => (
              <div key={v.title} className={`rounded-xl p-8 border-l-4 ${v.accent} border border-gray-100 shadow-sm`}>
                <h3 className="font-display text-xl font-bold text-blue-950 uppercase mb-4">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE — split text + image (navy) ────────────────────── */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-2xl overflow-hidden h-80 lg:h-96 bg-cover bg-center shadow-xl"
              style={{ backgroundImage: 'url(/images/image1.png)' }}
            />
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-0.5 bg-green-500" />
                <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white uppercase leading-tight mb-6">Who We Are</h2>
              <p className="text-blue-200 text-base leading-relaxed mb-5">
                AFADU is a nationally recognized Kenyan NGO established in 2008 by a multidisciplinary team of
                medical doctors, pharmacists, public health specialists, epidemiologists, and health systems
                experts committed to advancing the rational and safe use of medicines.
              </p>
              <p className="text-blue-200 text-base leading-relaxed mb-8">
                For more than eighteen years, AFADU has remained at the forefront of pharmaceutical systems
                strengthening and Rational Use of Medicines in Kenya, championing evidence-based interventions
                aimed at improving medicine access, patient safety, and health equity.
              </p>
              <a
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-colors duration-200"
              >
                Explore Our Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-green-600" />
              <span className="text-xs font-bold text-green-700 tracking-widest uppercase">What Guides Us</span>
              <span className="w-8 h-0.5 bg-green-600" />
            </div>
            <h2 className="font-display text-4xl font-bold text-blue-950 uppercase">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Transparency & Integrity', desc: 'Upholding openness, ethical conduct, and responsible stewardship of resources.', accent: 'border-blue-700' },
              { title: 'Professionalism', desc: 'Maintaining technical excellence, competence, and quality standards across all programs.', accent: 'border-green-600' },
              { title: 'Accountability', desc: 'Ensuring measurable impact, responsible implementation, and results-based management.', accent: 'border-blue-500' },
              { title: 'Respect for Life & Human Rights', desc: 'Promoting dignity, equity, patient safety, and ethical healthcare at all levels.', accent: 'border-green-700' },
              { title: 'Strategic Partnerships', desc: 'Leveraging collective expertise and partnerships for sustainable long-term impact.', accent: 'border-blue-900' },
              { title: 'Community Empowerment', desc: 'Strengthening health literacy, participation, and locally driven solutions.', accent: 'border-green-800' },
            ].map((v) => (
              <div key={v.title} className={`rounded-xl p-7 border-l-4 ${v.accent} border border-gray-100 shadow-sm`}>
                <h3 className="font-display text-base font-bold text-blue-950 uppercase mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GEOGRAPHIC COVERAGE — split (navy) ────────────────────────── */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-0.5 bg-green-500" />
                <span className="text-xs font-bold text-green-400 tracking-widest uppercase">National Coverage</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white uppercase leading-tight mb-6">Geographic Reach</h2>
              <p className="text-blue-200 text-base leading-relaxed mb-8">
                AFADU is a national organization with operational capacity across all 47 Counties of Kenya,
                working through county governments, health facilities, community health systems, civil society
                networks, professional associations, and academic institutions.
              </p>
              <div className="space-y-3">
                {[
                  'National referral institutions & county referral hospitals',
                  'Primary healthcare facilities & dispensaries',
                  'Rural, underserved communities & informal settlements',
                  'Schools, universities & community training settings',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span className="text-blue-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '47', label: 'Counties', sub: 'All counties of Kenya' },
                { value: '200+', label: 'Facilities', sub: 'Health facilities supported' },
                { value: '1M+', label: 'People', sub: 'Community members reached' },
                { value: '18+', label: 'Years', sub: 'Of national programming' },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
                  <div className="font-display text-3xl font-bold text-cyan-400 uppercase mb-1">{s.value}</div>
                  <div className="text-green-400 text-xs font-bold uppercase tracking-wider mb-0.5">{s.label}</div>
                  <div className="text-blue-300 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LEADERSHIP TEASER ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-green-600" />
            <span className="text-xs font-bold text-green-700 tracking-widest uppercase">The People</span>
            <span className="w-8 h-0.5 bg-green-600" />
          </div>
          <h2 className="font-display text-4xl font-bold text-blue-950 uppercase mb-4">Leadership &amp; Governance</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed mb-10">
            AFADU is governed by a distinguished multidisciplinary board comprising experts in public health,
            epidemiology, pharmaceuticals, health informatics, research, and health systems strengthening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/leadership"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-900 text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-blue-800 transition-colors duration-200"
            >
              Meet the Board
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-blue-900 text-sm font-bold uppercase tracking-wide rounded-full border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
