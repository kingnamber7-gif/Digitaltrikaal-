import React from 'react';
import { useRouter, Link } from '../components/Router';
import { REVIEWS } from '../data';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function Reviews() {
  const { navigate } = useRouter();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="reviews-page-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Reviews</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            What People Say
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real customer experiences. Genuine business feedback. See how Ankit Kumar helps creators and local brands grow using advanced AI and design assets.
          </p>
        </div>
      </section>

      {/* Social Proof Stats Banner Block */}
      <section className="py-12 bg-zinc-900 border-b border-white/5" id="reviews-stats-bar">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base font-semibold">
            <span className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Star size={16} className="fill-[#FFD500] text-[#FFD500]" /> ⭐ 4.9/5 Rating
            </span>
            <span className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <MessageSquare size={16} className="text-[#FFD500]" /> 67+ Happy Reviews
            </span>
            <span className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <ShieldCheck size={16} className="text-[#FFD500]" /> 15+ Project Examples
            </span>
          </div>
        </div>
      </section>

      {/* Main Reviews Card Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="reviews-grid-block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="group p-8 bg-[#121212] border border-white/5 hover:border-[#FFD500]/30 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#FFD500] text-[#FFD500] stroke-[1.5]" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-6 font-light">
                  "{rev.content}"
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-4">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FFD500] transition-colors">{rev.name}</h4>
                  <p className="text-[11px] text-gray-500 font-medium">{rev.role}</p>
                </div>
                {rev.verified && (
                  <span className="text-[9px] bg-green-500/10 border border-green-500/20 text-green-400 font-bold uppercase px-1.5 py-0.5 rounded tracking-wider flex items-center gap-1 shrink-0">
                    <CheckCircle2 size={10} className="stroke-[3]" /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Prompt to leave a review card */}
          <div className="p-8 bg-[#0E0E0E] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
            <MessageSquare size={36} className="text-[#FFD500]/40" />
            <div>
              <h4 className="text-sm font-bold">Have We Worked Together?</h4>
              <p className="text-xs text-gray-500 mt-1.5 max-w-[220px] leading-relaxed mx-auto">
                We value client feedback. Send Ankit a review of your experience directly via email or WhatsApp!
              </p>
            </div>
            <button
              onClick={handleContactClick}
              id="reviews-submit-feedback-btn"
              className="px-4 py-2 bg-white/5 hover:bg-[#FFD500] hover:text-[#0A0A0A] text-white border border-white/10 text-xs font-bold rounded-lg transition-all"
            >
              Send Your Feedback
            </button>
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-[#121212] border-t border-b border-white/5 text-center" id="reviews-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Join Rohan, Priya, Vikram, and dozens of other creators who launched responsive sites and automated client campaigns with Digital Trikaal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              id="reviews-cta-btn-bottom"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all"
            >
              Contact Us Now
            </button>
            <a
              href="https://wa.me/916350131379"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Chat on WhatsApp <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
