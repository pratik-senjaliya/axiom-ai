import React from 'react';
import Image from 'next/image';

interface Platform {
    name: string;
    logo?: string;
    logoAlt?: string;
}

interface SoftwareCategory {
    category: string;
    platforms: Platform[];
}

interface SoftwareGridProps {
    categories: SoftwareCategory[];
}

export function SoftwareGrid({ categories }: SoftwareGridProps) {
    return (
        <div className="space-y-8">
            {categories.map((category, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <h4 className="text-base font-bold text-neutral-900 mb-4 flex items-center">
                        <span className="w-1.5 h-5 bg-primary-600 rounded-full mr-3"></span>
                        {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {category.platforms?.map((platform, pIndex) => (
                            <div
                                key={pIndex}
                                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white border border-neutral-200 hover:border-primary-600 hover:shadow-md transition-all duration-300 group"
                            >
                                {/* Logo */}
                                {platform?.logo ? (
                                    <div className="relative w-6 h-6 flex-shrink-0">
                                        <Image
                                            src={platform.logo}
                                            alt={platform.logoAlt || `${platform.name} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded bg-neutral-100 group-hover:bg-primary-50 transition-colors">
                                        <span className="text-xs font-bold text-neutral-400 group-hover:text-primary-600">
                                            {platform?.name?.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                {/* Software Name */}
                                <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700 transition-colors whitespace-nowrap">
                                    {platform?.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
