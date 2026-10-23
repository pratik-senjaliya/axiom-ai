"use client";

import { useState } from "react";
import { PortableText } from "@/components/ui/PortableText";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/kit";
import { Turnstile } from "@marsidev/react-turnstile";

const SERVICES = [
  { title: 'GenAI Implementation', value: 'genai-implementation' },
  { title: 'ERP Transformation', value: 'erp-transformation' },
  { title: 'Data Analytics', value: 'data-analytics' },
  { title: 'Managed Delivery', value: 'managed-delivery' },
  { title: 'Sustainability Solutions', value: 'sustainability' },
  { title: 'Other', value: 'other' },
];

const fieldClass =
  "w-full rounded-xl border border-line bg-ink-950/60 px-4 py-3 text-[0.9375rem] text-fg outline-none transition-colors placeholder:text-muted/70 hover:border-line-strong focus:border-accent/60 focus:ring-2 focus:ring-accent/15";
const labelClass = "mb-2 block text-sm font-medium text-body";

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

  const contactRows = [
    {
      label: "Email",
      value: "hello@syncorigins.com",
      href: "mailto:hello@syncorigins.com",
      icon: getIcon("mail"),
    },
    {
      label: "LinkedIn",
      value: "syncorigins",
      href: "https://www.linkedin.com/company/syncorigins/",
      external: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Address",
      value: data?.address || "7-98, Kodanda Rama Puram, Manubolu,\nSPSR Nellore District,\nAndhra Pradesh - 524405, India.",
      icon: getIcon("map-pin"),
    },
  ];

  return (
    <div className="relative overflow-hidden bg-ink-900 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
      <div aria-hidden className="bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.08), transparent 70%)" }}
      />

      <div className="container-custom relative">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          className="mb-10 lg:mb-12"
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Information */}
          <div className="lg:col-span-5">
            <Eyebrow className="mb-6">{data?.badge || "Contact"}</Eyebrow>
            <h1 className="h-display">{data?.title || "Let's Talk Transformation"}</h1>
            <div className="lead mt-6">
              {data?.description ? (
                <PortableText value={data.description} />
              ) : (
                "Ready to discuss your GenAI, ERP, or data challenges? We'd love to hear from you."
              )}
            </div>

            <ul className="mt-12 border-t border-line">
              {contactRows.map((row) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent [&_svg]:h-[18px] [&_svg]:w-[18px]">
                      {row.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted">{row.label}</span>
                      <span className="mt-1 block whitespace-pre-line text-[0.9375rem] font-medium leading-relaxed text-fg transition-colors group-hover:text-accent">
                        {row.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={row.label} className="border-b border-line">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.external ? "_blank" : undefined}
                        rel={row.external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 py-5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 py-5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="panel-accent p-6 sm:p-8 lg:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">Send a Message</h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {status.message && (
                  <div
                    role="status"
                    className={`rounded-xl border p-4 text-sm font-medium ${status.type === "success" ? "border-accent/30 bg-accent/10 text-accent" : "border-red-500/30 bg-red-500/10 text-red-300"}`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className={labelClass}>Name</label>
                    <input id="cf-name" type="text" name="name" required autoComplete="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className={labelClass}>Email</label>
                    <input id="cf-email" type="email" name="email" required autoComplete="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} className={fieldClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="cf-company" className={labelClass}>Company</label>
                    <input id="cf-company" type="text" name="company" autoComplete="organization" placeholder="Your company name" value={formData.company} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className={labelClass}>Phone</label>
                    <input id="cf-phone" type="tel" name="phone" autoComplete="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-service" className={labelClass}>Service of interest</label>
                  <div className="relative">
                    <select
                      id="cf-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`${fieldClass} cursor-pointer appearance-none pr-10 ${formData.service ? "" : "text-muted"}`}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.value} value={s.value} className="bg-ink-900 text-fg">{s.title}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M3 4.5 6 7.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-message" className={labelClass}>Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <div className="flex min-h-[65px] items-center">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAC2Ad-4TbaB5wHzQ"}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken(null)}
                    onExpire={() => setTurnstileToken(null)}
                    options={{
                      theme: 'dark',
                      appearance: 'always'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary group/btn h-[3.25rem] w-full text-[0.9375rem]"
                >
                  {isSubmitting ? "Sending..." : data?.submitButtonText || "Transmit Message"}
                  {!isSubmitting && (
                    <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
