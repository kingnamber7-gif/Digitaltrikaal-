import React from 'react';
import { useRouter, Link } from '../components/Router';
import { SERVICES } from '../data';
import { getServiceIcon } from './Home';
import { ChevronLeft, Check, ArrowRight, ShieldCheck, PlayCircle } from 'lucide-react';
import { PagePath } from '../types';

export default function ServiceDetail() {
  const { currentPath, navigate } = useRouter();

  // Find the service that matches the current clean URL path
  const service = SERVICES.find((s) => s.slug === currentPath);

  if (!service) {
    // Graceful fallback if path is not found
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0A0A0A] text-white p-6">
        <h2 className="text-2xl font-display font-bold text-red-500 mb-2">Service Route Not Found</h2>
        <p className="text-gray-400 text-sm mb-6">The requested service path does not exist in our directory.</p>
        <Link href="/services" className="px-6 py-2.5 bg-[#FFD500] text-[#0A0A0A] font-bold rounded-lg hover:bg-yellow-400">
          Return to Services
        </Link>
      </div>
    );
  }

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id={`service-detail-${service.slug.split('/').pop()}`}>
      
      {/* Detail Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center gap-2 mb-6">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/services" className="hover:underline text-gray-400">Services</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFD500]/10 border border-[#FFD500]/20 rounded-full text-xs font-semibold text-[#FFD500]">
                {getServiceIcon(service.iconName, "w-4 h-4 text-[#FFD500]")} Premium Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            <button
              onClick={handleGetStarted}
              id="service-detail-hero-cta"
              className="shrink-0 px-6 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,213,0,0.15)] flex items-center justify-center gap-2"
            >
              Get This Service <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content: What is + Side Details */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Educational Explanation & Bullet Lists */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* What is Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight border-b border-white/5 pb-4">
                What is {service.title}?
              </h2>
              {service.description.map((para, idx) => (
                <p key={idx} className="text-gray-300 leading-relaxed font-light text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* What's Included */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-display font-bold text-[#FFD500]">What's Included in This Service</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={18} className="text-[#FFD500] mt-0.5 shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who This Is For */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight">Who This Is For</h3>
              <div className="grid grid-cols-1 gap-4">
                {service.whoThisIsFor.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white/5 border border-white/5 rounded-xl flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FFD500]/10 text-[#FFD500] flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Trust Card & Action Details */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            
            {/* Trust Vetting Badge */}
            <div className="p-8 bg-[#121212] border-2 border-[#FFD500]/20 rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#FFD500] w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold text-base">Why Choose Us</h4>
                  <p className="text-xs text-gray-500">Digital Trikaal Standards</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                {service.whyChoose}
              </p>

              <div className="h-[1px] bg-white/5" />

              <div className="space-y-3">
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <Check size={14} className="text-[#FFD500]" /> 100% Customized Solutions
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <Check size={14} className="text-[#FFD500]" /> 20+ Tech Vetted Credentials
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <Check size={14} className="text-[#FFD500]" /> Direct Contact with Ankit
                </p>
              </div>

              <button
                onClick={handleGetStarted}
                id={`get-service-sidebar-btn-${service.slug.split('/').pop()}`}
                className="w-full py-3 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all text-sm"
              >
                Inquire For This Service
              </button>
            </div>

            {/* Quick Link to Portfolio Teaser */}
            <div className="p-6 bg-gradient-to-tr from-zinc-900 to-[#121212] border border-white/5 rounded-xl space-y-4">
              <h4 className="font-bold text-sm">Review Our Live Work Examples</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We maintain active portfolios of responsive netlify websites, high-CTR thumbnail folder links, and ads templates.
              </p>
              <Link
                href="/portfolio"
                id={`service-detail-portfolio-link-${service.slug.split('/').pop()}`}
                className="text-xs text-[#FFD500] font-semibold flex items-center gap-1.5 hover:underline"
              >
                Open Portfolio Showcase <ChevronLeft size={12} className="rotate-180" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#121212] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Looking for a Vetted Technical Strategy?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Fill out our inquiry form specifying budget constraints, target timelines, and mandatory service specifications, and we will get back to you shortly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleGetStarted}
              id={`service-bottom-cta-btn-inquire-${service.slug.split('/').pop()}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all"
            >
              Inquire Now
            </button>
            <Link
              href="/services"
              id="service-detail-back-to-directory"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all"
            >
              Back to Services Directory
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
