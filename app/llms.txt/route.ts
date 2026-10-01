import { getAllPosts, getAllServices } from "@/lib/sanity/queries";
import { getSiteUrl, portableTextToPlain, SITE_SCHEMA_DESCRIPTION } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

type LlmsLink = {
  title: string;
  url: string;
  description: string;
};

function cleanText(value: unknown) {
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  return portableTextToPlain(value).replace(/\s+/g, " ").trim();
}

function line(item: LlmsLink) {
  return `- [${item.title}](${item.url}): ${item.description}`;
}

function section(title: string, items: LlmsLink[]) {
  if (!items.length) return "";
  return [`## ${title}`, ...items.map(line)].join("\n");
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const [posts, individualServices] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllServices().catch(() => []),
  ]);

  const pages: LlmsLink[] = [
    {
      title: "AI & Digital Transformation Solutions for Businesses | SyncOrigins",
      url: `${siteUrl}/`,
      description: SITE_SCHEMA_DESCRIPTION,
    },
    {
      title: "About SyncOrigins",
      url: `${siteUrl}/about`,
      description:
        "Learn about SyncOrigins, our mission, expertise, and commitment to delivering AI-driven solutions that transform businesses and accelerate growth.",
    },
    {
      title: "Contact SyncOrigins",
      url: `${siteUrl}/contact`,
      description:
        "Get in touch with SyncOrigins for expert AI, ERP, and data solutions. Discuss how we can transform your business with tailored strategies.",
    },
    {
      title: "Solutions | SyncOrigins",
      url: `${siteUrl}/solutions`,
      description:
        "Explore SyncOrigins solutions across AI implementation, ERP transformation, data & analytics, managed delivery, and sustainability.",
    },
    {
      title: "AI Implementation Services",
      url: `${siteUrl}/ai-implementation`,
      description:
        "Transform operations with AI implementation services. Automate workflows, improve efficiency, and enable smarter decision-making with production-ready AI.",
    },
    {
      title: "ERP Transformation Services",
      url: `${siteUrl}/erp-transformation`,
      description:
        "Modernize legacy systems with ERP transformation services. Improve efficiency, integrate processes, and scale operations with advanced digital solutions.",
    },
    {
      title: "Data Analytics Services",
      url: `${siteUrl}/data-analytics`,
      description:
        "Unlock insights with data analytics services. Turn data into smarter decisions, improve performance, and drive growth with AI-powered analytics.",
    },
    {
      title: "Managed Delivery Services",
      url: `${siteUrl}/managed-delivery`,
      description:
        "Ensure seamless project execution with managed delivery services. Optimize workflows, reduce risks, and achieve faster results with expert-driven delivery.",
    },
    {
      title: "AI Sustainability Solutions",
      url: `${siteUrl}/sustainability`,
      description:
        "Drive impact with sustainability solutions. Enable carbon tracking, automate ESG reporting, and optimize performance with data-driven insights.",
    },
    {
      title: "Insights & AI Trends | SyncOrigins",
      url: `${siteUrl}/insights`,
      description:
        "Stay updated with AI trends, industry insights, and digital transformation strategies to drive innovation and smarter decision-making.",
    },
    {
      title: "Privacy Policy | SyncOrigins",
      url: `${siteUrl}/privacy-policy`,
      description: "Privacy policy for SyncOrigins website, products, and services.",
    },
    {
      title: "Terms of Usage | SyncOrigins",
      url: `${siteUrl}/terms-of-usage`,
      description: "Terms of usage for SyncOrigins website and related services.",
    },
  ];

  const services: LlmsLink[] = (individualServices || [])
    .filter((service) => service?.slug && service?.title)
    .map((service) => ({
      title: `${service.title} | SyncOrigins`,
      url: `${siteUrl}/${service.slug}`,
      description:
        cleanText(service.description) ||
        `${service.title} services from SyncOrigins — enterprise AI, data, and digital transformation expertise.`,
    }));

  const insights: LlmsLink[] = (posts || [])
    .filter((post) => post?.slug && post?.title)
    .map((post) => ({
      title: post.title,
      url: `${siteUrl}/insights/${post.slug}`,
      description:
        cleanText(post.excerpt) ||
        `${post.title} — SyncOrigins insights on AI, ERP, data, and digital transformation.`,
    }));

  const parts = [
    `# SyncOrigins`,
    ``,
    `> ${SITE_SCHEMA_DESCRIPTION}`,
    ``,
    section("Pages", pages),
  ];

  if (services.length) {
    parts.push(``, section("Individual Services", services));
  }

  if (insights.length) {
    parts.push(``, section("Insights", insights));
  }

  parts.push(``);

  const body = parts.join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
