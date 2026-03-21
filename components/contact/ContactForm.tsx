"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

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
                headers: {
                    "Content-Type": "application/json",
                },
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
            setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error instanceof Error ? error.message : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="pt-32 pb-24 bg-[#FDFCFB] min-h-screen font-sans">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Information */}
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFF2E5] text-[#FF821C] text-sm font-semibold mb-8">
                            Contact
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#26201D] mb-6 tracking-tight leading-[1.1]">
                            Let's Talk Transformation
                        </h1>
                        <p className="text-lg text-[#736B66] mb-12 leading-relaxed font-medium">
                            Ready to discuss your GenAI, ERP, or data challenges? We'd love to hear from you.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFF2E5] flex items-center justify-center text-[#FF821C] transition-transform group-hover:scale-110">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-bold text-[#26201D]">hello@axiom-ai.com</span>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFF2E5] flex items-center justify-center text-[#FF821C] transition-transform group-hover:scale-110">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-bold text-[#26201D]">Global Advisory Services</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-[#EDECEB] flex items-center justify-center text-[#26201D] hover:bg-[#26201D] hover:text-white transition-all duration-300">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-[#EDECEB] flex items-center justify-center text-[#26201D] hover:bg-[#26201D] hover:text-white transition-all duration-300">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100/50">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#26201D] mb-8">
                            Send a Message
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status.message && (
                                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
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
                                    className="w-full px-6 py-4 bg-[#F9F8F7] border-none rounded-2xl focus:ring-2 focus:ring-[#FF821C]/20 text-[#26201D] placeholder:text-[#A8A29E] font-medium"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-[#F9F8F7] border-none rounded-2xl focus:ring-2 focus:ring-[#FF821C]/20 text-[#26201D] placeholder:text-[#A8A29E] font-medium"
                                />
                            </div>

                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-[#F9F8F7] border-none rounded-2xl focus:ring-2 focus:ring-[#FF821C]/20 text-[#26201D] placeholder:text-[#A8A29E] font-medium"
                            />

                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="How can we help?"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-6 py-5 bg-[#F9F8F7] border-none rounded-3xl focus:ring-2 focus:ring-[#FF821C]/20 text-[#26201D] placeholder:text-[#A8A29E] font-medium resize-none"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full h-16 rounded-2xl bg-gradient-to-r from-[#FF821C] to-[#D423B8] p-[1px] font-bold text-white overflow-hidden transition-all hover:opacity-90 active:scale-[0.98]"
                            >
                                <div className="relative flex items-center justify-center gap-2 h-full w-full">
                                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    {!isSubmitting && (
                                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
