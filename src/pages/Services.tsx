import React from 'react';
import { SERVICES } from '../data';
import { useRouter, Link } from '../components/Router';
import { getServiceIcon } from './Home';
import { ChevronRight, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { PagePath } from '../types';

export default function Services() {
  const { navigate } = useRouter();

  const handleBookConsultation = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="services-page-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5" id="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            Our Professional Services
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Full-stack digital solutions under one roof. We blend modern software systems, generative AI models, and performance campaigns to scale businesses.
          </p>
        </div>
      </section>

      {/* Services Grid Selection Container */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-grid-block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={s.slug}
              id={`service-grid-item-${s.slug.split('/').pop()}`}
              className="group p-8 bg-[#121212] border border-white/5 rounded-2xl hover:border-[#FFD500]/30 hover:shadow-[0_0_20px_rgba(255,213,0,0.05)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Accent Icon Wrapper */}
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD500]/10 group-hover:border-[#FFD500]/20 transition-all">
                  {getServiceIcon(s.iconName, "w-7 h-7 text-[#FFD500]")}
                </div>

                <h3 className="text-xl font-bold group-hover:text-[#FFD500] transition-colors mb-3">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {s.shortDesc}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs text-[#FFD500] font-semibold uppercase tracking-wider">
                <span>Learn More</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Service Guarantees Strip */}
      <section className="py-16 bg-[#121212] border-t border-b border-white/5" id="services-guarantees">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-4 space-y-2">
              <ShieldCheck className="text-[#FFD500] w-8 h-8 mx-auto md:mx-0" />
              <h4 className="text-base font-bold">20+ Accredited Credentials</h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Each campaign structure, codebase, and API routing follows optimized frameworks vetted by top-tier tech providers.
              </p>
            </div>
            <div className="p-4 space-y-2">
              <ShieldCheck className="text-[#FFD500] w-8 h-8 mx-auto md:mx-0" />
              <h4 className="text-base font-bold">Conversion-First Layout</h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                We design with deliberate intent — optimizing page load speeds, styling actionable buttons, and capturing WhatsApp leads.
              </p>
            </div>
            <div className="p-4 space-y-2">
              <ShieldCheck className="text-[#FFD500] w-8 h-8 mx-auto md:mx-0" />
              <h4 className="text-base font-bold">Round-The-Clock Support</h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Once launched, we support your digital assets with responsive support to update content layouts and modify configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-24 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="services-bottom-cta">
        <h2 className="text-3xl font-display font-bold">
          Ready to Deploy Your Customized Solution?
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          Reach out directly to coordinate design templates, automate operations pipelines, or schedule performance-tested marketing campaigns.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleBookConsultation}
            id="services-bottom-cta-btn"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,213,0,0.15)]"
          >
            Consult With Ankit
          </button>
          <a
            href="https://wa.me/916350131379"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
