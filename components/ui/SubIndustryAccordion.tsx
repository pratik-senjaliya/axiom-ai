'use client';

import React, { useState } from 'react';

interface SubIndustry {
    name: string;
    focus: string;
    bookkeeping: string[];
    accounting: string[];
    payroll: string[];
    taxPreparation: string[];
    softwareStack: string[];
}

interface SubIndustryAccordionProps {
    subIndustries: SubIndustry[];
}

export function SubIndustryAccordion({ subIndustries }: SubIndustryAccordionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {subIndustries.map((subIndustry, index) => (
                <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    {/* Accordion Header */}
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-neutral-50 to-white hover:from-neutral-100 hover:to-neutral-50 transition-all"
                    >
                        <div className="flex items-center gap-4 text-left flex-1">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-all ${expandedIndex === index ? 'bg-primary-600 shadow-lg' : 'bg-neutral-400'
                                }`}>
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-neutral-900">
                                    {subIndustry.name}
                                </h3>
                                <p className="text-sm text-neutral-600 mt-1">
                                    <span className="font-semibold text-primary-600">Focus:</span> {subIndustry.focus}
                                </p>
                            </div>
                        </div>
                        <svg
                            className={`w-6 h-6 text-neutral-400 transition-transform flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Accordion Content */}
                    {expandedIndex === index && (
                        <div className="px-6 py-6 border-t border-neutral-100 animate-fade-in">
                            {/* 4 Service Areas in Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Bookkeeping */}
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-lg p-5 border border-blue-200">
                                    <h4 className="text-base font-bold text-neutral-900 mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
                                            📚
                                        </span>
                                        Bookkeeping
                                    </h4>
                                    <ul className="space-y-2">
                                        {subIndustry.bookkeeping.map((item, i) => (
                                            <li key={i} className="text-sm text-neutral-700 flex items-start">
                                                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Accounting */}
                                <div className="bg-gradient-to-br from-green-50 to-green-100/30 rounded-lg p-5 border border-green-200">
                                    <h4 className="text-base font-bold text-neutral-900 mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
                                            🧮
                                        </span>
                                        Accounting
                                    </h4>
                                    <ul className="space-y-2">
                                        {subIndustry.accounting.map((item, i) => (
                                            <li key={i} className="text-sm text-neutral-700 flex items-start">
                                                <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Payroll */}
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-lg p-5 border border-purple-200">
                                    <h4 className="text-base font-bold text-neutral-900 mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
                                            👥
                                        </span>
                                        Payroll
                                    </h4>
                                    <ul className="space-y-2">
                                        {subIndustry.payroll.map((item, i) => (
                                            <li key={i} className="text-sm text-neutral-700 flex items-start">
                                                <span className="text-purple-500 mr-2 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tax Preparation */}
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-lg p-5 border border-orange-200">
                                    <h4 className="text-base font-bold text-neutral-900 mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
                                            📄
                                        </span>
                                        Tax Preparation
                                    </h4>
                                    <ul className="space-y-2">
                                        {subIndustry.taxPreparation.map((item, i) => (
                                            <li key={i} className="text-sm text-neutral-700 flex items-start">
                                                <span className="text-orange-500 mr-2 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Software Stack */}
                            <div className="bg-neutral-50 rounded-lg p-5 border border-neutral-200">
                                <h4 className="text-base font-bold text-neutral-900 mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-neutral-700 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
                                        ⚙️
                                    </span>
                                    Software Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {subIndustry.softwareStack.map((software, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-neutral-700 border border-neutral-300 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-all shadow-sm"
                                        >
                                            {software}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
