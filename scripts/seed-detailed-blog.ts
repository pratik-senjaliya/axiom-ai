import { createClient } from 'next-sanity';
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
});

function markdownToPortableText(markdown: string) {
  const blocks: any[] = [];
  const lines = markdown.split('\n');
  let currentParagraph: string[] = [];
  
  const pushParagraph = () => {
    if (currentParagraph.length > 0) {
        let text = currentParagraph.join('\n').replace(/__/g, '').replace(/\*\*/g, '');
        let style = 'normal';
        
        if (text.startsWith('## ')) {
            style = 'h2';
            text = text.replace('## ', '');
        } else if (text.startsWith('### ')) {
            style = 'h3';
            text = text.replace('### ', '');
        }

        blocks.push({
            _key: Math.random().toString(36).substring(7),
            _type: 'block',
            style: style,
            children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', marks: [], text: text }]
        });
        currentParagraph = [];
    }
  };

  for (let line of lines) {
    if (line.trim() === '') {
      pushParagraph();
    } else if (line.startsWith('- ')) {
      pushParagraph();
      blocks.push({
        _key: Math.random().toString(36).substring(7),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', marks: [], text: line.replace('- ', '') }]
      });
    } else {
      currentParagraph.push(line);
    }
  }
  pushParagraph();
  return blocks;
}

const articleMarkdown = `
In the rapidly evolving landscape of 2026, enterprise AI has moved beyond simple chat interfaces to complex, agentic systems that live within your ERP and data stacks. To help organizations navigate this transition, we've developed the Enterprise AI Maturity Model—a framework for assessing where you stand and how to scale with certainty.

## Phase 1: The Foundation of Data Readiness
Before any AI can deliver value, the underlying data must be architecturally sound. This means moving beyond siloed spreadsheets into a unified "Data Lakehouse" where both structured ERP data and unstructured documents (PDFs, contracts, emails) coexist.

### Cleaning the Core
A "Clean Core" strategy for your ERP (SAP or Microsoft Dynamics) is essential. Customizations should stay in sidecar applications, keeping the main database engine indexed and accessible for RAG (Retrieval-Augmented Generation) systems.

## Phase 2: Knowledge Velocity with RAG
Once data is accessible, the next step is Knowledge Velocity. This is where most enterprises currently sit—using LLMs to "talk to their data." By indexing proprietary documents into Vector Databases like Pinecone or Weaviate, teams can reduce search time by up to 80%.

- Faster onboarding for new employees.
- Instant access to compliance and regulatory standards.
- Real-time technical support from complex manuals.

## Phase 3: The Shift to Agentic AI
The true breakthrough happens when AI stops being a librarian and starts being an employee. Agentic AI refers to systems that can plan and execute multi-step tasks across different business applications.

### Autonomous Workflows
Imagine an agent that doesn't just tell you inventory is low, but automatically:
1. Negotiates pricing with 3 pre-approved vendors via email.
2. Selects the best offer based on historical lead times.
3. Drafts a Purchase Order in your ERP for final human approval.

## Phase 4: Full Operational Autonomy
At the highest level of maturity, AI systems are self-optimizing. They use predictive analytics to forecast disruptions in the global supply chain months in advance and re-route logistical flows without manual intervention.

## Phase 5: Governance and ROI Performance
The final frontier is not technical—it's organizational. High-maturity enterprises have a dedicated "AI Command Center" that monitors model drift, token costs, and measurable business KPIs in real-time.

### Measuring the Bottom Line
Success in 2026 isn't measured by how many models you've deployed, but by the delta in your operating margin. We track:
- Reduction in Cost of Goods Sold (COGS).
- Improvement in Days Sales Outstanding (DSO).
- Employee output per capita.
`;

const faqs = [
  { 
    _key: 'faq1', 
    question: 'How long does it take to move from Phase 1 to Phase 3?', 
    answer: markdownToPortableText('With a structured roadmap, most enterprises can achieve "Agentic Capability" within 6–9 months, provided the data foundation is established in the first 12 weeks.') 
  },
  { 
    _key: 'faq2', 
    question: 'Do we need to replace our existing ERP to reach Phase 5?', 
    answer: markdownToPortableText('No. Modern AI is built to wrap around legacy systems. The goal is to build an "Intelligent Layer" on top of your existing SAP, Oracle, or Microsoft investments.') 
  },
  { 
     _key: 'faq3',
     question: 'What is the most common reason AI projects fail in Phase 2?',
     answer: markdownToPortableText('Metadata neglect. Without proper tagging and indexing of source documents, RAG systems provide hallucinated or irrelevant answers, leading to a loss of internal trust.')
  }
];

async function seed() {
  console.log("Seeding detailed blog post...");
  
  const post = {
    _id: 'detailed-blog-post-2026',
    _type: 'post',
    title: 'The Enterprise AI Maturity Model 2026',
    slug: { _type: 'slug', current: 'enterprise-ai-maturity-model-2026' },
    excerpt: 'A comprehensive framework for moving from simple GenAI pilots to fully autonomous, agentic enterprise operations.',
    category: 'AI Strategy',
    author: 'AxiomAI Team',
    authorRole: 'Senior AI Strategist',
    publishedAt: new Date().toISOString(),
    readTime: '12 min read',
    content: markdownToPortableText(articleMarkdown),
    faqs: faqs,
    mainImage: {
      _type: 'image',
      alt: 'Enterprise AI Architecture Illustration'
    }
  };

  try {
    const result = await client.createOrReplace(post);
    console.log(`Success: Detailed blog post created/updated at ${result._id}`);
  } catch (err) {
    console.error("Failed to seed post:", err);
  }
}

seed();
