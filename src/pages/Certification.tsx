import React from 'react';
import { useRouter, Link } from '../components/Router';
import { CERTIFICATIONS } from '../data';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, GraduationCap } from 'lucide-react';

export default function Certification() {
  const { navigate } = useRouter();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="certifications-page-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Certification</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            Certifications & Learning
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Vetted credentials. Absolute technical expertise. Explore the 20+ verified milestones earned by Ankit Kumar across Python engineering, Prompt pipelines, and Google Cloud systems.
          </p>
        </div>
      </section>

      {/* Main Grid of Certificates */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="certs-grid-block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="group p-6 bg-[#121212] border border-white/5 hover:border-[#FFD500]/30 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Badge layout */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FFD500] group-hover:bg-[#FFD500]/10 transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                    <CheckCircle2 size={10} className="stroke-[3]" /> Verified ✓
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold group-hover:text-[#FFD500] transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    Issued By: <span className="text-gray-300">{cert.issuedBy}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cert-view-btn-${index}`}
                  className="w-full py-2.5 bg-white/5 hover:bg-[#FFD500] hover:text-[#0A0A0A] border border-white/10 hover:border-[#FFD500] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all"
                >
                  View Certificate <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}

          {/* Placeholders Card for missing rows */}
          <div className="p-6 bg-[#0E0E0E] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[220px]">
            <Award size={32} className="text-gray-600" />
            <div>
              <h3 className="text-sm font-semibold text-gray-400">Additional Credentials Coming Soon</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-[200px] leading-relaxed mx-auto">
                Ankit is actively auditing and integrating advanced Python, AI Agents, and cloud structures.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Verification Band */}
      <section className="py-20 bg-[#121212] border-t border-b border-white/5 text-center" id="certs-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Leverage Certified Power for Your Digital Brand
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Stop hiring unverified contractors with no structural proof. Our systems are backed by continuous training in Google Cloud, Simplilearn, and FutureSkills frameworks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              id="certs-cta-contact-btn"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all"
            >
              Hire Certified Developer
            </button>
            <a
              href="https://wa.me/916350131379"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all"
            >
              Chat Technical Details
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
