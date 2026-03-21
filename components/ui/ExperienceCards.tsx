"use client"

import React from "react"

interface ExperienceLevel {
    level: "Junior" | "Mid" | "Senior"
    title: string
    experience: string
    responsibilities: string[]
}

interface ExperienceCardsProps {
    experienceLevels: ExperienceLevel[]
}

export function ExperienceCards({ experienceLevels }: ExperienceCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceLevels.map((level, index) => (
                <div
                    key={level.level}
                    className="relative rounded-xl border-2 border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-primary-600 hover:shadow-xl group"
                >
                    {/* Level Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-lg mb-6">
                        <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
                            {level.level} Level
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {level.title}
                    </h3>

                    {/* Experience */}
                    <p className="text-base text-neutral-600 font-medium mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {level.experience}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-neutral-200 my-6"></div>

                    {/* Responsibilities */}
                    <div>
                        <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wider mb-4">
                            Core Responsibilities
                        </h4>
                        <ul className="space-y-3">
                            {level.responsibilities.map((task, i) => (
                                <li key={i} className="flex items-start text-sm text-neutral-700 leading-relaxed">
                                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
