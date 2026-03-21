export interface TeamMember {
    _id: string
    name: string
    slug: { current: string }
    role: string
    bio: string
    image: string
    experience?: string
    expertise?: string[]
    certifications?: string[]
    socialLinks?: {
        email?: string
        linkedin?: string
        twitter?: string
    }
    order: number
    featured: boolean
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
    const { client } = await import('./client')

    const query = `*[_type == "teamMember"] | order(order asc) {
        _id,
        name,
        slug,
        role,
        bio,
        "image": image.asset->url,
        experience,
        expertise,
        certifications,
        socialLinks,
        order,
        featured
    }`

    return client.fetch(query)
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
    const { client } = await import('./client')

    const query = `*[_type == "teamMember" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        role,
        bio,
        "image": image.asset->url,
        experience,
        expertise,
        certifications,
        socialLinks,
        order,
        featured
    }`

    return client.fetch(query, { slug })
}
