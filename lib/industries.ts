export interface Industry {
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
    // NEW: Sub-Industries Structure
    subIndustries: {
        name: string;
        focus: string;
        bookkeeping: string[];
        accounting: string[];
        payroll: string[];
        taxPreparation: string[];
        softwareStack: string[];
    }[];
    // NEW: Industry-Specific Benefits
    industryBenefits: {
        title: string;
        description: string;
    }[];
    // NEW: Getting Started Steps
    gettingStarted: {
        step: string;
        title: string;
        description: string;
    }[];
}

export const industries: Industry[] = [
    {
        id: "medical-health",
        title: "Medical and Health",
        slug: "medical-health",
        description: "HIPAA-compliant accounting for medical practices, dental clinics, mental health, therapy centers, med spas, and home healthcare.",
        longDescription: "Healthcare accounting requires specialized knowledge of insurance billing cycles (ERA/EOB), RCM oversight, and HIPAA compliance. From general practices to specialized clinics, our team understands medical accounting nuances.",
        icon: "heart",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&h=1080&fit=crop",
        intro: {
            title: "Financial Health for Healthcare Providers",
            content: "From solo practitioners to multi-location clinics, we understand the unique challenges of medical billing, insurance reimbursements, and healthcare compliance.",
            stats: [
                { label: "HIPAA Compliant", value: "100%" },
                { label: "Medical Clients", value: "150+" }
            ]
        },
        features: [
            { title: "8 Medical Sub-Industries", description: "General/Specialized Medical, Dental, Mental Health, Physical Therapy, Dermatology/Med Spas, Outpatient Centers, Home Healthcare, Pharmacy." },
            { title: "Revenue Cycle Management (RCM)", description: "Track denied claims, aging A/R, ERA/EOB reconciliation, and insurance payment lag cash flow forecasting." },
            { title: "Practice Management Integration", description: "AdvancedMD, Athenahealth, Kareo, Dentrix, SimplePractice, WebPT, Zenoti, AlayaCare integration." },
            { title: "HIPAA & SOC 2 Compliance", description: "SOC 2 Type II delivery centers, all staff HIPAA-trained, Business Associate Agreements (BAA) signed." },
            { title: "Treatment Plan Account ing", description: "Track case fee liabilities for orthodontics, manage DME sales for PT, handle member ship programs for med spas." }
        ],
        process: [
            { step: "01", title: "Practice Assessment", description: "Review your billing systems, payer mix, and current financial workflows." },
            { step: "02", title: "System Integration", description: "Connect to your EMR/PM systems for automated revenue data sync." },
            { step: "03", title: "Reimbursement Optimization", description: "Identify underpayments and improve collections processes." },
            { step: "04", title: "Strategic Advisory", description: "Provide insights on profitability by service line and payer." }
        ],
        whyChooseUs: [
            { title: "HIPAA Compliance & Data Security", description: "SOC 2 Type II compliant delivery centers ensuring all patient and practice data handled with highest security. Full HIPAA compliance." },
            { title: "Healthcare Software Expertise", description: "Deep proficiency in AdvancedMD, Athenahealth, Dentrix, SimplePractice, and integration with accounting software." },
            { title: "RCM & Insurance Knowledge", description: "Understanding of insurance billing cycles, ERA/EOB processing, denial management, and healthcare revenue recognition complexities." },
            { title: "Multi-Location Practices", description: "Handle accounting for single-provider practices up to multi-location groups with consolidated reporting and location-level P&Ls." },
            { title: "40-60% Cost Savings", description: "Save significantly compared to hiring in-house healthcare accounting staff, while getting specialized medical practice expertise." }
        ],
        testimonial: {
            quote: "They understand the nuances of medical billing better than any accountant we've worked with.",
            author: "Dr. Emily Rodriguez",
            role: "Practice Owner",
            company: "Rodriguez Family Medicine"
        },
        faqs: [
            { question: "Are you HIPAA compliant?", answer: "Yes, we are fully HIPAA compliant. All staff undergo HIPAA training and our systems meet PHI protection standards." },
            { question: "Do you integrate with EMR systems?", answer: "Yes, we integrate with major EMR/PM platforms like Kareo, DrChrono, Athenahealth, and eClinicalWorks." }
        ],
        subIndustries: [
            {
                name: "General & Specialized Medical Practices",
                focus: "Revenue Cycle Management and Insurance Reconciliation",
                bookkeeping: [
                    "Monthly bank and credit card reconciliations",
                    "Recording insurance payments (ERA/EOB) and patient co-pays",
                    "Managing vendor payables for lab services and medical supplies",
                    "Tracking multiple revenue streams (insurance, patient payments, procedures)"
                ],
                accounting: [
                    "Monthly Profit & Loss statements by location or department",
                    "Revenue Cycle Management (RCM) oversight tracking denied claims and aging A/R",
                    "Cash flow forecasting to manage insurance payment lag",
                    "Accrual accounting for services rendered but not yet billed"
                ],
                payroll: [
                    "Managing base salaries for clinicians and support staff",
                    "Processing Physician Compensation based on RVUs or net collections",
                    "Handling multi-state payroll for group practices with multiple locations",
                    "Managing complex benefit structures (health insurance, malpractice, CME allowances)"
                ],
                taxPreparation: [
                    "Form 1040 / 1120-S preparation for physician-owned practices",
                    "Section 179 deductions for medical imaging or surgical equipment",
                    "Tracking CME (Continuing Medical Education) and professional dues",
                    "Managing S-Corp distributions and reasonable compensation"
                ],
                softwareStack: ["QuickBooks Online", "Sage Intacct", "AdvancedMD", "Athenahealth", "Kareo", "Gusto", "ADP", "Bill.com"]
            },
            {
                name: "Dental & Orthodontic Clinics",
                focus: "Treatment Plan Tracking and Lab Invoice Management",
                bookkeeping: [
                    "Tracking high-volume dental lab invoices",
                    "Reconciling daily patient payments (insurance + patient portions)",
                    "Managing merchant fees from various financing options (CareCredit, LendingClub)",
                    "Recording treatment plan deposits and scheduling payments"
                ],
                accounting: [
                    "Treatment plan profitability analysis (Crowns vs. Fillings vs. Implants)",
                    "Tracking Case Fee liabilities for long-term orthodontic contracts",
                    "Managing deferred revenue for pre-paid treatment plans",
                    "Production vs. collection analysis"
                ],
                payroll: [
                    "Incentive-based pay for hygienists (production bonuses)",
                    "Handling multi-state payroll for group practices",
                    "Processing commission structures for treatment coordinators"
                ],
                taxPreparation: [
                    "Specialized depreciation for dental chairs and X-ray units",
                    "State-specific dental tax compliance",
                    "Managing equipment leases vs. purchases (Section 179 vs. bonus depreciation)"
                ],
                softwareStack: ["Dentrix", "Open Dental", "Eaglesoft", "QuickBooks Online", "Paychex", "Gusto"]
            },
            {
                name: "Mental Health & Behavioral Therapy",
                focus: "Session-Based Billing and OON Reimbursements",
                bookkeeping: [
                    "Managing session-based billing and scheduling integration",
                    "Recording out-of-network (OON) reimbursements from insurance",
                    "Tracking telehealth software subscriptions (Zoom, Doxy.me)",
                    "Managing sliding-scale fee structures"
                ],
                accounting: [
                    "Monitoring 'No-show' costs and utilization rates",
                    "Tracking therapist productivity and session capacity",
                    "Managing grant-funded programs for non-profit mental health centers"
                ],
                payroll: [
                    "Flexible pay cycles for per-session contractors (1099) and salaried clinicians (W-2)",
                    "Managing supervision stipends for licensed supervisors",
                    "Handling CEU (Continuing Education Unit) reimbursements"
                ],
                taxPreparation: [
                    "Home office deductions for telehealth providers",
                    "Managing self-employment tax for solo practitioners",
                    "Tracking professional liability insurance deductions"
                ],
                softwareStack: ["SimplePractice", "TherapyNotes", "TheraNest", "FreshBooks", "Xero", "Gusto"]
            },
            {
                name: "Physical Therapy & Chiropractic Centers",
                focus: "Visit Authorization Tracking and DME Sales",
                bookkeeping: [
                    "Reconciling high-frequency patient visits",
                    "Tracking durable medical equipment (DME) sales (braces, pillows, supplements)",
                    "Managing insurance authorization tracking",
                    "Recording copays and deductibles"
                ],
                accounting: [
                    "Calculating Revenue Per Visit benchmarks",
                    "Tracking authorized visits remaining per patient",
                    "Managing inventory for retail DME products",
                    "Workers' comp billing reconciliation"
                ],
                payroll: [
                    "Performance bonuses based on patient retention and volume",
                    "Managing multi-location therapist scheduling",
                    "Processing per-diem rates for contract therapists"
                ],
                taxPreparation: [
                    "Depreciation of therapeutic equipment (ultrasound, laser therapy)",
                    "Tracking massage therapy vs. clinical adjustments for sales tax purposes",
                    "Managing retail sales tax on DME products"
                ],
                softwareStack: ["WebPT", "Jane App", "Clinicient", "Xero", "QuickBooks Online", "Staffology", "Gusto"]
            },
            {
                name: "Dermatology & Medical Spas",
                focus: "Dual-Entity Accounting (Medical vs. Retail/Wellness)",
                bookkeeping: [
                    "Complex retail inventory reconciliation (skincare products)",
                    "Recording gift card sales vs. redemptions",
                    "Managing consignment inventory for injectables (Botox, fillers)",
                    "Tracking membership programs and package sales"
                ],
                accounting: [
                    "Sales Tax Nexus tracking for cosmetic services vs. medical services",
                    "Tracking high-margin cosmetic injection costs (COGS analysis)",
                    "Managing revenue recognition for package deals and memberships",
                    "Inventory valuation for skincare retail"
                ],
                payroll: [
                    "Commission calculations for estheticians and injectors",
                    "Tracking tips for service staff",
                    "Managing medical vs. spa staff payroll allocation"
                ],
                taxPreparation: [
                    "Managing Dual-Entity structures (Medical PC vs. Retail/Wellness LLC)",
                    "Retail sales tax filings for product sales",
                    "Nexus considerations for multi-state operations",
                    "Equipment depreciation for laser systems"
                ],
                softwareStack: ["Zenoti", "Boulevard", "Vagaro", "QuickBooks Online", "Gusto", "ADP", "Avalara"]
            },
            {
                name: "Outpatient & Diagnostic Centers",
                focus: "Capital Equipment Tracking and Multi-Departmental Allocation",
                bookkeeping: [
                    "High-volume vendor management for reagents and diagnostic kits",
                    "Reconciling global vs. technical billing components",
                    "Managing multiple payer contracts and fee schedules"
                ],
                accounting: [
                    "Capital expenditure (CapEx) tracking for MRI/CT machines",
                    "Inter-departmental cost allocation (radiology, lab, cardiology)",
                    "Managing equipment leases and service contracts"
                ],
                payroll: [
                    "Managing 24/7 staffing shifts and on-call stipends",
                    "Tracking radiologist and pathologist reading fees",
                    "Processing shift differentials for overnight staff"
                ],
                taxPreparation: [
                    "Multi-state nexus if diagnostic results cross state lines",
                    "Complex tax structures for imaging partnerships",
                    "Section 179 and bonus depreciation for medical equipment"
                ],
                softwareStack: ["Medikamart", "Epic", "Cerner", "Sage Intacct", "NetSuite", "ADP Comprehensive"]
            },
            {
                name: "Home Healthcare Services",
                focus: "Mileage Tracking and Medicaid/Medicare Billing",
                bookkeeping: [
                    "Managing travel and mileage reimbursements for field staff",
                    "Reconciling Medicaid/Medicare daily billing cycles",
                    "Tracking EVV (Electronic Visit Verification) integration"
                ],
                accounting: [
                    "Cost-per-visit analysis by service type",
                    "Managing grant-funded programs and restricted funds",
                    "Tracking nurse and aide utilization rates"
                ],
                payroll: [
                    "GPS-verified timekeeping integration for field staff",
                    "Complex overtime for 24-hour live-in caregivers",
                    "Managing weekend and holiday premium pay"
                ],
                taxPreparation: [
                    "Tracking FICA exemptions for certain family caregivers",
                    "Managing state-specific caregiver tax credits",
                    "Handling 1099 vs. W-2 classification for caregivers"
                ],
                softwareStack: ["AlayaCare", "Homecare Homebase", "ClearCare", "QuickBooks Online", "Paycor", "ADP"]
            },
            {
                name: "Pharmacy & Medical Supplies",
                focus: "Inventory Valuation and PBM Reconciliations",
                bookkeeping: [
                    "Batch and expiry-date inventory tracking",
                    "Reconciling PBM (Pharmacy Benefit Manager) clawbacks and reimbursements",
                    "Managing DIR fees and pharmacy network reconciliations"
                ],
                accounting: [
                    "Cost of Goods Sold (COGS) optimization with FIFO/LIFO",
                    "Tracking high-value inventory turnover rates",
                    "Managing 340B drug pricing program compliance"
                ],
                payroll: [
                    "Managing pharmacist licensing stipends",
                    "Hourly technician shift management",
                    "Handling on-call pharmacist compensation"
                ],
                taxPreparation: [
                    "Section 471 inventory valuation methods",
                    "340B drug pricing program compliance and reporting",
                    "Managing controlled substance inventory for DEA compliance"
                ],
                softwareStack: ["PioneerRx", "Liberty", "QS/1", "NetSuite", "TallyPrime", "ADP", "Paychex"]
            }
        ],
        industryBenefits: [
            {
                title: "HIPAA Compliance & Data Security",
                description: "SOC 2 Type II compliant delivery centers ensure all patient and practice data is handled with the highest level of security. We're fully compliant with HIPAA regulations and sign BAAs (Business Associate Agreements)."
            },
            {
                title: "Healthcare Software Expertise",
                description: "Deep proficiency in practice management systems like AdvancedMD, Athenahealth, Dentrix, SimplePractice, and more. We understand the unique integration between PM systems and accounting software."
            },
            {
                title: "RCM & Insurance Knowledge",
                description: "Understanding of insurance billing cycles, ERA/EOB processing, denial management, and the complexities of healthcare revenue recognition."
            },
            {
                title: "Scalability for Multi-Location Practices",
                description: "Handle accounting for single-provider practices up to multi-location group practices with consolidated reporting and location-level P&Ls."
            },
            {
                title: "40-60% Cost Savings",
                description: "Save significantly compared to hiring in-house healthcare accounting staff, while getting specialized expertise in medical practice accounting."
            }
        ],
        gettingStarted: [
            { step: "01", title: "Practice Assessment", description: "We review your practice type, PM system, payer mix, and specific accounting needs." },
            { step: "02", title: "Software Integration", description: "Seamless connection with your PM/billing system and accounting platform." },
            { step: "03", title: "Compliance Verification", description: "Ensure HIPAA BAA is in place and security protocols are established." },
            { step: "04", title: "Onboarding", description: "Train our team on your specific practice workflows and reporting requirements." },
            { step: "05", title: "Ongoing Support", description: "Daily bookkeeping, monthly financials, and strategic practice insights." }
        ]
    },
    {
        id: "hospitality-retail",
        title: "Hospitality and Retail",
        slug: "hospitality-retail",
        description: "Prime Cost management, POS reconciliation, and sales tax nexus for restaurants, hotels, franchises, retail brands, and fitness centers.",
        longDescription: "The hospitality and retail sector requires high-volume transaction reconciliation, inventory accuracy, and multi-location reporting. Our team specializes in POS systems, sales tax nexus, and Prime Cost control.",
        icon: "shopping-bag",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop",
        intro: {
            title: "Drive Profit in High-Volume Retail",
            content: "From managing COGS and inventory turns to analyzing same-store sales, we provide the financial clarity retail and hospitality businesses need to thrive.",
            stats: [
                { label: "POS Systems", value: "15+ Supported" },
                { label: "Locations Managed", value: "500+" }
            ]
        },
        features: [
            { title: "5 Hospitality/Retail Sub-Industries", description: "Restaurants/QSR, Hotels/Resorts, Franchise Operations (Multi-Unit), Retail/Apparel Brands, Fitness Centers/Gyms/Spas." },
            { title: "Daily Sales Reconciliation", description: "Reconcile Toast/Clover/Square POS with bank deposits, manage 3rd-party delivery fees (UberEats/DoorDash), handle merchant fees." },
            { title: "Prime Cost & Inventory Control", description: "Weekly Prime Cost reporting (COGS + Labor), inventory shrinkage tracking, menu item profitability, landed cost analysis." },
            { title: "Multi-Location Consolidation", description: "Standardized Chart of Accounts across 10+ locations, unit-level EBITDA tracking, franchise royalty calculations." },
            { title: "Sales Tax Nexus Management", description: "Wayfair economic nexus for online sales, marketplace facilitator laws, TaxJar/Avalara integration." }
        ],
        process: [
            { step: "01", title: "POS Connection", description: "Integrate your point-of-sale system for automated sales data flow." },
            { step: "02", title: "Inventory Setup", description: "Establish COGS tracking and inventory management standards." },
            { step: "03", title: "Monthly Insights", description: "Receive detailed P&L by location, product category, and service line." },
            { step: "04", title: "Growth Strategy", description: "Advise on expansion, menu pricing, and margin optimization." }
        ],
        whyChooseUs: [
            { title: "Daily Reconciliation Expertise", description: "Daily cash and credit card reconciliation for POS, third-party delivery fees, and merchant charges." },
            { title: "Prime Cost Management", description: "Expert analysis of Labor and COGS—the two biggest expense categories—helping maintain profitability in thin-margin businesses." },
            { title: "Multi-Location Consolidation", description: "Seamless consolidated reporting across locations with individual P&Ls for each unit, identifying underperforming locations." },
            { title: "Sales Tax Compliance", description: "Navigate multi-state sales tax, Wayfair nexus, marketplace facilitator laws, and industry-specific exemptions." },
            { title: "High-Volume Transactions", description: "Handle thousands of daily transactions efficiently with automated reconciliation tools and streamlined workflows." }
        ],
        testimonial: {
            quote: "Our restaurant group's finances are finally organized. We can see which locations are stars and which need help.",
            author: "Carlos Martinez",
            role: "Owner",
            company: "Martinez Restaurant Group"
        },
        subIndustries: [
            {
                name: "Restaurants & Quick Service (QSR)",
                focus: "Daily Sales Reconciliation and Prime Cost Control",
                bookkeeping: [
                    "Daily Sales Audit: Reconciling POS reports (Toast/Clover) with actual bank deposits",
                    "Managing third-party delivery services (UberEats/DoorDash) fee reconciliation",
                    "Accounts Payable: Managing high-volume vendor invoices for food and beverage",
                    "Tracking credit memos for returned produce and food waste"
                ],
                accounting: [
                    "Prime Cost Reporting: Weekly analysis of COGS + Labor Costs relative to sales (target 60-65%)",
                    "Inventory Management: Tracking theoretical vs. actual food usage to identify waste or theft",
                    "Menu item profitability analysis",
                    "Labor cost percentage tracking by shift and day-part"
                ],
                payroll: [
                    "Managing tip credit compliance (FICA Tip Credit)",
                    "Processing weekly payroll for high-turnover staff",
                    "Tracking spread-of-hours pay for employees working split shifts",
                    "Handling cash tip reporting and allocation"
                ],
                taxPreparation: [
                    "Filing Form 8027 (Employer's Annual Information Return of Tip Income)",
                    "Managing state and local sales tax filings (food vs. beverage tax rates)",
                    "Tracking employee meal deductions",
                    "Sales tax exemptions for catering vs. dine-in"
                ],
                softwareStack: ["Restaurant365", "Plate IQ", "Margin Edge", "Toast", "Clover", "Square", "QuickBooks Online", "Gusto", "7shifts"]
            },
            {
                name: "Hotels, Resorts & Boutique Lodging",
                focus: "Night Audit Oversight and Occupancy Metrics",
                bookkeeping: [
                    "Reconciling the Night Audit report with the general ledger",
                    "Managing city ledger (corporate accounts receivable) and guest ledgers",
                    "Tracking room revenue, F&B sales, and ancillary services separately",
                    "Managing advance deposits and group bookings"
                ],
                accounting: [
                    "Tracking RevPAR (Revenue Per Available Room) and ADR (Average Daily Rate)",
                    "Managing fixed asset depreciation for large-scale renovations",
                    "Department-level P&L (Rooms, F&B, Spa, Events)",
                    "Budgeting and forecasting for seasonal fluctuations"
                ],
                payroll: [
                    "Managing complex departmental labor (Housekeeping, Front Desk, F&B, Maintenance)",
                    "Handling seasonal H-2B visa worker payroll and housing deductions",
                    "Processing gratuity distribution for banquet staff",
                    "Shift differential pay for overnight front desk"
                ],
                taxPreparation: [
                    "Managing Occupancy Tax (Hotel Tax) filings at city/county levels",
                    "Property tax appeals for high-value real estate",
                    "Employee housing taxable fringe benefit reporting",
                    "Multi-state income tax for traveling employees"
                ],
                softwareStack: ["M3", "Maestro", "cloudbeds", "Sage Intacct", "QuickBooks", "Opera", "Mews", "ADP", "Paychex"]
            },
            {
                name: "Franchise Operations (Multi-Unit)",
                focus: "Consolidated Reporting and Franchisor Compliance",
                bookkeeping: [
                    "Standardizing the Chart of Accounts across 10+ locations",
                    "Managing inter-company transfers and shared service allocations",
                    "Tracking location-specific vendor contracts and pricing",
                    "Centralized AP processing with location coding"
                ],
                accounting: [
                    "Consolidated Financial Statements to view the health of the entire portfolio",
                    "Tracking unit-level EBITDA to identify underperforming locations",
                    "Managing franchise fee calculations (percentage of gross sales)",
                    "Benchmark reporting across locations (sales per square foot, labor %)"
                ],
                payroll: [
                    "Centralized payroll processing for hundreds of employees across locations",
                    "Managing Joint Employer liability risks",
                    "Multi-state payroll for franchises spanning state lines",
                    "Standardized job codes and pay rates across units"
                ],
                taxPreparation: [
                    "Calculating and remitting Franchise Royalties and Ad Fund fees",
                    "Managing multi-state nexus if locations span state lines",
                    "Entity structuring (individual LLCs vs. consolidated)",
                    "Sales tax compliance across multiple jurisdictions"
                ],
                softwareStack: ["Sage Intacct", "NetSuite", "Qvinci", "Davo", "QuickBooks Enterprise", "ADP Workforce Now"]
            },
            {
                name: "Retail & Apparel Brands",
                focus: "Inventory Valuation and Omnichannel Reconciliation",
                bookkeeping: [
                    "Reconciling daily in-store POS sales with e-commerce (Shopify/Magento) payouts",
                    "Tracking merchant fees and chargebacks from multiple payment processors",
                    "Managing vendor returns and allowances",
                    "Recording consignment inventory transactions"
                ],
                accounting: [
                    "Inventory Valuation: Implementing FIFO or Weighted Average cost methods",
                    "Tracking Landed Cost (Product Cost + Freight + Customs + Duty)",
                    "Managing inventory shrinkage and cycle count adjustments",
                    "Channel profitability analysis (retail vs. e-commerce vs. wholesale)"
                ],
                payroll: [
                    "Managing seasonal holiday staffing surges",
                    "Commission calculations for sales associates",
                    "Store manager bonuses based on location performance",
                    "Processing employee discount tracking"
                ],
                taxPreparation: [
                    "Sales Tax Nexus tracking (Wayfair compliance) for online sales across 50 states",
                    "Inventory shrinkage and obsolescence write-offs",
                    "Managing sales tax exemptions for wholesale customers (resale certificates)",
                    "Use tax accrual for inventory purchases"
                ],
                softwareStack: ["A2X", "Link My Books", "Inventory Planner", "Cin7", "Shopify", "BigCommerce", "Avalara", "TaxJar", "Xero", "QuickBooks"]
            },
            {
                name: "Fitness Centers, Gyms & Spas",
                focus: "Recurring Revenue and Deferred Revenue Management",
                bookkeeping: [
                    "Reconciling monthly membership recurring billing (Stripe, PayPal, Mindbody)",
                    "Tracking Pre-paid personal training sessions and gift card liabilities",
                    "Managing equipment lease payments and service contracts",
                    "Recording retail supplement and apparel sales"
                ],
                accounting: [
                    "Deferred Revenue Accounting: Recognizing revenue only when the service is performed",
                    "Tracking member attrition rates (churn) and lifetime value (LTV)",
                    "Managing liability for unused sessions and memberships",
                    "Calculating breakage (unredeemed gift cards and sessions)"
                ],
                payroll: [
                    "Managing specialized pay rates (group class vs. 1-on-1 session differentials)",
                    "Processing trainer commission structures",
                    "Handling variable-hour part-time staff",
                    "Managing independent contractor (1099) vs. employee (W-2) classification"
                ],
                taxPreparation: [
                    "Tracking sales tax on memberships (varies by state - some tax, some don't)",
                    "Depreciation for high-value gym equipment (treadmills, weight stacks)",
                    "Managing 1099-NEC for independent contractors",
                    "Nexus considerations for online class offerings"
                ],
                softwareStack: ["Mindbody", "Zenoti", "ClubReady", "QuickBooks Online", "Rippling", "Gusto", "Stripe", "PayPal"]
            }
        ],
        industryBenefits: [
            {
                title: "Daily Reconciliation Expertise",
                description: "We understand the importance of daily cash and credit card reconciliation. Our team ensures every POS transaction, third-party delivery fee, and merchant charge is accounted for."
            },
            {
                title: "Prime Cost Management",
                description: "Expert analysis of the two biggest expense categories—Labor and COGS—helping you maintain profitability in thin-margin businesses."
            },
            {
                title: "Multi-Location Consolidation",
                description: "Seamless consolidated reporting across multiple locations with individual P&Ls for each unit, providing visibility into underperforming locations."
            },
            {
                title: "Sales Tax Compliance",
                description: "Navigate complex multi-state sales tax requirements, including Wayfair economic nexus, marketplace facilitator laws, and industry-specific exemptions."
            },
            {
                title: "High-Volume Transaction Processing",
                description: "Handle thousands of daily transactions efficiently with automated reconciliation tools and streamlined workflows."
            }
        ],
        gettingStarted: [
            { step: "01", title: "Operations Review", description: "Understand your POS systems, number of locations, transaction volume, and reporting requirements." },
            { step: "02", title: "System Integration", description: "Connect POS, e-commerce, payment processors, and accounting software." },
            { step: "03", title: "Chart of Accounts Setup", description: "Standardize accounting across locations for consolidated reporting." },
            { step: "04", title: "Daily Workflow Implementation", description: "Establish daily reconciliation processes and reporting schedules." },
            { step: "05", title: "Ongoing Optimization", description: "Monitor prime costs, identify trends, and provide actionable insights." }
        ],
        faqs: [
            { question: "Do you work with restaurant POS systems?", answer: "Yes, we integrate with Toast, Square, Clover, Lightspeed, and most major restaurant POS platforms." },
            { question: "Can you handle multi-location consolidation?", answer: "Absolutely. We specialize in consolidating financials across multiple retail or restaurant locations." }
        ]
    },
    {
        id: "real-estate-construction",
        title: "Real Estate & Construction",
        slug: "real-estate-construction",
        description: "Job costing, WIP schedules, property management, AIA billing, and 1031 exchange support for developers, contractors, and architects.",
        longDescription: "Real estate and construction accounting demands expertise in job costing, progress billing, fund accounting, and complex compliance. From property management to general contractors, we understand the built environment.",
        icon: "building",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop",
        intro: {
            title: "Built for Real Estate and Construction",
            content: "From job costing and WIP schedules to 1031 exchanges and syndication accounting, we bring deep expertise to real estate and construction financial management.",
            stats: [
                { label: "Projects Tracked", value: "1,000+" },
                { label: "1031 Exchanges", value: "200+" }
            ]
        },
        features: [
            { title: "5 Real Estate/Construction Sub-Industries", description: "RE Development & Investment, Property Management, Construction/GC, Architecture & Engineering, Interior Design/Home Staging." },
            { title: "Job Costing & WIP Schedules", description: "Track Labor, Materials, Subcontractors, and Overhead by project. Manage over-billings/under-billings and AIA Progress Billing (G702/G703)." },
            { title: "Property Management Accounting", description: "Tenant ledgers, security deposit (escrow) compliance, CAM reconciliations, owner distributions, delinquency tracking." },
            { title: "1031 Exchange & Tax Strategy", description: "Track like-kind property swaps, K-1 distributions for partnerships, cost segregation studies, Section 179D energy credits." },
            { title: "Certified Payroll & Lien Waivers", description: "WH-347 certified payroll for government projects, prevailing wage compliance, lien waiver management." }
        ],
        process: [
            { step: "01", title: "Project Setup", description: "Establish job costing structure and chart of accounts for each project." },
            { step: "02", title: "Progress Tracking", description: "Monitor costs vs. budget and percent complete for each job." },
            { step: "03", title: "Draw Management", description: "Coordinate with lenders for construction draw requests and documentation." },
            { step: "04", title: "Tax Strategy", description: "Advise on cost segregation, 1031 exchanges, and tax deferral strategies." }
        ],
        whyChooseUs: [
            { title: "Job Costing Expertise", description: "Deep understanding of job cost accounting, WIP schedules, and progress billing methodologies for accurate project profitability." },
            { title: "Compliance Knowledge", description: "Expert handling of certified payroll (WH-347), prevailing wage requirements, lien waiver management, and AIA billing formats." },
            { title: "Multi-Entity Consolidation", description: "Seamless reporting for developers managing multiple SPVs, LLCs, and partnership structures." },
            { title: "Software Integration", description: "Proficient in Procore, Foundation, Sage CRE, Yardi, AppFolio integrating with your existing workflow." },
            { title: "Tax Optimization", description: "Maximize deductions via cost segregation, Section 179D credits, R&D credits, and proper 1031 exchange tracking." }
        ],
        testimonial: {
            quote: "They structured our job costing so we finally know which types of projects are most profitable.",
            author: "Tom Richardson",
            role: "President",
            company: "Richardson Construction"
        },
        subIndustries: [
            {
                name: "Real Estate Development & Investment",
                focus: "Capitalization, Fund Accounting, and Investor Reporting",
                bookkeeping: [
                    "Tracking land acquisition costs and development expenses",
                    "Managing accounts payable for architects, surveyors, and consultants",
                    "Reconciling construction loan draws and monitoring budgets vs. actuals",
                    "Recording equity contributions and investor capital calls"
                ],
                accounting: [
                    "Capitalization of Interest and soft costs during development",
                    "Tracking equity contributions vs. debt financing",
                    "Consolidated reporting for multi-entity SPVs (Special Purpose Vehicles)",
                    "Managing waterfall distributions to investors"
                ],
                payroll: [
                    "Managing high-level executive payroll",
                    "Performance-based acquisition bonuses",
                    "Processing consultant and advisory fees"
                ],
                taxPreparation: [
                    "Managing K-1 distributions for partnership interests",
                    "1031 Exchange tracking for like-kind property swaps",
                    "Depreciation of Qualified Improvement Property (QIP)",
                    "Cost segregation studies for accelerated depreciation"
                ],
                softwareStack: ["Sage Intacct", "QuickBooks", "Juniper Square", "Covercy", "MRI Software", "Yardi", "Procore"]
            },
            {
                name: "Property Management Companies",
                focus: "Escrow Compliance and Tenant Ledgers",
                bookkeeping: [
                    "Recording monthly rent payments and managing Tenant Ledgers",
                    "Reconciling Security Deposit (Escrow) accounts to meet state regulations",
                    "Tracking late fees, NSF fees, and lease violation charges",
                    "Managing owner distributions and reserve funds"
                ],
                accounting: [
                    "CAM (Common Area Maintenance) Reconciliations and true-ups for commercial properties",
                    "Property-wise P&L statements for multi-property portfolios",
                    "Managing delinquency reports and collections",
                    "Tracking operating expenses by property and unit"
                ],
                payroll: [
                    "Processing commissions for leasing agents",
                    "Payroll for on-site maintenance and janitorial staff",
                    "Managing property manager performance bonuses"
                ],
                taxPreparation: [
                    "Tracking Form 1099-NEC for all repair contractors and service providers",
                    "Managing state-specific property tax filings",
                    "Processing owner K-1s for partnership-owned properties",
                    "Handling rental income reporting across multiple states"
                ],
                softwareStack: ["AppFolio", "Buildium", "Yardi", "Entrata", "QuickBooks Online", "Sage Intacct", "Gusto", "ADP"]
            },
            {
                name: "Construction & General Contracting",
                focus: "Job Costing and Progress Billing",
                bookkeeping: [
                    "Managing Lien Waivers from subcontractors",
                    "Tracking credit card receipts from job sites",
                    "Recording material purchases by Job ID",
                    "Managing retention receivables and payables"
                ],
                accounting: [
                    "Job Costing tracking Labor, Materials, Subcontractors, and Overhead by project",
                    "WIP (Work-in-Progress) reporting to identify over-billings and under-billings",
                    "AIA Progress Billing (G702/G703 forms)",
                    "Managing contract revenue recognition (percentage of completion method)"
                ],
                payroll: [
                    "Certified Payroll (WH-347) for government projects",
                    "Prevailing wage compliance tracking",
                    "Workers' Compensation class code assignment by job type",
                    "Union payroll and fringe benefit reporting"
                ],
                taxPreparation: [
                    "Percentage of Completion Method (PCM) for long-term contracts",
                    "Section 179 deductions for heavy machinery and equipment",
                    "Multi-state income tax allocation for out-of-state projects",
                    "Managing 1099-NEC for subcontractors"
                ],
                softwareStack: ["Foundation", "Sage 100/300 CRE", "CoConstruct", "Buildertrend", "Procore", "QuickBooks Desktop Enterprise"]
            },
            {
                name: "Architecture & Engineering (A&E) Firms",
                focus: "Billable Utilization and Project Profitability",
                bookkeeping: [
                    "Tracking reimbursable expenses (blueprints, travel, consultant fees)",
                    "Managing consultant and subconsultant payables",
                    "Tracking timesheets by project phase and task code",
                    "Recording retainers and billing milestones"
                ],
                accounting: [
                    "Utilization Rate reporting (Billable vs. Non-billable hours)",
                    "Revenue recognition based on project milestones or percentage of completion",
                    "Overhead rate calculation and FAR (Federal Acquisition Regulation) compliance",
                    "Project profitability analysis comparing budgeted vs. actual costs"
                ],
                payroll: [
                    "Professional salary management for architects and engineers",
                    "Tracking overtime for non-exempt drafters and technicians",
                    "Managing PTO accrual and project time allocation"
                ],
                taxPreparation: [
                    "R&D Tax Credits (Form 6765) for innovative design solutions",
                    "Section 179D energy-efficient commercial building deductions",
                    "Managing professional liability insurance deductions",
                    "Multi-state income tax for projects in various states"
                ],
                softwareStack: ["Deltek Ajera", "Vantagepoint", "BQE CORE", "Harvest", "Toggl", "QuickBooks Online", "Xero"]
            },
            {
                name: "Interior Design & Home Staging",
                focus: "Inventory Tracking and Sales Tax Management",
                bookkeeping: [
                    "Managing client retainers and deposits",
                    "Tracking purchase orders for furniture and fixtures (FF&E)",
                    "Reconciling designer discounts and vendor trade accounts",
                    "Recording consignment furniture sales and commissions"
                ],
                accounting: [
                    "Inventory Management for staging furniture and accessories",
                    "Project profitability analysis by client engagement",
                    "Tracking Work in Process for custom furniture orders",
                    "Managing client invoicing for design services vs. product sales"
                ],
                payroll: [
                    "Payroll for design assistants and staging crews",
                    "Managing 1099s for freelance photographers and sub-contractors",
                    "Commission structures for lead designers"
                ],
                taxPreparation: [
                    "Sales Tax Nexus tracking (collecting tax on physical goods vs. design services)",
                    "Resale certificate management for trade purchases",
                    "Managing home office deductions for independent designers",
                    "1099-NEC reporting for contractor relationships"
                ],
                softwareStack: ["Ivy (by Houzz)", "Studio Designer", "DesignFiles", "Xero", "QuickBooks Online", "Gusto", "Avalara"]
            }
        ],
        industryBenefits: [
            {
                title: "Job Costing Expertise",
                description: "Deep understanding of job cost accounting, WIP schedules, and progress billing methodologies—ensuring accurate project profitability tracking."
            },
            {
                title: "Compliance Knowledge",
                description: "Expert handling of certified payroll (WH-347), prevailing wage requirements, lien waiver management, and AIA billing formats."
            },
            {
                title: "Multi-Entity Consolidation",
                description: "Seamless consolidated reporting for developers and investors managing multiple SPVs, LLCs, and partnership structures."
            },
            {
                title: "Software Integration",
                description: "Proficient in industry-specific platforms like Procore, Foundation, Sage CRE, Yardi, and AppFolio—integrating seamlessly with your existing workflow."
            },
            {
                title: "Tax Optimization",
                description: "Maximize deductions through cost segregation studies, Section 179D energy credits, R&D credits, and proper 1031 exchange tracking."
            }
        ],
        gettingStarted: [
            { step: "01", title: "Project Assessment", description: "Review your project types, billing methods, entity structures, and software platforms." },
            { step: "02", title: "Job Costing Setup", description: "Establish cost codes, work breakdown structures, and project budgets." },
            { step: "03", title: "System Integration", description: "Connect project management, time tracking, and accounting systems." },
            { step: "04", title: "Workflow Implementation", description: "Set up progress billing, lien waiver tracking, and WIP reporting." },
            { step: "05", title: "Ongoing Project Monitoring", description: "Regular job cost analysis, budget variance reporting, and profitability insights." }
        ],
        faqs: [
            { question: "Do you handle percentage-of-completion accounting?", answer: "Yes, we specialize in construction accounting including POC, WIP schedules, and job cost tracking." },
            { question: "Can you help with 1031 exchanges?", answer: "Absolutely. We provide the financial documentation and tracking required for successful like-kind exchanges." }
        ]
    },
    {
        id: "tech-ecommerce",
        title: "Tech & Ecommerce",
        slug: "tech-ecommerce",
        description: "ASC 606 revenue recognition, SaaS metrics (MRR/ARR/Churn), crypto accounting, e-commerce reconciliation, and investor reporting.",
        longDescription: "Tech and e-commerce businesses require specialized knowledge of subscription billingASC 606, multi-currency transactions, digital asset accounting, and high-growth financial modeling.",
        icon: "monitor",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1080&fit=crop",
        intro: {
            title: "Financial Clarity for Digital Businesses",
            content: "From MRR tracking to revenue recognition (ASC 606), we provide the financial infrastructure tech and e-commerce companies need to scale and raise capital.",
            stats: [
                { label: "SaaS Clients", value: "100+" },
                { label: "GMV Tracked", value: "$500M+" }
            ]
        },
        features: [
            { title: "5 Tech/E-commerce Sub-Industries", description: "SaaS & Software Development, Crypto/Web3/Digital Assets, E-commerce & Amazon FBA, AgTech & BioTech Startups, Digital Marketing & Agencies." },
            { title: "SaaS: ASC 606 & MRR Tracking", description: "Deferred revenue recognition, burn rate analysis, SaaS KPIs (LTV, CAC, Churn, NRR), departmental P&L (Sales, Engineering, G&A)." },
            { title: "Crypto: On-Chain Reconciliation", description: "Wallet-to-ledger transactions, multi-chain (Ethereum, Solana, Polygon), DeFi activity, realized/unrealized gains, cost basis tracking (FIFO/LIFO)." },
            { title: "E-commerce: Marketplace Reconciliation", description: "Amazon/Shopify/Walmart payouts, FBA fees, landed cost analysis (Product + Freight + Customs + Fees), multi-state sales tax nexus." },
            { title: "R&D Credits & Fundraising Support", description: "Form 6765 R&D tax credits, SBIR/STTR grant compliance, QSBS tracking (Section 1202), pitch deck financial projections." }
        ],
        process: [
            { step: "01", title: "Platform Integration", description: "Connect to Stripe, Shopify, Amazon, and other sales platforms." },
            { step: "02", title: "Metric Dashboard", description: "Build custom KPI dashboards for real-time business insights." },
            { step: "03", title: "Monthly Reporting", description: "Deliver detailed unit economics and cohort analysis." },
            { step: "04", title: "Fundraising Support", description: "Prepare data rooms and financial models for investor due diligence." }
        ],
        whyChooseUs: [
            { title: "Revenue Recognition Expertise", description: "Deep understanding of ASC 606 for SaaS multi-element arrangements, subscription revenue, and complex licensing." },
            { title: "SaaS Metrics & KPI Tracking", description: "Monitor metrics that matter: MRR, ARR, CAC, LTV, Churn, Net Revenue Retention, Logo Retention, Rule of 40." },
            { title: "Global & Multi-Currency", description: "Handle international transactions, crypto payments, and multi-currency reconciliation across dozens of payment processors." },
            { title: "E-commerce Reconciliation", description: "Expert reconciliation of complex marketplace payouts with fees, returns, chargebacks, and inventory adjustments across channels." },
            { title: "Scalability for High Growth", description: "Built for hypergrowth—handle transaction volume scaling from hundreds to millions per month without missing a beat." }
        ],
        testimonial: {
            quote: "Their SaaS metrics dashboards gave us the visibility we needed to close our Series A.",
            author: "Jessica Wu",
            role: "CFO",
            company: "CloudSync Technologies"
        },
        subIndustries: [
            {
                name: "SaaS & Software Development",
                focus: "Recurring Revenue Recognition & Burn Rate Management",
                bookkeeping: [
                    "Managing subscription billing and automated recurring revenue",
                    "Reconciling monthly recurring revenue (MRR) from Stripe, Chargebee, or Recurly",
                    "Tracking deferred revenue for annual prepayments",
                    "Automated expense management for cloud services (AWS, Azure, GCP)"
                ],
                accounting: [
                    "ASC 606 Revenue Recognition for multi-element arrangements",
                    "Burn rate analysis and runway calculations",
                    "SaaS KPI tracking (LTV, CAC, Churn, Net Revenue Retention)",
                    "Departmental P&L (Sales, Engineering, G&A)",
                    "Deferred revenue waterfall reporting"
                ],
                payroll: [
                    "Managing multi-state/global remote teams",
                    "Handling stock-based compensation (ESOPs, RSUs, ISO, NSO)",
                    "R&D salary allocation for tax credit purposes",
                    "Managing contractor (1099) vs. employee (W-2) classification for global teams"
                ],
                taxPreparation: [
                    "R&D Tax Credits (Form 6765) for qualified research activities",
                    "Software capitalization vs. expensing (Section 174)",
                    "Sales tax nexus for digital goods and SaaS subscriptions",
                    "Multi-state apportionment for software sales"
                ],
                softwareStack: ["NetSuite", "Sage Intacct", "Chargebee", "Maxio", "Zuora", "Rippling", "Carta", "QuickBooks Online"]
            },
            {
                name: "Crypto, Web3 & Digital Assets",
                focus: "On-Chain Data Reconciliation & Multi-Currency Compliance",
                bookkeeping: [
                    "Mapping wallet-to-ledger transactions with blockchain explorers",
                    "Reconciling exchange accounts (Coinbase, Binance, Kraken)",
                    "Tracking DeFi activity (swaps, staking, liquidity pools)",
                    "Managing multi-chain transactions (Ethereum, Solana, Polygon)"
                ],
                accounting: [
                    "Realized/unrealized gain/loss tracking for crypto holdings",
                    "Mark-to-market valuations using reliable pricing sources",
                    "DAO treasury management and multi-sig wallet reconciliation",
                    "Impairment testing for intangible assets (NFTs, tokens)",
                    "Managing token vesting schedules"
                ],
                payroll: [
                    "Processing token-based compensation for employees",
                    "Managing 1099s for decentralized contributors and DAOs",
                    "Tracking stablecoin (USDC, USDT) disbursements",
                    "Handling international contractor payments in crypto"
                ],
                taxPreparation: [
                    "IRS Form 8949 for crypto capital gains and losses",
                    "Tracking cost basis (FIFO, LIFO, HIFO methods)",
                    "FBAR/FATCA compliance for offshore exchanges",
                    "Managing crypto mining income reporting",
                    "DeFi yield and staking income classification"
                ],
                softwareStack: ["Bitwave", "Cryptio", "Lukka", "ZenLedger", "CoinTracker", "Xero", "QuickBooks", "Dune Analytics"]
            },
            {
                name: "E-commerce & Amazon FBA Sellers",
                focus: "Inventory Integrity & Sales Tax Nexus Management",
                bookkeeping: [
                    "Reconciling marketplace payouts (Amazon, Shopify, Walmart, eBay)",
                    "Recording COGS by SKU and unit",
                    "Managing high-volume merchant fees and chargebacks",
                    "Tracking Amazon FBA storage and fulfillment fees"
                ],
                accounting: [
                    "Landed Cost analysis (Product + Freight + Customs + Amazon Fees)",
                    "Inventory valuation using FIFO method",
                    "Monitoring Gross Margin after Ad Spend (ROAS analysis)",
                    "Managing inventory reserves for slow-moving and dead stock"
                ],
                payroll: [
                    "Handling seasonal surges in warehouse/support staff",
                    "Commission pay for growth managers and PPC specialists",
                    "Managing virtual assistant (VA) payments (domestic and international)"
                ],
                taxPreparation: [
                    "Multi-state Sales Tax Nexus (Wayfair economic nexus compliance)",
                    "Inventory shrinkage/loss write-offs",
                    "Year-end physical count adjustments and reserves",
                    "Managing FBA inventory in multiple states for nexus purposes"
                ],
                softwareStack: ["A2X", "Link My Books", "Inventory Planner", "SkuVault", "Avalara", "TaxJar", "QuickBooks Online", "Xero"]
            },
            {
                name: "AgTech & BioTech Startups",
                focus: "Grant Compliance & Long R&D Cycles",
                bookkeeping: [
                    "Tracking grant-specific expenditures with fund accounting",
                    "Managing vendor payables for lab equipment, seeds, and research materials",
                    "Recording specialized asset purchases (lab equipment, greenhouses)"
                ],
                accounting: [
                    "Fund Accounting (Restricted vs. Unrestricted grant funds)",
                    "Project-based P&L for different research initiatives",
                    "Tracking capitalization of biological assets or intellectual property",
                    "Managing SBIR/STTR grant compliance and reporting"
                ],
                payroll: [
                    "Managing specialized researcher salaries (PhDs, lab technicians)",
                    "Tracking time spent on specific NIH/NSF grants for audit compliance",
                    "Processing stipends for graduate student researchers"
                ],
                taxPreparation: [
                    "R&D Credit optimization for qualified research activities",
                    "Qualified Small Business Stock (QSBS) tracking for Section 1202 exclusion",
                    "Tracking tax-exempt status of certain grant funds",
                    "Managing non-profit vs. for-profit entity structures"
                ],
                softwareStack: ["Sage Intacct", "Oracle NetSuite ERP", "Bench", "Pilot", "Gusto", "Rippling"]
            },
            {
                name: "Digital Marketing & Creative Agencies",
                focus: "Project Profitability & Client Retainer Management",
                bookkeeping: [
                    "Tracking client reimbursable expenses (Ad spend, media buys, stock photos)",
                    "Managing accounts receivable for high-value retainers",
                    "Recording pass-through expenses separately from agency fees"
                ],
                accounting: [
                    "Project-Based Profitability analysis by client and campaign",
                    "Utilization rate reporting (Billable vs. Non-billable hours)",
                    "Realization rate analysis per client (billed vs. collected)",
                    "Revenue recognition for performance-based compensation"
                ],
                payroll: [
                    "Managing freelancer/contractor (1099) payments for designers and copywriters",
                    "Performance-based bonuses for account managers",
                    "Commission structures for business development teams"
                ],
                taxPreparation: [
                    "Section 199A (QBI) deduction planning for pass-through entities",
                    "Managing multi-state nexus based on service delivery location",
                    "Home office deductions for remote team members",
                    "Maximizing deductions for software subscriptions and tools"
                ],
                softwareStack: ["QuickBooks Online", "Xero", "Plooto", "Bill.com", "Harvest", "Toggl", "Expensify", "Divvy", "Gusto", "Rippling"]
            }
        ],
        industryBenefits: [
            {
                title: "Revenue Recognition Expertise",
                description: "Deep understanding of ASC 606 for SaaS multi-element arrangements, subscription revenue, and complex licensing agreements."
            },
            {
                title: "SaaS Metrics & KPI Tracking",
                description: "Monitor the metrics that matter—MRR, ARR, CAC, LTV, Churn, Net Revenue Retention, Logo Retention, and Rule of 40."
            },
            {
                title: "Global & Multi-Currency",
                description: "Handle international transactions, crypto payments, and multi-currency reconciliation across dozens of countries and payment processors."
            },
            {
                title: "E-commerce Reconciliation",
                description: "Expert reconciliation of complex marketplace payouts with fees, returns, chargebacks, and inventory adjustments across multiple channels."
            },
            {
                title: "Scalability for High Growth",
                description: "Built for hypergrowth—handle transaction volume scaling from hundreds to millions per month without missing a beat."
            }
        ],
        gettingStarted: [
            { step: "01", title: "Tech Stack Review", description: "Understand your billing platform, payment processors, marketplaces, and existing accounting setup." },
            { step: "02", title: "Revenue Model Analysis", description: "Review subscription models, pricing tiers, and revenue recognition requirements." },
            { step: "03", title: "Integration Setup", description: "Connect billing systems, payment processors, and marketplaces to accounting software." },
            { step: "04", title: "KPI Dashboard Development", description: "Build custom dashboards tracking your key business metrics." },
            { step: "05", title: "Ongoing Financial Operations", description: "Daily reconciliation, monthly financials, and strategic growth analysis." }
        ],
        faqs: [
            { question: "Do you understand SaaS revenue recognition?", answer: "Yes, we specialize in ASC 606 compliance for subscription and usage-based revenue models." },
            { question: "Can you integrate with Stripe and Shopify?", answer: "Absolutely. We integrate with all major payment processors and e-commerce platforms." }
        ]
    },
    {
        id: "professional-services",
        title: "Professional Services",
        slug: "professional-services",
        description: "IOLTA trust accounting, time & billing integration, project profitability, realization rates, and partner capital management.",
        longDescription: "Professional services firms face unique challenges: trust accounting, billable utilization tracking, realization rates, and complex fee structures for law firms, consulting, agencies, and staffing.",
        icon: "briefcase",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop",
        intro: {
            title: "Financial Mastery for Service Firms",
            content: "Whether you're a law firm, consulting practice, or creative agency, we provide the financial insights you need to maximize billable utilization and profitability.",
            stats: [
                { label: "Billable Rate", value: "Optimized" },
                { label: "Service Firms", value: "250+" }
            ]
        },
        features: [
            { title: "4 Professional Service Sub-Industries", description: "Law Firms & Legal Services, Insurance Agencies & Brokerages, Management & Business Consulting, Staffing & Recruitment Agencies." },
            { title: "Trust Accounting & IOLTA Compliance", description: "Three-way reconciliation (bank, book, client ledgers), client cost tracking (hard & soft costs), state-mandated compliance." },
            { title: "Billable Utilization & Realization", description: "Track time recorded vs. amount collected, partner compensation (origination, management, production), WIP by matter/attorney." },
            { title: "Insurance: Commission Reconciliation", description: "Premium trust accounting, carrier commission statement matching, E&O insurance tracking, direct bill vs. agency bill revenue." },
            { title: "Staffing: High-Volume Payroll", description: "Weekly payroll for hundreds of temps, funding/factoring reconciliation, burden analysis (salary + taxes + insurance + comp), WOTC tracking." }
        ],
        process: [
            { step: "01", title: "Billing System Sync", description: "Connect to your time tracking and practice management software." },
            { step: "02", title: "Profitability Setup", description: "Establish tracking by client, matter, or project for margin analysis." },
            { step: "03", title: "Utilization Reports", description: "Monitor billable vs. non-billable time and staff efficiency." },
            { step: "04", title: "Strategic Pricing", description: "Advise on rate optimization and service mix for maximum profit." }
        ],
        whyChooseUs: [
            { title: "Compliance Expertise", description: "Deep understanding of IOLTA trust accounting, insurance fiduciary duties, and staffing agency requirements." },
            { title: "Billable Hour Tracking", description: "Expert management of time & billing systems, utilization reporting, and realization rate analysis to maximize profitability." },
            { title: "Multi-Entity & Partner Accounting", description: "Handle complex partnership structures, partner compensation calculations, and multi-entity consolidation for growing firms." },
            { title: "Cash Flow Management", description: "Optimize AR collections, manage factoring relationships, and ensure healthy cash flow for service businesses with payment lags." },
            { title: "Project-Based Profitability", description: "Detailed project margin analysis helping identify profitable clients, service lines, and practice areas." }
        ],
        testimonial: {
            quote: "We finally understand which practice areas are most profitable. Game-changer for our firm.",
            author: "Patricia Anderson",
            role: "Managing Partner",
            company: "Anderson & Associates Law"
        },
        subIndustries: [
            {
                name: "Law Firms & Legal Services",
                focus: "IOLTA Compliance and Matter-Based Accounting",
                bookkeeping: [
                    "Trust Accounting (IOLTA): Maintaining separate ledgers for client funds to ensure no co-mingling with firm operating funds",
                    "Matter Cost Tracking: Recording Hard Costs (filing fees, court reporters) and Soft Costs (copies, postage) billable to clients",
                    "Managing retainer advances and client deposits",
                    "Recording billable vs. non-billable time"
                ],
                accounting: [
                    "Three-Way Reconciliation: Monthly matching of bank statement, book balance, and individual client trust ledgers (mandatory in most US states)",
                    "Realization Rate Analysis: Comparing time recorded vs. amount actually collected",
                    "Partner compensation calculations (origination, management, production credits)",
                    "Tracking WIP (Work in Progress) by matter and attorney"
                ],
                payroll: [
                    "Managing partner draws vs. associate salaries",
                    "Processing 1099s for expert witnesses and contract attorneys",
                    "Handling performance bonuses for paralegals and legal assistants"
                ],
                taxPreparation: [
                    "Managing Section 199A (QBI) deductions for pass-through law firms",
                    "Specialized treatment of advanced client costs (some deductible, some loans)",
                    "Multi-state income tax for attorneys licensed in multiple states"
                ],
                softwareStack: ["Clio", "LeanLaw", "CosmoLex", "QuickBooks Online (Legal Edition)", "PCLaw", "Soluno", "TimeSolv"]
            },
            {
                name: "Insurance Agencies & Brokerages",
                focus: "Commission Reconciliation and Fiduciary Duties",
                bookkeeping: [
                    "Premium Trust Accounting: Tracking Agency Bill premiums that must be remitted to carriers",
                    "Commission Reconciliation: Matching monthly carrier commission statements against internal AMS records",
                    "Managing E&O (Errors & Omissions) insurance payments"
                ],
                accounting: [
                    "Revenue Recognition: Tracking Direct Bill commissions vs. Agency Bill earnings",
                    "EBITDA Analysis: Monitoring the valuation of the agency for potential M&A or internal buyouts",
                    "Managing commission splits and overrides"
                ],
                payroll: [
                    "Managing complex commission splits between the house and independent producers",
                    "Tracking draw-against-commission for new agents",
                    "Processing renewal commission residuals"
                ],
                taxPreparation: [
                    "Managing amortization of Purchased Intangibles (if the agency bought a book of business)",
                    "Multi-state nexus for licensed brokers writing business in multiple states",
                    "1099-MISC reporting for independent insurance agents"
                ],
                softwareStack: ["Vertafore (AMS360)", "Applied Epic", "EZLynx", "QuickBooks Online", "Xero", "ADP", "Gusto"]
            },
            {
                name: "Management & Business Consulting",
                focus: "Project Profitability and Utilization Reporting",
                bookkeeping: [
                    "Managing client retainers and deferred revenue",
                    "Tracking reimbursable travel and meal expenses via Expensify/Concur",
                    "Recording project-based expenses and allocating overhead"
                ],
                accounting: [
                    "Utilization Reporting: Measuring how many hours consultants spend on client work vs. internal business development",
                    "Project Margin Analysis: Calculating the true profit of a project after accounting for labor costs and overhead",
                    "Managing revenue recognition for milestone-based billing"
                ],
                payroll: [
                    "Managing performance-based year-end bonuses",
                    "Multi-state withholding for consultants traveling to client sites",
                    "Processing per-diem reimbursements for travel"
                ],
                taxPreparation: [
                    "Managing home office deductions for remote consultants",
                    "Tracking business meals and entertainment (M&E) limitations (50% deductible)",
                    "Section 199A (QBI) deduction planning"
                ],
                softwareStack: ["Harvest", "Toggl", "Mavenlink (Kantata)", "BigTime", "Xero", "QuickBooks", "Bill.com"]
            },
            {
                name: "Staffing & Recruitment Agencies",
                focus: "High-Volume Payroll and Cash Flow Management",
                bookkeeping: [
                    "Managing high-volume Accounts Receivable (A/R) from client companies",
                    "Reconciling temporary staff timesheets daily or weekly",
                    "Tracking recruiter placement fees (direct hire vs. contract-to-hire)"
                ],
                accounting: [
                    "Funding & Factoring Reconciliation: Managing cash flow if using payroll funding or factoring companies",
                    "Burden Analysis: Calculating the true cost of an employee (Salary + Taxes + Insurance + Benefits + Workers Comp)",
                    "Managing bill rate vs. pay rate spreads (gross margin analysis)"
                ],
                payroll: [
                    "The Core Task: Weekly or bi-weekly payroll for hundreds of temp employees",
                    "Handling garnishments, multi-state taxes, and benefits administration",
                    "Managing on-hire and off-hire processes efficiently"
                ],
                taxPreparation: [
                    "Work Opportunity Tax Credit (WOTC) tracking for eligible hires",
                    "Managing federal and state unemployment tax (FUTA/SUTA) rates",
                    "Processing bulk 1099-NEC for independent contractors"
                ],
                softwareStack: ["Bullhorn", "Avionté", "JobDiva", "Gusto", "ADP SmartCompliance", "QuickBooks Online", "Fundbox", "BlueVine"]
            }
        ],
        industryBenefits: [
            {
                title: "Compliance Expertise",
                description: "Deep understanding of industry-specific regulations including IOLTA trust accounting, insurance fiduciary duties, and staffing agency requirements."
            },
            {
                title: "Billable Hour Tracking",
                description: "Expert management of time & billing systems, utilization reporting, and realization rate analysis to maximize profitability."
            },
            {
                title: "Multi-Entity & Partner Accounting",
                description: "Handle complex partnership structures, partner compensation calculations, and multi-entity consolidation for growing firms."
            },
            {
                title: "Cash Flow Management",
                description: "Optimize AR collections, manage factoring relationships, and ensure healthy cash flow for service-based businesses with payment lags."
            },
            {
                title: "Project-Based Profitability",
                description: "Detailed project margin analysis helping you identify profitable clients, service lines, and practice areas."
            }
        ],
        gettingStarted: [
            { step: "01", title: "Practice Assessment", description: "Review your service model, billing structure, client volume, and existing systems." },
            { step: "02", title: "Trust/Fiduciary Setup", description: "Establish proper trust account handling and reconciliation procedures (if applicable)." },
            { step: "03", title: "Time & Billing Integration", description: "Connect time tracking and billing systems to accounting platform." },
            { step: "04", title: "Utilization Framework", description: "Set up reporting for billable hours, utilization rates, and realization metrics." },
            { step: "05", title: "Ongoing Profitability Analysis", description: "Regular project margin analysis and practice area profitability reporting." }
        ],
        faqs: [
            { question: "Do you work with law firm trust accounts?", answer: "Yes, we are experienced with IOLTA accounting and law firm-specific compliance requirements." },
            { question: "Can you track profitability by project?", answer: "Absolutely. We specialize in project-level profitability analysis for service-based businesses." }
        ]
    },
    {
        id: "industrial-niche",
        title: "Industrial & Niche",
        slug: "industrial-niche",
        description: "Specialized accounting for 501(c)(3) non-profits, cannabis (Section 280E), family offices, logistics/trucking (IFTA), manufacturing, and agriculture.",
        longDescription: "Specialized industries require experts who understand unique regulations: Section 280E (cannabis), IFTA (trucking), Form 990 (non-profits), Section 263A (manufacturing), and niche compliance.",
        icon: "cog",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop",
        intro: {
            title: "Precision for Complex Industries",
            content: "From manufacturing cost accounting to specialized regulatory compliance, we bring deep expertise to industrial and niche market businesses.",
            stats: [
                { label: "Inventory Accy", value: "99.9%" },
                { label: "Industries Served", value: "25+" }
            ]
        },
        features: [
            { title: "6 Industrial/Niche Sub-Industries", description: "Non-Profit Organizations (NGOs), Cannabis Dispensaries & Cultivation, Family Offices  & HNWI, Logistics/Trucking/3PL, Manufacturing & Distribution, Agriculture & Commercial Farming." },
            { title: "Non-Profit: Fund Accounting & Form 990", description: "Restricted vs. unrestricted funds, functional expense allocation (Program/Management/Fundraising), IRS Form 990/990-EZ, UBIT compliance." },
            { title: "Cannabis: Section 280E Compliance", description: "Inventory costing to maximize COGS (deductions limited), Metrc/BioTrack seed-to-sale reconciliation, cash management, Form 8300 reporting." },
            { title: "Logistics: IFTA & Asset Tracking", description: "Cost-per-mile analysis, IFTA quarterly reporting, Form 2290 (Heavy Vehicle Use Tax), owner-operator 1099 management." },
            { title: "Manufacturing: Cost Accounting & BOM", description: "Standard vs. actual costing, Bill of Materials (BOM), overhead absorption, Section 263A (UNICAP) inventory rules, IC-DISC for exporters." }
        ],
        process: [
            { step: "01", title: "Industry Deep Dive", description: "We learn the unique aspects of your industry and value chain." },
            { step: "02", title: "Costing Setup", description: "Establish proper cost accounting for materials, labor, and overhead." },
            { step: "03", title: "Operational Metrics", description: "Track throughput, cycle time, and operational efficiency KPIs." },
            { step: "04", title: "Compliance Monitoring", description: "Ensure adherence to industry-specific regulations and standards." }
        ],
        whyChooseUs: [
            { title: "Regulatory Expertise", description: "Deep knowledge of Section 280E (cannabis), IFTA (trucking), 263A (manufacturing), Form 990 (non-profits), and specialized compliance." },
            { title: "Specialized Software Proficiency", description: "Experience with Metrc (cannabis), TMS systems (logistics), BOM software (manufacturing), donor management (non-profits)." },
            { title: "Complex Compliance", description: "Handle unique filings: FBAR, FATCA, Schedule H (household employees), IC-DISC, and specialized state reporting." },
            { title: "Industry-Specific KPIs", description: "Track cost-per-mile (trucking), functional expense ratios (non-profits), 280E optimization (cannabis), biological assets (agriculture)." },
            { title: "White-Glove Service", description: "Specialized industries require specialized attention—concierge-level service for family offices, complex compliance for regulated industries." }
        ],
        testimonial: {
            quote: "They understood our complex cost structure better than accountants who've worked in our industry for years.",
            author: "Frank Morrison",
            role: "CEO",
            company: "Precision Manufacturing Corp"
        },
        subIndustries: [
            {
                name: "Non-Profit Organizations (NGOs)",
                focus: "Transparency, Grant Compliance, and Fund Accounting",
                bookkeeping: [
                    "Tracking Restricted vs. Unrestricted funds by donor and purpose",
                    "Recording donor contributions and pledges (temporarily and permanently restricted)",
                    "Managing accounts payable for program-specific expenses",
                    "Reconciling grant expenditures against budgets"
                ],
                accounting: [
                    "Functional Expense Allocation (splitting costs between Program, Management, and Fundraising)",
                    "Preparing Statement of Functional Expenses (required for Form 990)",
                    "Monitoring grant spend-down rates to ensure compliance with funding requirements",
                    "Net asset classification and reporting"
                ],
                payroll: [
                    "Managing multi-funded payroll (splitting one employee's salary across three different grants)",
                    "Tracking volunteer hours for financial statement notes and grant reporting",
                    "Processing stipends for program participants"
                ],
                taxPreparation: [
                    "Preparation of IRS Form 990 / 990-EZ / 990-N (annual information return)",
                    "Managing UBIT (Unrelated Business Income Tax) if the NGO sells products/services",
                    "Maintaining tax-exempt status compliance",
                    "State charity registration renewals"
                ],
                softwareStack: ["Aplos", "Blackbaud Financial Edge", "QuickBooks Online (Nonprofit)", "Network for Good", "DonorPerfect", "Gusto", "ADP"]
            },
            {
                name: "Cannabis Dispensaries & Cultivation",
                focus: "IRC Section 280E Compliance and Cash Management",
                bookkeeping: [
                    "High-volume cash reconciliation due to banking restrictions",
                    "Reconciling Seed-to-Sale software (Metrc, BioTrackTHC) with the ledger",
                    "Managing cash-intensive operations with daily cash counts"
                ],
                accounting: [
                    "Section 280E Inventory Costing (maximizing COGS to reduce taxable income since most deductions are disallowed)",
                    "Biological asset valuation for plants in various growth stages",
                    "Tracking shrinkage and wastage in compliance with state regulations",
                    "Managing vertical integration (cultivation, processing, retail) separate tracking"
                ],
                payroll: [
                    "Managing high-turnover retail (budtender) and agricultural staff",
                    "Handling cash payroll compliance if no bank account is available",
                    "Tracking budtender tips and gratuities"
                ],
                taxPreparation: [
                    "Specialized 280E tax planning to maximize allowable COGS",
                    "State-specific excise and cultivation tax filings",
                    "Form 8300 reporting for cash transactions over $10,000",
                    "Managing separate entities to compartmentalize 280E impact"
                ],
                softwareStack: ["Sage Intacct (Cannabis Edition)", "QuickBooks Desktop (highly customized)", "Proteus 420", "Treez", "Flowhub", "Greenbits", "Dutchie"]
            },
            {
                name: "Family Offices & High Net Worth Individuals (HNWI)",
                focus: "Wealth Preservation and Private Investment Reporting",
                bookkeeping: [
                    "Personal bill pay and concierge accounting services",
                    "Reconciling private bank accounts and multiple credit cards",
                    "Tracking household staff expenses (chef, nanny, groundskeeper, pilot)",
                    "Managing real estate portfolio expenses across multiple properties"
                ],
                accounting: [
                    "Consolidated reporting for multiple entities (Trusts, LLCs, Family Foundations, Personal)",
                    "Tracking Alternative Investments (Private Equity, Hedge Funds, Real Estate funds) and capital calls",
                    "Net worth statements and asset allocation tracking",
                    "Managing art and collectibles valuations"
                ],
                payroll: [
                    "Domestic employee payroll (nannies, chefs, drivers, housekeepers, pilots)",
                    "Managing household employer tax compliance (Schedule H)",
                    "Processing estate staff across multiple properties"
                ],
                taxPreparation: [
                    "Complex Form 1040 with multiple K-1s from partnerships and S-Corps",
                    "Gift and Estate tax planning (Forms 709 and 706)",
                    "FBAR (Foreign Bank Account) reporting for offshore accounts",
                    "Managing trust tax returns (Form 1041) for multiple family trusts"
                ],
                softwareStack: ["Sage Intacct", "QuickBooks Online", "SEI Archway", "Addepar", "Canopy", "Bill.com"]
            },
            {
                name: "Logistics, Trucking & 3PL",
                focus: "Asset Utilization and Multi-Jurisdictional Tax",
                bookkeeping: [
                    "Reconciling driver settlements and load payments",
                    "Tracking fuel receipts, tolls, and per-diem expenses",
                    "Managing accounts receivable with factoring companies",
                    "Recording equipment leases and maintenance contracts"
                ],
                accounting: [
                    "Cost-per-Mile Analysis by truck, driver, and route",
                    "Asset depreciation tracking (Trucks, Trailers, Forklifts)",
                    "Tracking Deadhead miles (unproductive miles) vs. billable miles",
                    "Managing freight broker commissions and margins"
                ],
                payroll: [
                    "Complex driver pay structures (pay-per-mile, stop-pay, detention pay, layover pay)",
                    "Managing per-diem reimbursements for OTR (Over-The-Road) drivers",
                    "Multi-state withholding for drivers crossing state lines"
                ],
                taxPreparation: [
                    "IFTA (International Fuel Tax Agreement) quarterly reporting",
                    "Heavy Highway Vehicle Use Tax (Form 2290) for trucks over 55,000 lbs",
                    "Specialized equipment depreciation (Section 179, bonus depreciation)",
                    "Managing 1099-NEC for owner-operators"
                ],
                softwareStack: ["TruckLogics", "Tailwind TMS", "Axon", "QuickBooks Desktop", "Sage 50", "ADP", "Paychex"]
            },
            {
                name: "Manufacturing & Industrial Distribution",
                focus: "Inventory Accuracy and Bill of Materials (BOM)",
                bookkeeping: [
                    "Recording raw material purchases and tracking lot numbers",
                    "Managing production orders and job tickets",
                    "Tracking shipping and freight-in costs by batch",
                    "Managing inventory adjustments and scrap"
                ],
                accounting: [
                    "Cost Accounting: Standard costing vs. Actual costing methodologies",
                    "Bill of Materials (BOM) management and component tracking",
                    "Calculating overhead absorption rates",
                    "Managing WIP (Work-in-Process) inventory valuation"
                ],
                payroll: [
                    "Managing shop-floor labor shifts and overtime",
                    "Tracking Direct Labor vs. Indirect Labor for COGS allocation",
                    "Processing piece-rate pay for certain production roles"
                ],
                taxPreparation: [
                    "Section 263A (Uniform Capitalization) rules for inventory",
                    "R&D tax credits for process improvements and product development",
                    "IC-DISC (Interest Charge Domestic International Sales Corporation) for exporters",
                    "State and local property tax on inventory"
                ],
                softwareStack: ["Oracle NetSuite", "Sage 100/300", "Fishbowl Inventory", "MISys", "QuickBooks Enterprise"]
            },
            {
                name: "Agriculture & Commercial Farming",
                focus: "Biological Assets and Seasonal Cash Flow",
                bookkeeping: [
                    "Tracking seed, fertilizer, and chemical purchases by crop/field",
                    "Recording harvest yields and commodity sales",
                    "Managing farm-specific vendor payables (Co-ops, John Deere, etc.)"
                ],
                accounting: [
                    "Biological Asset Valuation (livestock, crops in the field)",
                    "Tracking Productive vs. Non-productive periods for perennial crops",
                    "Farm-wide cash flow forecasting based on harvest cycles",
                    "Managing crop insurance proceeds and government subsidies"
                ],
                payroll: [
                    "Managing seasonal H-2A visa workers (agricultural workers)",
                    "Piece-rate pay structures (pay per bucket/bin harvested)",
                    "Housing and meal deductions for migrant workers"
                ],
                taxPreparation: [
                    "Schedule F (Profit or Loss From Farming) preparation",
                    "Farm Income Averaging to smooth income across years",
                    "Tracking government subsidies (CRP, crop insurance, disaster payments)",
                    "Section 179 and bonus depreciation for equipment"
                ],
                softwareStack: ["Xero (with Figured add-on)", "AgExpert", "CenterPoint", "FarmBooks", "QuickBooks Desktop"]
            }
        ],
        industryBenefits: [
            {
                title: "Regulatory Expertise",
                description: "Deep knowledge of industry-specific regulations including Section 280E (cannabis), IFTA (trucking), 263A (manufacturing), and Form 990 (non-profits)."
            },
            {
                title: "Specialized Software Proficiency",
                description: "Experience with niche industry platforms like Metrc (cannabis), TMS systems (logistics), BOM software (manufacturing), and donor management (non-profits)."
            },
            {
                title: "Complex Compliance",
                description: "Handle unique filing requirements like FBAR, FATCA, Schedule H (household employees), IC-DISC, and specialized state reporting."
            },
            {
                title: "Industry-Specific KPIs",
                description: "Track metrics that matter for your industry—cost-per-mile (trucking), functional expense ratios (non-profits), 280E optimization (cannabis), or biological asset valuation (agriculture)."
            },
            {
                title: "White-Glove Service",
                description: "Understand that specialized industries require specialized attention—providing concierge-level service for family offices and complex compliance for regulated industries."
            }
        ],
        gettingStarted: [
            { step: "01", title: "Industry Assessment", description: "Review your specific regulatory requirements, compliance needs, and industry software." },
            { step: "02", title: "Compliance Framework", description: "Establish proper procedures for industry-specific filings and reporting." },
            { step: "03", title: "Software Integration", description: "Connect industry-specific platforms with accounting systems." },
            { step: "04", title: "Custom Reporting", description: "Build dashboards and reports tracking your industry's unique KPIs." },
            { step: "05", title: "Ongoing Compliance Monitoring", description: "Regular reviews ensuring all regulatory deadlines and requirements are met." }
        ],
        faqs: [
            { question: "Do you work with manufacturing ERPs?", answer: "Yes, we integrate with NetSuite, SAP Business One, Epicor, and other manufacturing ERP platforms." },
            { question: "Can you handle complex cost accounting?", answer: "Absolutely. We specialize in job costing, process costing, and activity-based costing for manufacturers." }
        ]
    },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustries(): Industry[] {
    return industries;
}
