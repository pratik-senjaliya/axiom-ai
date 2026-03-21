import Image from 'next/image'
import { TeamMember } from '@/lib/sanity/teamQueries'

interface TeamMemberCardProps {
    member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up">
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-primary-400 text-6xl">
                            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* Featured Badge */}
                {member.featured && (
                    <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                    {member.role}
                </p>

                {/* Experience */}
                {member.experience && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                        <svg className="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{member.experience} experience</span>
                    </div>
                )}

                {/* Bio */}
                <p className="text-neutral-700 leading-relaxed mb-4 line-clamp-4">
                    {member.bio}
                </p>

                {/* Certifications */}
                {member.certifications && member.certifications.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral-900 mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                            {member.certifications.map((cert, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Expertise */}
                {member.expertise && member.expertise.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral-900 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                            {member.expertise.slice(0, 3).map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800"
                                >
                                    {skill}
                                </span>
                            ))}
                            {member.expertise.length > 3 && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
                                    +{member.expertise.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Social Links */}
                {member.socialLinks && (
                    <div className="flex gap-3 pt-4 border-t border-neutral-200">
                        {member.socialLinks.email && (
                            <a
                                href={`mailto:${member.socialLinks.email}`}
                                className="text-neutral-600 hover:text-secondary-600 transition-colors"
                                aria-label={`Email ${member.name}`}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </a>
                        )}
                        {member.socialLinks.linkedin && (
                            <a
                                href={member.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 hover:text-secondary-600 transition-colors"
                                aria-label={`${member.name}'s LinkedIn`}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                        {member.socialLinks.twitter && (
                            <a
                                href={member.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 hover:text-secondary-600 transition-colors"
                                aria-label={`${member.name}'s Twitter`}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
