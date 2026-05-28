'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const partners = [
  { id: 'react-africa', name: 'ReAct Africa', logo: '/images/reactafrica.png', category: 'Strategic Partner' },
  { id: 'corsum', name: 'CoRSUM', logo: '/images/corsum.png', category: 'Strategic Partner' },
  { id: 'hifa', name: 'HIFA', logo: '/images/hifa.png', category: 'Knowledge Partner' },
  { id: 'moh-kenya', name: 'Ministry of Health Kenya', logo: '/images/moh.png', category: 'Government Partner' },
  { id: 'ppb', name: 'Pharmacy and Poisons Board', logo: '/images/ppb.png', category: 'Regulatory Partner' },
  { id: 'chak', name: 'Christian Health Association of Kenya', logo: '/images/chaok.jpeg', category: 'Implementation Partner' },
  { id: 'psk', name: 'Pharmaceutical Society of Kenya', logo: '/images/psko.jpeg', category: 'Professional Partner' },
  { id: 'kpa', name: 'Kenya Pharmaceutical Association', logo: '/images/kpa.png', category: 'Professional Partner' },
  { id: 'universities', name: 'Universities & Tertiary Colleges', logo: 'https://www.heafkenya.org/images/heaf-logo.png', category: 'Academic Partner' },
];

const Partnerships = () => {
  return (
    <>
      <Navbar />

      {/* ── OUR CLIENTS & PARTNERS ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            OUR PARTNERS &amp; COLLABORATORS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-16 items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-40 max-w-full object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      const fb = document.createElement('span');
                      fb.className = 'font-bold text-blue-900 text-sm text-center';
                      fb.textContent = partner.name;
                      parent.appendChild(fb);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── PARTNERSHIP TYPES ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            TYPES OF PARTNERSHIPS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                title: 'Strategic Partnerships',
                desc: 'Long-term collaborations with international organizations to advance our mission and amplify impact through joint implementation, resource mobilization, and knowledge sharing.',
                items: ['Joint program implementation', 'Resource mobilization', 'Knowledge sharing'],
              },
              {
                title: 'Government Partnerships',
                desc: 'Collaboration with national and county government agencies to align with health priorities and policies through technical support, regulatory compliance, and programme implementation.',
                items: ['Policy development support', 'Program implementation', 'Regulatory compliance'],
              },
              {
                title: 'Professional & Academic Partnerships',
                desc: 'Working with professional associations and academic institutions to build capacity, drive excellence, and develop standards across the healthcare sector.',
                items: ['Workforce development', 'Research collaboration', 'Standards development'],
              },
            ].map((pt) => (
              <div key={pt.title}>
                <h3 className="font-bold text-blue-900 text-lg leading-snug mb-3">{pt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{pt.desc}</p>
                <ul className="space-y-1.5">
                  {pt.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── WHY PARTNER WITH US ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-12">
            WHY PARTNER WITH US
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
            {[
              { title: 'Enhanced Reach', desc: 'Our partnerships enable us to reach more communities and healthcare facilities across all 47 counties of Kenya.' },
              { title: 'Shared Expertise', desc: 'Collaborating with diverse organizations brings specialized knowledge and skills to strengthen our programs.' },
              { title: 'Resource Mobilization', desc: 'Partnerships help us leverage additional resources for greater impact and long-term sustainability.' },
              { title: 'Policy Influence', desc: 'Working with government and international partners strengthens our advocacy and policy development capacity.' },
            ].map((b) => (
              <div key={b.title}>
                <h3 className="font-bold text-blue-900 text-lg leading-snug mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ──────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-100" />

      {/* ── BECOME OUR PARTNER ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-blue-900 text-2xl lg:text-3xl tracking-wide mb-4">
            BECOME OUR PARTNER
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
            Join our network of partners working to transform healthcare in Kenya.
            Whether you are an organization, government agency, or academic institution,
            together we can create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              Explore Partnership
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3.5 text-blue-900 text-sm font-bold uppercase tracking-widest rounded-full border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partnerships;
