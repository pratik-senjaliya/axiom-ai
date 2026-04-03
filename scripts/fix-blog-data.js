"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_sanity_1 = require("next-sanity");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env.local') });
var client = (0, next_sanity_1.createClient)({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
});
function h2(text) {
    return { _type: 'block', _key: Math.random().toString(36).substr(2, 9), children: [{ _type: 'span', text: text, marks: [] }], style: 'h2', markDefs: [] };
}
function h3(text) {
    return { _type: 'block', _key: Math.random().toString(36).substr(2, 9), children: [{ _type: 'span', text: text, marks: [] }], style: 'h3', markDefs: [] };
}
function p(text) {
    return { _type: 'block', _key: Math.random().toString(36).substr(2, 9), children: [{ _type: 'span', text: text, marks: [] }], style: 'normal', markDefs: [] };
}
function list(items) {
    return items.map(function (text) { return ({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        children: [{ _type: 'span', text: text, marks: [] }],
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        markDefs: []
    }); });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var blogs, _i, blogs_1, post, query, existing, doc, canonicalSlugs, allPosts, _a, allPosts_1, p_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Starting correction of blog content structure...");
                    blogs = [
                        {
                            title: "Why Most GenAI Projects Fail: Escaping the AI Pilot Trap",
                            slug: "why-most-gen-ai-projects-fail",
                            category: "AI Strategy",
                            relatedService: "ai",
                            excerpt: "Learn why 85% of GenAI projects fail and how legacy data foundations and tool-first thinking create the 'AI pilot trap'.",
                            content: __spreadArray(__spreadArray(__spreadArray(__spreadArray([
                                h2("Gen AI Blog 1 - Why Most GenAI Projects Fail"),
                                p("One of the biggest challenges enterprises face today is the “AI pilot trap.” While many companies launch multiple experiments, they often struggle to scale them into production systems."),
                                h3("1. Starting With Technology Instead of Business Problems"),
                                p("Many companies begin their AI journey by experimenting with tools rather than solving real business challenges."),
                                p("Successful AI initiatives start with clear objectives such as reducing operational costs, improving customer experience, or accelerating decision-making."),
                                h3("2. The Pilot-to-Production Gap"),
                                p("Proof-of-concept projects often demonstrate value in controlled environments but fail to scale across the organization."),
                                p("Without planning for infrastructure, integration, and operational deployment, many pilots remain isolated experiments."),
                                h3("3. Weak Data Foundations"),
                                p("AI systems rely heavily on high-quality data. Unfortunately, many organizations struggle with:")
                            ], list(["Data silos", "Inconsistent datasets", "Lack of governance", "Poor data quality"]), true), [
                                p("Without reliable data infrastructure, AI models cannot deliver consistent results."),
                                h3("4. Lack of Strategic Alignment"),
                                p("AI initiatives sometimes operate within innovation teams or IT departments without strong leadership alignment."),
                                p("Successful AI adoption requires executive sponsorship and collaboration across business units."),
                                h3("5. Missing Governance and Risk Management"),
                                p("Generative AI introduces risks related to privacy, security, and compliance."),
                                p("Organizations that fail to establish governance frameworks early often face barriers when trying to scale AI solutions."),
                                h2("Escaping the AI Pilot Trap"),
                                p("Companies launch multiple experiments but never scale them into production systems. Over time, these disconnected initiatives create confusion and wasted investment."),
                                p("Breaking this cycle requires a shift from experimentation to structured AI deployment."),
                                h2("How the Successful 15% Deploy GenAI"),
                                h3("Focus on Business Outcomes"),
                                p("AI initiatives should be aligned with measurable goals such as cost savings, productivity improvements, or revenue growth."),
                                h3("Invest in Data Infrastructure"),
                                p("Reliable AI systems require centralized data platforms, strong governance, and high-quality datasets."),
                                h3("Design for Production"),
                                p("AI solutions must be built with scalability, integration, and long-term maintenance in mind."),
                                h3("Embed AI Into Workflows"),
                                p("The most successful implementations integrate AI directly into existing tools and processes."),
                                h3("Build Cross-Functional Teams"),
                                p("AI initiatives work best when data scientists, engineers, and business leaders collaborate closely."),
                                h2("The Executive Playbook for Enterprise AI")
                            ], false), list([
                                "Identify strategic AI opportunities",
                                "Prioritize high-impact use cases",
                                "Establish governance and policies",
                                "Build strong data foundations",
                                "Launch controlled pilot programs",
                                "Scale successful solutions across the organization"
                            ]), true), [
                                h2("Conclusion"),
                                p("Generative AI has enormous potential to reshape how organizations operate. However, success requires more than powerful technology."),
                                p("Enterprises that succeed with AI focus on strategy, governance, and data readiness. They treat AI not as an experiment but as a core capability integrated into their business operations.")
                            ], false)
                        },
                        {
                            title: "7 Powerful Use Cases for AI Agents in the Finance Industry",
                            slug: "7-powerful-use-cases-ai-finance",
                            category: "Finance AI",
                            relatedService: "ai",
                            excerpt: "From fraud detection to automated advisory, explore 7 high-impact areas where AI agents are delivering measurable value in financial services.",
                            content: [
                                h2("Introduction"),
                                p("Financial institutions are under constant pressure to improve operational efficiency, strengthen risk management, and deliver personalized customer experiences. Traditional systems often struggle to process the massive volume of financial data generated daily."),
                                p("This is where AI agents are transforming the finance industry."),
                                h3("1. Fraud Detection and Prevention"),
                                p("AI agents can analyze millions of transactions in real time to detect suspicious activity. By identifying unusual patterns, they can instantly flag fraudulent transactions and reduce false positives."),
                                h3("2. Intelligent Customer Support Agents"),
                                p("Virtual assistants assist with loan applications, answer account-related questions, and provide transaction info instantly, improving response times and reducing costs."),
                                h3("3. Automated Financial Advisory"),
                                p("Analyzing spending behavior and financial history to recommend personalized investment strategies and savings insights at scale."),
                                h3("4. Risk Management and Credit Scoring"),
                                p("AI agents analyze broader datasets (behavioral trends, alternative data) to produce more accurate risk assessments and lending decisions."),
                                h3("5. Intelligent Document Processing"),
                                p("Automatically extract key info from loan applications, contracts, and financial statements to accelerate approval workflows."),
                                h3("6. Compliance Monitoring and Regulatory Reporting"),
                                p("Monitoring transactions for regulatory violations and automating compliance reporting, reducing the manual workload for regulatory accuracy."),
                                h3("7. Real-Time Market Intelligence"),
                                p("Continuously monitoring market signals, global economic indicators, and competitor activity to generate actionable investment insights."),
                                h2("The Future of AI Agents in Finance"),
                                p("AI agents are rapidly becoming an essential part of modern financial infrastructure, moving toward a future where intelligent automation works alongside human experts.")
                            ]
                        },
                        {
                            title: "7 AI Agents for Smarter Manufacturing: Predictive Maintenance to Energy Optimization",
                            slug: "7-ai-agents-manufacturing-predictive-maintenance",
                            category: "Manufacturing AI",
                            relatedService: "ai",
                            excerpt: "Transform your factory with AI agents designed for predictive maintenance, production optimization, and smart factory data integration.",
                            content: [
                                h2("Introduction"),
                                p("Manufacturing companies generate massive amounts of operational data every day—from machine sensors and production lines to supply chains and inventory systems. However, much of this data remains underutilized because it is scattered across multiple systems."),
                                h3("1. Predictive Maintenance AI Agent"),
                                p("Identify early warning signs of equipment failure to prevent unplanned downtime. This agent can detect abnormal behavior and alert operations teams before failures occur."),
                                h3("2. Production Optimization AI Agent"),
                                p("Analyze operational data to identify inefficiencies and bottlenecks in production lines, helping manufacturers increase output and maximize machine utilization."),
                                h3("3. Supply Chain Intelligence Agent"),
                                p("Forecast raw material demand and identify potential disruptions before they occur, maintaining smoother operations across multiple logistics partners."),
                                h3("4. Smart Factory Data Integration Agent"),
                                p("Unify disconnected ERP, IoT, and production systems into a centralized analytics layer for real-time production insights."),
                                h3("5. Energy Optimization AI Agent"),
                                p("Monitor energy usage and recommend optimized operating schedules to reduce environmental impact and operational costs."),
                                h3("6. Demand Forecasting and Production Planning Agent"),
                                p("Align production with market demand more effectively using historical sales and market trends to prevent inventory shortages or overproduction."),
                                h3("7. Manufacturing Performance Analytics Agent"),
                                p("Provide real-time visibility across plants for faster, data-driven leadership decisions by generating actionable insights for management teams."),
                                h2("Why AI Agents Work Best With Strong Data Engineering"),
                                p("Modern data engineering platforms provide the foundation required to support AI agents by building scalable pipelines and ensuring data quality and governance."),
                                h2("Conclusion"),
                                p("Manufacturing companies are entering a new era of intelligent operations. Organizations that combine AI capabilities with modern data engineering will be better positioned to stay competitive.")
                            ]
                        },
                        {
                            title: "Data Engineering for Manufacturing: Reducing Downtime & Improving Efficiency",
                            slug: "data-engineering-manufacturing-downtime-efficiency",
                            category: "Data Engineering",
                            relatedService: "data",
                            excerpt: "Learn how modern data engineering platforms enable predictive maintenance and production intelligence in manufacturing.",
                            content: __spreadArray(__spreadArray([
                                h2("Modern Data Engineering in Manufacturing"),
                                p("The manufacturing floor is no longer just about physical assembly—it’s about data flow. We build the pipelines that make 'Smart Factories' possible."),
                                h3("The Challenge"),
                                p("Most manufacturing data is locked in proprietary PLC systems or disconnected IoT sensors, making real-time analysis impossible."),
                                h3("The Solution"),
                                p("Unified Data Hubs that collect sensor data, process it in real-time, and serve it to predictive models and dashboards.")
                            ], list([
                                "Real-time sensor data ingestion",
                                "ERP and Production System integration",
                                "Automated quality control alerts",
                                "Predictive maintenance data prep"
                            ]), true), [
                                p("By centralizing data, manufacturers can move from reactive maintenance to proactive optimization.")
                            ], false)
                        }
                    ];
                    _i = 0, blogs_1 = blogs;
                    _b.label = 1;
                case 1:
                    if (!(_i < blogs_1.length)) return [3 /*break*/, 5];
                    post = blogs_1[_i];
                    console.log("Fixing blog content for: ".concat(post.title));
                    query = "*[_type == \"post\" && slug.current == $slug][0]";
                    return [4 /*yield*/, client.fetch(query, { slug: post.slug })];
                case 2:
                    existing = _b.sent();
                    doc = __assign(__assign({ _type: 'post', _id: (existing === null || existing === void 0 ? void 0 : existing._id) || "blog-".concat(post.slug) }, existing), { title: post.title, slug: { _type: 'slug', current: post.slug }, excerpt: post.excerpt, category: post.category, relatedService: post.relatedService, content: post.content, publishedAt: (existing === null || existing === void 0 ? void 0 : existing.publishedAt) || new Date().toISOString().split('T')[0], author: (existing === null || existing === void 0 ? void 0 : existing.author) || "AxiomAI Team" });
                    return [4 /*yield*/, client.createOrReplace(doc)];
                case 3:
                    _b.sent();
                    console.log("Success: Fixed content structure for ".concat(post.slug));
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:
                    canonicalSlugs = blogs.map(function (b) { return b.slug; });
                    return [4 /*yield*/, client.fetch("*[_type == \"post\"]{ _id, \"slug\": slug.current, title }")];
                case 6:
                    allPosts = _b.sent();
                    _a = 0, allPosts_1 = allPosts;
                    _b.label = 7;
                case 7:
                    if (!(_a < allPosts_1.length)) return [3 /*break*/, 10];
                    p_1 = allPosts_1[_a];
                    if (!(p_1.slug === '7-ai-agents-for-manufacturing' && !canonicalSlugs.includes(p_1.slug))) return [3 /*break*/, 9];
                    console.log("Deleting duplicate post: ".concat(p_1.slug));
                    return [4 /*yield*/, client.delete(p_1._id)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9:
                    _a++;
                    return [3 /*break*/, 7];
                case 10:
                    console.log("Content fix complete! Please refresh the website.");
                    return [2 /*return*/];
            }
        });
    });
}
run().catch(console.error);
