'use client';

import React, { useState } from 'react';

interface ExperienceLevel {
    level: 'Junior' | 'Mid' | 'Senior';
    title: string;
    experience: string;
    responsibilities: string[];
    software: string[];
    idealFor: string[];
}

interface ExperienceTabsProps {
    experienceLevels: ExperienceLevel[];
}

export function ExperienceTabs({ experienceLevels }: ExperienceTabsProps) {
    const [activeTab, setActiveTab] = useState<'Junior' | 'Mid' | 'Senior'>('Junior');

    const activeLevel = experienceLevels.find(level => level.level === activeTab);

    if (!activeLevel) return null;

    return (
        <div className="w-full">
            {/* Desktop Tabs */}
            <div className="hidden md:flex border-b border-neutral-200 mb-8">
                {experienceLevels.map((level) => (
                    <button
                        key={level.level}
                        onClick={() => setActiveTab(level.level)}
                        className={`
                            flex-1 py-4 px-6 text-center font-semibold transition-all relative
                            ${activeTab === level.level
                                ? 'text-primary-600 border-b-2 border-primary-600'
                                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                            }
                        `}
                    >
                        <div className="text-sm uppercase tracking-wider mb-1">{level.level} Level</div>
                        <div className="text-xs text-neutral-500 font-normal">{level.experience}</div>
                    </button>
                ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden mb-8">
                <div className="relative">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value as 'Junior' | 'Mid' | 'Senior')}
                        className="w-full appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-3 pr-10 font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                        {experienceLevels.map((level) => (
                            <option key={level.level} value={level.level}>
                                {level.level} Level ({level.experience})
                            </option>
                        ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
                {/* Title */}
                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                        {activeLevel.title}
                    </h3>
                    <p className="text-lg text-neutral-600">{activeLevel.experience} of experience</p>
                </div>

                {/* Two Column Layout for Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Responsibilities */}
                    <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                        <h4 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                                ✓
                            </span>
                            Core Responsibilities
                        </h4>
                        <ul className="space-y-3">
                            {activeLevel.responsibilities.map((responsibility, index) => (
                                <li key={index} className="text-neutral-700 text-sm leading-relaxed flex">
                                    <span className="text-primary-500 mr-2 flex-shrink-0">•</span>
                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Software Expertise */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100/30 rounded-xl p-6 border border-primary-200">
                        <h4 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                                ⚡
                            </span>
                            Software Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {activeLevel.software.map((soft, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-primary-700 border border-primary-200 shadow-sm"
                                >
                                    {soft}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ideal For Section */}
                <div className="bg-white rounded-xl border-2 border-primary-200 p-6">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">
                        Ideal For
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {activeLevel.idealFor.map((ideal, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg p-4 text-center border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
                            >
                                <p className="text-sm font-medium text-neutral-700">{ideal}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
