"use client"

import { useState } from "react"

interface Section {
    title: string
    tasks: string[]
}

interface ServiceArea {
    name: string
    focus: string
    sections: Section[]
}

interface ServiceSectionsAccordionProps {
    serviceAreas: ServiceArea[]
}

// Color schemes for different section positions (cycling through industry colors)
const colorSchemes = [
    { bg: "from-blue-50 to-blue-100/30", border: "border-blue-200", icon: "bg-blue-600", bullet: "text-blue-500", emoji: "📚" },
    { bg: "from-green-50 to-green-100/30", border: "border-green-200", icon: "bg-green-600", bullet: "text-green-500", emoji: "🧮" },
    { bg: "from-purple-50 to-purple-100/30", border: "border-purple-200", icon: "bg-purple-600", bullet: "text-purple-500", emoji: "👥" },
    { bg: "from-orange-50 to-orange-100/30", border: "border-orange-200", icon: "bg-orange-600", bullet: "text-orange-500", emoji: "📄" },
    { bg: "from-cyan-50 to-cyan-100/30", border: "border-cyan-200", icon: "bg-cyan-600", bullet: "text-cyan-500", emoji: "💼" },
    { bg: "from-pink-50 to-pink-100/30", border: "border-pink-200", icon: "bg-pink-600", bullet: "text-pink-500", emoji: "📊" },
]

export function ServiceSectionsAccordion({ serviceAreas }: ServiceSectionsAccordionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <div className="space-y-4">
            {serviceAreas.map((area, index) => (
                <div
                    key={index}
                    className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
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
                                    {area.name}
                                </h3>
                                <p className="text-sm text-neutral-600 mt-1">
                                    <span className="font-semibold text-primary-600">Focus:</span> {area.focus}
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
                            {/* Sections in Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {area.sections.map((section, sectionIndex) => {
                                    const colors = colorSchemes[sectionIndex % colorSchemes.length]

                                    return (
                                        <div
                                            key={sectionIndex}
                                            className={`bg-gradient-to-br ${colors.bg} rounded-lg p-5 border ${colors.border}`}
                                        >
                                            {/* Section Title with Icon */}
                                            <h4 className="text-base font-bold text-neutral-900 mb-3 flex items-center">
                                                <span className={`w-8 h-8 ${colors.icon} text-white rounded-lg flex items-center justify-center mr-3 text-sm`}>
                                                    {colors.emoji}
                                                </span>
                                                {section.title}
                                            </h4>

                                            {/* Tasks List */}
                                            <ul className="space-y-2">
                                                {section.tasks.map((task, taskIndex) => (
                                                    <li
                                                        key={taskIndex}
                                                        className="text-sm text-neutral-700 flex items-start"
                                                    >
                                                        <span className={`${colors.bullet} mr-2 flex-shrink-0`}>•</span>
                                                        <span>{task}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
