"use client";

import { useState } from "react";
import { PortableText } from "@/components/ui/PortableText";

export function ContactForm({ data }: { data: any }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to submit form");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen" style={{ background: 'linear-gradient(160deg, #0A0F1F 0%, #0D1B2A 50%, #0A0F1F 100%)' }}>
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      {/* Glow left */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] -translate-y-1/2 rounded-full blur-[120px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />
      {/* Glow right */}
      <div className="absolute top-[30%] right-0 w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 70%)' }} />

      <div className="container-custom px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Information */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
              <span className="text-sm font-semibold tracking-wide">Contact</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              {data.title || "Let's Talk Transformation"}
            </h1>
            <div className="text-lg mb-12 leading-relaxed font-medium" style={{ color: '#8FA3BF' }}>
              <PortableText value={data.description} />
            </div>

            {/* Contact info items */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">hello@axiom-ai.com</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">Global Advisory Services</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: 'rgba(20,36,58,0.8)', color: '#8FA3BF', border: '1px solid rgba(0,229,255,0.2)' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#00E5FF'; el.style.color = '#00E5FF'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(0,229,255,0.2)'; el.style.color = '#8FA3BF'; }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: 'rgba(20,36,58,0.8)', color: '#8FA3BF', border: '1px solid rgba(0,229,255,0.2)' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#00E5FF'; el.style.color = '#00E5FF'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(0,229,255,0.2)'; el.style.color = '#8FA3BF'; }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full rounded-[2.5rem] p-8 md:p-12" style={{ background: 'rgba(20,36,58,0.85)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(16px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.07) inset' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl font-medium outline-none transition-all"
                  style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff', '--tw-ring-color': 'rgba(0,229,255,0.3)' } as React.CSSProperties}
                  onFocus={e => { e.target.style.borderColor = 'rgba(0,229,255,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,229,255,0.15)'; e.target.style.boxShadow = ''; }}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl font-medium outline-none transition-all"
                  style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' } as React.CSSProperties}
                  onFocus={e => { e.target.style.borderColor = 'rgba(0,229,255,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,229,255,0.15)'; e.target.style.boxShadow = ''; }}
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl font-medium outline-none transition-all"
                style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' } as React.CSSProperties}
                onFocus={e => { e.target.style.borderColor = 'rgba(0,229,255,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(0,229,255,0.15)'; e.target.style.boxShadow = ''; }}
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-5 rounded-3xl font-medium resize-none outline-none transition-all"
                style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' } as React.CSSProperties}
                onFocus={e => { e.target.style.borderColor = 'rgba(0,229,255,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(0,229,255,0.15)'; e.target.style.boxShadow = ''; }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 rounded-2xl font-bold text-[#0A0F1F] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', boxShadow: '0 0 30px rgba(0,229,255,0.35)' }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
