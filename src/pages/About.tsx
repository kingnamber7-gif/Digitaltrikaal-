import React from 'react';
import { useRouter, Link } from '../components/Router';
import { Sparkles, TrendingUp, Award, Star, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { navigate } = useRouter();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="about-page-container">
      
      {/* Hero Banner / Breadcrumbs */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5" id="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>About Meet Ankit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            Meet the Founder
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The visionary engineer bringing full-stack developer power and advanced artificial intelligence strategies to digital brands globally.
          </p>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-24 bg-white text-[#0A0A0A]" id="about-founder-bio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Visual Frame - Rounded Corner Rectangle Photo Crop */}
            <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-tr from-[#FFD500] to-yellow-500 opacity-20 blur-lg group-hover:opacity-35 transition duration-500" />
                <div className="relative bg-[#121212] border border-zinc-200 p-3 rounded-[24px] shadow-2xl overflow-hidden aspect-[4/5] flex flex-col justify-between">
                  
                  {/* Photo frame placeholder with exact aesthetic style */}
                  <div className="w-full h-full bg-zinc-900 rounded-[18px] overflow-hidden flex flex-col items-center justify-center relative border border-white/5">
                    <img
                      src="https://lh3.googleusercontent.com/pw/AP1GczN93OS94ofE9UutriR4VrO8GN_s9np1M5cFxj-njx9MjW5Q00HQ24_ky2fW9O4KEYjpHPXH5dsn6E_Fbr_LuPJ4NMhsF8RQz5wkqgKOtni3s4uAgmU=s800"
                      alt="Ankit Kumar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 bg-black text-white rounded-xl mt-3 flex items-center justify-between border border-white/10">
                    <div>
                      <h4 className="text-sm font-bold">Ankit Kumar</h4>
                      <p className="text-[10px] text-[#FFD500] uppercase tracking-widest">Founder, Developer & Creator</p>
                    </div>
                    <div className="text-[#FFD500] font-bold text-xs bg-white/10 px-2 py-1 rounded">
                      20+ Certs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rich Bio Text Panel */}
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed font-light text-sm sm:text-base">
              <span className="text-xs text-yellow-600 font-bold uppercase tracking-widest block">The Bio</span>
              
              <h2 className="text-3xl font-display font-extrabold text-[#0A0A0A] tracking-tight">
                Empowering Digital Innovators & Businesses
              </h2>

              <p className="text-lg leading-relaxed text-gray-800">
                Hi, I'm Ankit Kumar, the creator behind Digital Trikaal. I'm a YouTuber, Website Developer, and Digital Marketer with a strong passion for Artificial Intelligence and emerging technologies. My mission is to simplify complex AI concepts and make them accessible to everyone through practical tutorials, step-by-step guides, and real-world applications.
              </p>

              <p>
                At Digital Trikaal, I create high-quality content on AI tools, AI video creation, website development, digital marketing, online earning strategies, productivity, and the latest technology trends. Alongside content creation, I also provide professional website development and digital solutions to help individuals, creators, and businesses build a powerful online presence.
              </p>

              <p>
                As a lifelong learner, I have earned 20+ AI-related certifications and continuously explore new technologies, including Python, AI Engineering, AI App Development, and AI Agents, to stay ahead in the rapidly evolving tech industry. My goal is to educate, inspire, and empower people with practical knowledge that helps them grow their careers, businesses, and digital skills.
              </p>

              <p className="border-l-4 border-[#FFD500] pl-4 italic text-gray-600 font-normal">
                Whether you're a student, content creator, entrepreneur, freelancer, or business owner, Digital Trikaal is here to help you learn, build, and succeed in the AI-powered future.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleContactClick}
                  id="about-bio-cta"
                  className="w-full sm:w-auto px-6 py-3 bg-[#0A0A0A] hover:bg-[#FFD500] hover:text-[#0A0A0A] text-white font-bold text-sm rounded-lg transition-all duration-300"
                >
                  Consult Ankit Directly
                </button>
                <a
                  href="mailto:digitaltrikaal@gmail.com"
                  className="w-full sm:w-auto text-center px-6 py-3 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-[#0A0A0A] font-semibold text-sm rounded-lg transition-all"
                >
                  Email Business Inbox
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Values Strip */}
      <section className="py-24 bg-[#0A0A0A] border-t border-b border-[#ffd500]/10" id="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl font-display font-bold tracking-tight mt-2">
              Driven by Real World Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#121212] border border-white/5 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#FFD500]/10 rounded-xl flex items-center justify-center">
                <Sparkles className="text-[#FFD500] w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Simplify AI</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Breaking down the complexity of neural models, prompt mechanics, and backend code so that anyone can integrate them into real business pipelines immediately.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-white/5 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#FFD500]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#FFD500] w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Empower Growth</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We design website user paths specifically to maximize email leads, direct inquiries, and community sign-ups to ensure your digital platform actually scales.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-white/5 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#FFD500]/10 rounded-xl flex items-center justify-center">
                <Award className="text-[#FFD500] w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Deliver Real Results</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                No bloated visual features or system telemetry "larping". We focus on fast load speeds, verified credentials, and high click-through rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Stats Row */}
      <section className="bg-gradient-to-r from-zinc-950 via-[#121212] to-black py-16" id="about-milestones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">20+</div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">AI Certifications</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">15+</div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Successful Projects</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">67+</div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Happy Client Reviews</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">4.9/5</div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Satisfied Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5 text-center" id="about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Want to Work Directly with Ankit?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Fill out our comprehensive contact inquiry form or send a message directly on WhatsApp to coordinate web designs or AI agent automations.
          </p>
          <div>
            <button
              onClick={handleContactClick}
              id="about-bottom-cta-btn"
              className="px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,213,0,0.15)]"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
