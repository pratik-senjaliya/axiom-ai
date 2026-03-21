import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "Solutions",
  description:
    "Comprehensive business solutions tailored to your needs. Discover how we can help transform your business operations.",
  keywords: ["solutions", "business solutions", "services"],
});

export default function SolutionsPage() {
  return (
    <>
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions" },
            ]}
            className="mb-6 text-primary-200"
          />
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Business Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to address your unique business
              challenges and drive sustainable growth.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our solutions page is coming soon. In the meantime, explore our
              services to see how we can help your business succeed.
            </p>
            <div className="mt-8">
              <Link href="/services">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-secondary-600 hover:bg-secondary-700"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

