import React from 'react';
import { useRouter, Link } from '../components/Router';
import { SHOWCASE_WEBSITES } from '../data';
import { ExternalLink, Globe2, ArrowRight, ChevronLeft, ShieldAlert } from 'lucide-react';

export default function AiWebDevelopment() {
  const { navigate } = useRouter();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="ai-web-portfolio-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center gap-2 mb-6">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/portfolio" className="hover:underline text-gray-400">Portfolio</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">AI Web Development</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            AI Web Development Showcases
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            A premium collection of {SHOWCASE_WEBSITES.length} live website showcases custom-vetted and hosted. These platforms demonstrate our core commitment to extreme performance, gorgeous mobile responsiveness, and clean CSS layouts.
          </p>
        </div>
      </section>

      {/* Grid of Live Sites */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="showcase-grid-block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SHOWCASE_WEBSITES.map((site, index) => {
            // Generate a clean representation domain name
            const displayDomain = site.url
              .replace('https://', '')
              .replace('http://', '')
              .replace('/', '');

            return (
              <div
                key={index}
                className="group bg-[#121212] border border-white/5 hover:border-[#FFD500]/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Mock Browser Window Graphic Header */}
                <div className="bg-[#1C1C1C] px-4 py-3 flex items-center gap-1.5 border-b border-white/5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="text-[10px] text-gray-500 font-mono ml-4 truncate max-w-[150px]">
                    {displayDomain}
                  </span>
                </div>

                {/* Styled CSS mockup body representing screenshot */}
                <div className="p-8 bg-gradient-to-br from-zinc-900 to-[#121212] flex flex-col items-center justify-center min-h-[160px] relative">
                  <div className="absolute top-2 right-2 text-[#FFD500]/10 group-hover:text-[#FFD500]/20 transition-all font-display font-extrabold text-5xl">
                    {index + 1}
                  </div>
                  
                  <Globe2 size={40} className="text-[#FFD500]/40 group-hover:text-[#FFD500] group-hover:scale-110 transition-all duration-300 mb-4" />
                  
                  <h3 className="text-sm font-bold text-center text-white font-mono truncate max-w-full">
                    {site.title}
                  </h3>
                  <p className="text-[10px] text-[#FFD500] uppercase font-semibold mt-1 tracking-wider">
                    Live Demo Ready
                  </p>
                </div>

                {/* Interactive Action Button Footer */}
                <div className="p-4 bg-[#1C1C1C] border-t border-white/5">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`showcase-visit-btn-${index}`}
                    className="w-full py-2.5 bg-[#FFD500] text-[#0A0A0A] hover:bg-[#ffe033] font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-all"
                  >
                    Visit Live Site <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-24 bg-[#121212] border-t border-b border-white/5 text-center" id="ai-web-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Want a Custom High-Converting Website Like This?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            All our websites are developed using clean code structures, fast asset compression, and mobile-first responsive systems. Let Ankit design your brand launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              id="ai-web-cta-bottom-btn"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all"
            >
              Contact Us Now
            </button>
            <Link
              href="/portfolio"
              id="ai-web-back-portfolio"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all"
            >
              Back to Portfolio Directory
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
