import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessInfo } from '../data/businessData';

interface ContactSectionProps {
  initialProductInterest?: string;
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ initialProductInterest = '' }, ref) => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      product: initialProductInterest || 'Premium Main Doors',
      message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const productOptions = [
      'Premium Main Doors',
      'Designer Wooden Doors',
      'Modern Interior Doors',
      'Aluminium Windows & Sliding Systems',
      'UPVC Windows & Glazing',
      'Architectural Safety Grills',
      'Door Frames & Hardware',
      'Interior Solutions & Partitions',
      'Complete Architectural Package',
    ];

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError('');

      if (!formData.name.trim()) {
        setError('Please enter your full name.');
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 10) {
        setError('Please enter a valid 10-digit phone number.');
        return;
      }

      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B7A17B', '#E8D8BA', '#20201E', '#40916C'],
        });
      }, 700);
    };

    const handleWhatsAppSubmit = () => {
      const text = `Hello Vijaya Sai Enterprises,\n\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'N/A'}\nInterested in: ${formData.product}\nMessage: ${formData.message || 'I would like to request a quote and consultation.'}`;
      const url = `https://wa.me/919000457378?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    };

    return (
      <section id="contact" ref={ref} className="py-28 sm:py-36 bg-[#EAE6DD] text-[#20201E] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B7A17B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#8E7752]">
                Consultation & Enquiries
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#20201E] tracking-tight leading-[1.08] mb-4">
              Get in Touch with <br />
              <span className="italic font-normal text-[#8E7752]">Our Studio.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6B6964] font-light leading-relaxed">
              Visit our Gudivada workshop or send us your architectural blueprints for tailored sizing, wood selection, and quote estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Contact Cards & Business Info */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                {/* Proprietor & Address Card */}
                <div className="p-6 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EAE6DD] flex items-center justify-center text-[#8E7752] flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#20201E]">
                        {businessInfo.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#8E7752] uppercase tracking-wider mb-2">
                        Proprietor: {businessInfo.proprietor}
                      </p>
                      <p className="text-xs sm:text-sm text-[#6B6964] leading-relaxed">
                        {businessInfo.address.full}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Phones & WhatsApp */}
                <div className="p-6 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EAE6DD] flex items-center justify-center text-[#8E7752] flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#20201E] mb-2">
                        Direct Lines
                      </h4>
                      <div className="space-y-1.5 text-xs sm:text-sm">
                        <p>
                          <a
                            href={`tel:${businessInfo.phonePrimaryRaw}`}
                            className="font-medium text-[#20201E] hover:text-[#8E7752] transition-colors"
                          >
                            Primary: {businessInfo.phonePrimary}
                          </a>
                        </p>
                        <p>
                          <a
                            href={`tel:${businessInfo.phoneSecondaryRaw}`}
                            className="font-medium text-[#20201E] hover:text-[#8E7752] transition-colors"
                          >
                            Secondary: {businessInfo.phoneSecondary}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-6 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EAE6DD] flex items-center justify-center text-[#8E7752] flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#20201E] mb-1">
                        Business Hours
                      </h4>
                      <p className="text-xs text-[#6B6964]">{businessInfo.hours.weekdays}</p>
                      <p className="text-xs text-[#6B6964]">{businessInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action Banner */}
              <div className="p-6 rounded-2xl bg-[#181816] text-[#F5F2EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-serif text-lg text-white">Prefer WhatsApp?</h5>
                  <p className="text-xs text-white/70">Connect immediately with photographs or dimensions.</p>
                </div>
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba5a] transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Now
                </a>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Form & Embedded Location */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Form Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#F5F2EB] border border-[#DFD8CC] shadow-sm">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#20201E] mb-2">
                  Send an Architectural Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6964] mb-8 font-light">
                  Fill in your details below. Our team will review your requirements and reach out promptly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-xl bg-white border border-[#DFD8CC] text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#EAE6DD] text-[#8E7752] mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#8E7752]" />
                    </div>
                    <h4 className="font-serif text-2xl text-[#20201E] mb-2">
                      Enquiry Received
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B6964] max-w-md mx-auto mb-6">
                      Thank you for reaching out to Vijaya Sai Enterprises. We will contact you at <strong>{formData.phone}</strong> regarding <strong>{formData.product}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          product: 'Premium Main Doors',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#20201E] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8E7752] transition-colors"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#20201E] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD8CC] text-sm focus:outline-none focus:border-[#8E7752] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#20201E] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD8CC] text-sm focus:outline-none focus:border-[#8E7752] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#20201E] mb-2">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD8CC] text-sm focus:outline-none focus:border-[#8E7752] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#20201E] mb-2">
                          Product of Interest *
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD8CC] text-sm focus:outline-none focus:border-[#8E7752] transition-colors text-[#20201E]"
                        >
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#20201E] mb-2">
                        Requirements / Dimensions / Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your door, window, or grill requirements, approximate sizes, or site location..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD8CC] text-sm focus:outline-none focus:border-[#8E7752] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 px-6 rounded-full bg-[#20201E] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8E7752] transition-all duration-300 flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Enquiry</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="py-4 px-6 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-[#DFD8CC] bg-white shadow-sm h-64 sm:h-72 relative">
                <iframe
                  title="Vijaya Sai Enterprises Gudivada Location"
                  src={businessInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
