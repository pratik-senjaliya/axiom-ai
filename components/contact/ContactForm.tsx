"use client";

import { useState } from "react";
import { PortableText } from "@/components/ui/PortableText";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Turnstile } from "@marsidev/react-turnstile";

const SERVICES = [
  { title: 'GenAI Implementation', value: 'genai-implementation' },
  { title: 'ERP Transformation', value: 'erp-transformation' },
  { title: 'Data Analytics', value: 'data-analytics' },
  { title: 'Managed Delivery', value: 'managed-delivery' },
  { title: 'Sustainability Solutions', value: 'sustainability' },
  { title: 'Other', value: 'other' },
];

export function ContactForm({ data }: { data: any }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus({ type: "error", message: "Security verification required." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to submit form");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setTurnstileToken(null);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'mail':
        return <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      case 'phone':
        return <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
      case 'map-pin':
        return <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      default:
        return <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A0F1F 0%, #0D1B2A 50%, #0A0F1F 100%)' }}>
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] -translate-y-1/2 rounded-full blur-[100px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-[30%] right-0 w-[25rem] h-[25rem] rounded-full blur-[80px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(29,161,242,0.06) 0%, transparent 70%)' }} />

      <div className="container-custom px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Information */}
          <SlideUp delay={0.1} className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6" style={{ background: 'rgba(0,229,255,0.08)', borderColor: 'rgba(0,229,255,0.3)', color: '#00E5FF' }}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" /></svg>
              <span className="text-xs font-semibold tracking-wide uppercase">{data?.badge || "Contact"}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-[1.1]">
              {data?.title || "Let's Talk Transformation"}
            </h1>
            <div className="text-base mb-8 leading-relaxed font-medium" style={{ color: '#8FA3BF' }}>
              {data?.description ? (
                <PortableText value={data.description} />
              ) : (
                "Ready to discuss your GenAI, ERP, or data challenges? We'd love to hear from you."
              )}
            </div>

            {/* Contact info items */}
            <div className="space-y-4 mb-8">
              {data?.infoItems && data.infoItems.length > 0 ? (
                data.infoItems.map((item: any, i: number) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.2)' }}>
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold mb-0.5">{item.label}</div>
                      <span className="text-base font-bold text-white tracking-wide">{item.value}</span>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.2)' }}>
                      {getIcon('mail')}
                    </div>
                    <span className="text-base font-bold text-white tracking-wide">hello@axiom-ai.com</span>
                  </div>
                </>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: 'rgba(20,36,58,0.8)', color: '#8FA3BF', border: '1px solid rgba(0,229,255,0.2)' }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </SlideUp>

          {/* Right Column: Form Card */}
          <SlideUp delay={0.3} className="w-full rounded-[2rem] p-6 lg:p-10 transition-all" style={{ background: 'rgba(20,36,58,0.85)', border: '1px solid rgba(0,229,255,0.15)', backdropFilter: 'blur(16px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {status.message && (
                <div className={`p-3 rounded-xl text-sm font-semibold mb-4 ${status.type === "success" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" Elon Musk"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-2.5 rounded-xl font-medium outline-none transition-all placeholder:text-[#3E526D] text-sm"
                    style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' }}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="elon@mars.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-2.5 rounded-xl font-medium outline-none transition-all placeholder:text-[#3E526D] text-sm"
                    style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold ml-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="SpaceX"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-2.5 rounded-xl font-medium outline-none transition-all placeholder:text-[#3E526D] text-sm"
                    style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' }}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold ml-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-2.5 rounded-xl font-medium outline-none transition-all placeholder:text-[#3E526D] text-sm"
                    style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold ml-1">Service Of Interest</label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-2.5 rounded-xl font-medium outline-none transition-all appearance-none cursor-pointer text-sm"
                    style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: formData.service ? '#ffffff' : '#3E526D' }}
                  >
                    <option value="" disabled>Select a Service</option>
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value} className="bg-[#0A0F1F] text-white py-2">{s.title}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[#8FA3BF] font-bold ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={2}
                  placeholder="Tell us about your project challenges..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl font-medium resize-none outline-none transition-all placeholder:text-[#3E526D] text-sm"
                  style={{ background: 'rgba(10,15,31,0.8)', border: '1px solid rgba(0,229,255,0.15)', color: '#ffffff' }}
                />
              </div>

              <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 flex justify-center py-2">
                <div className="scale-[0.85] origin-center h-[65px] flex items-center justify-center">
                  <Turnstile 
                    siteKey="0x4AAAAAAC2Ad-4TbaB5wHzQ" 
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken(null)}
                    onExpire={() => setTurnstileToken(null)}
                    options={{
                      theme: 'dark',
                      appearance: 'always'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl font-black text-[#0A0F1F] flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mt-2 group"
                style={{ background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)', boxShadow: '0 10px 40px rgba(0,229,255,0.3)' }}
              >
                <span className="tracking-tight text-base uppercase">{isSubmitting ? "Sending..." : "Transmit Message"}</span>
                {!isSubmitting && (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1.5 duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
