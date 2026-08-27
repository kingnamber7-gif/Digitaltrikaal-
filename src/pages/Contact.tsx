import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from '../components/Router';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: 'Under ₹25,000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mkolandj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.service,
          budget: formState.budget,
          message: formState.message,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: 'Website Development',
          budget: 'Under ₹25,000',
          message: '',
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again or reach out on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="contact-page-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5" id="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            Let's Build Something Amazing Together!
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Whether you need a professional website, AI-powered solutions, digital marketing, or creative content, we're here to help. Fill out the form or contact us directly, and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Info Right */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-form-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form Panel */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/5 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Send Ankit a Message</h2>
            
            {submitted ? (
              <div className="p-8 bg-[#FFD500]/10 border border-[#FFD500]/30 rounded-xl text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFD500]/20 rounded-full flex items-center justify-center mx-auto text-[#FFD500]">
                  <CheckCircle size={32} className="stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFD500]">Message Dispatched!</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                  Thanks! We'll get back to you shortly. Our team typically replies within 2 to 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-white/5 hover:bg-[#FFD500] hover:text-[#0A0A0A] border border-white/10 text-xs font-bold rounded-lg transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFD500] transition-colors text-sm text-white"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFD500] transition-colors text-sm text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFD500] transition-colors text-sm text-white"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Service Required *</label>
                    <select
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFD500] transition-colors text-sm text-white"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="AI Ad Generation">AI Ad Generation</option>
                      <option value="AI Content Creation">AI Content Creation</option>
                      <option value="Thumbnail Design">Thumbnail Design</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="AI Agent Development">AI Agent Development</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Google Ads Management">Google Ads Management</option>
                      <option value="Meta Ads Management">Meta Ads Management</option>
                      <option value="E-Book Creation">E-Book Creation</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Project Budget */}
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Project Budget (Optional)</label>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFD500] transition-colors text-sm text-white"
                  >
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Project Description *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Briefly describe your targets, timelines, and special requirements..."
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FFD500] transition-colors text-sm text-white resize-y"
                  />
                </div>

                {/* Error Banner */}
                {error && (
                  <p className="text-xs font-semibold text-red-500 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                    {error}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  id="contact-form-submit-btn"
                  className="w-full py-4 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(255,213,0,0.15)] flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Dispatching Message...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Information Panels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Details */}
            <div className="p-8 bg-[#121212] border border-white/5 rounded-2xl space-y-6">
              <h3 className="text-xl font-display font-bold text-[#FFD500]">Direct Channels</h3>
              
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD500]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Email Address</h4>
                    <a href="mailto:digitaltrikaal@gmail.com" className="text-white hover:text-[#FFD500] font-medium mt-1 block">
                      digitaltrikaal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD500]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Phone / WhatsApp</h4>
                    <span className="text-white font-medium mt-1 block">
                      +91 63501 31379
                    </span>
                    <a href="https://wa.me/916350131379" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#25D366] text-xs font-semibold mt-1 hover:underline">
                      <MessageCircle size={12} /> Launch Instant Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD500]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Business Location</h4>
                    <span className="text-gray-300 text-xs leading-relaxed mt-1 block">
                      Shop No. 5, Basement, Jeevan Jyoti Hospital, City Centre Mall, Near Bhadra, Rajasthan 335501
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Business Hours */}
            <div className="p-8 bg-[#121212] border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-[#FFD500]" />
                <h3 className="text-lg font-display font-bold">Business Hours</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Our support team and dev desks are active six days a week to review client tickets and update codes:
              </p>
              <div className="h-[1px] bg-white/5 my-2" />
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-400 font-medium">Monday – Saturday</span>
                <span className="text-white font-bold">10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-400 font-medium">Sunday</span>
                <span className="text-red-500 font-bold">Closed</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-12 bg-zinc-950 border-t border-b border-white/5" id="contact-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left mb-8">
            <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">Office Location</span>
            <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight mt-1">Visit Digital Trikaal Office</h2>
          </div>
          
          {/* Responsive Map Embed Container Vetted for standard coordinates */}
          <div className="w-full h-[320px] sm:h-[450px] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.454228966775!2d75.16664987627448!3d29.12185567539744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913df973b0a7ab7%3A0x6335f606f7bb6ecf!2sJeevan%20Jyoti%20Hospital!5e0!3m2!1sen!2sin!4v1715012345678!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale invert-[0.9] opacity-80"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Digital Trikaal Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
