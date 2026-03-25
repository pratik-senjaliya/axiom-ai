import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#261E17] text-neutral-300 py-16 border-t border-[#362A1F]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5 lg:col-span-4 pr-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#FF9F1C] to-[#FFB74D] text-white font-bold text-[20px] shadow-sm">
                A
              </div>
              <span className="font-bold text-[26px] tracking-tight text-white inline-block">
                Axiom<span className="text-[#FF821C]">AI</span>
              </span>
            </Link>
            <p className="text-sm text-[#968E85] mb-8 max-w-[280px] leading-relaxed">
              Enterprise AI, ERP & Data advisory. Building the
              future of intelligent enterprise.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-[12px] bg-[#3B3028] flex items-center justify-center text-[#968E85] hover:bg-[#4A3C32] hover:text-white transition-all shadow-sm">
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-[12px] bg-[#3B3028] flex items-center justify-center text-[#968E85] hover:bg-[#4A3C32] hover:text-white transition-all shadow-sm">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-[12px] bg-[#3B3028] flex items-center justify-center text-[#968E85] hover:bg-[#4A3C32] hover:text-white transition-all shadow-sm">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="md:col-start-7 lg:col-start-7 md:col-span-3">
            <h3 className="text-[#968E85] font-semibold mb-6 text-[13px] uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/ai-implementation" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">AI Implementation</Link></li>
              <li><Link href="/erp-transformation" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">ERP Transformation</Link></li>
              <li><Link href="/data-analytics" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">Data & Analytics</Link></li>
              <li><Link href="/managed-delivery" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">Managed Delivery</Link></li>
              <li><Link href="/sustainability" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">AI for Sustainable Operations</Link></li>
            </ul>
          </div>

          <div className="md:col-start-10 lg:col-start-10 md:col-span-3">
            <h3 className="text-[#968E85] font-semibold mb-6 text-[13px] uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">About</Link></li>
              <li><Link href="/use-cases" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">Use Cases</Link></li>
              <li><Link href="/insights" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">Insights</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors text-[#D9D0C5]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#362A1F]/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#7D766E]">
            © 2026 AxiomAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-[#7D766E] hover:text-[#D9D0C5] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-usage" className="text-sm text-[#7D766E] hover:text-[#D9D0C5] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
