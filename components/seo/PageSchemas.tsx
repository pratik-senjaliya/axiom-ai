import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildHomePageSchemas,
  buildInnerPageSchemas,
  type FaqSchemaItem,
} from "@/lib/seo";

interface HomePageSchemasProps {
  title: string;
  description: string;
  url?: string;
  faqs?: FaqSchemaItem[];
  datePublished?: string;
  dateModified?: string;
}

export function HomePageSchemas(props: HomePageSchemasProps) {
  return <JsonLd data={buildHomePageSchemas(props)} />;
}

interface InnerPageSchemasProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: FaqSchemaItem[];
  datePublished?: string;
  dateModified?: string;
}

export function InnerPageSchemas(props: InnerPageSchemasProps) {
  return <JsonLd data={buildInnerPageSchemas(props)} />;
}
