import React from "react";
import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#26201D] text-neutral-300 py-16 border-t border-[#332A25]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF821C] text-white font-bold text-lg shadow-sm">
                A
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Axiom<span className="text-[#AD58D9]">AI</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 mb-6 max-w-xs leading-relaxed">
              Enterprise AI, ERP & Data advisory. Building the future of intelligent enterprise.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wide">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">AI Implementation</Link></li>
              <li><Link href="/services/erp-transformation" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">ERP Transformation</Link></li>
              <li><Link href="/services/data-analytics" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">Data & Analytics</Link></li>
              <li><Link href="/services/managed-delivery" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">Managed Delivery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">About</Link></li>
              <li><Link href="/use-cases" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">Use Cases</Link></li>
              <li><Link href="/insights" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">Insights</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wide">Connect</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">LinkedIn</a></li>
              <li><a href="#" className="text-sm hover:text-primary-500 transition-colors text-neutral-400">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#332A25] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a href="#" className="w-8 h-8 rounded-full bg-[#332A25] flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              in
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#332A25] flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              tw
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#332A25] flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              @
            </a>
          </div>
          <p className="text-sm text-neutral-500">
            © 2026 AxiomAI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
