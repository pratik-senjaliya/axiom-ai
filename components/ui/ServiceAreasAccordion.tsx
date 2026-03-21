"use client";

import React, { useState } from "react";

interface ServiceArea {
    name: string;
    focus: string;
    tasks: string[];
}

interface ServiceAreasAccordionProps {
    serviceAreas: ServiceArea[];
}

export function ServiceAreasAccordion({ serviceAreas }: ServiceAreasAccordionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="space-y-6">
            {serviceAreas.map((area, index) => {
                const isExpanded = expandedIndex === index;
                const number = String(index + 1).padStart(2, '0');

                return (
                    <div
                        key={index}
                        className={`
              bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300
              ${isExpanded ? 'shadow-2xl ring-2 ring-primary-100' : 'hover:shadow-lg'}
            `}
                    >
                        {/* Accordion Header */}
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300 hover:bg-neutral-50"
                        >
                            <div className="flex items-center gap-6 flex-1">
                                {/* Number Badge */}
                                <div
                                    className={`
                    flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300
                    ${isExpanded
                                            ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg'
                                            : 'bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600'
                                        }
                  `}
                                >
                                    {number}
                                </div>

                                {/* Title and Focus */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                                        {area.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-600">
                                        <span className="font-semibold text-primary-600">Focus:</span> {area.focus}
                                    </p>
                                </div>
                            </div>

                            {/* Chevron Icon */}
                            <div className="flex-shrink-0 ml-4">
                                <svg
                                    className={`w-6 h-6 text-neutral-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        {/* Accordion Content */}
                        <div
                            className={`
                overflow-hidden transition-all duration-300
                ${isExpanded ? 'max-h-[125rem] opacity-100' : 'max-h-0 opacity-0'}
              `}
                        >
                            <div className="px-8 pb-8 pt-2">
                                <div className="border-t border-neutral-100 pt-6">
                                    {/* Tasks Grid */}
                                    <div className="space-y-3">
                                        {area.tasks.map((task, taskIndex) => {
                                            const isMicroTask = task.toLowerCase().includes('micro-task');
                                            const cleanTask = task.replace(/^(Task:|Micro-Task:)\s*/i, '');

                                            return (
                                                <div
                                                    key={taskIndex}
                                                    className={`
                            flex items-start gap-4 p-4 rounded-2xl transition-all duration-200
                            ${isMicroTask
                                                            ? 'bg-gradient-to-r from-secondary-50 to-secondary-100/50 border border-secondary-200'
                                                            : 'bg-neutral-50 hover:bg-neutral-100'
                                                        }
                          `}
                                                >
                                                    {/* Icon */}
                                                    <div className={`
                            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                            ${isMicroTask ? 'bg-secondary-500' : 'bg-primary-500'}
                          `}>
                                                        {isMicroTask ? (
                                                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </div>

                                                    {/* Task Text */}
                                                    <p className={`
                            flex-1 text-base leading-relaxed
                            ${isMicroTask ? 'text-neutral-800 font-medium' : 'text-neutral-700'}
                          `}>
                                                        {isMicroTask && (
                                                            <span className="inline-block px-2 py-0.5 bg-secondary-500 text-white text-xs font-bold rounded mr-2 uppercase tracking-wide">
                                                                Micro-Task
                                                            </span>
                                                        )}
                                                        {cleanTask}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
