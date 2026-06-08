import { JsonLd } from "@/components/seo/JsonLd";
import { buildServicePageSchemas, type FaqSchemaItem, type StructuredDataSeo } from "@/lib/seo";

interface ServicePageSchemasProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  seo?: {
    metaDescription?: string;
    structuredData?: StructuredDataSeo;
  };
  faqs?: FaqSchemaItem[];
}

export function ServicePageSchemas(props: ServicePageSchemasProps) {
  const schemas = buildServicePageSchemas(props);
  return <JsonLd data={schemas} />;
}
