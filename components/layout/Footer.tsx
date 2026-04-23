import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[#C5D1E0] py-16 border-t border-[#00E5FF]/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 justify-items-start">
          <div className="md:col-span-5 lg:col-span-4 pr-4 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-80 h-20">
                <Image
                  src="/SyncOrigin_Logo.png"
                  alt="SyncOrigins Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#8FA3BF] mb-8 max-w-[280px] leading-relaxed">
              Enterprise AI, ERP & Data advisory. Building the
              future of intelligent enterprise.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-[12px] bg-[#14243A] border border-[#00E5FF]/15 flex items-center justify-center text-[#8FA3BF] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all">
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-[12px] bg-[#14243A] border border-[#00E5FF]/15 flex items-center justify-center text-[#8FA3BF] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-[12px] bg-[#14243A] border border-[#00E5FF]/15 flex items-center justify-center text-[#8FA3BF] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="md:col-start-7 lg:col-start-7 md:col-span-3">
            <h3 className="text-[#8FA3BF] font-semibold mb-6 text-[13px] uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/ai-implementation" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">AI Implementation</Link></li>
              <li><Link href="/erp-transformation" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">ERP Transformation</Link></li>
              <li><Link href="/data-analytics" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Data & Analytics</Link></li>
              <li><Link href="/managed-delivery" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Managed Delivery</Link></li>
              <li><Link href="/sustainability" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">AI for Sustainable Operations</Link></li>
            </ul>
          </div>

          <div className="md:col-start-10 lg:col-start-10 md:col-span-3">
            <h3 className="text-[#8FA3BF] font-semibold mb-6 text-[13px] uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">About</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Solutions</Link></li>
              <li><Link href="/insights" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Insights</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#00E5FF] transition-colors text-[#C5D1E0]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00E5FF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8FA3BF]">
            © 2026 SyncOrigins. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-[#8FA3BF] hover:text-[#00E5FF] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-usage" className="text-sm text-[#8FA3BF] hover:text-[#00E5FF] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
