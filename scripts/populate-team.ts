import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

// Create Sanity client with write token
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    token: process.env.SANITY_API_TOKEN!,
    useCdn: false,
})

const teamMembers = [
    {
        _type: 'teamMember',
        name: 'Pranav Jani',
        slug: {
            _type: 'slug',
            current: 'pranav-jani'
        },
        role: 'Founder & Senior Tax Consultant',
        bio: `Pranav brings more than a decade of hands-on experience in the global accounting industry. His core expertise lies in US Federal Tax Laws, multi-state compliance requirements, and building robust, scalable accounting systems.

Throughout his career, Pranav has served as a trusted advisor to numerous US corporations, CPA firms, and US tax expatriates, helping them navigate complex tax and business matters. He is a qualified Indian Chartered Accountant and a CPA graduate of AICPA, reflecting his strong commitment to professional excellence and global accounting standards.`,
        experience: '10+ years',
        expertise: [
            'US Federal Tax Laws',
            'State Compliance',
            'Accounting Systems'
        ],
        certifications: [
            'Indian Chartered Accountant',
            'CPA Graduate (AICPA)'
        ],
        socialLinks: {
            email: '',
            linkedin: '',
            twitter: ''
        },
        order: 1,
        featured: false
    },
    {
        _type: 'teamMember',
        name: 'Ravi Thanki',
        slug: {
            _type: 'slug',
            current: 'ravi-thanki'
        },
        role: 'Senior Accounting Manager',
        bio: `With over eight years of experience in global accounting, Ravi has developed a strong specialization in US Accounting and Bookkeeping, where accuracy and process efficiency are critical. He has worked extensively with multiple US CPA firms, managing complete accounting cycles from day-to-day bookkeeping through to finalization.

Ravi has in-depth expertise in QuickBooks Desktop and QuickBooks Online, along with various automation tools that improve workflow efficiency. He is an Inter-Chartered Accountant certified by ICAI, underscoring his technical proficiency and dedication to high-quality accounting practices.`,
        experience: '8+ years',
        expertise: [
            'US Accounting',
            'Bookkeeping',
            'QuickBooks Expert',
            'Process Automation'
        ],
        certifications: [
            'Inter-Chartered Accountant (ICAI)'
        ],
        socialLinks: {
            email: '',
            linkedin: '',
            twitter: ''
        },
        order: 2,
        featured: false
    },
    {
        _type: 'teamMember',
        name: 'Dhara Thanki',
        slug: {
            _type: 'slug',
            current: 'dhara-thanki'
        },
        role: 'Accounting Specialist',
        bio: `Dhara brings more than five years of professional experience in global accounting, having played a key role in supporting and streamlining operations for several reputed CPA firms. Her skill set spans US Accounting and Bookkeeping, Sales Tax, Payroll Compliance, and Tax Preparation services.

She is highly proficient in a wide range of accounting and tax software, including QuickBooks, Lacerte, Drake, and other utility tools. Known for her strong work ethic and reliability, Dhara consistently delivers exceptional support, particularly during peak compliance and deadline-driven periods, making her a valuable asset to the firms she serves.`,
        experience: '5+ years',
        expertise: [
            'US Accounting',
            'Bookkeeping Services',
            'Sales Tax',
            'Payroll Compliance',
            'Tax Preparation'
        ],
        certifications: [],
        socialLinks: {
            email: '',
            linkedin: '',
            twitter: ''
        },
        order: 3,
        featured: false
    }
]

async function populateTeamMembers() {
    try {
        console.log('🚀 Starting to populate team members...')

        // Check if team members already exist
        const existingMembers = await client.fetch('*[_type == "teamMember"]')

        if (existingMembers.length > 0) {
            console.log(`⚠️  Found ${existingMembers.length} existing team members.`)
            console.log('   Deleting existing team members...')

            for (const member of existingMembers) {
                await client.delete(member._id)
                console.log(`   ✓ Deleted: ${member.name}`)
            }
        }

        // Create new team members
        console.log('\n📝 Creating team members...')

        for (const member of teamMembers) {
            const result = await client.create(member)
            console.log(`   ✓ Created: ${result.name} (${result.role})`)
        }

        console.log('\n✅ Successfully populated all team members!')
        console.log('   You can now view them at: http://localhost:3000/team')
        console.log('   Or in Sanity Studio at: http://localhost:3000/studio')

    } catch (error) {
        console.error('❌ Error populating team members:', error)
        process.exit(1)
    }
}

populateTeamMembers()
