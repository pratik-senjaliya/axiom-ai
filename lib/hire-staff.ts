export interface HireStaffPosition {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    icon: string;
    image: string;
    heroImage: string;
    intro: {
        title: string;
        content: string;
        stats: { label: string; value: string }[];
    };
    features: { title: string; description: string }[];
    process: { step: string; title: string; description: string }[];
    whyChooseUs: { title: string; description: string }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
        company: string;
    };
    faqs: { question: string; answer: string }[];
    // NEW: Experience Levels
    experienceLevels: {
        level: 'Junior' | 'Mid' | 'Senior';
        title: string;
        experience: string;
        responsibilities: string[];
        software: string[];
        idealFor: string[];
    }[];
    // NEW: Software Integration Categories
    softwareCategories: {
        category: string;
        platforms: string[];
    }[];
    // NEW: Getting Started Steps
    gettingStarted: {
        step: string;
        title: string;
        description: string;
    }[];
    // NEW: Risk-Free Trial
    trial: {
        duration: string;
        description: string;
    };
}


export const hireStaffPositions: HireStaffPosition[] = [
    {
        id: "bookkeeper-accountant",
        title: "Hire Bookkeeper/Accountant",
        slug: "bookkeeper-accountant",
        description: "Build a world-class bookkeeping team without local hiring overhead.",
        longDescription: "Our offshore bookkeepers are rigorously trained in US GAAP standards and work seamlessly with QuickBooks Online, Xero, and NetSuite—from daily transactions to full-scale financial close management.",
        icon: "book",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
        intro: {
            title: "Expert Bookkeepers Who Integrate Seamlessly",
            content: "Our offshore bookkeepers are not freelancers working from home. They work from our supervised delivery centers with enterprise-grade infrastructure, ensuring consistent quality and reliability.",
            stats: [
                { label: "Cost Savings", value: "50-70%" },
                { label: "Qualified Staff", value: "100%" }
            ]
        },
        features: [
            { title: "Daily Transaction Processing", description: "Categorizing bank and credit card transactions with high accuracy, managing AP/AR assistance, and maintaining digital filing systems." },
            { title: "Complex Reconciliations", description: "High-volume merchant accounts (Stripe, Shopify, PayPal), multi-currency reconciliations, and month-end close processes." },
            { title: "Financial Review & Cleanup", description: "Quality reviews of General Ledger and Trial Balance for US GAAP compliance, leading cleanup projects for historical books." },
            { title: "Software Expertise", description: "QuickBooks Online, Xero, Sage Intacct, NetSuite, Bill.com, and advanced Excel proficiency." },
            { title: "Multi-Level Experience", description: "Junior (6mo-2yr) for data entry, Mid (2-5yr) for complex accounting, Senior (5+yr) for management and systems integration." }
        ],
        process: [
            { step: "01", title: "Share Requirements", description: "Tell us about your bookkeeping needs and preferred software tools." },
            { step: "02", title: "Interview Candidates", description: "We shortlist 2-3 qualified candidates for you to interview via video call." },
            { step: "03", title: "Onboarding", description: "Your selected bookkeeper integrates with your team and systems within days." },
            { step: "04", title: "Ongoing Support", description: "We provide continuous training, quality checks, and replacement guarantee." }
        ],
        whyChooseUs: [
            { title: "40-60% Cost Savings", description: "Reduce overhead by eliminating local salaries, payroll taxes, health insurance, and office overhead with transparent flat-fee pricing." },
            { title: "Instant Scalability", description: "Scale up during tax season or when onboarding large clients. Scale down during slower periods without layoffs." },
            { title: "US GAAP Expertise", description: "Global pool of accounting professionals rigorously trained in US GAAP, AICPA, and PCAOB standards with current IRS regulations knowledge." },
            { title: "24/48-Hour Turnaround", description: "Leverage global time zones for overnight processing. Send work  in the evening, receive completed deliverables by morning." },
            { title: "White-Label Partnership", description: "We operate behind the scenes. Every deliverable prepared to your firm's standards, allowing you to deliver under your own brand." }
        ],
        testimonial: {
            quote: "Hiring through them was seamless. Our offshore bookkeeper feels like part of our local team.",
            author: "Jennifer Moore",
            role: "Partner",
            company: "Moore & Associates CPA"
        },
        faqs: [
            { question: "What are the qualifications of bookkeepers?", answer: "All bookkeepers hold a minimum Bachelor's degree in Accounting and are trained in US GAAP and QuickBooks/Xero." },
            { question: "Can I interview before hiring?", answer: "Yes, we shortlist 2-3 candidates and you conduct video interviews to select the best fit." }
        ],
        experienceLevels: [
            {
                level: 'Junior',
                title: 'Associate Bookkeeper',
                experience: '6 months - 2 years',
                responsibilities: [
                    'Daily Transaction Processing: Categorizing bank and credit card transactions with high accuracy',
                    'AP/AR Assistance: Entering vendor bills, matching receipts via Dext/Hubdoc, and generating basic customer invoices',
                    'Bank Feed Management: Monitoring bank feed connectivity and resolving simple sync errors',
                    'Data Organization: Maintaining a digital filing system for all source documents (SOC2 compliant)',
                    'Basic Reconciliations: Performing straightforward bank and credit card reconciliations'
                ],
                software: ['QuickBooks Online (Basic)', 'Xero', 'Hubdoc & Dext', 'Microsoft Excel', 'Bill.com'],
                idealFor: ['High-volume transaction processing', 'Daily bookkeeping maintenance', 'Basic AP/AR support', 'Data entry and organization']
            },
            {
                level: 'Mid',
                title: 'Senior Bookkeeper/Accountant',
                experience: '2-5 years',
                responsibilities: [
                    'Complex Reconciliations: Handling high-volume merchant accounts (Stripe, Shopify, PayPal) and multi-currency reconciliations',
                    'Month-End Close: Preparing adjusting journal entries for accruals, deferrals, and prepaid expenses',
                    'Inter-company Accounting: Reconciling "Due To/From" accounts for clients with multiple business entities',
                    'Fixed Asset Management: Maintaining depreciation schedules and recording asset disposals',
                    'Financial Statement Preparation: Generating monthly P&L and Balance Sheet with variance analysis',
                    'Client Communication: Interfacing directly with clients on bookkeeping matters'
                ],
                software: ['QuickBooks Online ProAdvisor', 'Xero Advisor Certified', 'Bill.com', 'Expensify', 'Sage Intacct', 'Advanced Excel (Pivot Tables, VLOOKUPs)'],
                idealFor: ['Month-end close processes', 'Multi-entity businesses', 'Complex reconciliations', 'Financial reporting']
            },
            {
                level: 'Senior',
                title: 'Accounting Manager / Supervisor',
                experience: '5+ years',
                responsibilities: [
                    'Financial Review: Performing final quality reviews of the General Ledger and Trial Balance for US GAAP compliance',
                    'Cleanup & Backlog: Leading forensic "cleanup" projects for messy historical books',
                    'Systems Integration: Setting up the "Accounting App Stack" (connecting CRM, Inventory, and Ledger systems)',
                    'CPA Liaison: Preparing year-end workpaper packages for the client\'s tax CPA to minimize queries',
                    'Team Leadership: Supervising junior and mid-level bookkeepers, performing quality reviews',
                    'Process Optimization: Implementing best practices and workflow improvements',
                    'Strategic Advisory: Providing insights on financial trends and recommending improvements'
                ],
                software: ['NetSuite', 'Microsoft Dynamics 365', 'SAP Business One', 'Sage Intacct (Advanced)', 'Advanced Excel/VBA', 'Financial modeling tools'],
                idealFor: ['Complex accounting operations', 'Multi-location businesses', 'ERP implementations', 'Team supervision and quality control', 'Year-end audit preparation']
            }
        ],
        softwareCategories: [
            {
                category: 'Accounting Platforms',
                platforms: ['QuickBooks Online & Desktop', 'Xero', 'Sage Intacct', 'NetSuite', 'Microsoft Dynamics 365', 'Sage 50/100/300', 'FreshBooks']
            },
            {
                category: 'AP/AR Automation',
                platforms: ['Bill.com', 'Melio', 'Divvy', 'Ramp', 'Expensify']
            },
            {
                category: 'Receipt Management',
                platforms: ['Dext (formerly Receipt Bank)', 'Hubdoc', 'AutoEntry', 'Neat']
            },
            {
                category: 'Workflow Management',
                platforms: ['Karbon', 'Canopy', 'Financial Cents', 'Liscio']
            }
        ],
        gettingStarted: [
            { step: '01', title: 'Discovery Call', description: 'Discuss your specific needs, volume, and desired experience level. We\'ll understand your workflows and software requirements.' },
            { step: '02', title: 'Resume Review', description: 'We shortlist 2-3 pre-vetted candidates matching your requirements. Review their credentials, experience, and software proficiency.' },
            { step: '03', title: 'Video Interview', description: 'Conduct video interviews via Zoom or Teams to select the professional who best fits your firm\'s culture and requirements.' },
            { step: '04', title: 'Onboarding', description: 'We handle all HR, infrastructure, and compliance. You focus on training them on your specific processes and client preferences.' },
            { step: '05', title: 'Quality Monitoring', description: 'Continuous oversight with our 3-tier review system ensures consistent quality and accuracy in all deliverables.' }
        ],
        trial: {
            duration: '15 Days',
            description: 'Try our bookkeeping services with a 15-Day Risk-Free Trial. Test quality, communication, and turnaround on a real project. No obligation to continue if you\'re not completely satisfied.'
        }
    },
    {
        id: "tax-preparation",
        title: "Hire Tax Preparation Staff",
        slug: "tax-preparation",
        description: "CPA, EA, and CA credentialed tax professionals who scale your practice during busy season.",
        longDescription: "Our offshore tax preparers hold US-relevant credentials (CPA, EA, CA) and are updated annually on TCJA, SECURE Act 2.0, and all federal/state tax code changes.",
        icon: "tax",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&h=1080&fit=crop",
        intro: {
            title: "Scale Your Tax Practice Without Overhead",
            content: "Our tax preparers are credentialed professionals (CPAs, EAs, CAs) who work exclusively on US tax returns and are updated annually on IRS tax code changes.",
            stats: [
                { label: "Credentialed Pros", value: "CPA/EA/CA" },
                { label: "IRS Compliant", value: "100%" }
            ]
        },
        features: [
            { title: "Comprehensive Tax Form Expertise", description: "Individual: 1040, Sch C/E, 8949, 4562 | Business: 1120-S, 1065, 1120, 990 | Multi-State returns and sales tax." },
            { title: "CPA/EA/CA Credentials", description: "Senior staff hold Enrolled Agent (EA), CPA, or Chartered Accountant (CA) credentials with US tax training." },
            { title: "Tax Software Proficiency", description: "Drake Tax, Lacerte, ProSeries, UltraTax, CCH Axcess, and TaxAct expertise." },
            { title: "Quality 3-Tier Review", description: "Every return undergoes preparer → senior reviewer → manager sign-off before delivery." },
            { title: "IRS Compliance", description: "Annual training on Circular 230, PTIN requirements, and IRS ethics guidelines." }
        ],
        process: [
            { step: "01", title: "Define Your Needs", description: "Share the types of returns, software, and volume you handle." },
            { step: "02", title: "Candidate Selection", description: "We present vetted, credentialed tax professionals for your review." },
            { step: "03", title: "Test Project", description: "Start with a 15-day risk-free trial on real tax returns." },
            { step: "04", title: "Scale Seamlessly", description: "Add more staff as your practice grows during tax season." }
        ],
        whyChooseUs: [
            { title: "Credentialed Professionals", description: "Only CPA, Enrolled Agents (EA), and Chartered Accountants (CA) with verifiable credentials and US tax training." },
            { title: "Tax Season Scalability", description: "Ramp up capacity from January-April, then scale down post-extension season without severance costs." },
            { title: "CPE Training Included", description: "We cover all Continuing Professional Education (CPE) requirements at our expense, ensuring current knowledge." },
            { title: "PTIN Compliance", description: "All preparers maintain valid IRS Preparer Tax Identification Numbers (PTINs) and Circular 230 ethics." },
            { title: "Multi-State Complexity", description: "Handle resident, non-resident, and part-year state returns across all 50 states with confidence." }
        ],
        testimonial: {
            quote: "Our offshore tax team handled 400+ returns this season. Quality was exceptional.",
            author: "Michael Torres",
            role: "Managing Partner",
            company: "Torres Tax Group"
        },
        faqs: [
            { question: "Do they have US tax credentials?", answer: "Yes, our senior tax staff hold CPA, Enrolled Agent (EA), or Chartered Accountant credentials." },
            { question: "How do you ensure quality?", answer: "We use a 3-tier review process: Preparer → Senior Reviewer → Manager sign-off." }
        ],
        experienceLevels: [
            {
                level: 'Junior',
                title: 'Associate Tax Preparer',
                experience: '6 months - 2 years',
                responsibilities: [
                    'Tax Indexing: Sorting and bookmarking digital tax organizers into standardized PDF workpapers',
                    'Basic Form 1040: Entering data for simple individual returns (W-2, Interest, and Dividends)',
                    'Drafting Workpapers: Creating lead schedules for simple Schedule C (Sole Proprietor) businesses',
                    'Pro-forma Migration: Rolling forward previous year data into the current year software',
                    'Document Organization: Managing and organizing tax source documents with proper indexing'
                ],
                software: ['Drake Software', 'Lacerte (Basic)', 'GruntWorx', 'Adobe Acrobat Pro', 'Tax document portals'],
                idealFor: ['High-volume 1040 processing', 'Tax document organization', 'Data entry and basic preparation', 'Year-over-year rollovers']
            },
            {
                level: 'Mid',
                title: 'Senior Tax Associate',
                experience: '2-5 years',
                responsibilities: [
                    'Entity Returns: Preparing Form 1065 (Partnerships) and Form 1120S (S-Corps)',
                    'Book-to-Tax (M-1): Calculating adjustments between financial net income and taxable income',
                    'Depreciation Logic: Calculating MACRS, Section 179, and Bonus Depreciation for business assets',
                    'Sales Tax Compliance: Managing multi-state nexus studies and filing via TaxJar or Avalara',
                    'Complex Schedules: Preparing Schedule E (Rental Properties), Schedule D (Capital Gains), Schedule C (Business)',
                    'State Tax Returns: Preparing multi-state individual and business tax returns'
                ],
                software: ['Lacerte', 'UltraTax CS', 'CCH Axcess', 'TaxJar', 'Avalara', 'ProSeries'],
                idealFor: ['Business entity tax returns', 'Multi-state filings', 'Depreciation calculations', 'Sales tax compliance']
            },
            {
                level: 'Senior',
                title: 'Tax Manager / Specialist',
                experience: '5+ years',
                responsibilities: [
                    'International Compliance: Preparing high-penalty forms like 5471 (CFCs) and 5472 (Foreign-owned US corps)',
                    'Advanced Form 1040: Handling High-Net-Worth individuals with complex Schedule E (Rentals) and multi-state K-1s',
                    'Notice Resolution: Drafting formal responses to IRS and State tax notices',
                    'Estate & Trust: Preparing Form 1041 (Fiduciary) and Form 706 (Estate/Gift Tax)',
                    'Tax Planning: Providing strategic tax planning advice and optimization strategies',
                    'Quality Review: Performing final quality reviews of complex returns prepared by junior staff'
                ],
                software: ['CCH ProSystem fx', 'GoSystem Tax RS', 'Bloomberg Tax', 'Canopy', 'Thomson Reuters Checkpoint'],
                idealFor: ['International tax compliance', 'High-net-worth individuals', 'Estate and trust taxation', 'IRS notice resolution', 'Complex tax planning']
            }
        ],
        softwareCategories: [
            {
                category: 'Tax Preparation Software',
                platforms: ['UltraTax CS', 'Lacerte', 'ProSeries', 'CCH ProSystem fx', 'CCH Axcess Tax', 'Drake Tax', 'GoSystem Tax RS', 'TaxAct Professional']
            },
            {
                category: 'Sales Tax Platforms',
                platforms: ['Avalara', 'TaxJar', 'Vertex', 'Sovos']
            },
            {
                category: 'Document Management',
                platforms: ['SafeSend Returns', 'GruntWorx', 'TaxDome', 'SmartVault', 'ShareFile']
            },
            {
                category: 'Workflow Management',
                platforms: ['Canopy', 'Karbon', 'Financial Cents', 'Tax1099']
            }
        ],
        gettingStarted: [
            { step: '01', title: 'Needs Assessment', description: 'Discuss your volume, complexity level, and software requirements. We\'ll understand your firm\'s specific tax specialties and workflows.' },
            { step: '02', title: 'Candidate Selection', description: 'Review 2-3 pre-vetted resumes with relevant experience levels, software proficiency, and tax specialties matching your needs.' },
            { step: '03', title: 'Interview Process', description: 'Conduct video interviews to assess technical knowledge, communication skills, and cultural fit for your firm.' },
            { step: '04', title: 'Onboarding & Training', description: 'We handle all infrastructure and compliance. You train them on your firm-specific procedures and quality standards.' },
            { step: '05', title: 'Ongoing Quality Control', description: 'Continuous monitoring with our multi-tier review system ensures consistent accuracy in all tax filings.' }
        ],
        trial: {
            duration: '15 Days',
            description: 'Try our tax preparation services with a 15-Day Risk-Free Trial. Test quality, technical accuracy, and turnaround on real tax returns. No obligation to continue.'
        }
    },
    {
        id: "payroll-compliance",
        title: "Hire Payroll and Compliance",
        slug: "payroll-compliance",
        description: "SOC 1 & SOC 2 compliant payroll specialists managing bi-weekly processing and tax filings.",
        longDescription: "Our payroll team handles the full payroll lifecycle—from timekeeping to tax remittances—ensuring compliance with FLSA, multi-state withholding, and workers' compensation requirements.",
        icon: "users",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
        intro: {
            title: "Never Miss a Payroll Deadline Again",
            content: "Our payroll specialists manage the full cycle from data entry to tax filings, ensuring your clients' employees are always paid on time.",
            stats: [
                { label: "On-Time Rate", value: "100%" },
                { label: "Multi-State Ready", value: "Yes" }
            ]
        },
        features: [
            { title: "Full-Cycle Payroll Processing", description: "Timekeeping integration, pay calculations, direct deposit setup, payroll tax remittances (941, 940, state withholding)." },
            { title: "Multi-State Compliance", description: "Handle SUI, SUTA, local taxes (NYC, PA, etc.), and workers' compensation across all 50 states." },
            { title: "Payroll Platform Expertise", description: "ADP Workforce Now, Paychex Flex, Gusto, QuickBooks Payroll, Rippling, OnPay, and more." },
            { title: "Benefits & Garnishments", description: "401(k) contributions, health insurance deductions, HSA/FSA, child support garnishments, tax levies." },
            { title: "SOC 1 & SOC 2 Compliance", description: "Our delivery centers are SOC 1 Type II and SOC 2 Type II certified for data security and payroll integrity." }
        ],
        process: [
            { step: "01", title: "System Setup", description: "We sync with your payroll software and time-tracking tools." },
            { step: "02", title: "Team Training", description: "Your offshore specialist learns your unique payroll processes." },
            { step: "03", title: "Processing Begins", description: "Payroll runs are executed bi-weekly or per your schedule." },
            { step: "04", title: "Compliance Monitoring", description: "We stay ahead of labor law changes and filing deadlines." }
        ],
        whyChooseUs: [
            { title: "Zero Payroll Errors", description: "3-tier quality control with preparer, reviewer, and manager verification before every payroll run." },
            { title: "SOC 1/SOC 2 Certified", description: "Work from delivery centers with enterprise-grade security, meeting the highest control standards." },
            { title: "Multi-State Expertise", description: "Navigate complex state tax rules, reciprocal agreements, and local tax jurisdictions with confidence." },
            { title: "FLSA Compliance", description: "Ensure overtime, exempt/non-exempt classification, and wage-hour rules are properly applied." },
            { title: "Seasonal Scalability", description: "Add temporary payroll staff during year-end W-2/1099 season or when onboarding large new clients." }
        ],
        testimonial: {
            quote: "Our payroll offshore team handles 50+ companies flawlessly. Best decision we made.",
            author: "Rebecca Adams",
            role: "Director of Operations",
            company: "Adams Payroll Services"
        },
        faqs: [
            { question: "Can they handle multi-state payroll?", answer: "Yes, our specialists are trained in the complexities of multi-state compliance and tax filing." },
            { question: "What if there's an error?", answer: "Our 3-tier review process minimizes errors, but if one occurs, we take full responsibility and correct it immediately." }
        ],
        experienceLevels: [
            {
                level: 'Junior',
                title: 'Payroll Associate',
                experience: '6 months - 2 years',
                responsibilities: [
                    'Time Tracking: Auditing employee timesheets for accuracy and supervisor approval',
                    'Profile Management: Setting up new hires in the payroll system and verifying W-4/I-9 data',
                    'Inquiry Support: Responding to employee questions regarding paystubs or address changes',
                    'Data Entry: Inputting employee information, pay rates, and deductions accurately',
                    'Report Generation: Creating basic payroll reports for review'
                ],
                software: ['Gusto', 'TSheets (QuickBooks Time)', 'Deputy', 'When I Work', 'Homebase'],
                idealFor: ['Time and attendance management', 'Employee profile setup', 'Basic payroll assistance', 'Employee support inquiries']
            },
            {
                level: 'Mid',
                title: 'Payroll Specialist',
                experience: '3-5 years',
                responsibilities: [
                    'Full-Cycle Processing: Executing multi-state payroll runs for hourly and salaried staff',
                    'Benefits Admin: Tracking 401(k) deferrals, HSA contributions, and health insurance deductions',
                    'Tax Payments: Calculating and initiating 941 (Federal) and SUI/SIT (State) tax deposits',
                    'Garnishments: Processing court-ordered wage garnishments for child support, student loans, or tax levies',
                    'Multi-State Compliance: Managing payroll for employees across multiple state jurisdictions',
                    'Reconciliation: Reconciling payroll liabilities and ensuring proper G/L posting'
                ],
                software: ['ADP Run', 'Paychex Flex', 'Rippling', 'Zenefits', 'OnPay'],
                idealFor: ['Full-cycle payroll processing', 'Multi-state payroll', 'Benefits administration', 'Tax deposit management']
            },
            {
                level: 'Senior',
                title: 'Payroll Compliance Manager',
                experience: '5+ years',
                responsibilities: [
                    'Year-End Filing: Leading the production and e-filing of W-2s and 1099-NECs',
                    'Nexus Registration: Opening new state and local tax accounts for remote employees',
                    'Workers Comp Audits: Preparing payroll data and reports for annual insurance audits',
                    'Compliance Management: Ensuring adherence to federal, state, and local payroll regulations',
                    'Process Optimization: Implementing best practices and workflow improvements for payroll operations',
                    'Team Leadership: Supervising junior payroll staff and performing quality reviews',
                    'Audit Support: Managing payroll audits and responding to agency inquiries'
                ],
                software: ['ADP Workforce Now', 'Workday', 'Ceridian Dayforce', 'BambooHR', 'UKG (Ultimate Kronos Group)'],
                idealFor: ['Enterprise payroll management', 'Multi-location compliance', 'Year-end tax filing', 'Payroll team supervision', 'Complex compliance scenarios']
            }
        ],
        softwareCategories: [
            {
                category: 'Full-Service Payroll',
                platforms: ['ADP Run / Workforce Now', 'Paychex Flex', 'Gusto', 'Rippling', 'OnPay', 'Zenefits', 'Justworks', 'TriNet']
            },
            {
                category: 'Time Tracking & Scheduling',
                platforms: ['TSheets (QuickBooks Time)', 'Deputy', 'When I Work', 'Homebase', 'ClockShark', 'Time Doctor']
            },
            {
                category: 'Accounting Integration',
                platforms: ['QuickBooks Online', 'Xero', 'Sage Intacct', 'NetSuite', 'Bill.com']
            },
            {
                category: 'HR Management Systems (HRIS)',
                platforms: ['BambooHR', 'Namely', 'Workday', 'UKG', 'Ceridian Dayforce']
            }
        ],
        gettingStarted: [
            { step: '01', title: 'Requirements Review', description: 'Discuss your payroll volume, number of states, pay frequencies, and software platform. We\'ll understand your specific compliance needs.' },
            { step: '02', title: 'Candidate Matching', description: 'Review 2-3 pre-vetted candidates with relevant experience levels, software proficiency, and multi-state expertise.' },
            { step: '03', title: 'Security Verification', description: 'Conduct video interviews and verify our SOC 1/2 compliance, security protocols, and data protection measures.' },
            { step: '04', title: 'System Integration', description: 'We seamlessly integrate with your existing payroll platform and accounting software—no workflow disruption.' },
            { step: '05', title: 'Ongoing Compliance Monitoring', description: 'Continuous oversight ensures all federal, state, and local compliance requirements are met accurately and on time.' }
        ],
        trial: {
            duration: '15 Days',
            description: 'Try our payroll services with a 15-Day Risk-Free Trial. Test accuracy, compliance knowledge, and system integration on live payroll runs. No obligation to continue.'
        }
    },
    {
        id: "audit-assurance",
        title: "Hire Audit and Assurance",
        slug: "audit-assurance",
        description: "GAAS-trained audit professionals performing testing, sampling, and workpaper documentation.",
        longDescription: "Scale your audit practice with offshore teams experienced in SOC 1/SOC 2, GAAP audits, and PCAOB compliance—handling the detailed work while your seniors focus on analysis.",
        icon: "shield",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop",
        intro: {
            title: "Audit Support That Scales",
            content: "Our audit professionals handle the detailed work of testing, sampling, and documentation, allowing your senior team to focus on analysis and client relationships.",
            stats: [
                { label: "Audit Ready", value: "Always" },
                { label: "Documentation", value: "Detailed" }
            ]
        },
        features: [
            { title: "GAAS & PCAOB Standards", description: "Trained in Generally Accepted Auditing Standards and PCAOB requirements for public company audits." },
            { title: "SOC 1 & SOC 2 Audits", description: "Perform control testing, walkthroughs, and evidence gathering for SOC 1 Type II and SOC 2 Type II engagements." },
            { title: "Internal Control Testing", description: "Document process narratives, perform walkthroughs, and execute control testing for ICFR (Internal Control over Financial Reporting)." },
            { title: "Workpaper Management", description: "Create detailed audit workpapers in CaseWare, Caseware IDEA, or your firm's proprietary templates." },
            { title: "Industry Specialization", description: "Team members with experience in construction, healthcare, non-profits, manufacturing, and financial services audits." }
        ],
        process: [
            { step: "01", title: "Audit Scope Review", description: "We understand your audit methodology and documentation standards." },
            { step: "02", title: "Staff Assignment", description: "Match you with audit professionals experienced in your industry." },
            { step: "03", title: "Engagement Testing", description: "Your offshore team performs testing under your senior oversight." },
            { step: "04", title: "Review & Finalization", description: "All workpapers are reviewed by your team before finalization." }
        ],
        whyChooseUs: [
            { title: "Audit Methodology Experts", description: "We adapt to your firm's specific audit approach, templates, and sign-off protocols." },
            { title: "SOC 2 Compliant Centers", description: "Our delivery centers are SOC 2 Type II certified with enterprise-grade data security and access controls." },
            { title: "Experienced Seniors Available", description: "Access CPA and CA-credentialed audit managers for complex engagements requiring senior-level judgment." },
            { title: "Industry-Specific Knowledge", description: "Team members trained in specialized audits (ERISA, HUD, grant audits, single audits)." },
            { title: "Quality Control", description: "Internal review process ensures all workpapers meet your firm's quality standards before delivery." }
        ],
        testimonial: {
            quote: "Their audit support allowed us to take on 3 additional clients this year without hiring locally.",
            author: "David Kim",
            role: "Audit Partner",
            company: "Kim & Partners LLP"
        },
        faqs: [
            { question: "Do they understand US audit standards?", answer: "Yes, all audit staff are trained in GAAS, SOC 2, and US compliance frameworks." },
            { question: "How is work supervised?", answer: "Your senior team reviews all workpapers; we provide the detailed testing and documentation support." }
        ],
        experienceLevels: [
            {
                level: 'Junior',
                title: 'Audit Associate',
                experience: '6 months - 2 years',
                responsibilities: [
                    'Substantive Testing: Performing vouching and tracing of transactions to source documents',
                    'Confirmations: Managing the bank and AR/AP confirmation process via Confirmation.com',
                    'Roll-forwards: Updating the current year audit file with prior-year balances and notes',
                    'Sample Selection: Selecting samples using IDEA or ACL for testing procedures',
                    'Documentation: Preparing audit workpapers with proper indexing and cross-referencing',
                    'PBC Tracking: Helping to track Provided by Client documents and follow up on missing items'
                ],
                software: ['CaseWare (Basic)', 'Microsoft Excel (Intermediate)', 'CCH Engagement', 'Confirmation.com', 'Adobe Acrobat Pro'],
                idealFor: ['High-volume substantive testing', 'Confirmation management', 'Basic audit workpaper preparation', 'File organization and roll-forwards']
            },
            {
                level: 'Mid',
                title: 'Senior Audit Associate',
                experience: '3-5 years',
                responsibilities: [
                    'Control Testing: Documenting walkthroughs and testing the operating effectiveness of internal controls',
                    'Financial Drafting: Preparing draft financial statements including mandatory GAAP disclosures',
                    'PBC Management: Coordinating the "Provided by Client" list to ensure all audit evidence is gathered',
                    'Account Analysis: Performing complex account reconciliations and analytical procedures',
                    'Risk Assessment: Assisting with risk assessment procedures and identifying areas of audit focus',
                    'Client Communication: Interfacing with client accounting staff to gather information and resolve queries'
                ],
                software: ['CaseWare Working Papers', 'AdvanceFlow', 'ACL', 'IDEA', 'CCH Engagement (Advanced)', 'Tableau (for data analytics)'],
                idealFor: ['Internal control testing', 'Financial statement drafting', 'Complex analytical procedures', 'PBC coordination', 'SOC audit support']
            },
            {
                level: 'Senior',
                title: 'Audit Manager',
                experience: '5+ years',
                responsibilities: [
                    'Risk Assessment: Calculating materiality and identifying areas of high risk/fraud',
                    'Quality Review: Performing a second-level review of workpapers to ensure GAAS compliance',
                    'Specialized Audits: Leading 401(k) Employee Benefit Plan audits or Single Audits (Uniform Guidance)',
                    'Planning & Strategy: Developing audit strategies and engagement planning documentation',
                    'Team Supervision: Supervising junior and senior associates, performing quality reviews of their work',
                    'Financial Statement Finalization: Finalizing financial statements and disclosure checklists',
                    'Client Advisement: Providing recommendations for improving internal controls and processes'
                ],
                software: ['TeamMate', 'MindBridge AI', 'Thomson Reuters Checkpoint', 'CaseWare Cloud', 'GoFileRoom', 'Alteryx (for data analytics)'],
                idealFor: ['Complex audit engagements', 'Quality control reviews', 'Specialized audit areas (EBP, Single Audits, SOC)', 'Team supervision', 'Audit risk assessment']
            }
        ],
        softwareCategories: [
            {
                category: 'Audit Software',
                platforms: ['CaseWare Working Papers', 'CCH Engagement (Axcess Audit)', 'AdvanceFlow', 'TeamMate', 'AuditFile', 'Suralink (for PBC management)']
            },
            {
                category: 'Data Analytics & Testing',
                platforms: ['IDEA (CaseWare Analytics)', 'ACL Analytics', 'Alteryx', 'Tableau', 'Power BI']
            },
            {
                category: 'Confirmation & Documentation',
                platforms: ['Confirmation.com', 'Thomson Reuters Confirmation', 'Practice CS', 'GoFileRoom', 'SmartVault']
            },
            {
                category: 'Research & Reference',
                platforms: ['Thomson Reuters Checkpoint', 'CCH Accounting Research Manager', 'AICPA Resources', 'Bloomberg Tax']
            }
        ],
        gettingStarted: [
            { step: '01', title: 'Engagement Assessment', description: 'Discuss your audit volume, complexity, software platforms, and specific audit types (financial, EBP, governmental, etc.).' },
            { step: '02', title: 'Skillset Matching', description: 'Review 2-3 pre-vetted candidates with relevant audit experience, industry knowledge, and software proficiency.' },
            { step: '03', title: 'Technical Interview', description: 'Conduct video interviews to assess GAAS knowledge, analytical skills, and communication abilities.' },
            { step: '04', title: 'Software & Training', description: 'We integrate seamlessly with your audit software. You train them on your firm-specific audit methodology and quality standards.' },
            { step: '05', title: 'Quality Monitoring', description: 'Continuous oversight with our multi-tier review system ensures GAAS/PCAOB compliance in all audit files.' }
        ],
        trial: {
            duration: '15 Days',
            description: 'Try our audit services with a 15-Day Risk-Free Trial. Test technical accuracy, workpaper quality, and GAAS compliance on a live audit engagement. No obligation to continue.'
        }
    },
    {
        id: "virtual-cfo-fpa",
        title: "Hire Virtual CFO & FP&A",
        slug: "virtual-cfo-fpa",
        description: "Senior FP&A analysts and fractional CFOs with 10+ years of strategic financial leadership.",
        longDescription: "Access executive-level financial professionals who build 3-statement models, manage investor relations, and drive strategic planning—without the C-suite salary.",
        icon: "trending-up",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop",
        intro: {
            title: "Strategic Financial Leadership, Offshore",
            content: "Our Virtual CFO and FP&A professionals bring executive experience in financial modeling, investor relations, and strategic planning at a fraction of the cost.",
            stats: [
                { label: "Experience Level", value: "10+ Years" },
                { label: "Funding Supported", value: "$100M+" }
            ]
        },
        features: [
            { title: "Financial Modeling & Forecasting", description: "Build complex 3-statement models (P&L, Balance Sheet, Cash Flow), scenario analysis, and sensitivity testing for strategic decision-making." },
            { title: "Budget & Variance Analysis", description: "Create annual budgets, rolling 13-week cash forecasts, and monthly variance analysis with actionable insights." },
            { title: "Investor & Board Reporting", description: "Prepare board decks, KPI dashboards, investor update materials, and quarterly business reviews (QBRs)." },
            { title: "M&A Financial Due Diligence", description: "Conduct quality of earnings (QoE) analysis, integration modeling, and synergy identification for acquisitions." },
            { title: "Strategic Planning & KPIs", description: "Define and track key performance indicators (KPIs) aligned with company objectives and industry benchmarks." }
        ],
        process: [
            { step: "01", title: "Strategic Assessment", description: "We understand your business model, KPIs, and growth objectives." },
            { step: "02", title: "CFO Matching", description: "We present senior FP&A or CFO-level candidates for interview." },
            { step: "03", title: "Model Development", description: "Your offshore CFO builds custom financial models and dashboards." },
            { step: "04", title: "Ongoing Advisory", description: "Weekly strategy sessions and monthly board-ready reporting." }
        ],
        whyChooseUs: [
            { title: "C-Suite Experience", description: "Our Virtual CFOs have led finance teams at high-growth startups, middle-market companies, and PE-backed firms." },
            { title: "Strategic Business Partner", description: "They don't just report numbers—they advise on pricing strategy, capital structure, and growth initiatives." },
            { title: "Cost-Effective Leadership", description: "Get CFO-level strategic talent at 30-40% of a US-based CFO salary, with flexible part-time or full-time arrangements." },
            { title: "Fundraising Support", description: "Experienced in preparing pitch decks, financial projections, and data room materials for Series A-C fundraising." },
            { title: "ERP & BI Tools", description: "Proficient in NetSuite, Sage Intacct, Power BI, Tableau, and advanced Excel/Google Sheets modeling." }
        ],
        testimonial: {
            quote: "Our offshore CFO became our strategic partner for our Series A. Couldn't have done it without them.",
            author: "Amanda Chen",
            role: "CEO",
            company: "TechFlow Inc"
        },
        faqs: [
            { question: "What experience level do Virtual CFOs have?", answer: "Our Virtual CFOs typically have 10+ years of experience, including prior roles as Controllers or Finance Directors." },
            { question: "Can they present to our board?", answer: "Yes, many of our Virtual CFOs regularly present financial updates to boards and investors via video conference." }
        ],
        experienceLevels: [
            {
                level: 'Junior',
                title: 'Financial Analyst',
                experience: '6 months - 2 years',
                responsibilities: [
                    'Data Visualization: Updating monthly KPI dashboards and charts using Power BI, Tableau, or Fathom',
                    'Budgeting Support: Gathering historical data to assist in the creation of departmental budgets',
                    'Ratio Analysis: Calculating liquidity, leverage, and profitability ratios for financial health assessment',
                    'Report Generation: Creating standardized financial reports and presentations',
                    'Data Management: Maintaining financial databases and ensuring data accuracy',
                    'Ad-hoc Analysis: Supporting senior analysts with special projects and research'
                ],
                software: ['Fathom', 'Reach Reporting', 'Spotlight Reporting', 'Power BI', 'Excel (Advanced - Pivot Tables, Charts, Macros)', 'QuickBooks Online / Xero (for data extraction)'],
                idealFor: ['KPI dashboard updates', 'Financial data management', 'Basic ratio analysis', 'Budget preparation support', 'Report generation']
            },
            {
                level: 'Mid',
                title: 'Senior FP&A Analyst',
                experience: '3-5 years',
                responsibilities: [
                    'Rolling Forecasts: Building and maintaining 12-month rolling financial forecasts that adapt to market conditions',
                    'Cash Flow Modeling: Creating 13-week cash flow projections to manage short-term liquidity and avoid cash crunches',
                    'Scenario Planning: Building "What-if" models for price changes, new product launches, or expansion scenarios',
                    'Variance Analysis: Performing detailed budget vs. actual analysis to explain performance gaps',
                    'Profitability Analysis: Analyzing product/service line profitability and customer profitability',
                    'Board Presentations: Preparing monthly executive summary decks for board meetings or investors'
                ],
                software: ['Jirav', 'Vena', 'Mosaic', 'Tableau', 'Advanced Excel & Financial Modeling', 'NetSuite / Sage Intacct (for data integration)'],
                idealFor: ['Rolling forecasts and budgets', 'Cash flow management', 'Scenario modeling', 'Strategic analysis', 'Management reporting']
            },
            {
                level: 'Senior',
                title: 'Fractional CFO / Controller',
                experience: '5+ years',
                responsibilities: [
                    'Strategic Advisory: Presenting financial narratives to the Board of Directors or investors with strategic recommendations',
                    'M&A Support: Managing the "Data Room" and financial due diligence for business sales or acquisitions',
                    'Capital Allocation: Advising on debt vs. equity funding and ROI on major capital expenditures',
                    'Financial Strategy: Developing long-term financial strategies aligned with business growth objectives',
                    'Process Optimization: Implementing financial controls, policies, and best practices',
                    'Team Leadership: Supervising finance team members and ensuring quality deliverables',
                    'Fundraising Support: Preparing pro-forma statements and investor presentations for capital raises'
                ],
                software: ['Oracle NetSuite Planning & Budgeting', 'Anaplan', 'Adaptive Insights', 'Looker', 'Bloomberg Terminal', 'Advanced financial modeling in Excel'],
                idealFor: ['Executive-level strategic guidance', 'M&A transactions', 'Fundraising and investor relations', 'Financial transformation projects', 'Board-level financial reporting']
            }
        ],
        softwareCategories: [
            {
                category: 'FP&A & Planning Software',
                platforms: ['Anaplan', 'Adaptive Insights (Workday Planning)', 'Jirav', 'Vena Solutions', 'Mosaic', 'Cube', 'Planful (Host Analytics)']
            },
            {
                category: 'Business Intelligence & Dashboards',
                platforms: ['Power BI', 'Tableau', 'Looker', 'Fathom', 'Reach Reporting', 'Spotlight Reporting', 'Klipfolio']
            },
            {
                category: 'Financial Modeling',
                platforms: ['Advanced Excel / Google Sheets', 'Quantrix', 'Modano', 'Prophix']
            },
            {
                category: 'ERP & Data Sources',
                platforms: ['NetSuite', 'Sage Intacct', 'QuickBooks Online / Desktop', 'Xero', 'Microsoft Dynamics 365', 'SAP Business One']
            }
        ],
        gettingStarted: [
            { step: '01', title: 'Strategic Assessment', description: 'Discuss your financial goals, current challenges, and specific needs (budgeting, forecasting, fundraising, M&A, etc.).' },
            { step: '02', title: 'Experience Matching', description: 'Review 2-3 pre-vetted candidates with relevant experience in your industry, company stage, and financial maturity level.' },
            { step: '03', title: 'Strategic Interview', description: 'Conduct video interviews to assess strategic thinking, communication skills, and cultural fit with your leadership team.' },
            { step: '04', title: 'Dashboard & Model Setup', description: 'We build custom KPI dashboards, financial models, and reporting templates tailored to your business needs.' },
            { step: '05', title: 'Ongoing Strategic Partnership', description: 'Continuous collaboration with regular strategic reviews, board presentations, and proactive financial guidance.' }
        ],
        trial: {
            duration: '15 Days',
            description: 'Try our Virtual CFO services with a 15-Day Risk-Free Trial. Test strategic insights, financial modeling quality, and board-ready reporting. No obligation to continue.'
        }
    },
];

export function getHireStaffBySlug(slug: string): HireStaffPosition | undefined {
    return hireStaffPositions.find((position) => position.slug === slug);
}

export function getAllHireStaffPositions(): HireStaffPosition[] {
    return hireStaffPositions;
}
