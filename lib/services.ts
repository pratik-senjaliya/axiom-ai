export interface Service {
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
  serviceAreas?: {
    name: string;
    focus: string;
    sections: {
      title: string;
      tasks: string[];
    }[];
  }[];
  process: { step: string; title: string; description: string }[];
  whyChooseUs: { title: string; description: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    slug: "bookkeeping-accounting",
    description: "Accurate and timely financial record-keeping for your business.",
    longDescription: "Bridge the capacity gap and reclaim your time with premium white-label support that acts as a seamless extension of your team.",
    icon: "book",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    intro: {
      title: "Scalable Bookkeeping and Specialized Support for Growing US Firms",
      content: "At the heart of every thriving CPA practice is a foundation of reliable, bulletproof financial data. We don't just process transactions; we provide a high-performance back-office engine that ensures your workpapers arrive on your desk audit-ready and fully tax-compliant. By acting as a seamless extension of your team, we handle the technical heavy lifting, allowing your senior staff to move toward high-value client advisory.",
      stats: [
        { label: "Cost Savings", value: "40-60%" },
        { label: "Turnaround", value: "24-48h" },
        { label: "Accuracy", value: "99.9%" }
      ]
    },
    features: [
      {
        title: "Bookkeeping & Ledger Maintenance",
        description: "Transitioning from messy data to a clean, audit-ready General Ledger. Chart of Accounts optimization mapped to industry standards, daily transaction processing with real-time bank and credit card feeds, and cloud ecosystem management with third-party app integration."
      },
      {
        title: "Accounts Payable: Procure-to-Pay (P2P)",
        description: "Fraud prevention, vendor happiness, and cash flow timing. Vendor onboarding with W-9 compliance, 3-way matching workflow verifying PO-Receiving-Invoice alignment, expense management with policy compliance auditing, and early payment discount identification."
      },
      {
        title: "Accounts Receivable: Order-to-Cash (O2C)",
        description: "Accelerating cash inflow and reducing bad debt. Revenue recognition and invoicing for subscription models, automated collection services with gentle dunning emails, cash application with merchant fee reconciliation, and customer credit management."
      },
      {
        title: "Reconciliations & Month-End Excellence",
        description: "Ensuring the Balance Sheet is 100% accurate every 30 days. Advanced reconciliations including merchant account sync, loan and lease amortization splits, inter-company due to/from balancing, month-end adjustments for accruals and prepaid expenses, and comprehensive management reporting packages."
      },
      {
        title: "Catch-up & Clean-up Services",
        description: "Bringing historical data up to date for taxes or funding. Backlog processing from bank statements, balance sheet forensic review of uncategorized accounts, and audit-ready packaging with permanent file preparation for high-value contracts and asset purchases."
      }
    ],
    process: [
      {
        step: "01",
        title: "Assessment & Integration",
        description: "We review your current software setup, clean up your Chart of Accounts, and connect to your QuickBooks Online, Xero, or Sage platform with zero-friction technology sync."
      },
      {
        step: "02",
        title: "Daily Transaction Processing",
        description: "Our team conducts proactive daily management with real-time coding of bank feeds, micro-task splitting, and owner-paid expense recording through accountable plans."
      },
      {
        step: "03",
        title: "Advanced Reconciliation",
        description: "We perform monthly reconciliations including merchant accounts, loan amortization, and inter-company balances, with month-end adjustments for accruals and depreciation."
      },
      {
        step: "04",
        title: "Reporting & Advisory",
        description: "Receive detailed management reporting packages with P&L, Balance Sheet, and Cash Flow statements, plus trend analysis to spot unusual expense spikes."
      }
    ],
    whyChooseUs: [
      {
        title: "Significant Operational Cost Savings",
        description: "Reduce your firm's overhead by 40% to 60%. Our transparent, flat-fee pricing eliminates the high costs of local recruitment, payroll taxes, and employee benefits."
      },
      {
        title: "Instant, On-Demand Scalability",
        description: "Eliminate the hiring bottleneck. Scale up or down instantly during tax season or when onboarding large new clients based on your real-time workload."
      },
      {
        title: "Specialized Expertise in US GAAP",
        description: "Access a global pool of accounting professionals rigorously trained in US GAAP, AICPA, and PCAOB standards, staying current on evolving IRS regulations."
      },
      {
        title: "Guaranteed 24/48-Hour Processing",
        description: "Accelerate your firm's output with rapid turnaround times. Leveraging global time zones, we process client data overnight with draft workpapers ready within 24-48 hours."
      },
      {
        title: "Multi-Tier Quality Assurance",
        description: "Every deliverable undergoes a strict Four-Eye review process—prepared by a specialist and verified by a senior manager, ensuring 99% accuracy before reaching your desk."
      }
    ],
    testimonial: {
      quote: "The clarity we now have over our finances is game-changing. We've saved hours every week and our clients are getting audit-ready books.",
      author: "Sarah Johnson",
      role: "Managing Partner",
      company: "Johnson & Associates CPA"
    },
    faqs: [
      {
        question: "What software do you use?",
        answer: "We specialize in QuickBooks Online, Xero, Karbon, and Canopy. We plug directly into your preferred ecosystem to ensure data integrity across your entire stack."
      },
      {
        question: "How often are my books updated?",
        answer: "We offer daily bank and credit card updates to keep your clients' books current, allowing you to provide accurate financial insights at a moment's notice."
      },
      {
        question: "Do you provide niche industry support?",
        answer: "Yes! We provide dedicated support for E-commerce (multi-state nexus and COGS), Real Estate (property-level accounting and K-1 support), and Professional Services (trust accounting and project tracking)."
      }
    ],
    serviceAreas: [
      {
        name: "Bookkeeping & Ledger Maintenance",
        focus: "Transitioning from messy data to a clean, Audit-Ready General Ledger",
        sections: [
          {
            title: "Chart of Accounts (COA) Optimization",
            tasks: [
              "Mapping COA to industry standards (e.g., specialized accounts for Real Estate or SaaS)",
              "Cleaning up redundant or \"ghost\" accounts to streamline reporting"
            ]
          },
          {
            title: "Daily Transaction Processing",
            tasks: [
              "Real-time coding of bank and credit card feeds",
              "Splitting single transactions into multiple categories (e.g., a Staples receipt split between Office Supplies and Computer Hardware)",
              "Recording owner-paid business expenses (Accountable Plans)"
            ]
          },
          {
            title: "Cloud Ecosystem Management",
            tasks: [
              "Setting up and syncing third-party apps (Hubdoc, Dext, or Expensify) with the main ledger",
              "Monitoring bank feed health and resolving \"broken\" connections immediately"
            ]
          }
        ]
      },
      {
        name: "Accounts Payable: Procure-to-Pay (P2P)",
        focus: "Fraud prevention, vendor happiness, and cash flow timing",
        sections: [
          {
            title: "Vendor Onboarding & Compliance",
            tasks: [
              "Collecting and verifying IRS Form W-9 for all new vendors",
              "Maintaining a master vendor list to prevent duplicate payments"
            ]
          },
          {
            title: "The 3-Way Matching Workflow",
            tasks: [
              "Verifying that the Purchase Order (PO) matches the Receiving Report, which matches the Vendor Invoice"
            ]
          },
          {
            title: "Expense Management",
            tasks: [
              "Auditing employee expense reports for policy compliance and valid receipts",
              "Allocating corporate credit card spend to specific projects or departments"
            ]
          },
          {
            title: "Payment Strategy",
            tasks: [
              "Identifying \"Early Payment Discounts\" to save client money",
              "Weekly \"Payable Aging\" reviews to decide which bills to pay based on available cash"
            ]
          }
        ]
      },
      {
        name: "Accounts Receivable: Order-to-Cash (O2C)",
        focus: "Accelerating cash inflow and reducing Bad Debt",
        sections: [
          {
            title: "Revenue Recognition & Invoicing",
            tasks: [
              "Managing \"Deferred Revenue\" for subscription-based models",
              "Creating \"Progress Billings\" for long-term construction or consulting projects"
            ]
          },
          {
            title: "Collection & Dunning Services",
            tasks: [
              "Setting up automated \"Gentle Nudge\" emails for invoices 1, 7, and 15 days overdue",
              "Documenting collection notes (calls made, promises to pay) directly in the accounting software"
            ]
          },
          {
            title: "Cash Application",
            tasks: [
              "Applying partial payments to specific invoice line items",
              "Recording and reconciling merchant fees (Stripe/Square) so the \"Gross Revenue\" remains accurate"
            ]
          },
          {
            title: "Customer Credit Management",
            tasks: [
              "Reviewing \"Aged Receivables\" to flag high-risk customers before new orders are fulfilled"
            ]
          }
        ]
      },
      {
        name: "Reconciliations & Month-End Excellence",
        focus: "Ensuring the Balance Sheet is 100% accurate every 30 days",
        sections: [
          {
            title: "Advanced Reconciliations",
            tasks: [
              "Merchant Account Sync: Reconciling \"Net Deposits\" from Amazon/Shopify to \"Gross Sales\"",
              "Loan & Lease Reconciliation: Splitting monthly payments into Principal and Interest based on amortization schedules",
              "Inter-company \"Due To/From\": Ensuring balances between parent and subsidiary companies net to zero"
            ]
          },
          {
            title: "Month-End Adjustments",
            tasks: [
              "Recording Accruals (expenses incurred but not yet invoiced)",
              "Recording Prepaid Expenses (like annual insurance) and amortizing them monthly",
              "Adjusting Journal Entries (AJEs) for depreciation and amortization"
            ]
          },
          {
            title: "Reporting & Review",
            tasks: [
              "Generating a \"Management Reporting Package\" (P&L, Balance Sheet, Cash Flow)",
              "Performing a \"Trend Analysis\" to spot unusual spikes in expenses (e.g., why is \"Utilities\" 40% higher this month?)"
            ]
          }
        ]
      },
      {
        name: "Catch-up & Clean-up Services",
        focus: "Bringing historical data up to date for taxes or funding",
        sections: [
          {
            title: "Backlog Processing",
            tasks: [
              "Entering data from previous months or years from bank statements"
            ]
          },
          {
            title: "Balance Sheet Forensic Review",
            tasks: [
              "Investigating old balances in \"Uncategorized Assets\" or \"Opening Balance Equity\""
            ]
          },
          {
            title: "Audit-Ready Packaging",
            tasks: [
              "Preparing a \"Permanent File\" of all high-value contracts and asset purchases for future audits"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tax",
    title: "Tax Preparation",
    slug: "tax-preparation",
    description: "Expert tax planning and preparation to maximize your savings.",
    longDescription: "Scale your firm's capacity and eliminate tax-season burnout with precision white-label support.",
    icon: "tax",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1554224311-beee228c3d84?w=1920&h=1080&fit=crop",
    intro: {
      title: "Comprehensive Tax Filing and Compliance Services",
      content: "We provide end-to-end support for the full spectrum of US tax returns. Using a multi-level review process, we ensure your tax filing and compliance services meet the highest standards of accuracy. Our specialized tax preparation services act as a high-performance back-office engine, allowing your partners to focus on high-value client advisory while we handle the heavy lifting of compliance.",
      stats: [
        { label: "Accuracy Rate", value: "99%" },
        { label: "Cost Reduction", value: "40-60%" },
        { label: "Delivery", value: "Overnight" }
      ]
    },
    features: [
      {
        title: "Individual Tax Preparation (Form 1040)",
        description: "Accuracy, optimization of credits, and seamless data flow. Workpaper preparation with bookmarked, hyperlinked PDFs. Schedule C for self-employed with home office calculations, Schedule D capital gains reconciliation, Schedule E rental property tracking with depreciation, and optimization of itemized deductions vs standard deduction with all applicable credits."
      },
      {
        title: "Business Tax Compliance (1065, 1120, 1120S)",
        description: "Precision in book-to-tax adjustments and shareholder reporting. Form 1120/1120S for Federal and State Corporate/S-Corp returns, Form 1065 for partnerships with complex capital account maintenance. M-1 & M-3 reconciliations bridging financial and taxable income, fixed asset MACRS vs Section 179/Bonus optimization, shareholder basis tracking, and bulk 1099 preparation with electronic filing."
      },
      {
        title: "International Tax Compliance (Inbound & Outbound)",
        description: "Specialized expertise in high-penalty IRS disclosure forms. Inbound Form 5472 & 1120 for foreign-owned US entities, FIRPTA compliance for foreign real estate sellers. Outbound Form 5471 for CFCs, Form 8865 for foreign partnerships, GILTI & Subpart F calculations. Individual FBAR (FinCEN 114), Form 8938 (FATCA), and Form 2555 for expats."
      },
      {
        title: "Indirect Tax (Sales & Use Tax)",
        description: "Multi-state nexus protection for e-commerce and retail. Economic and physical nexus studies, state sales tax permit registration, monthly/quarterly/annual sales tax return preparation via Avalara or TaxJar, and audit support with documentation gathering for state inquiries."
      },
      {
        title: "Specialized Statutory & Trust Filings",
        description: "Niche tax areas for high-net-worth and non-profit clients. Form 990/990-PF for exempt organizations and private foundations, Form 1041 fiduciary income tax returns with beneficiary K-1 issuance, and Form 706/709 estate and gift tax preparation."
      }
    ],
    process: [
      {
        step: "01",
        title: "Document Collection & Organization",
        description: "We organize digital shoeboxes into bookmarked, hyperlinked PDF workpapers, cross-referencing all source documents with the draft tax return."
      },
      {
        step: "02",
        title: "Return Preparation & Review",
        description: "Our specialists prepare returns using UltraTax, Lacerte, CCH, or Drake, with every return undergoing a Four-Eye review process by a senior tax manager."
      },
      {
        step: "03",
        title: "Book-to-Tax Adjustments",
        description: "We handle M-1 & M-3 reconciliations, fixed asset optimization, and shareholder basis tracking to ensure accurate taxable income calculations."
      },
      {
        step: "04",
        title: "Filing & Client Delivery",
        description: "Reviewer-ready files delivered overnight via Follow the Sun model, requiring minimal internal oversight before client submission."
      }
    ],
    whyChooseUs: [
      {
        title: "99% Accuracy via Four-Eye Review",
        description: "Every return is prepared by a specialist and verified by a senior tax manager. You receive reviewer-ready files that require minimal internal oversight."
      },
      {
        title: "Overnight Follow the Sun Delivery",
        description: "Leverage global time zones to your advantage. Send us data in the evening, and find completed drafts in your inbox by the next morning."
      },
      {
        title: "40–60% Operational Cost Reduction",
        description: "Reclaim your budget by eliminating the overhead of local salaries and benefits. Reinvest capital into firm growth and high-level advisory."
      },
      {
        title: "Instant, On-Demand Scalability",
        description: "Stop the grueling hunt for seasonal staff. We provide immediate bandwidth to handle tax-season surges or sudden new client acquisitions without hiring lag."
      },
      {
        title: "Seamless Tech & GAAP Integration",
        description: "Our team works directly in your existing stack—UltraTax, Lacerte, CCH, or Drake. We follow US GAAP and current tax laws to ensure your brand's quality remains uncompromised."
      }
    ],
    testimonial: {
      quote: "Their tax team is exceptional. We've doubled our capacity during tax season without adding any local hires. The accuracy and overnight turnaround is incredible.",
      author: "Michael Chen",
      role: "Senior Partner",
      company: "Chen Tax & Advisory"
    },
    faqs: [
      {
        question: "What tax software do you support?",
        answer: "We work directly in your existing stack including UltraTax, Lacerte, CCH ProSystem fx, and Drake. We follow US GAAP and current tax laws to ensure quality."
      },
      {
        question: "Do you handle international tax compliance?",
        answer: "Yes! We specialize in high-penalty IRS disclosure forms including Form 5472, 5471, 8865, FBAR (FinCEN 114), and Form 8938 (FATCA) for both inbound and outbound scenarios."
      },
      {
        question: "What is your turnaround time?",
        answer: "We offer overnight Follow the Sun delivery. Send us data in the evening, and find completed draft returns in your inbox by the next morning, ready for your review."
      }
    ],
    serviceAreas: [
      {
        name: "Individual Tax Preparation (Form 1040)",
        focus: "Accuracy, optimization of credits, and seamless data flow",
        sections: [
          {
            title: "Workpaper Preparation & Indexing",
            tasks: [
              "Organizing digital \"shoeboxes\" into bookmarked, hyperlinked PDF workpapers",
              "Cross-referencing source documents (W-2, 1099, 1098) with the draft tax return"
            ]
          },
          {
            title: "Income & Investment Reporting",
            tasks: [
              "Schedule C: Profit/Loss from Business (Self-employed) with home office and auto-expense calculation",
              "Schedule D: Capital Gains/Losses reconciliation from brokerage statements (1099-B)",
              "Schedule E: Rental property income and expense tracking (including depreciation)"
            ]
          },
          {
            title: "Credits & Deductions Optimization",
            tasks: [
              "Itemized Deductions (Schedule A) vs. Standard Deduction comparison",
              "Calculation of Child Tax Credits (CTC), Education Credits (1098-T), and Energy Credits"
            ]
          }
        ]
      },
      {
        name: "Business Tax Compliance (1065, 1120, 1120S)",
        focus: "Precision in book-to-tax adjustments and shareholder reporting",
        sections: [
          {
            title: "Entity-Specific Preparation",
            tasks: [
              "Form 1120/1120S: Federal and State Corporate/S-Corp income tax returns",
              "Form 1065: Partnership returns with complex capital account maintenance"
            ]
          },
          {
            title: "Technical Tax Tasks",
            tasks: [
              "M-1 & M-3 Reconciliations: Bridging the gap between financial net income and taxable income",
              "Fixed Asset & Depreciation: MACRS vs. Section 179/Bonus Depreciation optimization",
              "Shareholder Basis Tracking: Maintaining accurate basis logs to ensure tax-free distributions"
            ]
          },
          {
            title: "Year-End Information Returns",
            tasks: [
              "Bulk 1099-NEC/MISC preparation and electronic filing for contractors"
            ]
          }
        ]
      },
      {
        name: "International Tax Compliance (Inbound & Outbound)",
        focus: "Specialized expertise in high-penalty IRS disclosure forms",
        sections: [
          {
            title: "Inbound (Foreign-Owned US Entities)",
            tasks: [
              "Form 5472 & 1120: Reporting transactions between US corporations and 25% foreign shareholders",
              "FIRPTA Compliance: Forms 8288/8288-A for foreign persons selling US real estate"
            ]
          },
          {
            title: "Outbound (US Entities/Persons Overseas)",
            tasks: [
              "Form 5471: Information returns for US persons with respect to certain Foreign Corporations (CFCs)",
              "Form 8865: Reporting interests in Foreign Partnerships",
              "GILTI & Subpart F: Calculation of Global Intangible Low-Taxed Income"
            ]
          },
          {
            title: "Individual International Reporting",
            tasks: [
              "FBAR (FinCEN 114): Reporting foreign bank and financial accounts",
              "Form 8938 (FATCA): Statement of specified foreign financial assets",
              "Form 2555: Foreign Earned Income Exclusion for US expats"
            ]
          }
        ]
      },
      {
        name: "Indirect Tax (Sales & Use Tax)",
        focus: "Multi-state Nexus protection for E-commerce and Retail",
        sections: [
          {
            title: "Nexus Identification",
            tasks: [
              "Economic and Physical Nexus studies to determine state filing obligations"
            ]
          },
          {
            title: "Compliance & Filing",
            tasks: [
              "Registration for State Sales Tax permits",
              "Monthly, Quarterly, and Annual Sales Tax return preparation and remittance via Avalara or TaxJar"
            ]
          },
          {
            title: "Audit Support",
            tasks: [
              "Gathering documentation for State Sales Tax audits and responding to nexus inquiries"
            ]
          }
        ]
      },
      {
        name: "Specialized Statutory & Trust Filings",
        focus: "Niche tax areas for high-net-worth and non-profit clients",
        sections: [
          {
            title: "Exempt Organizations",
            tasks: [
              "Form 990 / 990-PF: Annual information returns for Non-profits and Private Foundations"
            ]
          },
          {
            title: "Trust & Estate Taxation",
            tasks: [
              "Form 1041: Fiduciary income tax returns and beneficiary K-1 issuance",
              "Form 706/709: Estate and Gift tax return preparation"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "payroll",
    title: "Payroll and Compliance",
    slug: "payroll-compliance",
    description: "Seamless payroll processing and regulatory compliance.",
    longDescription: "Expand your firm's service lines and eliminate administrative burnout with expert white-label support.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop",
    intro: {
      title: "Comprehensive Payroll Processing Services",
      content: "We handle the daily heavy lifting of payroll management, ensuring your clients' employees are paid accurately and on time, every time. Managing payroll has evolved from a simple administrative task to a high-stakes compliance challenge. For US-based CPA firms, the complexities of multi-state tax withholding and shifting labor laws make it difficult to maintain profitable margins. Our outsourced payroll solutions act as a seamless extension of your firm, allowing you to offer a Virtual Payroll Office without the overhead.",
      stats: [
        { label: "States Supported", value: "All 50" },
        { label: "Platforms", value: "10+" },
        { label: "Compliance", value: "SOC 1/2" }
      ]
    },
    features: [
      {
        title: "Full-Cycle Payroll Processing",
        description: "Timely and accurate pay delivery for diverse workforces. Processing payroll for all frequencies (weekly, bi-weekly, semi-monthly, monthly), handling multiple pay types including salary, hourly, commissions, and bonuses. Managing final paycheck requirements meeting state-specific immediate payment laws, syncing time-tracking software, and coordinating direct deposit (ACH) files and physical checks."
      },
      {
        title: "Multi-State Payroll Tax Compliance",
        description: "Navigating the complexity of 50 different state tax jurisdictions. Calculating and initiating payments for Form 941 (Quarterly Federal Tax) and Form 940 (Annual FUTA), reconciling total tax deposits against payroll reports, managing State Unemployment Insurance (SUI) rates and local taxes, and registering for new state tax IDs when hiring remote employees in new states."
      },
      {
        title: "Benefits & Deduction Administration",
        description: "Precision in Gross-to-Net calculations. Tracking 401(k), 403(b), and Simple IRA deferrals with employer matching, uploading retirement contribution files to providers like Vanguard and Fidelity, deducting health/dental/vision and HSA/FSA premiums, processing statutory garnishments for child support and tax levies, and setting up pay-as-you-go workers' comp integrations."
      },
      {
        title: "Year-End Reporting & Reconciliation",
        description: "Ensuring a stress-free January for the client. Reconciling annual payroll totals before generating W-2s and 1099-NECs, handling electronic filing of W-3 and 1096 summary forms with SSA/IRS, performing year-end reasonableness tests to catch errors before the IRS, and ensuring taxable fringe benefits are properly added to W-2s."
      },
      {
        title: "HR Administrative Support",
        description: "The people side of the payroll process. Setting up new employee profiles in HRIS, collecting and verifying Form I-9 and W-4 withholding certificates, training employees on accessing pay stubs and year-end tax forms via employee self-service portals, and updating address changes, bank details, and withholding status upon request."
      }
    ],
    process: [
      {
        step: "01",
        title: "System Integration",
        description: "We connect with your payroll platform (Gusto, ADP, Paychex, Rippling) and sync time-tracking software like TSheets or ClockShark with automated G/L entries to QuickBooks Online, Xero, or Sage Intacct."
      },
      {
        step: "02",
        title: "Payroll Execution",
        description: "Our team processes payroll for all frequencies, auditing timesheets, calculating federal and multi-state taxes, managing benefits deductions, and coordinating direct deposits and check printing."
      },
      {
        step: "03",
        title: "Tax Filing & Compliance",
        description: "We file Form 941 quarterly and Form 940 annually, manage state unemployment insurance rates, submit new hire reporting to state agencies, and respond to tax rate change notices."
      },
      {
        step: "04",
        title: "Year-End Processing",
        description: "We reconcile annual totals, generate and electronically file W-2s and W-3s with the SSA, issue 1099-NECs to contractors with Form 1096, and perform compliance audits to catch errors proactively."
      }
    ],
    whyChooseUs: [
      {
        title: "SOC 1 & SOC 2 Compliant Security",
        description: "Our outsourced payroll solutions operate within SOC 1 & SOC 2 compliant environments, utilizing 256-bit encryption and multi-factor authentication to ensure sensitive employee data is never compromised."
      },
      {
        title: "Tech-Agnostic Expertise",
        description: "We don't ask you to change your workflow. Our team is proficient in Gusto, Rippling, ADP Run/Workforce Now, Paychex, with automatic syncing to QuickBooks Online, Xero, and Sage Intacct."
      },
      {
        title: "Multi-State Tax Mastery",
        description: "We navigate all 50 state tax jurisdictions, managing SUI rates, local city/county taxes, and registering for new state tax IDs when you hire remote employees in new states."
      },
      {
        title: "Benefits Administration Excellence",
        description: "We handle 401(k) deferrals, health insurance premiums, HSA/FSA deductions, statutory garnishments, and workers' comp integrations with precision Gross-to-Net calculations."
      },
      {
        title: "Stress-Free Year-End",
        description: "We reconcile annual totals, generate W-2s and 1099-NECs, electronically file with SSA/IRS, and perform reasonableness tests to catch errors before the IRS does."
      }
    ],
    testimonial: {
      quote: "Outsourcing payroll to them was the best decision we made. Our clients love the accuracy and we've eliminated the year-end stress. They handle everything from multi-state taxes to W-2 generation flawlessly.",
      author: "Jennifer Martinez",
      role: "Operations Director",
      company: "Martinez Accounting Group"
    },
    faqs: [
      {
        question: "What payroll platforms do you support?",
        answer: "We're proficient in all major US payroll platforms including Gusto, Rippling, ADP Run/Workforce Now, Paychex, with automatic syncing to QuickBooks Online, Xero, and Sage Intacct."
      },
      {
        question: "How do you handle multi-state payroll?",
        answer: "We navigate all 50 state tax jurisdictions, managing State Unemployment Insurance rates, local city/county taxes, and registering for new state tax IDs when you hire remote employees in new states."
      },
      {
        question: "Is my employee data secure?",
        answer: "Absolutely. Our solutions operate within SOC 1 & SOC 2 compliant environments, utilizing 256-bit encryption and multi-factor authentication (MFA) to ensure sensitive employee data is never compromised."
      }
    ],
    serviceAreas: [
      {
        name: "Full-Cycle Payroll Processing",
        focus: "Timely and accurate pay delivery for diverse workforces",
        sections: [
          {
            title: "Pay Cycle Management",
            tasks: [
              "Processing payroll for all frequencies (Weekly, Bi-weekly, Semi-monthly, and Monthly)",
              "Handling multiple pay types: Salary, Hourly (Regular/Overtime), Commissions, and Bonuses",
              "Managing \"Final Paycheck\" requirements for terminated employees (meeting state-specific immediate payment laws)"
            ]
          },
          {
            title: "Data Integration & Entry",
            tasks: [
              "Syncing time-tracking software (TSheets, ClockShark) with the payroll system",
              "Auditing manual timesheets for \"Buddy Punching\" or missing supervisor approvals"
            ]
          },
          {
            title: "Payment Distribution",
            tasks: [
              "Coordinating Direct Deposit (ACH) files and printing physical checks (where required)",
              "Loading and managing \"Pay Cards\" for unbanked employees"
            ]
          }
        ]
      },
      {
        name: "Multi-State Payroll Tax Compliance",
        focus: "Navigating the complexity of 50 different state tax jurisdictions",
        sections: [
          {
            title: "Federal Tax Obligations",
            tasks: [
              "Calculating and initiating payments for 941 (Quarterly Federal Tax) and 940 (Annual FUTA)",
              "Reconciling total tax deposits against payroll reports to ensure zero variance"
            ]
          },
          {
            title: "State & Local Tax (SIT/SUI)",
            tasks: [
              "Managing State Unemployment Insurance (SUI) rates and local city/county taxes",
              "Registering for new state tax IDs when a client hires their first remote employee in a new state"
            ]
          },
          {
            title: "Regulatory Reporting",
            tasks: [
              "Filing \"New Hire Reporting\" forms with state agencies within 20 days of hire",
              "Responding to \"Notice of Tax Rate\" changes from state unemployment agencies"
            ]
          }
        ]
      },
      {
        name: "Benefits & Deduction Administration",
        focus: "Precision in \"Gross-to-Net\" calculations",
        sections: [
          {
            title: "Retirement & Insurance",
            tasks: [
              "Tracking 401(k), 403(b), and Simple IRA deferrals and employer matching",
              "Uploading retirement contribution files to providers like Vanguard, Fidelity, or Guideline",
              "Deducting Health, Dental, Vision, and HSA/FSA premiums based on plan enrollment"
            ]
          },
          {
            title: "Statutory Garnishments",
            tasks: [
              "Processing court-ordered wage garnishments for child support, student loans, or tax levies",
              "Communicating with state agencies to confirm receipt of garnishment payments"
            ]
          },
          {
            title: "Workers' Compensation",
            tasks: [
              "Setting up \"Pay-as-you-go\" Workers' Comp integrations",
              "Preparing the annual payroll audit reports for workers' comp insurance providers"
            ]
          }
        ]
      },
      {
        name: "Year-End Reporting & Reconciliation",
        focus: "Ensuring a stress-free January for the client",
        sections: [
          {
            title: "W-2 & 1099 Issuance",
            tasks: [
              "Reconciling annual payroll totals before generating W-2s (Employees) and 1099-NECs (Contractors)",
              "Handling electronic filing (E-file) of W-3 and 1096 summary forms with the SSA/IRS"
            ]
          },
          {
            title: "Compliance Audits",
            tasks: [
              "Performing year-end \"Reasonableness Tests\" to catch errors before the IRS does",
              "Ensuring taxable fringe benefits (like personal use of company car) are added to W-2s"
            ]
          }
        ]
      },
      {
        name: "HR Administrative Support",
        focus: "The \"People\" side of the payroll process",
        sections: [
          {
            title: "Onboarding & Offboarding",
            tasks: [
              "Setting up new employee profiles in the HRIS (Human Resources Information System)",
              "Collecting and verifying Form I-9 and W-4 (Federal/State withholding certificates)"
            ]
          },
          {
            title: "Employee Self-Service (ESS)",
            tasks: [
              "Training and supporting employees on how to access pay stubs and year-end tax forms",
              "Updating address changes, bank details, and withholding status upon request"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    slug: "audit-assurance",
    description: "Robust audit readiness and internal control examinations.",
    longDescription: "Maximize your audit capacity and reduce busy season burnout through strategic outsourcing.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop",
    intro: {
      title: "Comprehensive Financial Audit Assistance Services",
      content: "We provide end-to-end support throughout the audit lifecycle delivering reviewer-ready files that adhere to GAAS and PCAOB standards. The demand for high-quality audit and assurance services has reached a record high, yet the talent pool for auditors remains at a critical low. Our specialized audit support services act as a technical extension of your team, handling the heavy lifting of the audit file so your senior auditors can focus on high-risk areas and client relationships.",
      stats: [
        { label: "Cost Reduction", value: "40-50%" },
        { label: "GAAS Compliant", value: "100%" },
        { label: "Review Ready", value: "First Time" }
      ]
    },
    features: [
      {
        title: "Audit Planning & Risk Assessment",
        description: "Strategic groundwork to ensure a focused and efficient audit. Rolling forward previous year's electronic audit files in CaseWare, AdvanceFlow, or CCH Axcess. Drafting engagement letters and independence confirmations. Calculating overall materiality and performance materiality, preparing planning analytics with flux analysis to identify significant trends, documenting understanding of the entity and fraud risk factors, and creating detailed PBC checklists."
      },
      {
        title: "Substantive Testing & Execution",
        description: "The heavy lifting of verifying account balances. Using IDEA or ACL for statistical and non-statistical sampling, vouching samples from General Ledger to source documents, tracing source documents into the ledger for completeness. Account-specific procedures for cash reconciliations, A/R confirmation process via Confirmation.com, inventory price testing, and search for unrecorded liabilities reviewing post-balance sheet payments."
      },
      {
        title: "Internal Control & Compliance Testing",
        description: "Testing the organizational plumbing. Documenting process walkthroughs (Sales, Payroll, Purchasing) through flowcharts and narratives, identifying key controls within transaction cycles, testing operating effectiveness of internal controls, reporting control deficiencies (significant deficiencies vs material weaknesses), and verifying adherence to industry-specific regulations like HIPAA or HUD."
      },
      {
        title: "Financial Statement Preparation & Finalization",
        description: "The last mile of the audit engagement. Drafting full disclosure financial statements (P&L, Balance Sheet, Cash Flow, Footnotes) per US GAAP, completing disclosure checklists to ensure all mandatory footnotes, performing mathematical accuracy checks on entire financial reports, indexing and cross-referencing every number back to supporting schedules, and drafting management letter points and audit summary memos."
      },
      {
        title: "Specialized Audit Support (Niche Areas)",
        description: "High-margin expertise for specific US requirements. Employee Benefit Plan audits testing participant eligibility and distributions for 401(k) or 403(b) plans. Governmental and Single Audits supporting Yellow Book audits and Uniform Guidance compliance for non-profits receiving federal funds. Agreed-Upon Procedures performing specific testing for royalty audits or loan covenant compliance."
      }
    ],
    process: [
      {
        step: "01",
        title: "Engagement Setup & Planning",
        description: "We roll forward prior year audit files, calculate materiality benchmarks, prepare planning analytics with flux analysis, and create comprehensive PBC checklists to track document status."
      },
      {
        step: "02",
        title: "Substantive Testing",
        description: "Our team performs vouching and tracing procedures, manages confirmation processes, conducts inventory price testing, reviews bank reconciliations, and searches for unrecorded liabilities."
      },
      {
        step: "03",
        title: "Control Testing & Documentation",
        description: "We document process walkthroughs, identify key controls, test operating effectiveness, and report control deficiencies following GAAS standards."
      },
      {
        step: "04",
        title: "Finalization & Delivery",
        description: "We draft full disclosure financial statements per US GAAP, complete disclosure checklists, perform tie-out procedures, index and cross-reference all workpapers, and prepare management letters."
      }
    ],
    whyChooseUs: [
      {
        title: "40–50% Reduction in Labor Costs",
        description: "Eliminate the financial strain of high base salaries and peak-season overtime. Our model maximizes the profitability of every engagement by lowering cost-per-audit."
      },
      {
        title: "Reclaimed Staff Efficiency",
        description: "Stop wasting senior talent on vouching, tracing, and confirmation tracking. Offloading junior-level tasks allows your onsite team to focus on high-risk areas and professional judgment."
      },
      {
        title: "Infinite Seasonal Bandwidth",
        description: "Bypass the hiring bottleneck. We provide immediate, unlimited capacity, giving you freedom to accept complex new engagements during busy season without burning out your internal team."
      },
      {
        title: "Reviewer-Ready Workpapers",
        description: "Mitigate fatigue-based errors with our multi-tier review system. Every file is prepared by a specialist and verified by a senior manager to meet strict GAAS and PCAOB standards."
      },
      {
        title: "Frictionless, Secure Workflow",
        description: "We work directly in your existing audit software—whether it's CaseWare, CCH Engagement, or AdvanceFlow—to ensure a secure, digital environment with real-time project visibility."
      }
    ],
    testimonial: {
      quote: "Their audit team has been a game-changer for our firm. We've been able to take on larger engagements without the stress of finding qualified auditors. The workpapers are reviewer-ready and meet our strict quality standards.",
      author: "David Thompson",
      role: "Audit Partner",
      company: "Thompson & Partners LLP"
    },
    faqs: [
      {
        question: "What audit software do you support?",
        answer: "We work directly in your existing audit software including CaseWare, CCH Engagement (Axcess Audit), AdvanceFlow, and other major platforms to ensure seamless integration."
      },
      {
        question: "Are you GAAS and PCAOB compliant?",
        answer: "Yes, all our audit work adheres to strict GAAS and PCAOB standards. Every file undergoes multi-tier review by specialists and senior managers before delivery."
      },
      {
        question: "Can you handle specialized audits?",
        answer: "Absolutely. We support Employee Benefit Plan (EBP) audits, Governmental and Single Audits (Yellow Book), and Agreed-Upon Procedures (AUP) engagements for various industries."
      }
    ],
    serviceAreas: [
      {
        name: "Audit Planning & Risk Assessment",
        focus: "Strategic groundwork to ensure a focused and efficient audit",
        sections: [
          {
            title: "Pre-Audit Engagement Support",
            tasks: [
              "Rolling forward the previous year's electronic audit files in software like CaseWare, AdvanceFlow, or CCH Axcess",
              "Drafting Engagement Letters and Independence Confirmations for the audit team"
            ]
          },
          {
            title: "Materiality & Risk Identification",
            tasks: [
              "Calculating Overall Materiality and Performance Materiality based on the chosen benchmark (e.g., Total Assets or Revenue)",
              "Preparing Planning Analytics (Flux Analysis) to identify significant account balances and unusual trends",
              "Documenting the \"Understanding of the Entity\" and identifying fraud risk factors"
            ]
          },
          {
            title: "PBC (Provided by Client) Management",
            tasks: [
              "Creating and managing a detailed PBC Checklist to track document status and follow up on missing items"
            ]
          }
        ]
      },
      {
        name: "Substantive Testing & Execution",
        focus: "The \"Heavy Lifting\" of verifying account balances",
        sections: [
          {
            title: "Sample Selection & Testing",
            tasks: [
              "Using IDEA or ACL to perform statistical and non-statistical sampling",
              "Vouching: Tracing samples from the General Ledger to source documents (Invoices, BOLs, Contracts)",
              "Tracing: Selecting source documents and tracing them into the General Ledger to ensure completeness"
            ]
          },
          {
            title: "Account-Specific Scrutiny",
            tasks: [
              "Cash: Preparing bank reconciliations and performing \"Casting\" procedures on bank statements",
              "Accounts Receivable: Managing the Confirmation Process (preparing, sending, and tracking responses via Confirmation.com)",
              "Inventory: Reviewing physical inventory count sheets and performing \"Price Testing\" (lower of cost or market)",
              "Search for Unrecorded Liabilities: Reviewing post-balance sheet payments to ensure proper period cutoff"
            ]
          }
        ]
      },
      {
        name: "Internal Control & Compliance Testing",
        focus: "Testing the \"Plumbing\" of the organization",
        sections: [
          {
            title: "Walkthroughs & Narratives",
            tasks: [
              "Documenting process walkthroughs (Sales, Payroll, Purchasing) through flowcharts and narratives",
              "Identifying \"Key Controls\" within the transaction cycles"
            ]
          },
          {
            title: "Control Testing (SOC/SOX)",
            tasks: [
              "Testing the Operating Effectiveness of internal controls (e.g., verifying that all checks over $5,000 have two signatures)",
              "Reporting control deficiencies (Significant Deficiencies vs. Material Weaknesses) to the onshore team"
            ]
          },
          {
            title: "Compliance Audits",
            tasks: [
              "Verifying adherence to industry-specific regulations (e.g., HIPAA for Healthcare or HUD for Real Estate)"
            ]
          }
        ]
      },
      {
        name: "Financial Statement Preparation & Finalization",
        focus: "The \"Last Mile\" of the audit engagement",
        sections: [
          {
            title: "Reporting & Disclosure",
            tasks: [
              "Drafting the Full Disclosure Financial Statements (P&L, Balance Sheet, Cash Flow, Footnotes) as per US GAAP",
              "Completing Disclosure Checklists to ensure every mandatory footnote is included"
            ]
          },
          {
            title: "Tie-out & Quality Review",
            tasks: [
              "Performing a \"Mathematical Accuracy\" (Casting) check on the entire financial report",
              "Indexing & Cross-Referencing: Linking every number in the financial statements back to the supporting lead schedule"
            ]
          },
          {
            title: "Completion Procedures",
            tasks: [
              "Drafting the Management Letter Points (MLPs) and the Audit Summary Memo",
              "Preparing the \"Representation Letter\" for management signature"
            ]
          }
        ]
      },
      {
        name: "Specialized Audit Support (Niche Areas)",
        focus: "High-margin expertise for specific US requirements",
        sections: [
          {
            title: "Employee Benefit Plan (EBP) Audits",
            tasks: [
              "Testing participant eligibility, contributions, and distributions for 401(k) or 403(b) plans"
            ]
          },
          {
            title: "Governmental & Single Audits",
            tasks: [
              "Support for Yellow Book audits and Uniform Guidance (Single Audit) compliance for non-profits receiving federal funds"
            ]
          },
          {
            title: "Agreed-Upon Procedures (AUP)",
            tasks: [
              "Performing specific testing on limited financial areas as requested by third parties (e.g., royalty audits or loan covenant compliance)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cfo",
    title: "Virtual CFO & FP&A",
    slug: "virtual-cfo-fpa",
    description: "Strategic financial leadership to drive your business growth.",
    longDescription: "Executive-level financial expertise that transforms your data into actionable strategy.",
    icon: "chart",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    intro: {
      title: "Strategic Financial Leadership for Business Growth",
      content: "Move beyond compliance accounting and step into strategic financial leadership. Our Virtual CFO services provide executive-level financial expertise that transforms your data into actionable insights and strategic decisions. We act as your right hand to the CEO, providing the financial analysis and strategic guidance needed to drive sustainable growth.",
      stats: [
        { label: "ROI Improvement", value: "30%+" },
        { label: "Strategic Insights", value: "Real-Time" },
        { label: "Cost vs Full CFO", value: "60% Less" }
      ]
    },
    features: [
      {
        title: "Financial Planning & Analysis (FP&A)",
        description: "Predicting the future through data-driven modeling. Developing annual bottom-up budgets aligned with departmental goals, creating 12-month rolling forecasts that adapt to market conditions, performing variance analysis to explain budget vs actual performance, building dynamic scenario and what-if models to test strategic moves, creating 13-week cash flow projections to manage liquidity, and analyzing cash conversion cycles to optimize collections."
      },
      {
        title: "Strategic Advisory & Decision Support",
        description: "Acting as the right hand to the CEO/Owner. Product/service line profitability analysis identifying high-margin vs money-losing offerings, customer profitability calculating cost to serve vs revenue generated, break-even and pricing strategy analysis, competitor pricing research for optimal positioning, preparing monthly executive summary decks for board meetings, and translating complex financial data into actionable narratives for non-financial founders."
      },
      {
        title: "Business Intelligence (BI) & KPI Dashboards",
        description: "Real-time visibility into business health. Building live dashboards using Power BI, Tableau, or Fathom pulling data from ERP systems, tracking non-financial KPIs like website traffic conversion and customer churn, industry-specific metrics for SaaS (MRR, LTV, CAC) and E-commerce (ROAS, cart abandonment), and benchmarking financial ratios against industry averages."
      },
      {
        title: "Capital Structure & M&A Support",
        description: "Helping the business find and manage money. Preparing pro-forma financial statements for bank loans or venture capital, managing financial data rooms for investor due diligence, buy-side due diligence reviewing target company books for red flags, sell-side preparation cleaning up financials to maximize valuation, and advising on capital allocation decisions between R&D reinvestment, debt payoff, or dividend distribution."
      },
      {
        title: "Fractional Controller & Compliance Oversight",
        description: "Strengthening the internal financial backbone. Implementing check and balance procedures to prevent fraud and embezzlement, developing month-end close checklists to close books in under 5 days, leading relationships with external auditors and tax CPAs for smooth year-end, and ensuring compliance with ASC 606 (Revenue Recognition) and other US GAAP standards."
      }
    ],
    process: [
      {
        step: "01",
        title: "Financial Assessment",
        description: "We analyze your current financial position, review existing reports and KPIs, identify gaps in financial visibility, and establish strategic goals aligned with your business objectives."
      },
      {
        step: "02",
        title: "Dashboard & Model Development",
        description: "We build custom KPI dashboards using Power BI or Tableau, develop dynamic financial models for budgeting and forecasting, and create scenario planning tools for strategic decision-making."
      },
      {
        step: "03",
        title: "Strategic Planning & Analysis",
        description: "We provide ongoing FP&A support with variance analysis, profitability studies by product/customer, break-even and pricing strategy guidance, and cash flow forecasting with optimization recommendations."
      },
      {
        step: "04",
        title: "Executive Advisory & Reporting",
        description: "We prepare board-ready presentations with executive summaries, provide strategic advisory as the CEO's right hand for financial decisions, and support fundraising or M&A activities with pro-forma statements and due diligence."
      }
    ],
    whyChooseUs: [
      {
        title: "Executive-Level Expertise at Fractional Cost",
        description: "Get CFO-level strategic guidance at 60% less cost than a full-time executive. Perfect for growing businesses that need strategic financial leadership without the overhead."
      },
      {
        title: "Data-Driven Decision Making",
        description: "Transform raw data into actionable insights with custom KPI dashboards, scenario planning models, and real-time business intelligence that drives better decisions."
      },
      {
        title: "Strategic Growth Partner",
        description: "We go beyond numbers to become your strategic partner, providing profitability analysis, pricing strategy, fundraising support, and M&A advisory to accelerate growth."
      },
      {
        title: "Industry-Specific Metrics Expertise",
        description: "We track the metrics that matter for your industry—MRR and CAC for SaaS, ROAS for E-commerce, or custom KPIs for your specific business model."
      },
      {
        title: "Board-Ready Reporting",
        description: "Receive executive summary decks and board presentations that translate complex financial data into clear, actionable narratives that resonate with investors and stakeholders."
      }
    ],
    testimonial: {
      quote: "Having a Virtual CFO has been transformational for our business. The strategic insights and financial modeling have helped us make smarter decisions and secure our Series A funding. Best investment we've made.",
      author: "Amanda Foster",
      role: "CEO & Founder",
      company: "TechGrowth Solutions"
    },
    faqs: [
      {
        question: "How is a Virtual CFO different from a bookkeeper?",
        answer: "A bookkeeper records historical transactions. A Virtual CFO provides forward-looking strategic guidance, financial modeling, scenario planning, fundraising support, and executive-level decision-making assistance."
      },
      {
        question: "What tools do you use for dashboards and reporting?",
        answer: "We build custom dashboards using Power BI, Tableau, or Fathom, pulling data from your ERP system to provide real-time visibility into KPIs and business performance."
      },
      {
        question: "Can you help with fundraising?",
        answer: "Absolutely. We prepare pro-forma financial statements, manage data rooms for investor due diligence, build financial models, and provide strategic guidance throughout the fundraising process."
      }
    ],
    serviceAreas: [
      {
        name: "Financial Planning & Analysis (FP&A)",
        focus: "Predicting the future through data-driven modeling",
        sections: [
          {
            title: "Budgeting & Rolling Forecasts",
            tasks: [
              "Developing annual \"bottom-up\" budgets aligned with departmental goals",
              "Creating 12-month rolling forecasts that adapt as market conditions change",
              "Performing Variance Analysis (Budget vs. Actual) to explain why targets were missed or exceeded"
            ]
          },
          {
            title: "Scenario & \"What-If\" Modeling",
            tasks: [
              "Building dynamic models to test the impact of strategic moves (e.g., What happens if we increase prices by 5%?)",
              "Hiring models to determine the ROI and \"break-even\" point of a new sales representative or developer"
            ]
          },
          {
            title: "Cash Flow Management",
            tasks: [
              "Creating 13-Week Cash Flow Projections to manage short-term liquidity and avoid \"cash crunches\"",
              "Analyzing the \"Cash Conversion Cycle\" to speed up collections and optimize vendor payments"
            ]
          }
        ]
      },
      {
        name: "Strategic Advisory & Decision Support",
        focus: "Acting as the \"Right Hand\" to the CEO/Owner",
        sections: [
          {
            title: "Profitability & Margin Analysis",
            tasks: [
              "Product/Service Line Profitability: Identifying which offerings are high-margin and which are \"money-losers\"",
              "Customer Profitability: Calculating the cost to serve specific clients vs. the revenue they generate"
            ]
          },
          {
            title: "Break-Even & Pricing Strategy",
            tasks: [
              "Calculating the precise revenue point where the business covers all fixed and variable costs",
              "Analyzing competitor pricing and market trends to advise on \"Optimal Price\" positioning"
            ]
          },
          {
            title: "Board & Stakeholder Presentations",
            tasks: [
              "Preparing monthly \"Executive Summary\" decks for Board meetings or investors",
              "Translating complex financial data into simple, actionable narratives for non-financial founders"
            ]
          }
        ]
      },
      {
        name: "Business Intelligence (BI) & KPI Dashboards",
        focus: "Real-time visibility into the health of the business",
        sections: [
          {
            title: "Custom Dashboard Development",
            tasks: [
              "Building live dashboards using Power BI, Tableau, or Fathom that pull data directly from the ERP",
              "Tracking Non-Financial KPIs (e.g., website traffic vs. sales conversion, customer churn rates)"
            ]
          },
          {
            title: "Industry-Specific Metrics",
            tasks: [
              "For SaaS: Tracking MRR (Monthly Recurring Revenue), LTV (Lifetime Value), and CAC (Customer Acquisition Cost)",
              "For E-commerce: Tracking ROAS (Return on Ad Spend) and Cart Abandonment impact on revenue"
            ]
          },
          {
            title: "Benchmarking",
            tasks: [
              "Comparing the client's financial ratios (Gross Margin, Operating Margin) against industry averages"
            ]
          }
        ]
      },
      {
        name: "Capital Structure & M&A Support",
        focus: "Helping the business find and manage money",
        sections: [
          {
            title: "Fundraising Readiness",
            tasks: [
              "Preparing \"Pro-Forma\" financial statements required for Bank Loans or Venture Capital",
              "Managing the \"Financial Data Room\" for potential investors during the due diligence process"
            ]
          },
          {
            title: "Mergers & Acquisitions (M&A)",
            tasks: [
              "Buy-side Due Diligence: Reviewing the target company's books to find \"red flags\"",
              "Sell-side Preparation: Cleaning up financials to maximize the company's valuation before a sale"
            ]
          },
          {
            title: "Capital Allocation",
            tasks: [
              "Advising on whether to reinvest profits into R&D, pay off debt, or distribute dividends"
            ]
          }
        ]
      },
      {
        name: "Fractional Controller & Compliance Oversight",
        focus: "Strengthening the internal financial \"backbone\"",
        sections: [
          {
            title: "Internal Control Enhancement",
            tasks: [
              "Implementing \"Check and Balance\" procedures to prevent fraud and embezzlement",
              "Developing a \"Month-End Close Checklist\" to ensure books are closed in under 5 days"
            ]
          },
          {
            title: "Audit & Tax Liaison",
            tasks: [
              "Leading the relationship with external auditors and tax CPAs to ensure a smooth year-end",
              "Ensuring the company stays compliant with ASC 606 (Revenue Recognition) and other US GAAP standards"
            ]
          }
        ]
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
