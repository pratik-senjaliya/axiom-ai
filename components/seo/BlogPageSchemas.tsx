import { JsonLd } from "@/components/seo/JsonLd";
import { buildBlogPageSchemas, type FaqSchemaItem, type StructuredDataSeo } from "@/lib/seo";

interface BlogPageSchemasProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  authorName: string;
  seo?: {
    metaDescription?: string;
    structuredData?: StructuredDataSeo;
  };
  faqs?: FaqSchemaItem[];
}

export function BlogPageSchemas(props: BlogPageSchemasProps) {
  const schemas = buildBlogPageSchemas(props);
  return <JsonLd data={schemas} />;
}
